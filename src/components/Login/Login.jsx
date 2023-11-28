import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";

function Login() {
  const [emailRegistrer, setEmailRegistrer] = useState("");
  const [passwordRegistrer, setPasswordRegistrer] = useState("");
  const [nameRegistrer, setNameRegistrer] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = currentUser.uid;
        setUser(currentUser.displayName);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const registerHandler = async () => {
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        emailRegistrer,
        passwordRegistrer
      );
      if (credentials) {
        await updateProfile(auth.currentUser, {
          displayName: nameRegistrer,
        });
      }
      console.log("credentials.user", credentials.user);
      // console.log("user", user.displayName);
    } catch (error) {
      console.log("error.message", error.message);
    }
  };

  const loginHandler = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailLogin,
        passwordLogin
      );
    } catch (error) {
      console.log("error.message", error.message);
    }
  };

  const logoutHandler = async () => {
    await signOut(auth);
  };

  return (
    <>
      <h2>registro</h2>
      <label htmlFor="emailRegis">email</label>
      <input
        id="emailRegis"
        type="text"
        name="email"
        onChange={(event) => {
          setEmailRegistrer(event.target.value);
        }}
      />

      <label htmlFor="passwordRegis">password: </label>
      <input
        id="passwordRegis"
        type="password"
        name="password"
        onChange={(event) => {
          setPasswordRegistrer(event.target.value);
        }}
      />
      <label htmlFor="nombreRegis">Nombre : </label>
      <input
        id="nombreRegis"
        type="nombre "
        name="nombre "
        onChange={(event) => {
          setNameRegistrer(event.target.value);
        }}
      />
      <button onClick={registerHandler}>Registrarse</button>
      <hr />
      <h2>login</h2>
      <label htmlFor="emailLog">email: </label>
      <input
        id="emailLog"
        type="text"
        name="email"
        onChange={(event) => {
          setEmailLogin(event.target.value);
        }}
      />

      <label htmlFor="passwordLog">password: </label>
      <input
        id="passwordLog"
        type="password"
        name="password"
        onChange={(event) => {
          setPasswordLogin(event.target.value);
        }}
      />
      <button onClick={loginHandler}>Login</button>
      <hr />
      <br />
      {user && <h4> Bienvenido, {user}</h4>}
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
}

export default Login;

//https://cdn.icon-icons.com/icons2/405/PNG/512/Books_2_40672.png
//https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
