import React from "react";
// import GoogleButton from "react-google-button";
import { useHistory } from "react-router-dom";
// import { FacebookProvider, useLogin } from 'react-facebook';
// import {FacebookLogin} from 'react-facebook-button';
// import { FacebookProvider, LoginButton } from "react-facebook";
import "../App.css";
import { FacebookLoginButton, GithubLoginButton, GoogleLoginButton} from "react-social-login-buttons";
function Login(props) {
  const history = useHistory();
  const handelGoogleLogin = () => {
    let timer = null;
    const googleLoginURL = "http://localhost:4000/login/google";
    const newWindow = window.open(
      googleLoginURL,
      "_blank",
      "width=500,height=600"
    );

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("Yay we're authenticated");
          if (timer) clearInterval(timer);
          history.push("/profile");
        }
      }, 500);
    }
  };
  const responseFacebook = () => {
    let timer = null;
    const fbLoginURL = "http://localhost:4000/login/facebook";
    const newWindow = window.open(fbLoginURL, "_blank", "width=500,height=600");

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("Yay we're authenticated");
          if (timer) clearInterval(timer);
          history.push("/fbprofile");
        }
      }, 500);
    }
  };

  const responseGithub = () => {
    let timer = null;
    const ghLoginURL = "http://localhost:4000/login/github";
    const newWindow = window.open(ghLoginURL, "_blank", "width=500,height=600");

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("Yay we're authenticated");
          if (timer) clearInterval(timer);
          history.push("/ghprofile");
        }
      }, 500);
    }
  };
  return (
    <div className="log">
      
    <GoogleLoginButton className="google-button" onClick={handelGoogleLogin} />
    <FacebookLoginButton className="google-button" onClick={responseFacebook} />
    <GithubLoginButton className="google-button" onClick={responseGithub} />

   
    </div>
  );
}

export default Login;
