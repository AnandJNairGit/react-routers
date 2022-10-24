import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  const outletConst=useOutletContext();
  console.log(outletConst);
  console.log("------------->", useParams());
  return <div>this is book-{id} </div>;
};

export default Book;
