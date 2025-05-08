"use client"

import React, { useState } from 'react'
import styles from './Header.module.css'
import NextButton from '../UI/NavButtons/NextButton'
import PrevButton from '../UI/NavButtons/PrevButton'
import Image from 'next/image'

const Header = () => {

  const [button, setButton] = useState('prev')

  return (
    <header className={styles.header}>
      <nav className={styles.reports}>
        <PrevButton button={button} setButton={setButton}/>
        <NextButton button={button} setButton={setButton}/>
        <div className={styles.reportsBlock}>
          <a style={button === 'next' ? {transform: 'translateX(-35px)'} : undefined} className={styles.navItem}>Свод данных по сотрудникам</a>
          <a style={button === 'next' ? {transform: 'translateX(-35px)'} : undefined} className={styles.navItem_active}>Сводный отчет внутри компании</a>
          <a style={button === 'next' ? {transform: 'translateX(-35px)'} : undefined} className={styles.navItem}>Сводный отчет по сделкам</a>
        </div>
      </nav>
      <div className={styles.profile}>
        <Image 
          src='/profile.png'
          width='56'
          height='56'
          alt='profilePic'
        />
        <div>
          <p className={styles.employee}>Kristina 🐰</p>
          <p className={styles.employeeRole}>менеджер продаж</p>
        </div>
        <Image 
            className={styles.arrow}
            src='/BottomArrow.svg'
            width='16'
            height='8'
            alt='arrow'
        />
      </div>
    </header>
  )
}

export default Header
