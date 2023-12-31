import React from "react";
import { AnyAction, unwrapResult } from "@reduxjs/toolkit";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { decodeToken } from "react-jwt";
import LoginThunk from "../Redux/actions/login";
import loginSchema from "../Validations/login";
import Input from "../components/Input";
import { showErrorMessage, showSuccessMessage } from "../utils/toast";
import { RootState, AppDispatch } from "../Redux/store";
import TextArea from "./Textarea";
import Smschema from "../Validations/sendSms";
import { CircularProgress } from "@material-ui/core";
import SendThunk from "../Redux/actions/sendSms";
function SendOne() {
  const { error, errorMessage, isLoading, data } = useSelector(
    (state: RootState) => state.send
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Smschema),
  });

  const dispatch = useDispatch<AppDispatch>();

  const submit = async (data: any) => {
    try {
      const recipients = [data.recipients];
      const senderId = data.senderId;
      const message = data.message;
      const formData = { senderId, message, recipients };

      const response = await dispatch(SendThunk(formData)).then((action: any) =>
        unwrapResult(action)
      );
      reset();
      if (!response) {
        showErrorMessage("An error occurred");
      } else {
        showSuccessMessage("Message sent");
      }
    } catch (e: any) {
      if (e) {
        showErrorMessage("Error occurred");
      } else {
        showErrorMessage(e.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="bg-white flex rounded shadow p-5 items-center w-[600px]  border h-fit">
        <div className="w-full p-2">
          <p className="text-2xl text-gray-700 sm:text-xl md:text-1xl lg:text-2xl">
            Send a message
          </p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
            <div className="relative my-2">
              <label htmlFor="Sender ID" className="text-0.1xl text-gray-500">
                Sender ID
              </label>
              <Input
                className="rounded-xl w-full text-0.1xl text-gray-500"
                type="text"
                name="senderId"
                placeholder="ex. Igitaramo"
                register={{ ...register("senderId") }}
                errors={errors?.senderId?.message}
              />
            </div>
            <div className="relative my-2">
              <label htmlFor="phone" className="text-0.1xl text-gray-500">
                Phone Number (07xxxxxxxx)
              </label>
              <Input
                className="rounded-xl w-full text-0.1xl text-gray-500"
                type="text"
                name="Sender ID"
                placeholder=" ex. 2507xxxxxx"
                register={{ ...register("recipients") }}
                errors={errors?.senderId?.message}
              />
            </div>
            <div className="relative my-2">
              <label htmlFor="phone" className="text-0.1xl text-gray-500">
                Sms (1/160)
              </label>
              <textarea
                className="
              w-full h-32 p-4 border rounded text-md text-gray-800"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="  m-4 p-2  w-1/3 bg-primary rounded text-white py-3 hover:scale-105 duration-300"
              data-testid="submit"
            >
              Send SMS
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SendOne;
