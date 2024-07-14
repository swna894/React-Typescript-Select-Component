import React, { useState } from 'react'
import styles from './slider.module.css';

const Slider = () => {
  const [isChecked, setChecked] = useState(false)

  const handleCheckbox = () => {
    setChecked(!isChecked)
  }
  return (
    <div>
      <h1>Toggle Button | On/Off Switdh</h1>
      <div>
        {isChecked ? <h2>It was clieked</h2> : <h2>Inital State</h2>}
      </div>
      <div id="toggle-btn">
        <input type="checkbox" id="checkbox-input" className={styles['checkbox-input']} onChange={handleCheckbox} />
        <label htmlFor="checkbox-input" className={styles['round-slider-container']}>
          <div>ALL</div>
          <div>ONE</div>
          <div className={styles['round-slider']}></div>
        </label>
      </div>
    </div>
  )
}

export default Slider