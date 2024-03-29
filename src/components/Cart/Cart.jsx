import "./Cart.css";
import CartHandler from "../../handlers/CartHandler/CartHandler";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const { userBooks, totalBooks } = useSelector((state) => state.user);
  const { removeBookFromCart, addBookToCart } = CartHandler();

  return (
    <>
      <ul>
        {userBooks.map((book) => (
          <div key={book.id}>
            <Link to={`/detail/${book.id}`}>
              <li>
                Titulo: {book.title} Autor: {book.author} Precio: {book.orice}
                Cantidad: {book.quantity}
              </li>
            </Link>
            <button
              onClick={() => {
                removeBookFromCart(book.id);
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                addBookToCart(book.id);
              }}
            >
              +
            </button>
          </div>
        ))}
      </ul>
      Total: {totalBooks}
    </>
  );
}

export default Cart;
