import React, { useEffect } from 'react';
import { Pagination } from 'fwt-internship-uikit';
import { useDispatch, useSelector } from 'react-redux';
import { requestPageItems, setCurrentPage } from '../../redux/reducer/Reducer';
import { ArtItem } from './ArtItem';
import styles from './Gallery.module.css';

export function Gallery() {

  const currentPage = useSelector ((store) => store.Reducer.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestPageItems(currentPage));
  }, [dispatch, currentPage]);

  const paintings = useSelector (store => store.Reducer.data);
  console.log(paintings);
  return (
    <div>
      <h1>Gallery</h1>
      {paintings && <div className={styles['image-container']}>
        {paintings.map(elem => <ArtItem key={elem.id} {...elem}/>)}
      </div>}

      <Pagination 
        currentPage={currentPage} 
        pagesAmount={5} 
        isDarkTheme={false} 
        onChange={(e) => dispatch(setCurrentPage(e))} 
      /> 
    </div>
  )
}
