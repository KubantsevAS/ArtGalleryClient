import React from 'react'
import { Range, Select, Input } from 'fwt-internship-uikit';
import styles from './FilterMenu.module.css'

export function FilterMenu() {
  return (
    <div className={styles['menu']}>
      <Input />
      <Select />
      <Select />
      <Range onClose={() => {console.log('click')}}/>
    </div>
  )
}
