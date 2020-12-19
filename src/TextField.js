import styles from './TextField.module.css'
import React from "react";

const TextField = ({children}) => {
  return (
    <div className={styles.textField}>
      <textarea>{children}</textarea>
    </div>
  )
}

export {
  TextField
}