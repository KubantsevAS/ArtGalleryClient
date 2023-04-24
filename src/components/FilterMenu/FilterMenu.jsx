import React, { useEffect, useState } from 'react'
import { Range, Select, Input } from 'fwt-internship-uikit';
import { requestArtInfo } from '../../redux/reducer/ArtInfoReducer';
import styles from './FilterMenu.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { requestFiltredItems } from '../../redux/reducer/GalleryReducer';

export function FilterMenu() {
  
  const locations = useSelector (store => store.ArtInfoReducer.locations);
  const authors = useSelector (store => store.ArtInfoReducer.authors);
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(requestArtInfo());
  }, []);

  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [authId, setAuthId] = useState();
  const [location, setLocation] = useState('');

  const handleInputName = (e) => {
    setName(e.target.value);
  }
  
  const sendObj = {
    name: name,
    authorId: authId
  }
  
  const handleAuthor = (e) => {
    setAuthor(e);
    setAuthId(authors.reduce((objKey, elem) => elem.name === objKey ? elem.id : objKey, e));
    dispatch(requestFiltredItems(sendObj))
  }

  const handleLocation = (e) => {
    setLocation(e);
  }

  const clickTest = (obj) => {
    dispatch(requestFiltredItems(obj));
  }

  return (
    <div className={styles['menu']}>
      <button onClick={() => clickTest({name: name, authorId: authId})}>PRESS</button>
      <Input 
        value={name}
        onChange={handleInputName}
      />
      <Select 
        options={authors}
        value={author || "Author"}
        onChange={handleAuthor}
      />
      <Select
        options={locations.map(item => ({
          ...item,
          name: item.location,
        }))}
        value={location || "Locations"}
        onChange={handleLocation}
      />
      <Range onClose={() => {}}
      />
    </div>
  )
}
