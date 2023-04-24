import React, { useEffect } from 'react'
import { Range, Select, Input } from 'fwt-internship-uikit';
import { requestArtInfo } from '../../redux/reducer/ArtInfoReducer';
import styles from './FilterMenu.module.css'
import { useDispatch, useSelector } from 'react-redux';

export function FilterMenu() {
  
  const locations = useSelector (store => store.ArtInfoReducer.locations);
  const authors = useSelector (store => store.ArtInfoReducer.authors);
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(requestArtInfo());
  }, []);

  console.log(locations, authors);

  return (
    <div className={styles['menu']}>
      <Input />
      <Select 
        options={authors}
        value={"Author"}
        onChange={()=>{}}
      />
      <Select
        options={locations.map(item => ({
          ...item,
          name: item.location,
        }))}
        value={"Locations"}
        onChange={() => {}}
      />
      <Range onClose={() => {}}
      />
    </div>
  )
}
