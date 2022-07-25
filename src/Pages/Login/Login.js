import React from "react";
import "./Login.css";

const Login = () => {
  let backButton = document.getElementById("back-btn");

  const backHistory = () => {
    window.history.back();
  };

  var state = false;

  const showPassword = () => {
    if (state) {
      document.getElementById("password").setAttribute("type", "password");
      document.getElementById("eye").style.color = "#7a797e";
      state = false;
    } else {
      document.getElementById("password").setAttribute("type", "text");
      document.getElementById("eye").style.color = "#5887ef";
      state = true;
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4">
          <div className="login-left text-center pt-5">
            <h1>
              <span>G</span>lobetech <span>C</span>ompany <span>L</span>imited
            </h1>
            <p className="pt-3">Make yourself digitalized & more effecient</p>
            <div className="back-icon">
              <i
                onClick={backHistory}
                class="fa-solid fa-caret-left"
                id="back-btn"
              ></i>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="login-right">
            <div className="login-form text-center">
              <h1>Welcome</h1>
              <p>Sign in to your account</p>
              <div className="login-input">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />{" "}
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />{" "}
                <br />
                <input type="button" value="Login" />
                <span>
                  <i
                    onClick={showPassword}
                    class="fa-solid fa-eye"
                    id="eye"
                  ></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
