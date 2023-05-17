import React from "react";
import { Link } from "react-router-dom";
import customer from "../../../../assets/imgs/customers.svg";
import transactions from "../../../../assets/imgs/transactions.svg";
import form from "../../../../assets/imgs/form.svg";

export default function Hero() {
  return (
    <>
    <main id="Home" className="relative overflow-hidden bg-slate-50 ">
      <div
        className="relative  pt-16 pb-32  flex content-center items-center justify-center"
        style={{
          minHeight: "75vh",
        
        }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFua3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container  relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <h1 className="text-4xl font-bold !font-sans lg:leading-[1.20] lg:text-5xl text-slate-800 lg:text-blue-800 pb-5 drop-shadow-md">
                  <span>
                    Revolutionize
                  </span>{" "}
                  Your Banking Experience with{" "}
                  <span >
                  Premium Bank inc
                  </span>
                </h1>
              <div className="pr-12">
                <p className="mt-4 text-lg text-gray-300">
                Take your financial life online. Your E-Bank account will be a
                  one-stop-shop for sending, saving, budgeting, withdrawing, and
                  much more.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">1.Create Account</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Add the basic details about yourself and some bank details
                    to open an account.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">2.Transfer Money</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Got to the customer page and tranfer money to any person
                    by clicking on transfer.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    3.Transaction History
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Check the amount transfer amount in transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Working of the New Customer
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                It is a three step process in which the first you have to give
                the details about yourself and then the bank detials and the
                last step is to verify all your details.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                While filling the form the feild account name and amount is
                very necessary to fill properly beacuse this data will only
                show on the customers page if you forgot to fill any feild
                then there will be an alert.
              </p>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                <img
                  alt="..."
                  src={form}
                  className="w-full align-middle rounded-t-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap"></div>
          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                <img
                  alt="..."
                  src={customer}
                  className="w-full align-middle rounded-t-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <i className="fas fa-user-friends text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Customers
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                This is the main part of the website in which all the
                customers name is present with their account balance through
                which you can send and receive money from any person.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                1. Click on the transfer button.<br></br>
                2. Choose the person and amount.<br></br>
                3. Click on Send button.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap"></div>
          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <i className="fas fa-user-friends text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Transactions
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                In the transactions page you can see the transactions amount
                who sent how much money to whom.It is direct and straight. You
                can only read the data their.
              </p>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                <img
                  alt="..."
                  src={transactions}
                  className="w-full align-middle rounded-t-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}


