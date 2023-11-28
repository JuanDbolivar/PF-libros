// import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </>
  );
}

export default App;
