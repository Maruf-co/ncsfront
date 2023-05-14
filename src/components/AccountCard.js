const AccountCard = ({ cardData }) => {
  const style = {
    wrap: `text-gray-500 border-t-[0.5px] py-4 px-2 flex items-center 
      hover:bg-gray-100 hover:text-gray-600`,
    icon: 'bg-gray-200 rounded-full w-10 p-1 mr-4',
  };

  const [money, rest] = cardData.moneyAmount.split(',');

  return (
    <div className={style.wrap}>
      <div className={style.icon}>{cardData.icon}</div>
      <div className="flex flex-col">
        <span>{cardData.cardName}</span>
        <span>
          <span className="text-black">{money}</span>
          <span>{`${rest ? ',' + rest : ''} ${cardData.currency}`}</span>
        </span>
      </div>
    </div>
  );
};

export default AccountCard;
