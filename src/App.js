import React from "react";
//import BookContextProvider from "./contexts/BookContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import "./App.css";

export default function App() {
  return (
    // <BookContextProvider>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </BrowserRouter>
    // </BookContextProvider>
  );
}
