import AccountCard from './AccountCard';

const Accounts = ({ data }) => {
  return (
    <div className="flex flex-col">
      {data.map((item, id) => {
        return <AccountCard key={id} cardData={item} />;
      })}
    </div>
  );
};

export default Accounts;
