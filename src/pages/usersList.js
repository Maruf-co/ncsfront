import cn from 'classnames';

import { usersList } from '../api/mocks';

import HeadMeta from '../components/HeadMeta';
import Footer from '../components/Footer';
import CornerLogo from '../components/CornerLogo';

const UsersList = () => {
  const style = {
    wrap: 'flex w-full h-full justify-start',
    content: 'w-3/4 mt-32 mx-auto',
    title: 'text-4xl font-bold mb-10',
    table: 'bg-white border-[0.5px] w-full',
    th: 'text-2xl text-left py-2 px-4',
    trow: 'border-t-[0.5px]',
    tdata: 'text-xl p-4',
  };

  console.log(usersList);

  return (
    <>
      <HeadMeta
        title="Pirozhkoff | Users List"
        description="Page with list of bank users for our respected admin"
      />
      <div className={style.wrap}>
        <CornerLogo />
        <div className={style.content}>
          <h1 className={style.title}>Users List</h1>
          <table className={style.table}>
            <thead>
              <tr>
                <th className={style.th}>First name</th>
                <th className={style.th}>Last name</th>
                <th className={style.th}>Joined Date</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((user, id) => {
                return (
                  <tr key={user.id} className={cn(style.trow, id % 2 === 0 && 'bg-gray-100')}>
                    <td className={style.tdata}>{user.first_name}</td>
                    <td className={style.tdata}>{user.last_name}</td>
                    <td className={style.tdata}>{user.joined_date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UsersList;
