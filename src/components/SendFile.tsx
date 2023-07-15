import React, { ChangeEvent, useEffect, useState } from "react";
import { AnyAction, unwrapResult } from "@reduxjs/toolkit";

import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { decodeToken } from "react-jwt";
import LoginThunk from "../Redux/actions/login";
import loginSchema from "../Validations/login";
import Input from "./Input";

import { showErrorMessage, showSuccessMessage } from "../utils/toast";
import { RootState, AppDispatch } from "../Redux/store";
import TextArea from "./Textarea";
import SendThunk from "../Redux/actions/sendSms";
import Smschema from "../Validations/sendSms";
import Loader from "./loader";

function SendFile() {
  const [recipients, setRecipients] = useState<string[]>([]);

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

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const XLSX = await import("xlsx");
        readExcelFile(file, XLSX);
      } catch (error) {
        console.error("Error loading xlsx library:", error);
      }
    }
  };

  const readExcelFile = (file: File, XLSX: any) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target?.result;
      processExcelData(data, XLSX);
    };
    reader.readAsBinaryString(file);
  };

  const processExcelData = (data: any, XLSX: any) => {
    const workbook = XLSX.read(data, { type: "binary" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    const recipientsColumnData = jsonData
      .map((row: any) => row[recipientsColumnIndex])
      .filter((recipient: any) => recipient !== undefined && recipient !== null)
      .map((recipient: any) => `250${recipient}`);

    setRecipients(recipientsColumnData);
  };

  const recipientsColumnIndex = 1;

  const submit = async (data: any) => {
    try {
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
      <div className="bg-white flex rounded shadow border   items-center  w-[600px] p-5 h-fit">
        <div className="w-full  p-2">
          <p className="text-2xl text-gray-600  sm:text-xl md:text-1xl lg:text-2xl">
            Send From Excel File
          </p>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
            <div className=" mt-1">
              <Input
                className="mx-0  border  rounded w-full text-sm text-gray-700 "
                type="text"
                name="Sender ID"
                placeholder="SenderId Ex.Igitaramo"
                register={{ ...register("senderId") }}
                errors={errors?.senderId?.message}
              />
            </div>

            <div className="">
              <label htmlFor="File" className="text-0.1xl text-gray-500">
                Excel file
              </label>
              <input
                type="file"
                className="p-4 rounded border w-full text-sm text-gray-500 "
                onChange={handleFileChange}
              />
            </div>

            <div className="">
              <textarea
                className="
              w-full h-32 p-4 border rounded text-sm"
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

export default SendFile;
