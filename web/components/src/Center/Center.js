import React from 'react'
import styles from './Center.module.css'
export const Center = ({children}) => {
  return (
    <div className={styles.center}>{children}</div>
  )
}
