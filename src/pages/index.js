import React, { Fragment } from "react"
import Header from './header'
import Container from '../components/container'
import styles from './index.module.css'

export default () => (
  <Fragment>
    <Header />
    <Container>
      <h2 id="360-tour" className={styles.h2}>360 Tour</h2>
      <p>Click and drag to look around. To zoom, use the scroll wheel on a physical mouse or (in Chrome) pinch to zoom on a touchpad.</p>
      <iframe title="Outside Front" width="600" height="600" src="outside-front.html" frameBorder="0" allowFullScreen></iframe>
    </Container>
  </Fragment>
)
