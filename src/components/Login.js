import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggle_signIn_signUp = (event) => {
    event.preventDefault();
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>

      <form
        action=""
        className="absolute p-12 bg-black w-1/4  my-36 mx-auto right-0 left-0 flex flex-col
        
        
        text-white bg-opacity-80"
      >
        {isLogin === true ? (
          <>
            <h1 className="font-bold text-3xl p-4">Sign In</h1>
          </>
        ) : (
          <>
            <h1 className="font-bold text-3xl p-4">Sign up</h1>
            <input
              type="text"
              placeholder="Enter your name"
              className="p-2 m-2 text-white bg-gray-900 rounded-lg"
            />
          </>
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 text-white bg-gray-900 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 text-white bg-gray-900 rounded-lg"
        />
        {isLogin === true ? (
          <></>
        ) : (
          <>
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-2 m-2 text-white bg-gray-900 rounded-lg"
            />
          </>
        )}

        {isLogin === true ? (
          <>
            <button className=" p-4 m-2 bg-red-700 mt-5 rounded-lg">
              Sign In
            </button>
            <p className="p-2 m-2">
              New to Netflix?
              <button onClick={toggle_signIn_signUp}>Sign up Now</button>
            </p>
          </>
        ) : (
          <>
            <button className=" p-4 m-2 bg-red-700 mt-5 rounded-lg">
              Sign Up
            </button>
            <p className="p-2 m-2" onClick={toggle_signIn_signUp}>
              Already on Netflix?
              <button onClick={toggle_signIn_signUp}>Login Now</button>
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
