import React, { useContext } from 'react'
import styles from "./Switch.module.scss";
import { ThemeContext } from '../../components/providers/ThemeProvider';
const Switch = () => {
  // const classes = styles.slider + ' ' + styles.round;

  const {dark,setDark} =useContext(ThemeContext)
  return (

    <div >
            <label className={styles.switch}>
              <input type="checkbox" name="switchTheme" onClick={()=>{setDark(!dark)}}/>
              <div className={styles.slider + ' ' + styles.round}></div>
              <span>Mode</span>
            </label>
    </div>
  )
}

export default Switch
