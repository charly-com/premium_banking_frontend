import React, { useState, useEffect } from "react";
import { FcPaid } from "react-icons/fc";
import { RiFileTransferFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  resetAccountStatus,
  transfer,
} from "../../state/features/Account/accountSlice";
import FormButton from "../shared/FormButton";
import MessagesContainer from "../shared/MessagesContainer";
import { UseResetStatus } from "../../hooks/UseResetStatus";

export const Transfer = () => {
  const [showModal, setShowModal] = useState(false);
  // state for withdraw balance
  const [balanceTransfered, setBalanceTransfered] = useState(50);

  //state for user password
  const [password, setPassword] = useState("");

  //state for Receiving account id
  const [receivingId, setReceivingId] = useState("");

  //state for alert messages
  const [msg, setMsg] = useState("");

  const { account, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.userAccount
  );
  const { user } = useSelector((state) => state.userAuth);

  const dispatch = useDispatch();

  // //get account id
  const accountId = useLocation()?.pathname?.split("/").at(-1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //set msg to none first
    setMsg("");

    const transferData = {
      balanceTransfered,
      token: user.token,
      oldPassword: password,
      id: user.id,
      from: accountId,
      to: receivingId,
    };
    dispatch(transfer(transferData));
  };

  useEffect(() => {
    if (isError) {
      setMsg(message);
    }

    if (isSuccess) {
      setMsg(
        `You Have Transfered ${new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(
          balanceTransfered
        )} To Account ID:- [${receivingId}] Successfully!`
      );
    }
  }, [isError, isSuccess, message, account, msg]);

  UseResetStatus(() => {
    return () => {
      dispatch(resetAccountStatus());
    };
  });

  const handleModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="max-w-5xl w-full self-start">
      <h3 className="flex justify-center items-center text-2xl text-center font-bold px-2 py-4 mb-10 bg-blue-200 border-b-4 border-blue-800 rounded shadow ">
        <FcPaid className="mr-1" size={50} />
        Transfer Money
      </h3>

      <form>
        <div className="flex justify-center items-center font-semibold flex-wrap gap-4 mb-5 p-2">
          <label
            className="basis-full sm:basis-[50%] text-md  my-2 sm:my-0  p-2 border-r-4 rounded shadow bg-blue-200 border-blue-800"
            htmlFor="balanceTransfered"
          >
            Transfer Amount
          </label>

          <input
            className="basis-full  sm:basis-1/3  px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none"
            type="number"
            // name="balanceTransfered"
            // id="balanceTransfered"
            // value={balanceTransfered}
            // onChange={(e) => setBalanceTransfered(e.target.value)}
            // min="50"
            // required
          />

          <label
            className="basis-full sm:basis-[50%] text-md  my-2 sm:my-0  p-2 border-r-4 rounded shadow bg-blue-200 border-blue-800"
            htmlFor="recipientId"
          >
            Recipient Account ID
          </label>

          <input
            className="basis-full  sm:basis-1/3  px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none"
            type="text"
            // name="recipientId"
            // id="recipientId"
            // value={receivingId}
            // onChange={(e) => setReceivingId(e.target.value)}
            // required
          />

          <label
            className="basis-full sm:basis-[50%] text-md  my-2 sm:my-0  p-2 border-r-4 rounded shadow bg-blue-200 border-blue-800"
            htmlFor="password"
          >
            Type your Password
          </label>

          <input
            className="basis-full  sm:basis-1/3  px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none"
            type="password"
            // name="password"
            // id="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            // required
          />
        </div>

        {/*Request Status and Errors*/}
        {/* {(isError || isSuccess) && (
          <MessagesContainer
            msg={msg}
            isSuccess={isSuccess}
            isError={isError}
          />
        )} */}
        {showModal && (
          <div className="fixed inset-0 overflow-y-auto">
            {/* Your modal content goes here */}
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              {/* Background overlay */}
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              {/* Modal Panel */}
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              {/* Your modal content */}
              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  {/* Your modal content goes here */}
                  <div className="text-center">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Transfer Successful
                    </h3>
                    {/* Display success message here */}
                    <p className="mt-2">{msg}</p>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={closeModal}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/*form button */}
        {/* <FormButton
          text={{ default: "Transfer", loading: "Processing" }}
          isLoading={isLoading}
          onClick={handleModal}
          icon={<RiFileTransferFill className="ml-1" size={25} />}
        /> */}
        <button
          className="bg-[blue] w-full flex items-center justify-center px-6 py-2.5 text-white font-bold text-md leading-tight rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg disabled:cursor-not-allowed transition duration-150 ease-in-out"
          onClick={handleModal}
        >
          Transfer
        </button>
      </form>
    </div>
  );
};
