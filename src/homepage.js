import { useState, useEffect, useRef } from "react";
import reportWebVitals from "./reportWebVitals";
import { ReactComponent as Cancel } from "./Img/back/cancel.svg";
import logo from "./Img/icon13.svg";
import eraser from "./Img/back/eraser2.svg";
import fbLogo from "./Img/f_logo.svg";
import { ReactComponent as GoogleLogo } from "./Img/google-icon.svg";
import man from "./Img/back/undraw_professor.svg";
import triangleR from "./Img/back/triangle-ruler.svg";
import penDraw from "./Img/back/fountain-pen.svg";
import chat from "./Img/back/chat-02.svg";
import audi from "./Img/back/audience.svg";
import Try_It from "./components/homepage/Try_It.js";
import {
  signInWithGoogle,
  signInWithFB,
  onAuthState,
} from "./utils/firebaseUtils.js";
import SignInLocal from "./components/homepage/SignIn";
import SignUpLocal from "./components/homepage/SignUp";
import { useHistory } from "react-router-dom";
import "./homepage.scss";
import Loading from "./components/Loading.js";

export default function HomePage() {
  const [loginPage, setLoginPage] = useState(false);
  const [loginSignUp, setLoginSignUp] = useState(true);
  const [scalein, setScalein] = useState(false);
  const [topNavscroll, setTopNavscroll] = useState(false);
  const [limit, setLimit] = useState(30);
  const history = useHistory();
  const [loadingFinish, setLoadingFinish] = useState(false);
  onAuthState(function (user) {
    if (user) {
      history.push("/profile");
    }
  });
  useEffect(() => {
    if (window.innerWidth > 425) {
      setLimit(30);
    } else {
      setLimit(10);
    }
    setLoadingFinish(true);
  }, []);
  const loginBoxNon = () => {
    setScalein(false);
    setTimeout(() => {
      setLoginPage(false);
    }, 300);
  };

  const showLoginBox = () => {
    setScalein(true);
    setLoginPage(true);
    setLoginSignUp(true);
  };
  const showSignBox = () => {
    setScalein(true);
    setLoginPage(true);
    setLoginSignUp(false);
  };

  return (
    <div
      className="homePage"
      onScroll={(e) => {
        if (e.target.scrollTop > limit) {
          setTopNavscroll(true);
        } else {
          setTopNavscroll(false);
        }
      }}
    >
      <div className="ahome">
        <div>
          <div
            className={topNavscroll ? "topNavBox floatingNav" : "topNavBox"}
            style={{
              position: topNavscroll ? "fixed" : "absolute",
              marginTop: topNavscroll ? "0px" : `${limit}px`,
            }}
          >
            <div className="topNav">
              <div className="mainLogo">
                <img src={logo} className="logo" />
                <div>BAIBAN</div>
              </div>
              <div className="logInWay">
                <div className="bigger" onClick={showLoginBox}>
                  log In
                </div>
                <div className="bigger homeSignUpBtn" onClick={showSignBox}>
                  Sign Up
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mainContain">
          <div className="homePageLeft">
            <div className="BigAtt">BAIBAN</div>
            <div className="middleAtt">Sharing ideas from NOW!</div>
            <div className="startBtnBox">
              <div onClick={showLoginBox} className="bigger startBtn">
                start now for free
              </div>
            </div>
          </div>
          <div className="homePageRight">
            <img src={man} />
          </div>
        </div>
        <img src={eraser} className="homePageImage eraser" />
      </div>
      <div className="introduction">
        <div className="howeWhy">What can we do with BAIBAN?</div>
        <div className="circleBox">
          <div>
            <div className="homePageCircle">
              <img src={triangleR} />
              <div>Pattern</div>
            </div>
            <div className="homePageCircle">
              <img src={penDraw} />
              <div>Drawing</div>
            </div>
          </div>
          <div>
            <div className="homePageCircle">
              <img src={audi} />
              <div>Cowork</div>
            </div>
            <div className="homePageCircle">
              <img src={chat} />
              <div>Message</div>
            </div>
          </div>
        </div>
        <div className="howeWhy">Try it now! </div>
        <Try_It />
      </div>
      <div className="footer">
        <div>&copy; 2020 BAIBAN All rights reserved.</div>
      </div>
      {loadingFinish || <Loading />}
      <div className="dark" style={{ display: loginPage ? "block" : "none" }} />
      <div
        className={scalein ? "scaleIn darkBack" : "scaleOut darkBack"}
        style={{ display: loginPage ? "flex" : "none" }}
      >
        <div className="loginBoxOuter">
          <div className="logInBox">
            <Cancel onClick={loginBoxNon} className="bigger cancelOut" />
            <div className="logoBox">
              <img src={logo} className="logo" />
            </div>
            <div className="title">Welcome to BAIBAN!</div>
            <div
              className="logcontent"
              style={{ display: loginSignUp ? "block" : "none" }}
            >
              <SignInLocal />
              <div className="or">Or</div>
              <div onClick={signInWithGoogle} className="bigger googleLogin">
                <GoogleLogo style={{ width: 20, height: 20 }} />
                Log In with Google
              </div>

              <div onClick={signInWithFB} className="bigger FBcenter">
                <img src={fbLogo} style={{ width: 20, height: 20 }} />
                Log In with FaceBook
              </div>
              <label>First Time visiting?</label>
              <div
                onClick={() => {
                  setLoginSignUp(false);
                }}
                className="bigger signUpbut"
              >
                create an free account
              </div>
            </div>
            <div
              className="hiddenStatus signUpBox"
              style={{ display: loginSignUp ? "none" : "block" }}
            >
              <SignUpLocal className="signUpLocal" />
              <div className="tryAn">Or try another way to log in?</div>
              <div
                className="anotherLogin bigger"
                onClick={() => {
                  setLoginSignUp(true);
                }}
              >
                Login with other ways
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
