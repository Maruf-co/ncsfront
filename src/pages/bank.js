import { MdAttachMoney, MdPhonelinkRing } from 'react-icons/md';
import { VscLiveShare } from 'react-icons/vsc';

import { accountsData, expensesData } from '../api/mocks';

import HeadMeta from '../components/HeadMeta';
import Footer from '../components/Footer';
import PaymentBox from '../components/PaymentBox';
import Accounts from '../components/Accounts';
import ExpensesTable from '../components/ExpensesTable';

const Bank = () => {
  const style = {
    wrap: 'bg-[#f6f7f8] w-full pt-4',
    content: 'w-3/4 mx-auto',
    grid: 'grid grid-cols-[1fr_2fr]',
    leftContent: 'mt-6 pr-16',
    rightContent: 'mt-8',
    contentBlock: 'mb-12',
    title: 'font-bold text-xl mb-7',
    paymentCard: 'w-[165px] h-[112px] mr-5',
  };

  return (
    <>
      <HeadMeta
        title="Pirozhkoff | Bank"
        description="Bank page with tools to make financial operations"
      />

      <div className={style.wrap}>
        <div className={style.content}>
          <div className={style.grid}>
            <div className={style.leftContent}>
              <h3 className={style.title}>Accounts and cards</h3>
              <Accounts data={accountsData} />
            </div>
            <div className={style.rightContent}>
              <div className={style.contentBlock}>
                <h3 className={style.title}>Payments and transfers</h3>
                <div className="flex">
                  <PaymentBox
                    title="By credentials"
                    logo={<MdAttachMoney size={24} color="white" />}
                    className={style.paymentCard}
                  />
                  <PaymentBox
                    title="By phone number"
                    logo={<MdPhonelinkRing size={24} color="white" />}
                    className={style.paymentCard}
                  />
                  <PaymentBox
                    title="Request money"
                    logo={<VscLiveShare size={24} color="white" />}
                    className={style.paymentCard}
                  />
                </div>
              </div>
              <div className={style.contentBlock}>
                <h3 className={style.title}>Recent operations</h3>
                <ExpensesTable expenses={expensesData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bank;
