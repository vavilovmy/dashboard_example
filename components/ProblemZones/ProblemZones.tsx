import React from 'react'
import styles from './ProblemZones.module.css'
import dummyData from '@/lib/dataPlaceholder'

const ProblemZones = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Проблемные зоны</h2>
      
      <ul>
      {dummyData.data.map((item, index) => (       
         <li key={index}> 
          <div 
            className={styles.circle}
            style={item.amount > 50000 ? {backgroundColor: 'rgba(252, 92, 101, 1)'} : {backgroundColor: 'rgba(247, 183, 49, 1)'}}
          >!</div>
          <div>
            <p className={styles.operationType}>Название операции</p>
            <p className={styles.amount}>₽ {item.amount}</p>
          </div>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default ProblemZones
