import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { TiUserAdd } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../../state/features/User/Auth/authSlice";
import FormButton from "../../shared/FormButton";
import MessagesContainer from "../../shared/MessagesContainer";
import { InputsValidator } from "../helpers/InputsValidator";


export default function Register() {
  const [formInputs, setFormInputs] = useState({
    firstName: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    email: "",
    phone: "",
    address: "",
    postCode: "",
    msg: "",
  });

  const {
    postCode,
    email,
    password,
    phone,
    address,
    lastName,
    firstName,
    repeatPassword,
    msg,
  } = formInputs;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.userAuth
  );

  useEffect(() => {
    if (isError) {
      setFormInputs({ ...formInputs, msg: message });
    }

    if (user || isSuccess) {
      setFormInputs({
        ...formInputs,
        msg: "Registered Succesfully",
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [user, isError, isSuccess, message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //set error msg to none first
    setFormInputs({ ...formInputs, msg: "" });
    //check for password match > then show error msg
    if (password !== repeatPassword) {
      setFormInputs({ ...formInputs, msg: "password does not match" });
      return;
    }

    const userData = {
      name: `${firstName.trim()} ${lastName.trim()}`,
      email: email.trim(),
      phone: phone.trim(),
      postal: postCode.trim(),
      addresse: address.trim(),
      password,
    };

    dispatch(register(userData));
  };

  return (
    <div class="flex lg:flex-row flex-col w-full mx-auto bg-white min-h-screen">
      <div class="relative lg:block hidden w-full lg:w-1/3 md:px-16 items-center bg-blue-500 ">
        <h1 class="text-3xl sm:text-4xl font-medium py-8 text-gray-100 pt-14">
          Welcome to <span class="font-bold">Premium Bank Inc.</span>
        </h1>
        <p class="text-gray-300">
          We offer a wide range of banking services to help you manage your
          money, save for the future, and achieve your financial goals. With our
          convenient online banking platform, you can access your account
          information and make transactions 24/7. We also offer a variety of
          mobile banking features to make it easy to manage your finances on the
          go.
        </p>
        <div class="mt-4">
          <h2 class="text-gray-200 font-semibold text-2xl">
            What we Offer
          </h2>
          <ul class="list-disc text-gray-300 mt-3">
            <li>
              At Premium Bank Inc., we are committed to providing our customers
              with the best possible banking experience. We believe that
              financial security is essential to a happy and fulfilling life.
              That's why we are here to help you reach your financial goals and
              build a better future for yourself and your family.
            </li>
            <li>
              Now this is a story all about how, your financial future got
              flipped turned upside down, And I'd like to take a minute, just
              sit right there, I'll tell you how Premium Bank Inc. can help you
              get back on track.
            </li>
          </ul>
        </div>
      </div>
    
      <div class="w-full lg:w-2/3 mt-4 lg:mt-0 space-y-4 px-4 sm:px-16 md:px-32 lg:px-0 xl:mx-24 lg:mx-0 items-center">
        <div class="px-2 py-4 bg-white w-4/5 sm:max-w-md sm:px-5 mx-auto pt-14">
          <div class="flex-1 px-2">
            <h3 class=" text-black text-2xl font-semibold">
              We offer a variety of banking services to help you manage your
              money, save for the future, and achieve your financial goals.
            </h3>
            <form onSubmit={handleSubmit} class="my-4">
              <div className="my-3 flex flex-wrap -m-1">
                <label for="first_name" className="block">
                  <span className="block font-medium m-1 text-gray-700 hover:border-b">
                    First name
                  </span>
                </label>

                <input
                  type="text"
                  required
                  placeholder="Type Your First Name"
                  defaultValue={firstName}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, firstName: e.target.value })
                  }
                  className="px-3 py-2 border shadow-sm border-gray-300 rounded-md w-full block placeholder:text-gray-400 placeholder-gray-500
            focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm
            invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
                />
              </div>
              <div className="my-3 flex flex-wrap -m-1">
                <label for="Last_name" className="block">
                  <span className="block font-medium m-1 text-gray-700 hover:border-b">
                    Last name
                  </span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Type Your Last Name"
                  required
                  defaultValue={lastName}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, lastName: e.target.value })
                  }
                  className="px-3 py-2 border shadow-sm border-gray-300 rounded-md w-full block placeholder:text-gray-400 placeholder-gray-500
            focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm
            invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
                />
              </div>
              {/* name validator */}
              <InputsValidator nameInput={`${firstName} ${lastName}`} />
              <div className="my-3 flex flex-wrap -m-1">
                <label for="email" className="block">
                  <span className="block font-medium m-1 text-gray-700 hover:border-b">
                    Email address
                  </span>
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Input email..."
                  required
                  defaultValue={email}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, email: e.target.value })
                  }
                  className="px-3 py-2 border shadow-sm border-gray-300 rounded-md w-full block placeholder:text-gray-400 placeholder-gray-500
            focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm
            invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
                />
              </div>

              <div className="my-3 flex flex-wrap -m-1">
                <label for="address" className="block">
                  <span className="block font-medium m-1 text-gray-700 hover:border-b">
                    Full Address
                  </span>
                </label>

                <input
                  type="text"
                  name="address"
                  placeholder="Type Your Home Address"
                  required
                  defaultValue={address}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, address: e.target.value })
                  }
                  className="px-3 py-2 border shadow-sm border-gray-300 rounded-md w-full block placeholder:text-gray-400 placeholder-gray-500
            focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm
            invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
                />
              </div>

              <div className="my-3 flex flex-wrap -m-1">
                <label for="password" class="block">
                  <span class="block font-medium m-1 text-gray-700">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Input password..."
                  required
                  defaultValue={password}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, password: e.target.value })
                  }
                  className="px-3 py-2 border shadow-sm border-gray-300 rounded-md w-full block placeholder:text-gray-400 placeholder-gray-500
            focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm
            invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
                />
              </div>
              <div className="my-3 flex flex-wrap -m-1">
                <label for="code" className="block">
                  <span className="block font-medium m-1 text-gray-700 hover:border-b">
                    Confirm password
                  </span>
                </label>
                <input
                  type="password"
                  required
                  name="repeat_password"
                  defaultValue={repeatPassword}
                  onChange={(e) =>
                    setFormInputs({
                      ...formInputs,
                      repeatPassword: e.target.value,
                    })
                  }
                  placeholder="Repeat Password"
                  className="px-3 py-2 border shadow-sm border-gray-300 rounded-md w-full block placeholder:text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
              {/* password validator */}
              <InputsValidator passwordInput={password} />
              <div className="my-3 flex flex-wrap -m-1">
                <label for="phone" className="block">
                  <span className="block font-medium m-1 text-gray-700 hover:border-b">
                    Phone Number Ex:-(01008878980)
                  </span>
                </label>
                <input
                  type="tel"
                  required
                  name="phone"
                  defaultValue={phone}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, phone: e.target.value })
                  }
                  placeholder="Type Your Mobile Number"
                  className="px-3 py-2 border shadow-sm border-gray-300 rounded-md w-full block placeholder:text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
              <div className="my-3 flex flex-wrap -m-1">
                <label for="postal" className="block">
                  <span className="block font-medium m-1 text-gray-700 hover:border-b">
                    Postal Code Ex:-(12345)
                  </span>
                </label>
                <input
                  type="text"
                  required
                  name="postal"
                  defaultValue={postCode}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, postCode: e.target.value })
                  }
                  placeholder="Type Your Postal Code"
                  className="px-3 py-2 border shadow-sm border-gray-300 rounded-md w-full block placeholder:text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
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
                text={{ loading: "Processing", default: "Register" }}
                isLoading={isLoading}
                icon={<TiUserAdd className="mb-[-2px] ml-1" size={27} />}
              />
            </form>
            <small>
              By registering, I agree to{" "}
              <span className="font-bold">Premium Bank Inc.</span>{" "}
              <span class="font-semibold underline">Terms of service</span> and{" "}
              <span class="font-semibold underline">Privacy policy</span>.
            </small>
            <div class="flex mt-7 items-center text-center">
              <hr class="border-gray-300 border-1 w-full rounded-md" />
              <label class="block font-medium text-sm text-gray-600 w-full">
                Or register with
              </label>
              <hr class="border-gray-300 border-1 w-full rounded-md" />
            </div>

            <div class="flex mt-7 justify-center w-full">
              <button class="w-1/2 inline-flex items-center bg-white  border justify-center text-sm sm:text-base border-red-500 px-4 py-2 rounded cursor-pointer text-gray-700 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
                  alt="Google Icon"
                  class="w-4 sm:w-6 mr-2 sm:mr-4"
                />
                Google
              </button>
            </div>
            <div className="mt-7">
              <div className="flex justify-center items-center cursor-pointer hover:text-blue-600">
                <p>
                  Already have an account...
                  <Link
                    to="/login"
                    className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  "
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
