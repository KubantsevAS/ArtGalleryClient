import React, { useEffect } from 'react';
import getGalleryData from '../../api/api';

export function Gallery() {

  useEffect(() => {
    getGalleryData();
  }, []);
  return (
    <div>Gallery</div>
  )
}
