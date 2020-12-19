import styles from './Banner.module.css'
import cx from 'classnames'
import React from "react";

const BannerWithIcon = ({role, children}) => {
  const icon = (() => {
    switch (role) {
      case 'destructive': return 'ERR'
      case 'informational': return 'INFO'
      case 'warning': return 'WARN'
      default: return ''
    }
  })()

  return (
    <Banner className={styles.bannerWithIcon} role={role}>
      <div className={styles.iconContainer}>
        {icon}
      </div>
      <div className={styles.bannerContent}>
        {children}
      </div>
    </Banner>
  )
}

const Banner = ({role, children, className}) => {
  let classes = cx(styles.banner, {
    'primary': styles.primary,
    'destructive': styles.destructive,
    'default': styles.default,
    'warning': styles.warn,
    'subtle': styles.subtle
  }[role || 'default']);

  return (
    <div className={cx(classes, className)}>
      {children}
    </div>
  )
}

export {
  Banner,
  BannerWithIcon
}