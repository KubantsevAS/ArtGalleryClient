import axios from 'axios';

export const BASE_URL = 'https://test-front.framework.team/paintings'

const getGalleryData = async (currentPage) => { 
  const request = await axios
    .get(`${BASE_URL}?_page=${currentPage}&_limit=12`)
    .then((response) => {
      console.log(response);
      return {
        data: response.data
      }
    })
  return request;  
}

export default getGalleryData;
