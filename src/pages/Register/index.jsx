import React from "react";
import Logo from "../../assets/Logo.svg";

function Register() {
  return (
    <div>
      <div className="registerLogo">
        <img src={Logo} alt="Logo icon" />
      </div>
      <form className="form">
        <h3>Sign Up</h3>
        <input type="text" placeholder="Usename" />
        <input type="email" placeholder="Email address" />
        <input type="Password" placeholder="Password" />
        <input type="Password" placeholder="Repeat password" />
      </form>
    </div>
  );
}

export default Register;
