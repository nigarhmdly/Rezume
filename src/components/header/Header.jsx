import React from 'react'
import styles from './Header.module.scss'





const Header = () => {
    return (
      <>
      <section>
      <div className={styles.black}>
      <div className={styles.Header}>
        <nav>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/">PORTFOLIO</a></li>
            <li><a href="./cart">CART</a></li>
            <li><a href="./wishlist">WISH</a></li>
            <li><a href="/">CONTACT</a></li>
          </ul>
        </nav>
      </div>


      <div className={styles.text}>
        <nav>
          <h1>Hello, I'm <br /><strong>Charles Anderson</strong></h1>
          <p>AND THIS IS MY REZUME</p>
        </nav>
      </div>
      </div>
      </section>
      </>
    )
  };
  
  export default Header;