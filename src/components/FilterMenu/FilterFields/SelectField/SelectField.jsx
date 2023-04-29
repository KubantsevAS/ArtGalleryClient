import { Select } from 'fwt-internship-uikit';
import { useState } from 'react';
import { cross, crossDark } from '../../../../common/Cross';
import styles from './SelectField.module.scss';

export function SelectField({ options, setCurrentPage, setFilterItems, dispatch, filter, placeholder }) {

  const [currentValue, setCurrentValue] = useState('');

  const handleChange = (e) => {
    setCurrentValue(e);
    const newId = options.reduce((objKey, elem) => elem.name === objKey ? elem.id : objKey, e);
    if (options[0]?.location) {
      dispatch(setFilterItems({...filter, locationId: newId}));
    } else {
      dispatch(setFilterItems({...filter, authorId: newId}));
    }
    dispatch(setCurrentPage(1));
  }

  const clearValue = () => {
    setCurrentValue('');
    if (options[0]?.location) {
      dispatch(setFilterItems({...filter, locationId: ''}));
    } else {
      dispatch(setFilterItems({...filter, authorId: ''}));
    }
  }

  return (
    <div className={styles['field-wrapper']}>
      <Select
          options={options}
          value={currentValue || placeholder}
          onChange={handleChange}
          isDarkTheme={false}
      />
      {currentValue &&
        <button onClick={clearValue} className={styles['clear-button']}>
          {cross}
        </button>
      }
    </div>
  )
}
