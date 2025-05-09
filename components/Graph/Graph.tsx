import React from 'react'
import styles from './Graph.module.css'
import Chart from '../LineChart/Chart'

const Graph = () => {
  return (
    <div className={styles.graphWrapper}>
      <Heading />
      <ChartContainer />
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

const ChartContainer = () => {
  return (
    <div className={styles.chart}>
      <Chart />
    </div>
  )
}

const Totals = () => {
  return (
    <div className={styles.totals}>
      <ul>
        <li>
          <div 
            className={styles.circle} 
            style={{backgroundColor: "rgba(115, 207, 122, 1)"}}>!</div>
          <div>
            <p className={styles.stat}>Выручка</p>
            <p className={styles.amount}>₽ 8 615 253</p>
          </div>
        </li>
        <li>
          <div 
            className={styles.circle}
            style={{backgroundColor: "rgba(48, 199, 220, 1)"}}
          ></div>
          <div>
            <p className={styles.stat}>Затраты</p>
            <p className={styles.amount}>₽ 8 615 253</p>
          </div>
        </li>
        <li>
          <div 
            className={styles.circle}
            style={{backgroundColor: "rgba(69, 170, 242, 1)"}}
          ></div>
          <div>
            <p className={styles.stat}>Прибыль</p>
            <p className={styles.amount}>₽ 8 615 253</p>
          </div>
        </li>
        <li>
          <div 
            className={styles.circle}
            style={{backgroundColor: "rgba(245, 226, 48, 1)"}}
          ></div>
          <div>
            <p className={styles.stat}>Задолженность</p>
            <p className={styles.amount}>₽ 8 615 253</p>
          </div>
        </li>
        <li>
          <div 
            className={styles.circle}
            style={{backgroundColor: "rgba(172, 116, 252, 1)"}}
          ></div>
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
