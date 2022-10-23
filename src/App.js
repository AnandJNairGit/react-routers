import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Book from "./pages/Book";
import BookList from "./pages/BookList";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/book-list" element={<BookList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
