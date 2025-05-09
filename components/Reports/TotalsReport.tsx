"use client"

import React, { useEffect } from 'react'
import styles from './Report.module.css'
import { useState } from 'react'
import Finances from '@/lib/types'

const segments = {
  b2b: 'B2B',
  b2c: 'B2C',
  total: 'Итоги'
}



const TotalsReport = ({ financeMap }: { financeMap: Finances }) => {

  const [chosen, setChosen] = useState<string>(segments.total)

  const b2bTotal = [
    financeMap.b2bMonthlyExpenses.reduce((acc, val) => acc + val, 0), 
    financeMap.b2bMonthlyExpenses.reduce((acc, val) => acc + val, 0)
  ]

  const b2cTotal = [
    financeMap.b2сMonthlyExpenses.reduce((acc, val) => acc + val, 0), 
    financeMap.b2сMonthlyIncome.reduce((acc, val) => acc + val, 0)
  ]

  const overallTotal = [
    b2bTotal[0] + b2cTotal[0], 
    b2bTotal[1] + b2cTotal[1]
  ]

  return (
    <div className={styles.wrapper}>
      <TotalsReportItem 
        chosen={chosen} 
        setChosen={setChosen} 
        segment={segments.total} 
        total={Math.max(overallTotal[0], overallTotal[1])}/>
      <TotalsReportItem 
        chosen={chosen} 
        setChosen={setChosen} 
        segment={segments.b2b}
        total={Math.max(b2bTotal[0], b2bTotal[1])}
      />
      <TotalsReportItem 
        chosen={chosen} 
        setChosen={setChosen} 
        segment={segments.b2c}
        total={Math.max(b2cTotal[0], b2cTotal[1])}
      />
    </div>
  )
}



const TotalsReportItem = ({
  segment, 
  total, 
  chosen, 
  setChosen}: {
    segment: string; 
    total: number;
    chosen: string, 
    setChosen: React.Dispatch<React.SetStateAction<string>>}) => {

  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    setResult(Number((Math.random() * 200 - 100).toFixed(1)));
  }, []);

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
          ₽  {total.toLocaleString('ru-RU')}
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
