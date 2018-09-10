import React from "react"
// import { Link } from 'gatsby'
import styles from "./header.module.css"
// import iframe from 'gatsby-remark-responsive-iframe'
// import Container from "../components/container"
import backgroundImage from '../images/front-rendering.jpg'
import logo from '../images/calvano-logo.png'
console.log(styles)

export default () => (
  <header id="top" className={styles.header} style={{ backgroundImage:`url(${backgroundImage})`}}>
    <h1 className={styles.h1}>
      <span className={styles.h1Span}>Calvano Development Presents:</span>
      <hr className={styles.hr} />
      <span className={styles.h1Span}>23,000+ square feet of "Terra Bella"</span>
      <span className={styles.h1Span}>1075 Terra Bella Avenue, Mountain View, CA</span>
    </h1>
    <nav className={styles.nav}>
      <ul>
        <a href="#top"><li>1075 Terra Bella</li></a>
        <a href="#360-tour"><li>360 Tour</li></a>
        <li>Features</li>
        <li>Map & Directions</li>
        <li>Contact</li>
      </ul>
      <a href="https://www.calvano.com" target="_blank" rel="noreferrer noopener"><img src={logo} alt="" /></a>
    </nav>
  </header>
)
