import React from 'react'
import styles from './Sidebar.module.css'
import Image from 'next/image'

const navImages = [['/sidebar/H3.svg', '28'], ['/sidebar/H3 (1).svg', '32'], ['/sidebar/H3 (2).svg', '33'], ['/sidebar/H3 (3).svg', '42'], ['/sidebar/H3 (4).svg', '33'], ['/sidebar/H3 (5).svg', '36'], ['/sidebar/H3 (6).svg', '33']]

const Sidebar = () => {
  return (
<aside className={styles.sideWrapper}>
        <nav>
          <Image 
            className={styles.logo}
            src='/h2o.svg'
            width='64'
            height='38'
            alt='logo'
          />
          <ul>
            {navImages.map((item, index) => (
              <li key={index} className={index === 5 ? styles.active : ''}>
                <Image 
                  src={item[0]}
                  width={Number(item[1])}
                  height='44'
                  alt='navIcon'
                />
              </li>
            ))}
          </ul>
        </nav>
      </aside>
  )
}

export default Sidebar
