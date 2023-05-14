import cn from 'classnames';

import Ruble from '../icons/currencies/ruble';
import Dollar from '../icons/currencies/dollar';
import Euro from '../icons/currencies/euro';

const style = {
  expenseLogo: 'bg-cover rounded-full w-12 h-12',
};

export const accountsData = [
  {
    moneyAmount: '19 842,7',
    currency: '₽',
    cardName: 'Pirozhkoff Gold',
    icon: <Ruble />,
  },
  {
    moneyAmount: '0,67',
    currency: '$',
    cardName: 'Pirozhkoff Gold USD',
    icon: <Dollar />,
  },
  {
    moneyAmount: '0',
    currency: '€',
    cardName: 'Pirozhkoff Gold EUR',
    icon: <Euro />,
  },
];

export const expensesData = [
  {
    date: '14.05.2023',
    list: [
      {
        icon: (
          <div
            className={cn(
              'bg-[url(https://brands-prod.cdn-tinkoff.ru/general_logo/eda-yandex.png)]',
              style.expenseLogo
            )}
          />
        ),
        account: 'Debit card',
        organization: 'Яндекс.Еда',
        amount: '-3,00',
      },
      {
        icon: (
          <div
            className={cn(
              'bg-[url(https://brands-prod.cdn-tinkoff.ru/general_logo/eda-yandex.png)]',
              style.expenseLogo
            )}
          />
        ),
        account: 'Debit card',
        organization: 'Яндекс.Еда',
        amount: '-807,00',
      },
      {
        icon: (
          <div
            className={cn(
              'bg-[url(https://brands-prod.cdn-tinkoff.ru/general_logo/eda-yandex.png)]',
              style.expenseLogo
            )}
          />
        ),
        account: 'Debit card',
        organization: 'Яндекс.Еда',
        amount: '+360,00',
        date: '14.05.2023',
      },
    ],
  },
  {
    date: '13.05.2023',
    list: [
      {
        icon: (
          <div
            className={cn(
              'bg-[url(https://brands-prod.cdn-tinkoff.ru/general_logo/rusalka.png)]',
              style.expenseLogo
            )}
          />
        ),
        account: 'Debit card',
        organization: 'РусАлка',
        amount: '-37,99',
      },
    ],
  },
  {
    date: '6.05.2023',
    list: [
      {
        icon: (
          <div
            className={cn(
              'bg-[url(https://brands-prod.cdn-tinkoff.ru/general_logo/tinkoff.png)]',
              style.expenseLogo
            )}
          />
        ),
        account: 'Tinkoff Black',
        organization: 'Карина Т.',
        amount: '-790,00',
      },
    ],
  },
];
