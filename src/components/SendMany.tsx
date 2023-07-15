import React, { useEffect } from "react";
import { AnyAction, unwrapResult } from "@reduxjs/toolkit";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import Input from "../components/Input";
import { showErrorMessage, showSuccessMessage } from "../utils/toast";
import { RootState, AppDispatch } from "../Redux/store";
import TextArea from "./Textarea";
import Smschema from "../Validations/sendSms";
import SendThunk from "../Redux/actions/sendSms";

function SendMany() {
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
        showErrorMessage(e.response.data.message);
      } else {
        showErrorMessage(e.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="bg-white flex rounded shadow p-5  border p- items-center w-[600px] h-fit ">
        <div className="w-full  p-2">
          <p className=" text-2xl text-gray-600  sm:text-xl md:text-1xl lg:text-2xl  ">
            Send To many
          </p>

          <form
            className="flex flex-col gap-4 b"
            onSubmit={handleSubmit(submit)}
          >
            <div className=" my-2">
              <label htmlFor="" className="text-gray-600">
                {" "}
                Sender Id
              </label>
              <Input
                className="mx-0  border  rounded w-full text-sm text-gray-300"
                type="text"
                name="Sender ID"
                placeholder="SenderId Ex.Igitaramo"
                register={{ ...register("senderId") }}
                errors={errors?.senderId?.message}
              />
            </div>

            <div className="my-2">
              <label htmlFor="" className="text-gray-500">
                {" "}
                Numbers separate with(,)
              </label>
              <textarea
                className="
              w-full h-32 p-4 border rounded text-sm text-gray-800"
                placeholder="Numbers  ex.2507xxxxxxx, 2507xxxxxxx,"
              ></textarea>
            </div>
            <div className="my-2">
              <label htmlFor="" className="text-gray-500">
                {" "}
                Message
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
              Send Sms
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SendMany;
