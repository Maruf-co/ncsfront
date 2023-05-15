import avatar from '../icons/avatar.jpg';

import HeadMeta from '../components/HeadMeta';
import Footer from '../components/Footer';
import { useState } from 'react';

const Profile = () => {
  const [fieldNum, setFieldNum] = useState(-1);

  const handleChoice = (id) => {
    setFieldNum(id);
  };

  const handleSave = (field, newVal) => {
    field.placeholder = newVal;
    setFieldNum(-1);
  };

  const handleCancel = () => {
    setFieldNum(-1);
  };

  const fields = [
    {
      title: 'Mobile Phone',
      subtitle: 'We need your phone number to confirm operations and account configurations',
      name: 'Phone',
      placeholder: '7986xxxxx47',
    },
    {
      title: 'Email',
      subtitle: 'On the email you receive statements, invoices and references',
      name: 'Email (main)',
      placeholder: 'marufLovesC4ts@gmail.com',
    },
    {
      title: 'Address',
      subtitle: 'Address where bank will direct postal correspondence',
      name: 'Registration Address',
      placeholder: '199406, Saint-Petersburg, Shevchenko st., 21',
    },
    {
      title: 'Passport',
      subtitle: 'Passport to validate your personal data while taking credits, investments, etc',
      name: 'Passport file:',
      placeholder: 'my_passport.pdf',
    },
  ];

  return (
    <>
      <HeadMeta
        title="Pirozhkoff | Profile"
        description="Profile page with all data related to client"
      />
      <div className="bg-[#f6f7f8] h-full pt-8 px-4">
        <div className="flex items-center mt-5 mb-10">
          <img src={avatar} alt="Avatar" className="rounded-full w-[96px] h-[96px]" />
          <h2 className="text-4xl font-bold ml-4">
            Maruf <br />
            Asatullaev
          </h2>
        </div>

        {fields.map((field, i) => {
          const isActive = i === fieldNum;

          const buttons = isActive ? (
            <div className="w-full flex flex-col items-center">
              <button
                className="bg-pff-yellow-400 rounded py-4 px-9 mb-7"
                onClick={() => handleSave(field, 'aboba')}
              >
                Save
              </button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <button
              className="text-pff-blue-400 hover:text-pff-blue-600"
              onClick={() => handleChoice(i)}
            >
              Modify
            </button>
          );

          return (
            <div key={i} className="flex flex-col items-start mb-10 w-full">
              <h3 className="text-2xl font-bold mb-3">{field.title}</h3>
              <p>{field.subtitle}</p>
              <div
                className={`rounded my-4 py-2 px-3.5 w-full flex flex-col ${
                  isActive ? 'bg-white' : 'bg-gray-200'
                }`}
              >
                <span className="text-gray-400">{field.name}</span>
                <input
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                  className="outline-none"
                  disabled={!isActive}
                />
              </div>
              {buttons}
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Profile;
