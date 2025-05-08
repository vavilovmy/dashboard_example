"use client"

import React from 'react'
import styles from './Report.module.css'
import { useState } from 'react'

const segments = {
  b2b: 'B2B',
  b2bP: 43.7,
  b2c: 'B2C',
  b2cP: -13.7,
  total: 'Итоги',
  totalP: 21.5
}

const TotalsReport = () => {

  const [chosen, setChosen] = useState<string>(segments.total)

  return (
    <div className={styles.wrapper}>
      <TotalsReportItem chosen={chosen} setChosen={setChosen} segment={segments.total} result={segments.totalP}/>
      <TotalsReportItem chosen={chosen} setChosen={setChosen} segment={segments.b2b} result={segments.b2bP}/>
      <TotalsReportItem chosen={chosen} setChosen={setChosen} segment={segments.b2c} result={segments.b2cP}/>
    </div>
  )
}



const TotalsReportItem = ({segment, result, chosen, setChosen}: {segment: string; result: number; chosen: string, setChosen: React.Dispatch<React.SetStateAction<string>>}) => {
  function getStyle() {

  }

  return (
    <div 
      className={`${styles.reportBlock} ${chosen === segment && result >= 0 ? styles.positiveBox : ''} ${chosen === segment && result < 0 ? styles.negativeBox : ''}`}
      onClick={() => setChosen(segment)}
    >
        <div className={`${styles.stats} ${result < 0 ? styles.negativeStats : ''}`}
          style={chosen === segment ? {backgroundColor: 'rgba(248, 248, 248, 0.25)' , color: 'rgba(255, 255, 255, 1)'} : undefined}
        >
          {result > 0 ? '🡡' + ' ' : '🡣' + ' '} {Math.abs(result)} %
        </div>
        <p className={styles.money}
          style={chosen === segment ? {color: 'rgba(255, 255, 255, 1)'} : undefined}
        >
          ₽  10 157 764
        </p>
        <p className={styles.totals}
         style={chosen === segment ? {color: 'rgba(255, 255, 255, 1)'} : undefined}
        >
          {segment}
        </p>
    </div>
  )
}

export default TotalsReport
