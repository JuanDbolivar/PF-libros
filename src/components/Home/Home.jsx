import { useEffect } from "react";
import Cards from "../Cards/Cards";
import FormSelect from "../FormSelect/FormSelect";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setBook,
  setBookCopia,
  setDataA,
  setDataY,
  setDataG,
} from "../../redux/reducers/Books/booksSlice";
import { setBookPage } from "../../redux/reducers/BookFilter/BookFilterSlice";
import Cart from "../Cart/Cart";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const homeFuntion = async () => {
      try {
        const { data } = await axios(`http://localhost:3001/books/`);
        if (data) {
          dispatch(setBook(data));
          dispatch(setBookCopia(data));
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    homeFuntion();
  }, []);

  useEffect(() => {
    const cositas = async () => {
      const { data } = await axios(
        "http://localhost:3001/books/author-year-gender"
      );
      if (data) {
        dispatch(setDataA(data.dataA));
        dispatch(setDataY(data.dataY));
      }
    };
    cositas();
  }, []);

  const { page } = useSelector((state) => state.bookFilter);
  const { books, totalData } = useSelector((state) => state.book);

  const handlePaginaAnterior = () => {
    if (page > 1) {
      const prevPage = page - 1;
      dispatch(setBookPage({ page: prevPage }));
    }
  };

  const handlePaginaSiguiente = () => {
    const nextPage = page + 1;
    dispatch(setBookPage({ page: nextPage }));
  };

  return (
    <>
      <div>
        <button onClick={handlePaginaAnterior} disabled={page === 1}>
          Página Anterior
        </button>
        <span>
          Página {page} de {totalData}
        </span>
        <button
          onClick={handlePaginaSiguiente}
          disabled={books.length < 4 ? true : false}
        >
          Página Siguiente
        </button>
      </div>
      <FormSelect />
      <Cart />
      <Cards />
    </>
  );
}

export default Home;
