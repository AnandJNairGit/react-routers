import React from "react";
import { Routes,Route } from "react-router-dom";
import Book from "./pages/Book";
import BookLayout from "./pages/BookLayout";
import BookList from "./pages/BookList";
import NewBook from "./pages/NewBook";

const BookRoutes = () => {
  return (
    <>
    <BookLayout></BookLayout>
      <Routes>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBook />} />
      </Routes>
    </>
  );
};

export default BookRoutes;
