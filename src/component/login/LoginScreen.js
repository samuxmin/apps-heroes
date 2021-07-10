import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { useForm } from "../../hooks/useForm";
import { types } from "../../types/types";
import "./login.css";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const [{ username, password }, handleInputChange] = useForm({
    username: "",
    password: "",
  });
  const action = {
    payload: { name: username },
    type: types.login,
  };
  
  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    dispatch(action);
    history.replace(lastPath);
  };

  return (
    <div className="app">
      <h1>Login Screen</h1>
      <hr />
      <label htmlFor="username">
        <b>Username</b>
      </label>
      <input
        className="login-input"
        type="text"
        placeholder="Username here..."
        name="username"
        autoComplete="off"
        value={username}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="password">
        <b>Password</b>
      </label>
      <input
        className="login-input"
        type="password"
        placeholder="Password here..."
        name="password"
        value={password}
        onChange={handleInputChange}
      />
      <p>(Cualquier contraseña es valida)</p>
      <button className="btn btn-login" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
