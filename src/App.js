import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import BookRoutes from "./BookRoutes";
import About from "./pages/About";
import Book from "./pages/Book";
import BookLayout from "./pages/BookLayout";
import BookList from "./pages/BookList";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NewBook from "./pages/NewBook";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
    <Routes location="/books">
<Route path="/books" element={<h1>test</h1>}/>
    </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/books">BookList</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books/*" element={<BookRoutes />}>
          {/* <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} /> */}
        </Route>
        {/* <Route path="/book-list" element={<BookList />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/book/new" element={<NewBook />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
