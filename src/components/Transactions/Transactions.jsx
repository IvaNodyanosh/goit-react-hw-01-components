import css from './Transactions.module.css'

export const Transactions = ({ items }) => {
    return <div className={`${css.transactions} container`}><table className={css.transactions__table}>
  <thead className={css.transactions__head}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={css.transactions__body}>
    {items.map(item =>
    <tr key={item.id} className={css.transactions__item}>
      <td className={css.transactions__type}>{item.type}</td>
      <td className={css.transactions__amount}>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>)}
  </tbody>
</table></div>
}