import { Fragment } from 'react';

const ExpensesTable = ({ className, expenses }) => {
  const style = {
    wrap: className,
    date: 'bg-gray-200 text-gray-400 py-2 px-3',
    expenseWrap: 'flex justify-between items-center border-b-[0.5px] py-4 px-2 hover:bg-gray-100',
  };

  return (
    <div className={style.wrap}>
      {expenses.map((day, i) => {
        return (
          <Fragment key={i}>
            <div className={style.date}>{day.date}</div>

            {day.list.map((expense, j) => {
              const [money, rest] = expense.amount.split(',');

              return (
                <div key={`${i}_${j}`} className={style.expenseWrap}>
                  <div className="flex items-center">
                    {expense.icon}
                    <div className="flex flex-col ml-3">
                      <span className="text-gray-500">{expense.account}</span>
                      <span className="text-lg mt-1">{expense.organization}</span>
                    </div>
                  </div>
                  <div>
                    <span className={money.charAt(0) === '+' ? 'text-green-500' : 'text-black'}>
                      {money}
                    </span>
                    <span className={money.charAt(0) === '+' ? 'text-green-400' : 'text-gray-400'}>
                      ,{rest}
                    </span>
                  </div>
                </div>
              );
            })}
          </Fragment>
        );
      })}
    </div>
  );
};

export default ExpensesTable;
