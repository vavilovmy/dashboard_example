import React from 'react'
import styles from './ProblemZones.module.css'

const ProblemZones = ({
  problems}: {
    problems: {
      division: string;
      date: string;
      amount: string;
      type: string;
  }[]
  }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Проблемные зоны</h2>
      <ul>
      {problems.map((item, index) => (       
         <li key={index}> 
          <div 
            className={styles.circle}
            style={Number(item.amount) > 50000 ? {backgroundColor: 'rgba(252, 92, 101, 1)'} : {backgroundColor: 'rgba(247, 183, 49, 1)'}}
          >!</div>
          <div>
            <p className={styles.operationType}>Название операции</p>
            <p className={styles.amount}>₽ {Number(item.amount).toLocaleString('ru-RU')}</p>
          </div>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default ProblemZones
