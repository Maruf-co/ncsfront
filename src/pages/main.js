import React from 'react';

import { Link } from 'react-router-dom';
import { MdLogin } from 'react-icons/md';

import HeadMeta from '../components/HeadMeta';
import Logo from '../icons/logo';

const Main = () => {
  const style = {
    loginLink: 'fixed top-8 right-10 text-pff-blue-500 flex hover:text-black',
    loginIcon: 'ml-1',
    content: 'flex flex-col items-center pt-32',
    title: 'text-4xl font-bold mb-8',
    texts: 'flex flex-col items-center max-w-screen-md mb-8',
    text: 'text-center',
  };

  const content = {
    metaTitle: 'Pirozhkoff | Main',
    metaDescription: "Pirozhkoff's main page with description of this tatar bank",
    title: 'Pirozhkoff',
    texts: [
      'Pirozhkoff - is an online banking based on financial life-style service.',
      'Clients of Pirozhkoff are open-minded people with big ambitions ready to make big investements in development of businesses.',
      'Pirozhkoff - 12th biggest bank of Tatarstan in terms of satisfied clients',
    ],
  };

  return (
    <>
      <HeadMeta title={content.metaTitle} description={content.metaDescription} />
      <Link to="/login" className={style.loginLink}>
        Log In
        <MdLogin size={24} className={style.loginIcon} />
      </Link>
      <div className={style.content}>
        <h1 className={style.title}>{content.title}</h1>
        <div className={style.texts}>
          {content.texts.map((text, id) => {
            return (
              <p key={id} className={style.text}>
                {text}
              </p>
            );
          })}
        </div>
        <Logo />
      </div>
    </>
  );
};

export default Main;
