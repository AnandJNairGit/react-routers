import React from "react";
import { Link } from "react-router-dom";

const BookList = () => {
  return (
    <>
      <div>BookList</div>
      <Link to="/book/1">book-1</Link>
      <br />
      <Link to="/book/2">book-2</Link>
      <br />
      <Link to="/book/new">new-book</Link>
    </>
  );
};

export default BookList;
