import React from 'react';
import { Logo, ThemeIcon } from '../../common';
import styles from './Header.module.scss';

export function Header() {
  return (
    <div className={styles['header']}>
      <Logo />
      <ThemeIcon />
    </div>
  )
}
