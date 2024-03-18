import React from 'react'
import styles from './Luxury.module.css'


const Luxury = () => {
  return (
    <div className={styles.Luxury}>
      <div className={styles.heading}>
        <h2>Luxury selection</h2>
        <div className={styles.text_bg}>
         <p>
          <span>select from the top Luxury vehicles to roll in style </span>
        </p> 
      </div>
    </div>

    <div className={styles.container}>
     <div className={styles.card}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlUK1_kQ8nbraVG91Uu1aYaO54lG9TSmQUDJ2gPSWft2y49gXIumDzmOdYgH1dZZBmprg&usqp=CAU'  alt='/' />
        <div className={styles.content}>
      <h3>Rolls Royce</h3>    

        </div> 
     </div>
    <div className={styles.card}>
        <img 
        src='https://encrypted-tbn0.gstatic.com/
        images?q=tbn:ANd9GcSErJtMDj4PdL9tsLp4FsVoqMhKSZ6rOo8LMA&usqp=CAU' alt='/' />
        <div className={styles.content}>
         <h3>Range over</h3>   
        </div> 
     </div>


     <div className={styles.card}>
        <img 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4mMEKNq51lR4N0uo9LLw7mxNbucILlprH8MgN9iyuK9igGxBA9fNec22WgaNsOcnCfyA&usqp=CAU' alt='/' />
        <div className={styles.content}>
         <h3>Porsche</h3>   
        </div> 
     </div>




          <div className={styles.card}>
        <img 
        src='https://themastercylinderblog.files.wordpress.com/2020/07/alfieri-1569609760.jpg' alt='/' />
        <div className={styles.content}>
          <h3>Maserati</h3>
        </div> 
          </div>
        </div>
    </div>
  )
}

export default Luxury