import "./FormSelect.css";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Filter } from "../../handlers/FilterHandler/Filter";
import { FilterHandler } from "../../handlers/FilterHandler/FilterHandler";
import {
  setBookAuthor,
  setBookAño,
  setBookGenero,
} from "../../redux/reducers/BookFilter/BookFilterSlice";

function FormSelect() {
  const dispatch = useDispatch();
  const { author, year, gender, value, organization, page } = useSelector(
    (state) => state.bookFilter
  );
  const { dataA, dataY } = useSelector((state) => state.book);

  const {
    handlerFilter,
    handlerAutorChange,
    handlerYearChange,
    handlerGenderChange,
    handlerSortChange,
    handlerSort,
  } = FilterHandler();

  const { sortOption } = Filter();

  const [isAuthor, setIsAuthor] = useState(true);
  const [isYear, setIsYear] = useState(true);
  //   const [isGender, setIsGender] = useState(true);

  const Checkbox = ({ children, ...props }) => (
    <label style={{ marginRight: "1em" }}>
      <input type="checkbox" {...props} />
      {children}
    </label>
  );

  useEffect(() => {
    if (value && organization) {
      handlerSort();
    }
  }, [page]);

  return (
    <>
      <form action="">
        <Select
          className="select"
          isDisabled={isAuthor}
          name="author"
          value={author}
          options={dataA}
          onChange={handlerAutorChange}
        />
        <Checkbox
          checked={!isAuthor}
          onChange={() => setIsAuthor((state) => !state)}
        >
          Autor
        </Checkbox>
        {author ? (
          <Checkbox
            checked={author}
            onChange={() => dispatch(setBookAuthor({ author: "" }))}
          >
            {author}
          </Checkbox>
        ) : null}
        <Select
          className="select"
          isDisabled={isYear}
          name="year"
          value={year}
          options={dataY}
          onChange={(event) => {
            handlerYearChange(event);
          }}
        />
        <Checkbox
          checked={!isYear}
          onChange={() => setIsYear((state) => !state)}
        >
          Año
        </Checkbox>
        {year ? (
          <Checkbox
            checked={year}
            onChange={() => dispatch(setBookAño({ year: "" }))}
          >
            {year}
          </Checkbox>
        ) : null}{" "}
        <br />
        <button
          className="filterButton"
          onClick={handlerFilter}
          disabled={author || year || gender ? false : true}
        >
          filtrar
        </button>
        <br />
        <Select
          className="select"
          // isDisabled={isAuthor}
          name="sort"
          // value={author}
          options={sortOption}
          onChange={handlerSortChange}
        />
        {/* <Select
    className="basic-single"
    classNamePrefix="select"
    isDisabled={isGender}
    name="gender"
    value={gender}
    options={dataG}
    onChange={(event) => {handlerGenderChange(event)}}

  />

  <Checkbox checked={!isGender} onChange={() => setIsGender((state) => !state)}>
    Genero
  </Checkbox> 
          {gender ? (
          <Checkbox
            checked={gender}
            onChange={() => dispatch(setBookGenero({ gender: "" }))}
          >
            {gender}
          </Checkbox>
        ) : null}
  */}
        <button
          className="filterButton"
          onClick={handlerSort}
          disabled={value && organization ? false : true}
        >
          ordenar
        </button>
      </form>
    </>
  );
}

export default FormSelect;
