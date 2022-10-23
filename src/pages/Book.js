import React from "react";
import { useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  console.log("------------->", useParams());
  return <div>this is book-{id} </div>;
};

export default Book;
