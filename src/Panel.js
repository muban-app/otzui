import styles from './Panel.module.css'
import React from "react";

const Panel = ({children}) => {
  return (
    <div className={styles.panel}>
      {children}
    </div>
  )
}

export {
  Panel
}