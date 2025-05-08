import React from 'react'
import styles from './Graph.module.css'

const Graph = () => {
  return (
    <div className={styles.graphWrapper}>
      <Heading />
      <Chart />
      <Totals />
    </div>
  )
}

const Heading = () => {
  return (
    <div className={styles.graphHeading}>
      <h2>Общая статистика</h2>
      <div className={styles.graphNav}>
        <p className={styles.graphNavItem}>Неделя</p>
        <p className={styles.graphNavItem}>Месяц</p>
        <p className={styles.graphNavItem_active}>Год</p>
      </div>
    </div>
  )
}

const Chart = () => {
  return (
    <div className={styles.chart}>

    </div>
  )
}

const Months = () => {
  return (
    <div>
      
    </div>
  )
}

const Totals = () => {
  return (
    <div className={styles.totals}>
      <ul>
        <li>
          <div className={styles.circle}>!</div>
          <div>
            <p className={styles.stat}>Выручка</p>
            <p className={styles.amount}>₽ 8 615 253</p>
          </div>
        </li>
        <li>
          <div className={styles.circle}/>
          <div>
            <p className={styles.stat}>Затраты</p>
            <p className={styles.amount}>₽ 8 615 253</p>
          </div>
        </li>
        <li>
          <div className={styles.circle}/>
          <div>
            <p className={styles.stat}>Прибыль</p>
            <p className={styles.amount}>₽ 8 615 253</p>
          </div>
        </li>
        <li>
          <div className={styles.circle}/>
          <div>
            <p className={styles.stat}>Задолженность</p>
            <p className={styles.amount}>₽ 8 615 253</p>
          </div>
        </li>
        <li>
          <div className={styles.circle}/>
          <div>
            <p className={styles.stat}>Итог</p>
            <p className={styles.amount}>₽ 8 615 253</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Graph
