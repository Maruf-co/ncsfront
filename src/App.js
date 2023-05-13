import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/login';
import Main from './pages/main';

const App = () => {
  return (
    <div className="bg-[#f6f7f8] w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
