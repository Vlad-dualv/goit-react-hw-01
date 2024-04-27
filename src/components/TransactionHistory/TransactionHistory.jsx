import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.transactionHeader}>
        <tr>
          <th className={css.transactionTitle}>Type</th>
          <th className={css.transactionTitle}>Amount</th>
          <th className={css.transactionTitle}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <tr className={css.body} key={item.id}>
              <td className={css.bodyItem}>{item.type}</td>
              <td className={css.bodyItem}>{item.amount}</td>
              <td className={css.bodyItem}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
