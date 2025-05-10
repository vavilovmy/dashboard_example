"use client"

import { ChartData } from '@/lib/types'
import React from 'react'
import { 
  LineChart, 
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
 } from 'recharts'

const Chart = ({ chartData }: { chartData: ChartData }) => {
  return ( 
    <ResponsiveContainer width="100%" height="100%">
    <LineChart width={704} height={254} data={chartData} margin={{left: 15}}>
      <YAxis hide={true}/>
      <XAxis dataKey="name" stroke="rgba(210, 209, 209, 1)"/>
      <Tooltip />
      <Line
        type="monotone" 
        dataKey="Выручка"
        stroke="rgba(115, 207, 122, 1)"
        strokeWidth={3}
        dot={false}
      />
      <Line 
        type="monotone" 
        dataKey="Затраты"
        stroke="rgba(48, 199, 220, 1)"
        strokeWidth={3}
        dot={false}
      />
      <Line 
        type="monotone" 
        dataKey="Прибыль"
        stroke="rgba(69, 170, 242, 1)"
        strokeWidth={3}
        dot={false}
      />
      <Line 
        type="monotone" 
        dataKey="Задолженность"
        stroke="rgba(245, 226, 48, 1)"
        strokeWidth={3}
        dot={false}
      />
      <Line 
        type="monotone" 
        dataKey="Итого"
        stroke="rgba(172, 116, 252, 1)"
        strokeWidth={3}
        dot={false}
      />
    </LineChart>
    </ResponsiveContainer>
  )
}

export default Chart
