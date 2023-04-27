import React, { useEffect, useState } from 'react'
import { Range, Select, Input} from 'fwt-internship-uikit';
import { requestArtInfo } from '../../redux/reducer/ArtInfoReducer';
import styles from './FilterMenu.module.scss';
import '../../styles';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setFilterItems } from '../../redux/reducer/GalleryReducer';

export function FilterMenu() {
  
  const locations = useSelector (store => store.ArtInfoReducer.locations);
  const authors = useSelector (store => store.ArtInfoReducer.authors);
  const filter = useSelector (store => store.GalleryReducer.filter);
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(requestArtInfo());
  }, [dispatch]);

  const [name, setName] = useState(filter.name);
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');

  const handleInputName = (e) => {
    setName(e.target.value);
    dispatch(setFilterItems({...filter, name: e.target.value}));
    dispatch(setCurrentPage(1));
  }

  const handleAuthor = (e) => {
    setAuthor(e);
    const newId = authors.reduce((objKey, elem) => elem.name === objKey ? elem.id : objKey, e);
    dispatch(setFilterItems({...filter, authorId: newId}));
    dispatch(setCurrentPage(1));
  }

  const handleLocation = (e) => {
    setLocation(e);
    const newId = locations.reduce((objKey, elem) => elem.location === objKey ? elem.id : objKey, e);
    dispatch(setFilterItems({...filter, locationId: newId}));
    dispatch(setCurrentPage(1));
  }

  const clickTest = () => {
    dispatch(setFilterItems({name: '', locationId: '', authorId: ''}));
    setAuthor('');
    setLocation('');
  }

  return (
    <div>
      <button onClick={() => clickTest()}>PRESS</button>
    <div className={styles['menu']}>
      
      <Input 
        value={name}
        onChange={handleInputName}
        placeholder='Name'
        isDarkTheme={false}
      />
      <Select
        options={authors}
        value={author || "Author"}
        onChange={handleAuthor}
        className={'Select'}
      />
      <Select
        options={locations.map(item => ({
          ...item,
          name: item.location,
        }))}
        value={location || "Locations"}
        onChange={handleLocation}
        className={'Select'}
      />
      <Range onClose={() => {}} value="Created">
        <input className={styles['range__input']} placeholder='from'></input>
        <span  className={styles['dash']}/>
        <input className={styles['range__input']} placeholder='before'></input>
      </Range>
    </div>
    </div>
  )
}
