import React, { useEffect } from 'react';
import { Pagination } from 'fwt-internship-uikit';
import { useDispatch, useSelector } from 'react-redux';
import { requestPageItems, setCurrentPage } from '../../redux/reducer/GalleryReducer';
import { ArtItem } from './ArtItem';
import '../../styles';
import styles from './Gallery.module.scss';

export function Gallery() {

  const currentPage = useSelector ((store) => store.GalleryReducer.currentPage);
  const paintings = useSelector (store => store.GalleryReducer.data);
  const filter = useSelector (store => store.GalleryReducer.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestPageItems({currentPage, name: filter.name, authorId: filter.authorId, locationId: filter.locationId}));
  }, [currentPage, filter.name, filter.authorId, filter.locationId, dispatch]);

  console.log(filter);
  // console.log(paintings);
  return (
    <div>
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
