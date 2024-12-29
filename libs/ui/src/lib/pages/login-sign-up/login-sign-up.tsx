import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import profileIcon from '../../../assets/profile-icon.png';
import googleIcon from '../../../assets/devicon_google.svg';
import { Box, TextField, Typography } from '@mui/material';
import { TButton, TInput } from '@tap-n-taste/ui';
import { BackendUrl } from '@tap-n-taste/admin';
import { useAuth } from '@tap-n-taste/hooks';
import { useForm, Controller } from 'react-hook-form';
import { restaurantId } from '@tap-n-taste/constant';
import axios from 'axios';

interface Props {
  type: string;
  isAdminSignUpLogin?: boolean;
}

interface FormValues {
  name: string;
  phone: string;
  password: string;
  mobileNumber: string;
  restaurantId?: string;
}

export function LoginSignUp({ type, isAdminSignUpLogin }: Props) {
  const navigate = useNavigate();
  const { id, adminId } = useParams<{ id: string; adminId: string }>();
  const [isLogin, setIsLogin] = useState(type === 'login');
  const { loading, error, signupOrLogin } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      phone: '',
      password: '',
      mobileNumber: '',
      restaurantId: '',
    },
  });
  console.log(getValues());

  const handleOtpNavigation = (data: FormValues) => {
    console.log('Form Data:', data);
    navigate('/otp');
  };

  const handleGoogleLogin = () => {
    const currentPath = window.location.pathname + window.location.search;
    const defaultRedirect = currentPath.includes(`/login`)
      ? `/home`
      : currentPath;

    const role = 'user'; // Replace with actual value
    const sourceUrl = document.referrer || 'unknown';

    const googleAuthUrl = `${BackendUrl}?redirect=${encodeURIComponent(
      defaultRedirect
    )}&restaurantId=${encodeURIComponent(
      restaurantId
    )}&role=${encodeURIComponent(role)}&sourceUrl=${encodeURIComponent(
      sourceUrl
    )}`;

    window.location.href = googleAuthUrl;
  };

  const toggleLoginSignUp = () => {
    if (isLogin) {
      navigate(`/restaurant/${restaurantId}/sign-up`);
    } else {
      navigate(`/restaurant/${restaurantId}/login`);
    }
    setIsLogin(!isLogin);
  };
  const handleSignupLogin = async (data: FormValues) => {
    const payload =
      isAdminSignUpLogin && !isLogin ? { ...data, restaurantId } : data;
    const options = {
      method: 'POST',
      header: { 'content-type': 'application/json' },
      url: 'http://localhost:3000/api/auth/login',
      withCookies: true,
      withCredentials: true,
      data:data
    };
    const res = await axios(options);
    console.log(res);
    

    const result = await signupOrLogin(
      isLogin ? '/auth/login' : '/auth/signup',
      payload
    );
    if (result) {
      // Navigate based on the result or logic
      navigate('/home');
    }
  };
  return (
    <Box className="w-full h-screen flex items-center justify-center">
      <Box className="w-full sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] flex flex-col items-center gap-6 overflow-y-scroll px-10 sm:px-5 md:px-2">
        <img
          src={profileIcon}
          alt="Profile Icon"
          className="w-40 h-40 object-contain"
        />

        <Typography
          sx={{
            textTransform: 'capitalize',
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', sm: '2rem' },
          }}
        >
          {type}
        </Typography>

        <form
          onSubmit={handleSubmit(handleSignupLogin)}
          className="w-full gap-4 flex flex-col"
        >
          <Controller
            name="name"
            control={control}
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <TInput
                {...field}
                placeHolderText="Enter Your Name"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />

          <Controller
            name="phone"
            control={control}
            rules={{ required: 'Phone number is required' }}
            render={({ field }) => (
              <TInput
                {...field}
                placeHolderText="Enter Your Phone"
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: 'Password is required' }}
            render={({ field }) => (
              <TInput
                {...field}
                placeHolderText="Enter Your Password"
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />

          <Controller
            name="mobileNumber"
            control={control}
            rules={{ required: 'Mobile number is required' }}
            render={({ field }) => (
              <TInput
                {...field}
                placeHolderText="Enter Your Mobile Number"
                error={!!errors.mobileNumber}
                helperText={errors.mobileNumber?.message}
              />
            )}
          />

          {isAdminSignUpLogin && !isLogin && (
            <Controller
              name="restaurantId"
              control={control}
              rules={{ required: 'Restaurant ID is required' }}
              render={({ field }) => (
                <TInput
                  {...field}
                  placeHolderText="Enter Your Restaurant ID"
                  error={!!errors.restaurantId}
                  helperText={errors.restaurantId?.message}
                />
              )}
            />
          )}

          <TButton
            variant="contained"
            className={{
              root: 'font-semibold !bg-[#F1414F] w-full !rounded-xl !shadow-none h-12',
              text: 'text-white !font-bold',
            }}
            text={isLogin ? 'Login' : 'SignUp'}
            type="submit"
          />
        </form>

        <TButton
          variant="contained"
          icon={googleIcon}
          text={isLogin ? 'Login with Google' : 'Sign Up with Google'}
          onClick={handleGoogleLogin}
          className={{
            root: 'font-semibold !bg-[#EDEDED] w-full !rounded-xl !shadow-none gap-2 h-12',
            text: 'text-black',
          }}
        />

        <TButton
          text={isLogin ? 'Sign Up' : 'Login'}
          onClick={toggleLoginSignUp}
          className={{
            root: 'font-semibold bg-[#F1414F] !underline !shadow-none !text-[#F1414F]',
            text: '!text-[#F1414F]',
          }}
        />
      </Box>
    </Box>
  );
}

export default LoginSignUp;
