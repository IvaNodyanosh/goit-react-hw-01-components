import css  from "./Statistics.module.css"


export const Statistics = ({ title, stats }) => {


  return <section className={`${css.stat} container`}>
    {title.length > 0 && <h2 className={css.stat__title}>{ title }</h2>}


    <ul className={css.stat__list}>

        {stats.map(stat =>
          <li className={css.stat__item} key={stat.id}>
            <span className={css.stat__label}>{ stat.label}</span>
            <span class="percentage">{`${ stat.percentage }%`}</span>
        </li>)}


  </ul>
</section>
}