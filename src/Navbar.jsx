import React, {useState} from 'react'
import styles from './Navbar.module.css'
import {AiOutlineMenu, AiOutlineClose,
 AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'



const Navbar = () => {
const [nav, setNav] =useState(false)

  return (
    <header className={styles.navbar}>
        <img src="drive.dark.jpg" alt="" />
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') :
         [styles.menu]} >
          <li>
            <a href='/'>learn more</a>
          </li>
          <li>
            <a href='/'>log in </a>
          </li>
          <li>
            <a href='/'>sign up</a>
          </li>
          <li>
              <AiOutlineSearch size={25} style={{marginTop: '4px'}}/>
          </li>
          <li>
              <AiOutlineUser size={25} style={{marginTop: '4px'}}/>
          </li>
        </ul>
      </nav>
      <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
        {nav ?  <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} /> }     
            
      </div>
    </header>
  )
}

export default Navbar