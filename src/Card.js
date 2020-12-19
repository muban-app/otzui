import styles from './Card.module.css'
import cx from 'classnames'
import React from "react";

const Card = ({className, children}) => {
  return (
    <div className={cx(styles.card, className)}>
      {children}
    </div>
  )
}

export {
  Card
}