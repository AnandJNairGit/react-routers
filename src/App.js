import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Book from "./pages/Book";
import BookList from "./pages/BookList";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NewBook from "./pages/NewBook";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/book-list">BookList</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book-list" element={<BookList />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/book/new" element={<NewBook />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
