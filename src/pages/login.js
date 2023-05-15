import React, { useEffect, useState } from 'react';

import { MdLogin } from 'react-icons/md';

import CornerLogo from '../components/CornerLogo';
import HeadMeta from '../components/HeadMeta';

const Login = () => {
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

  const [loginData, setLoginData] = useState({
    phone: '',
    sms: '',
  });

  const [isSignIn, setIsSignIn] = useState(false);
  const [counter, setCounter] = useState(5);
  const [isTimerOn, setIsTimerOn] = useState(false);

  useEffect(() => {
    if (counter > 0 && isTimerOn) {
      setTimeout(setCounter, 1000, counter - 1);
    } else {
      setIsTimerOn(false);
    }
  }, [counter, isTimerOn]);

  const handleChange = (event) => {
    const value = event.target.value;
    setLoginData({ ...loginData, [event.target.id]: value });
  };

  const handleSubmitSms = (event) => {
    event.preventDefault();
    console.log('Submit!', loginData);
    setIsSignIn(true);
    setIsTimerOn(true);
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    console.log('Submit!', loginData);
    setIsSignIn(true);
  };

  const meta = {
    title: 'Pirozhkoff | Sign In',
    description:
      "Pirozhkoff's authorization page where you can sign in or sign up to create your new account",
  };

  const inputs = {
    signIn: [
      {
        id: 'phone',
        name: 'phone',
        type: 'tel',
        pattern: '+7([0-9]{3})-[0-9]{3}-[0-9]{2}-[0-9]{2}',
        required: true,
        placeholder: 'Phone number',
        value: loginData.phone,
      },
      {
        id: 'sms',
        placeholder: 'sms',
        type: 'text',
        name: 'token',
        inputmode: 'numeric',
        pattern: '[0-9]',
        autocomplete: 'one-time-code',
      },
    ],
    sms: [
      {
        id: 'phone',
        name: 'phone',
        type: 'tel',
        pattern: '+7([0-9]{3})-[0-9]{3}-[0-9]{2}-[0-9]{2}',
        required: true,
        placeholder: 'Phone number',
      },
    ],
  };

  const smsForm = (
    <form onSubmit={handleSubmitSms} className={style.form}>
      {inputs.sms.map((input, id) => {
        return <input key={id} {...input} onChange={handleChange} className={style.input} />;
      })}
      <button className={style.submitButton}>Get SMS</button>
    </form>
  );

  const loginForm = (
    <form onSubmit={handleSubmitLogin} className={style.form}>
      {inputs.signIn.map((input, id) => {
        return <input key={id} {...input} onChange={handleChange} className={style.input} />;
      })}
      {isTimerOn ? (
        <div className="text-gray-400">Request another sms after {counter} seconds </div>
      ) : (
        <button className={style.submitButton}>Request another sms</button>
      )}
      <button className={style.submitButton}>Sign In</button>
    </form>
  );

  return (
    <>
      <HeadMeta {...meta} />
      <div className={style.wrap}>
        <CornerLogo />
        <button onClick={() => {}} className={style.signUpButton}>
          Sign Up
          <MdLogin size={24} className={style.signUpIcon} />
        </button>
        <div className={style.container}>
          <h3 className={style.title}>Sign in to Pirozhkoff</h3>
          {isSignIn ? loginForm : smsForm}
        </div>
      </div>
    </>
  );
};

export default Login;
