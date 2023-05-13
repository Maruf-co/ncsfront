import React, { useState } from 'react';

import { MdLogin } from 'react-icons/md';

import HeadMeta from '../components/HeadMeta';

const Login = () => {
  const [loginData, setLoginData] = useState({
    login: '',
    password: '',
  });

  const [isSignUp, setIsSignUp] = useState(false);

  const style = {
    wrap: 'flex items-center justify-center m-auto w-full h-screen',
    signUpButton: 'fixed top-8 right-10 text-pff-blue-500 flex hover:text-black',
    signUpIcon: 'ml-1',
    container: 'rounded-3xl shadow-xl bg-white p-10',
    title: 'text-3xl text-center font-bold mb-3',
    form: 'flex flex-col items-center',
    input: 'bg-pff-blue-100 rounded-lg p-5 my-3 hover:bg-pff-blue-200 focus:bg-white',
    submitButton: 'bg-pff-yellow-400 rounded-lg px-6 py-3 mt-4 hover:bg-pff-yellow-500',
  };

  const handleChangeForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setLoginData({ ...loginData, [event.target.id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit!', loginData);
  };

  const meta = {
    title: `Pirozhkoff | Sign ${isSignUp ? 'Up' : 'In'}`,
    description:
      "Pirozhkoff's authorization page where you can sign in or sign up to create your new account",
  };

  const inputs = {
    signIn: [
      {
        id: 'login',
        type: 'text',
        placeholder: 'Email or phone number',
      },
      {
        id: 'password',
        type: 'password',
        placeholder: 'Password',
      },
    ],
    // temporarily cloned signIn body
    signUp: [
      {
        id: 'login',
        type: 'text',
        placeholder: 'Email or phone number',
      },
      {
        id: 'password',
        type: 'password',
        placeholder: 'Password',
      },
    ],
  };

  const loginForm = (
    <form onSubmit={handleSubmit} className={style.form}>
      {inputs.signIn.map((input) => {
        return <input {...input} onChange={handleChange} className={style.input} />;
      })}
      <button className={style.submitButton}>Sign In</button>
    </form>
  );

  const signUpForm = (
    <form onSubmit={handleSubmit} className={style.form}>
      {inputs.signUp.map((input) => {
        return <input {...input} onChange={handleChange} className={style.input} />;
      })}
      <button className={style.submitButton}>Sign Up</button>
    </form>
  );

  return (
    <>
      <HeadMeta {...meta} />
      <div className={style.wrap}>
        <button onClick={handleChangeForm} className={style.signUpButton}>
          {isSignUp ? 'Sign In' : 'Sign Up'}
          <MdLogin size={24} className={style.signUpIcon} />
        </button>
        <div className={style.container}>
          <h3 className={style.title}>Sign in to Pirozhkoff</h3>
          {isSignUp ? signUpForm : loginForm}
        </div>
      </div>
    </>
  );
};

export default Login;
