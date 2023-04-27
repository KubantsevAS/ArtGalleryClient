import React from 'react';
import styles from './ArtItem.module.scss';

export function ArtItem(props) {
  return (
    <div className={styles['image-container']}>
      <img 
        src={"https://test-front.framework.team" + props.imageUrl} 
        alt={props.name} 
        className={styles['image']}
      />
    </div>
  )
}
