"use client"

import React, { useEffect, useState } from 'react'
import styles from './Graph.module.css'
import Chart from '../LineChart/Chart'
import { ChartData, MoneyMap } from '@/lib/types'

const Graph = ({ 
  financeMap, 
  chosen, 
  segments 
}: { 
    financeMap: MoneyMap, 
    chosen: string; 
    segments: {
      b2b: string;
      b2c: string;
      total: string;
    };
  }) => {

  let chartDataTotal = constructGraphData(
    financeMap.combinedMonthlyIncome, 
    financeMap.combinedMonthlyExpenses, 
    financeMap.combinedMonthlyProfit
  )

  let chartDataB2B = constructGraphData(
    financeMap.b2bMonthlyIncome, 
    financeMap.b2bMonthlyExpenses, 
    financeMap.b2bMonthlyProfit
  )

  let chartDataB2C = constructGraphData(
    financeMap.b2cMonthlyIncome, 
    financeMap.b2cMonthlyExpenses, 
    financeMap.b2cMonthlyProfit
  )

  const [chartData, setChartData] =  useState(chartDataTotal)

  useEffect(() => {
    switch (chosen) {
      case segments.b2b: 
      setChartData(chartDataB2B);
      break;
      case segments.b2c: 
      setChartData(chartDataB2C);
      break;
      case segments.total: 
      setChartData(chartDataTotal);
      break;
    }
  }, [chosen])

  return (
    <div className={styles.graphWrapper}>
      <Heading />
      <ChartContainer chartData={chartData}/>
      <Totals  financeMap={financeMap} chosen={chosen} segments={segments}/>
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

const ChartContainer = ({ chartData }: { chartData: ChartData}) => {
  return (
    <div className={styles.chart}>
      <Chart chartData={chartData}/>
    </div>
  )
}

const Totals = ({ 
  financeMap, 
  chosen,
  segments
 }: { 
  financeMap: MoneyMap, 
  chosen: string,
  segments: {
    b2b: string;
    b2c: string;
    total: string;
  }
}) => {

  const b2b = [financeMap.b2bTotalExpenses, financeMap.b2bTotalIncome, financeMap.b2bTotalProfit]
  const b2c = [financeMap.b2cTotalExpenses, financeMap.b2cTotalIncome, financeMap.b2cTotalProfit]
  const combined = [financeMap.combinedTotalExpenses, financeMap.combinedTotalIncome, financeMap.combinedTotalProfit]

  const [totals, setTotals] = useState(combined)

  useEffect(() => {
    switch (chosen) {
      case segments.b2b: 
      setTotals(b2b);
      break;
      case segments.b2c: 
      setTotals(b2c);
      break;
      case segments.total: 
      setTotals(combined);
      break;
    }
  }, [chosen])

  

  return (
    <div className={styles.totals}>
      <ul>
        <li>
          <div 
            className={styles.circle} 
            style={{backgroundColor: "rgba(115, 207, 122, 1)"}}></div>
          <div>
            <p className={styles.stat}>Выручка</p>
            <p className={styles.amount}>₽ {totals[1].toLocaleString()}</p>
          </div>
        </li>
        <li>
          <div 
            className={styles.circle}
            style={{backgroundColor: "rgba(48, 199, 220, 1)"}}
          >
            {totals[1] < totals[0] ? '!' : ''}
          </div>
          <div>
            <p className={styles.stat}>Затраты</p>
            <p className={styles.amount}>₽ {totals[0].toLocaleString()}</p>
          </div>
        </li>
        <li>
          <div 
            className={styles.circle}
            style={{backgroundColor: "rgba(69, 170, 242, 1)"}}
          >
            {totals[1] < totals[0] ? '!' : ''}
          </div>
          <div>
            <p className={styles.stat}>Прибыль</p>
            <p className={styles.amount}>₽ {totals[2].toLocaleString()}</p>
          </div>
        </li>
        <li>
          <div 
            className={styles.circle}
            style={{backgroundColor: "rgba(245, 226, 48, 1)"}}
          ></div>
          <div>
            <p className={styles.stat}>Задолженность</p>
            <p className={styles.amount}>₽ 0</p>
          </div>
        </li>
        <li>
          <div 
            className={styles.circle}
            style={{backgroundColor: "rgba(172, 116, 252, 1)"}}
          ></div>
          <div>
            <p className={styles.stat}>Итог</p>
            <p className={styles.amount}>₽ {Math.max(totals[0], totals[1]).toLocaleString()}</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

function constructGraphData(income: number[], expenses: number[], profit: number[]) {
  const monthNames = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
  let graphData = [];
  for (let i = 0; i < monthNames.length; i++) {
    let obj = {
      name: monthNames[i],
      Выручка: income[i],
      Затраты: expenses[i],
      Прибыль: profit[i],
      Задолженность: 0, 
      Итого: Math.max(income[i], expenses[i]),
    }
    graphData.push(obj)
  }
  return graphData
}

export default Graph
