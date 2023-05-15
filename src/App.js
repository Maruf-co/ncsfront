import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/login';
import Main from './pages/main';
import Profile from './pages/profile';
import Bank from './pages/bank';
import UsersList from './pages/usersList';

const App = () => {
  return (
    <div className="bg-[#f6f7f8] w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="/users" element={<UsersList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
