import { Link } from 'react-router-dom';

import Logo from '../icons/logo';

const CornerLogo = () => {
  const style = {
    toMainPage: 'fixed top-8 left-10 flex items-center',
    bankName: 'font-bold text-lg ml-2',
  };

  return (
    <Link to="/" className={style.toMainPage}>
      <Logo width="40px" height="40px" />
      <span className={style.bankName}>Pirozhkoff</span>
    </Link>
  );
};

export default CornerLogo;
