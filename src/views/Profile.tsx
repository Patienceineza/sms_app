import React, { useEffect, useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";

import avtar from "../assets/avatar-icon-images-4 (1).jpg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { unwrapResult } from "@reduxjs/toolkit";
import ApiThunk from "../Redux/actions/createApi";
import { yupResolver } from "@hookform/resolvers/yup";
import ApiSchema from "../Validations/api";
import { useForm } from "react-hook-form";
import { showErrorMessage, showSuccessMessage } from "../utils/toast";

import "react-toastify/dist/ReactToastify.css";
import DataThunk from "../Redux/actions/getApidata";
import { EnvelopeIcon, CalendarIcon } from "@heroicons/react/24/solid";
import { CircularProgress } from "@material-ui/core";
import Input from "../components/Input";

function Profile() {
  const {
    error,
    errorMessage,
    isLoading,
    data: api_data,
  } = useSelector((state: RootState) => state.api);
  console.log(api_data);
  const { data: Api_data } = useSelector((state: RootState) => state.data);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(ApiSchema),
  });

  const dispatch = useDispatch<AppDispatch>();

  const submit = async (data: any) => {
    try {
      const response = await dispatch(ApiThunk(data)).then((action: any) =>
        unwrapResult(action)
      );

      if (response) {
        showSuccessMessage("API data sent successfully");
      }
    } catch (e: any) {
      if (e) {
        showErrorMessage("Error Occurred");
      } else {
        showErrorMessage(e.response.data.message);
      }
    }
  };
  useEffect(() => {
    dispatch(DataThunk());
  }, []);
  const { user: data, loading } = useSelector((state: RootState) => state.user);
  const getFormattedDate = (dateString: any) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString().substr(-2);
    return `${day}/${month}/${year}`;
  };
  const [showForm, setShowForm] = useState(false);

  const handleCreateNewClick = () => {
    setShowForm(true);
  };
  return (
    <>
      <div className="flex flex-row justify-start items-start pt-10 px-2 mt-20">
        <p className="text-gray-500 text-2xl">Your Account</p>
      </div>
      <div className=" flex flex-row my-4 mx-3 space-x-2 ">
        {loading || !data ? (
          <CircularProgress className="w-5 h-5 " />
        ) : (
          <div className="w-[50%] bg-white shadow-xl rounded-lg text-gray-900 border my-5">
            <div className="rounded-t-lg h-28 overflow-hidden bg-primary"></div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img
                className="object-cover object-center h-32"
                src={avtar}
                alt="avaatar"
              />
            </div>
            <div className="text-center mt-2">
              <h2 className="font-semibold">
                {data.firstName} {""}
                {data.lastName}
              </h2>
              <p className="text-gray-500">{data.role}</p>
            </div>
            <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
              <li className="flex flex-col items-center justify-between">
                <EnvelopeIcon className="w-4 h-4 mr-1 text-gray-600" />
                <label className="text-sm text-gray-600">Email:</label>{" "}
                <span className="text-base text-gray-800">{data.email}</span>
              </li>
              <li className="flex flex-col items-center justify-around">
                <CalendarIcon className="w-4 h-4 mr-1 text-gray-600" />
                <label className="text-sm text-gray-600">Joined:</label>{" "}
                <span className="text-base text-gray-800">
                  {getFormattedDate(data.created_at)}
                </span>
              </li>
            </ul>
            <div className="p-4 border-t mx-8 mt-2 flex flex-row justify-end items-end ">
              <PencilIcon
                className="h-5 w-5 text-primary cursor-pointer"
                onClick={handleCreateNewClick}
              />
            </div>
          </div>
        )}
        <div className="w-[50%]  bg-white shadow-xl rounded-lg text-gray-900 h-fit flex flex-row justify-center items-center my-5 ">
          <form className=" px-5 py-6 w-[100%]">
            <div className="px-3   flex flex-row justify-start items-start">
              <p className="text-xl font-semibold text-gray-500">
                {" "}
                Change Your Account
              </p>
            </div>

            <Input
              type="text"
              className=" p-2 "
              placeholder=" New Username  "
            />
            <Input type="text" className=" p-2  " placeholder=" New Email" />

            <Input type="text" className=" p-2  " placeholder="New Addess" />

            <div className="flex flex-col p-4">
              <label htmlFor="" className="text-gray-500">
                {" "}
                Change your avatar
              </label>
              <input
                type="file"
                name="Edit "
                id=""
                className=" text-gray-500"
              />
            </div>

            <div className="flex flex-row justify-end m-2 space-x-2">
              <button className=" px-6 py-2 rounded border border-primary text-gray-600">
                {" "}
                Cancel
              </button>
              <button className="bg-primary px-6 py-2 rounded text-white">
                {" "}
                Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
