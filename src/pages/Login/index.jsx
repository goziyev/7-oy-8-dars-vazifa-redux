import React, { useRef, useState } from "react";
import Logo from "../../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { validateLogin } from "../../functions";

function Login() {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  function handleRegister(e) {
    e.preventDefault();
    if (validateLogin(usernameRef, passwordRef)) {
      setLoader(true);
      const user = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      };
      fetch(`${import.meta.env.VITE_AUTH_API}auth/signin `, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.id) {
            localStorage.setItem("token", data.accessToken);
            localStorage.setItem("user", JSON.stringify(data));
            navigate("/");
          }
          if (
            data.message == "Invalid Password!" ||
            data.message == "User Not found."
          ) {
            alert(data.message);
          }
          console.log(data);
        })
        .catch((error) => console.error("Xatolik:", error))
        .finally(() => {
          setLoader(false);
        });
    }
  }
  return (
    <div className="register__wrapper">
      <div className="register__logo">
        <img src={Logo} alt="Logo icon" />
      </div>
      <form
        className="register__form"
        onSubmit={(e) => {
          handleRegister(e);
        }}
      >
        <h3 className="register__title">Login</h3>
        <input ref={usernameRef} type="text" placeholder="Username" />
        <input ref={passwordRef} type="Password" placeholder="Password" />
        <button className="register__button" disabled={loader}>
          {!loader ? "Login to your accaunt" : "Loading.."}
        </button>
        <p className="register__description">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
