import { useEffect } from 'react'
import { requestArtInfo } from '../../redux/reducer/ArtInfoReducer';
import styles from './FilterMenu.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setFilterItems } from '../../redux/reducer/GalleryReducer';
import { InputField, RangeField, SelectField } from './FilterFields';

export function FilterMenu() {
  
  const locations = useSelector (store => store.ArtInfoReducer.locations);
  const authors = useSelector (store => store.ArtInfoReducer.authors);
  const filter = useSelector (store => store.GalleryReducer.filter);
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(requestArtInfo());
  }, [dispatch]);

  return (
    <div className={styles['menu']}>

      <InputField 
        dispatch={dispatch}
        setFilterItems={setFilterItems}
        setCurrentPage={setCurrentPage}
        filter={filter}
        isDarkTheme={false}
      />

      <SelectField
        options={authors}
        dispatch={dispatch}
        setFilterItems={setFilterItems}
        setCurrentPage={setCurrentPage}
        filter={filter}
        isDarkTheme={false}
        placeholder={'Author'}
      />

      <SelectField
        options={locations.map(item => ({
          ...item,
          name: item.location,
        }))}
        dispatch={dispatch}
        setFilterItems={setFilterItems}
        setCurrentPage={setCurrentPage}
        filter={filter} 
        isDarkTheme={false}
        placeholder={'Location'}
      />

      <RangeField 
        dispatch={dispatch}
        setFilterItems={setFilterItems}
        setCurrentPage={setCurrentPage}
        filter={filter}
        isDarkTheme={false}
      />
    </div>
  )
}
