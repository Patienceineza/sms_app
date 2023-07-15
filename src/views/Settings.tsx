import React, { useEffect, useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import Input from "../components/Input";
import avtar from "../assets/avatar-icon-images-4 (1).jpg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { unwrapResult } from "@reduxjs/toolkit";
import ApiThunk from "../Redux/actions/createApi";
import { yupResolver } from "@hookform/resolvers/yup";
import ApiSchema from "../Validations/api";
import { useForm } from "react-hook-form";
import { showErrorMessage, showSuccessMessage } from "../utils/toast";
import Select from "../components/select";
import KeyInput from "../components/KeyInput";
import "react-toastify/dist/ReactToastify.css";
import DataThunk from "../Redux/actions/getApidata";
import { EnvelopeIcon, CalendarIcon } from "@heroicons/react/24/solid";
import { CircularProgress } from "@material-ui/core";
import { XMarkIcon, ClipboardDocumentIcon } from "@heroicons/react/24/solid";
function Settings() {
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
    <div className="flex  flex-col     mt-10 py-10  w-[100%] max-h-[90vh]  overflow-x-hidden">
      <div className="flex flex-col w-full p-3 ">
        <div className="b p-4 mx-2 my-4   mt-16 bg-white shadow rounded text-gray-900 border">
          <h2 className="text-xl font-bold mb-2">Your API Key Secret</h2>
          <h2 className="text-md font-bold mb-2 text-primary">Prod</h2>
          <KeyInput />
          <KeyInput />
          <KeyInput />

          <h2 className="text-md font-bold mt-2 text-primary ">Dev</h2>
          <KeyInput />
          <KeyInput />
          <KeyInput />
        </div>
        <div className="">
          {!showForm ? (
            <div className=" flex flex-row justify-end mx-2 ">
              <button
                className="my-2 px-4  bg-primary rounded text-white py-3 hover:shadow-xl"
                onClick={handleCreateNewClick}
              >
                Generate New
              </button>
            </div>
          ) : (
            <div className="flex flex-col bg-white rounded p-4 mx-2 border ">
              <div className="flex flex-row  justify-between">
                <p className="text-xl p-1 font-semibold mb-2 text-gray-500">
                  Create New API Key
                </p>
                <button onClick={() => setShowForm(false)} className="p-1   ">
                  <XMarkIcon className="h-7 w-7 text-primary font-bolder " />
                </button>
              </div>

              <form className="w-full" onSubmit={handleSubmit(submit)}>
                <Input
                  className="mr-2  text-mdrounded border-gray-40 text-gray-700 mb-3"
                  type="text"
                  name="name"
                  placeholder="Sender Id "
                  register={{ ...register("name") }}
                  errors={errors?.name?.message}
                />

                <Input
                  className="mr-2  text-md mt-1 rounded border-gray-400 text-gray-700  mb-3"
                  type="text"
                  name="description"
                  placeholder="Description"
                  register={{ ...register("description") }}
                  errors={errors?.description?.message}
                />

                <select
                  id="countries"
                  className=" border border-gray-300 text-gray-500 text-md rounded focus:ring-primary  primary block w-full py-2.5  px-3 mr-5 dark:focus:ring-blue-500 dark:focus:border-blue-500  box-border "
                >
                  <option value="FR">Dev</option>
                  <option value="DE">Prod</option>
                </select>

                {errors.environment && (
                  <p className="text-red-500 text-sm text-decorati">
                    {errors.environment.message}
                  </p>
                )}
                <button
                  className="my-2 p-2 w-1/4 bg-primary rounded text-white py-3 hover:shadow-xl"
                  type="submit"
                >
                  Create
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;
