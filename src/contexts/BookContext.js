import React, { createContext, useState } from "react";
import uniqid from "uniqid";

export const BookContext = createContext();
//사용하고자 하는 컴포넌트 최상위에 지정할 Provider컴포넌트 입니다.
const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Goodnight Moon",
      author: "Margaret Brown"
    },
    {
      id: 2,
      title: "The Very Hungry Caterpillar",
      author: "Eric Carle"
    }
  ]);
  const addBook = book => {
    setBooks([...books, { ...book, id: uniqid() }]);
  };

  const deleteBook = id => {
    //filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
    setBooks(books.filter(book => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
