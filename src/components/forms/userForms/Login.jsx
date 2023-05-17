import React from "react";
import { useState, useEffect } from "react";
import { RiLoginCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../state/features/User/Auth/authSlice";
import FormButton from "../../shared/FormButton";
import MessagesContainer from "../../shared/MessagesContainer";
import { FcGoogle } from "react-icons/fc";
import LoginImage from "../../../assets/imgs/banklogin.jpeg"

export default function Login() {
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
    msg: "",
  });

  const { email, password, msg } = formInputs;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.userAuth
  );

  useEffect(() => {
    if (isError) {
      setFormInputs({ ...formInputs, msg: message });
    }

    if (user) {
      setFormInputs({ ...formInputs, msg: "Login Succesfully" });
      navigate("/");
    }
  }, [isError, message, user, msg]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //set msg to none first
    setFormInputs({ ...formInputs, msg: "" });

    const userData = {
      email: email.trim(),
      password,
    };
    dispatch(login(userData));
  };

  return (
    <div className="max-h-screen">
      
        <img src="https://www.codewithfaraz.com/InstaPic.png" alt="" />
      
      <section className="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
          <div className="md:w-1/2 px-5">
            <h2 className="text-2xl font-bold text-[#002D74]">Login</h2>
            <p className="text-sm mt-4 text-[#002D74]">
              If you have an account, please login
            </p>
            <form class="mt-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  defaultValue={email}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, email: e.target.value })
                  }
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
            focus:bg-white focus:outline-none"
                  defaultValue={password}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, password: e.target.value })
                  }
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>

              {/*Request Status and Errors*/}
              {(isError || isSuccess) && (
                <MessagesContainer
                  msg={msg}
                  isSuccess={isSuccess}
                  isError={isError}
                />
              )}

              {/*form button */}
              <FormButton
                text={{ loading: "Processing", default: "Login" }}
                isLoading={isLoading}
                icon={
                  <RiLoginCircleFill className="mb-[-2px] ml-1" size={27} />
                }
              />
            </form>
            <div class="mt-7 grid grid-cols-3 items-center text-gray-500">
              <hr class="border-gray-500" />
              <p class="text-center text-sm">OR</p>
              <hr class="border-gray-500" />
            </div>

            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
              <FcGoogle />
              <span className="ml-4">Login with Google</span>
            </button>

            {/*Redirect for Register */}
            <div class="text-sm flex justify-between items-center mt-3">
              <p>
                If you don't have an account...
                <Link
                  to="/register"
                  className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  "
                >
                  Register
                </Link>
              </p>
            </div>
          </div>

          <div class="w-1/2 ">
            <img
              src={LoginImage}
              class="rounded-2xl"
              alt="page img"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
