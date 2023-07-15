import React, { useEffect } from 'react';
import { AnyAction, unwrapResult } from '@reduxjs/toolkit';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { decodeToken } from 'react-jwt';
import LoginThunk from '../Redux/actions/login';
import loginSchema from '../Validations/login';

import Input from '../components/Input';
import { showErrorMessage, showSuccessMessage } from '../utils/toast';
import { RootState, AppDispatch } from '../Redux/store';
import Footer from '../components/Footer';

function Login() {
  const navigate = useNavigate();
  const { error, errorMessage, isLoading, access_token } = useSelector(
    (state: RootState) => state.login
  );

  useEffect(() => {
    if (!isLoading && !error && access_token) {
      const decodedToken = decodeToken(access_token);
    }
  }, [isLoading, error, access_token]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useDispatch<AppDispatch>();

  const submit = async (data: any) => {
    try {
      console.log(data);
      const response = await dispatch(LoginThunk(data)).then((action: any) =>
        unwrapResult(action)
      );
      console.log(response)
      if (!response) {
        showErrorMessage('An error occurred');
      
      } else {
    showSuccessMessage('login succcessfull')
    setTimeout(() => navigate('/dashboard'), 2000);
      }
    } catch (e: any) {
      if (e) {
        showErrorMessage('Error Occurred');
      } else {
        showErrorMessage(e.response.data.message);
      }
    }
  };

  return (
    <>

      <section className="bg-gray-50 min-h-screen flex  flex-col  items-center justify-center">
      <h3 className="font-bold text-2xl text-primary mb-6 sm:text-xl md:text-1xl lg:text-2xl sm:m-6">
              We Are Messengers - Send Over Millions messages 
            </h3>
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center w-full">
       
          <div className="w-full px-8 md:px-16">
            <h4 className="font-bold text-2xl text-primary sm:text-xl md:text-1xl lg:text-2xl  ">
              Login to your account
            </h4>
            <p className="text-xs mt-4 text-primary">
              log you account details
            </p>

            <form className="flex flex-col gap-4 b"           onSubmit={handleSubmit(submit)}>
              <Input
                className="p-2 rounded-xl border-primary w-full"
                type="email"
                name="email"
                placeholder="Email"
                register={{ ...register('email') }}
                errors={errors?.email?.message}
              />
              <div className="relative">
                <Input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                  register={{ ...register('password') }}
                  errors={errors?.password?.message}
                />
              </div>
              <button type="submit" className="bg-primary rounded-xl text-white py-2 hover:scale-105 duration-300" data-testid="submit">
              {isLoading ? (
              <i className='fa-solid fa-spinner'></i>
              ) : (
                <span>
                  {!isLoading && !error && access_token ? 'Login Successful' : 'Log in'}
                </span>
              )}
            </button>
            {error && (
              <p className=" text-red " data-testid="form-error">
                {errorMessage}
              </p>
            )}
            </form>

            <div className="mt-5 text-xs border-b border-text-primary py-4 text-primary">
              <a href="#">Forgot your password?</a>
            </div>

            <div className="mt-3 text-xs flex justify-between items-center text-primary">
              <p>Don't have an account?</p>
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                Register
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
