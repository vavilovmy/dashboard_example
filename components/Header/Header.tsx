import React from 'react'
import styles from './Header.module.css'
import NextButton from '../UI/NavButtons/NextButton'
import PrevButton from '../UI/NavButtons/PrevButton'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.reports}>
        <PrevButton />
        <NextButton />
        <div className={styles.reportsBlock}>
          <a>Свод данных по сотрудникам</a>
          <a>Сводный отчет внутри компании</a>
          <a>Сводный отчет по сделкам</a>
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
