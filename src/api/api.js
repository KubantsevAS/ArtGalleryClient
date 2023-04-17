import axios from 'axios';

const getGalleryData = async () =>{ 
  const request = await axios
    .get('https://test-front.framework.team/paintings')
    .then((response) => {
      console.log(response);
      return {
        data: response.data
      }
    })
  return request;  
}

export default getGalleryData;
