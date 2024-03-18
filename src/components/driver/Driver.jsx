import React from 'react'
import styles from './Driver.module.css'


const Driver = () => {
  return (
    <div className={styles.driver}>
      <div className={styles.left}>
         <img src='drive.pgn.jpg' alt='/' />
      </div>

      <div>
        <h2>
        Find your perfect car <span>to try before you buy</span> {''}
        </h2>
        <p>
          make sure your future wheels work well with your lifestyle by  taking
           your time in the driver's seat.
         </p>
        <button>Browser Cars</button>
      </div>
      </div>
    
  )
}

export default Driver