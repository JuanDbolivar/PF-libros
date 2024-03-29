import "./Detail.css";
import { useEffect } from "react";
import { DetailHandler } from "../../handlers/DetailHandler/DetailHandler";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const { detail } = useSelector((state) => state.bookDetail);
  const { id } = useParams();

  const { detailHandler } = DetailHandler();
  useEffect(() => {
    detailHandler(id);
  }, [id]);

  return (
    <>
      {detail.active ? (
        <>
          <h1>Titulo: {detail.title}</h1>
          <h2>Autor: {detail.author}</h2>
          <img src={detail.image} alt="book's image" className="bookImage" />
          <p>
            Descripcion: <br />
            {detail.description}
          </p>
          <h3>Año de publicacion: {detail.year}</h3>
          {/* <h3>{detail.gender}</h3> */}
          <h2> Precio: {detail.price} $</h2>
        </>
      ) : null}
    </>
  );
}

export default Detail;
