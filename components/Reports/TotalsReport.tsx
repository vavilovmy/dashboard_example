import React from 'react'
import styles from './Report.module.css'

const TotalsReport = () => {
  return (
    <div className={styles.reportBlock}>
      <div className={styles.stats}>🡡 🡣 21.5 %</div>
      <p className={styles.money}>₽  10 157 764</p>
      <p className={styles.totals}>Итоги</p>
    </div>
  )
}

export default TotalsReport
