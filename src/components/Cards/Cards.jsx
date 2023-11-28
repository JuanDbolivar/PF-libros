import React from "react";
import Card from "../Card/Card";
import CartHandler from "../../handlers/CartHandler/CartHandler";
import { useSelector } from "react-redux";

function Cards() {
  const { clearBookCart } = CartHandler();

  const books = useSelector((state) => state.book.books);

  return (
    <>
      <button onClick={clearBookCart}>Limpiar carrito</button>
      {books.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </>
  );
}

export default Cards;
