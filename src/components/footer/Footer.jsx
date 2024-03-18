import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
          <img src='logo.png'   alt='/'  />
          <button>Search A Car</button>
      </div>

    </div>
  )
}

export default Footer