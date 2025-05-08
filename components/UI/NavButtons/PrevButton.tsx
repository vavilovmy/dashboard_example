import React from 'react'
import styles from './NavButton.module.css'

const PrevButton = ({button, setButton}: {button: string; setButton: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <button className={styles.prevButton} onClick={() => {setButton('prev')}} disabled={button === 'prev' ? true : false}>
      
    </button>
  )
}

export default PrevButton