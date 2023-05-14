import { Link } from 'react-router-dom';

import Logo from '../icons/logo';

import VK from '../icons/socialNetworks/vk';
import Twitter from '../icons/socialNetworks/twitter';
import YouTube from '../icons/socialNetworks/youtube';
import Telegram from '../icons/socialNetworks/telegram';

const Footer = () => {
  const style = {
    footer: 'bg-[#f6f7f8] bottom-0 w-full pt-32',
    whiteBar: 'bg-white h-20 flex justify-center items-center',
    whiteBarContent: 'flex justify-between items-center w-3/4 mx-auto',
    logoWithText: 'flex items-center',
    bankName: 'font-bold text-lg ml-2',
    phoneWrap: 'flex flex-col items-end',
    phone: 'text-2xl font-bold',
    phoneText: 'text-sm text-gray-400',
    grayBar: 'w-3/4 mx-auto text-gray-400',
    grayBarContent: 'pt-4 pb-6',

    bottomContent: 'flex flex-col py-4',
    copyright: '',
    socialsWrap: 'flex mt-2',
    socialNetwork: 'hover:text-gray-700 mr-4',
  };

  const content = {
    copyright: `© 2023-${new Date().getFullYear()} AO «Pirozhkoff Bank», official web-site, universal license CB of Russian Federation №2932`,
    phone: '8 800 555-35-35',
    phoneText: 'For calls across the Russia',
    text: 'AO «Pirozhkoff Bank» uses cookies to personalize services and improve the convenience of using the website. Cookies are small files that contain information about previous visits to the website. If you do not want to use cookies, change your browser settings.',
    socialNetworks: [
      {
        icon: <VK />,
        link: 'https://vk.com/pirozhkoff',
      },
      {
        icon: <Twitter />,
        link: 'https://twitter.com/tinkoff_bank',
      },
      {
        icon: <YouTube />,
        link: 'https://www.youtube.com/watch?v=BL8ZKeGCaIg',
      },
      {
        icon: <Telegram />,
        link: 'https://t.me/tinkoffbank',
      },
    ],
  };

  return (
    <footer className={style.footer}>
      <div className={style.whiteBar}>
        <div className={style.whiteBarContent}>
          <div className={style.logoWithText}>
            <Logo width="40px" height="40px" />
            <span className={style.bankName}>Pirozhkoff</span>
          </div>
          <div className={style.phoneWrap}>
            <span className={style.phone}>{content.phone}</span>
            <span className={style.phoneText}>{content.phoneText}</span>
          </div>
        </div>
      </div>
      <div className={style.grayBar}>
        <div className={style.grayBarContent}>
          <p>{content.text}</p>
        </div>
        <hr />
        <div className={style.bottomContent}>
          <span className={style.copyright}>{content.copyright}</span>
          <div className={style.socialsWrap}>
            {content.socialNetworks.map((item, id) => {
              return (
                <Link to={item.link} key={id} className={style.socialNetwork}>
                  {item.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
