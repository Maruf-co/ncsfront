import cn from 'classnames';

const PaymentBox = ({ className, title, logo }) => {
  return (
    <div
      className={cn(
        'bg-white cursor-pointer rounded-lg shadow-lg p-4 mt-2 hover:mt-1 hover:shadow-xl',
        className
      )}
    >
      <div className="flex flex-col items-center">
        <div className="bg-pff-blue-700 rounded-full w-12 p-3 mb-2">{logo}</div>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default PaymentBox;
