import styles from './Button.module.css'
import cx from 'classnames'
import React from "react";

const Button = ({role, text, onClick, children, control = false}) => {
  const handleOnClick = () => {
    if (onClick) onClick()
  }

  const baseClassName = cx(styles.button, {
    'default': styles.default,
    'primary': styles.primary,
    'destructive': styles.destructive,
  }[role || 'default']);

  const classNameControl = cx(baseClassName, control && styles.control)

  return (
    <div onClick={handleOnClick} className={classNameControl}>
      {text}
      {children}
    </div>
  )
}

export {
  Button
}