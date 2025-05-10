"use client"

import React, { useState, useMemo, useEffect } from 'react'
import styles from './Report.module.css'
import { MoneyMap } from '@/lib/types'

const TotalsReport = ({ 
  financeMap, 
  chosen,
  segments, 
  setChosen }: { 
    financeMap: MoneyMap; 
    chosen: string; 
    segments: {
      b2b: string;
      b2c: string;
      total: string;
    };
    setChosen: React.Dispatch<React.SetStateAction<string>>;
  }) => {

  return (
    <div className={styles.wrapper}>
      <TotalsReportItem 
        chosen={chosen} 
        setChosen={setChosen} 
        segment={segments.total} 
        total={Math.max(financeMap.combinedTotalExpenses, financeMap.combinedTotalIncome)}/>
      <TotalsReportItem 
        chosen={chosen} 
        setChosen={setChosen} 
        segment={segments.b2b}
        total={Math.max(financeMap.b2bTotalExpenses, financeMap.b2bTotalIncome)}
      />
      <TotalsReportItem 
        chosen={chosen} 
        setChosen={setChosen} 
        segment={segments.b2c}
        total={Math.max(financeMap.b2cTotalExpenses, financeMap.b2cTotalIncome)}
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
        const value = Number((Math.random() * 200 - 100).toFixed(1));
        setResult(value);
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
