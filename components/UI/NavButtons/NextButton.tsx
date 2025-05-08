import React from 'react'
import styles from './NavButton.module.css'

const NextButton = ({button, setButton}: {button: string; setButton: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <button className={styles.nextButton} onClick={() => {setButton('next')}} disabled={button === 'next' ? true : false}>
      
    </button>
  )
}

export default NextButton
