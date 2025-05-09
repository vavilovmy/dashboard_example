import React from 'react'
import styles from '../../components/Graph/Graph.module.css'
import Chart from '@/components/LineChart/Chart'

const page = () => {
  return (
    <div className={styles.chart} >
      <Chart />
    </div>
  )
}

export default page
