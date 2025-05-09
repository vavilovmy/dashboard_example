"use client"

import React from 'react'
import { 
  LineChart, 
  Line,
  Area, 
  AreaChart, 
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
 } from 'recharts'

const products = [
  {
    name: 'Янв',
    val1: 12333,
    val2: 23133,
    val3: 2333,
    val4: 7333,
    val5: 1333,
  },
  {
    name: 'Фев',
    val1: 16333,
    val2: 26133,
    val3: 2633,
    val4: 7633,
    val5: 1633,
  },
  {
    name: 'Мар',
    val1: 12333,
    val2: 23133,
    val3: 2333,
    val4: 7333,
    val5: 1333,
  },
  {
    name: 'Апр',
    val1: 12333,
    val2: 23133,
    val3: 2333,
    val4: 7333,
    val5: 1333,
  },
  {
    name: 'Май',
    val1: 12333,
    val2: 23133,
    val3: 2333,
    val4: 7333,
    val5: 1333,
  },
  {
    name: 'Июн',
    val1: 12333,
    val2: 23133,
    val3: 2333,
    val4: 7333,
    val5: 1333,
  },
  {
    name: 'Июл',
    val1: 12333,
    val2: 23133,
    val3: 2333,
    val4: 7333,
    val5: 1333,
  },
  {
    name: 'Авг',
    val1: 12333,
    val2: 23133,
    val3: 2333,
    val4: 7333,
    val5: 1333,
  },
  {
    name: 'Сен',
    val1: 12333,
    val2: 23133,
    val3: 2333,
    val4: 7333,
    val5: 1333,
  },
  {
    name: 'Окт',
    val1: 12333,
    val2: 23133,
    val3: 2333,
    val4: 7333,
    val5: 1333,
  },
  {
    name: 'Ноя',
    val1: 12333,
    val2: 23133,
    val3: 2333,
    val4: 7333,
    val5: 1333,
  },
  {
    name: 'Дек',
    val1: 12333,
    val2: 23133,
    val3: 2333,
    val4: 7333,
    val5: 1333,
  },
]

const Chart = () => {
  return ( 
    <ResponsiveContainer width="100%" height="100%">
    <LineChart width={704} height={254} data={products}>
      <YAxis />
      <XAxis dataKey="name"/>
      <Tooltip />
      <Line
        type="monotone" 
        dataKey="val1"
        stroke="rgba(115, 207, 122, 1)"
        fill="rgba(115, 207, 122, 1)"
      />
      <Line 
        type="monotone" 
        dataKey="val2"
        stroke="rgba(48, 199, 220, 1)"
        fill='rgba(48, 199, 220, 1)'
      />
    </LineChart>
    </ResponsiveContainer>
  )
}

export default Chart
