import React, { useState, useEffect } from "react";
//import { BookContext } from "../contexts/BookContext";
import { db } from "../firebase";
export default function BookList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    console.log("effect");
    const unsub = db.collection("books").onSnapshot(snapshot => {
      const allBooks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBooks(allBooks);
    });
    return () => {
      console.log("cleanup");
      unsub();
    };
  }, []);

  const deleteBook = id => {
    db.collection("books")
      .doc(id)
      .delete();
  };

  return (
    <div className="section section-books">
      <div className="container">
        <h6>Books</h6>
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <div className="card book">
                <div className="book-image">
                  <img
                    src="https://www.freepngimg.com/thumb/book/11-brown-book-png-image-image.png"
                    alt="book thumb"
                  />
                </div>
                <div className="book-details">
                  <div className="book-title">{book.title}</div>
                  <div className="book-author">{book.author}</div>
                </div>
                <div
                  className="book-delete"
                  onClick={() => deleteBook(book.id)}
                >
                  <i className="material-icons">delete</i>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
