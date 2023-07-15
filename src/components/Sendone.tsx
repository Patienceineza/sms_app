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
import TextArea from './Textarea';
import Footer from '../components/Footer';

function SendOne() {
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


        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
       
          <div className="w-full px-8 md:px-16">
            <h4 className="font-bold text-2xl text-primary sm:text-xl md:text-1xl lg:text-2xl  ">
           send a message
            </h4>
          

            <form className="flex flex-col gap-4 b"           onSubmit={handleSubmit(submit)}>
              <Input
                className="p-2 rounded-xl border-primary w-full"
                type="text"
                defaultValue='Testing'
                name="senderId"
                placeholder="Sender ID"
                register={{ ...register('email') }}
                errors={errors?.email?.message}
              />
              
              <div className="relative">
                <label htmlFor="phone">  Phone Number (07xxxxxxxx)</label>
                <Input
                  className="p-2 rounded-xl border w-full"
                  type="text"
                  name="phoneNumber"
              defaultValue='07xxxxxxxx'
                  register={{ ...register('password') }}
                  errors={errors?.password?.message}
                />
              </div>
              <label htmlFor="phone">  Sms (1/160)</label>
              <TextArea placeholder={''}
              className="p-2 rounded-xl border w-full "
              cols={55}
              defaultValue='message'
              />
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

        
        
          </div>
        </div>
    
      <Footer />
    </>
  );
}

export default SendOne;
