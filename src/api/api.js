import axios from 'axios';

export const BASE_URL = 'https://test-front.framework.team/paintings/';
export const AUTHORS_URL = 'https://test-front.framework.team/authors/';
export const LOCATIONS_URL = 'https://test-front.framework.team/locations/';

export const getGalleryData = async (currentPage) => { 
  const request = await axios
    .get(`${BASE_URL}?_page=${currentPage}&_limit=12`)
    .then(response => {
      return {
        data: response.data
      }
    })
  return request;  
}

export const getArtInfo = async () => {
  const authors = await axios
    .get(`${AUTHORS_URL}`)
    .then(response => {
      return {
        data: response.data
      }
    })
  const locations = await axios
    .get(`${LOCATIONS_URL}`)
    .then(response  => {
      return {
        data: response.data
      }
    })
  return ({authors, locations});
}

export const getFiltredItems = async ({name, authorId}) => {
  const request = await axios
    .get(`${BASE_URL}?
      ${name ? '&q=' + name : ''}
      ${authorId ? '&authorId=' + authorId : ''}
      `)
    .then(response => {
      return {
        data: response.data
      }
    })
    console.log(request)
    return request;
}
// , authorId, locationId, rangeStart, rangeEnd
      // ${locationId && '&locationId=' + locationId}
      // ${rangeStart && '&created_gte=' + rangeStart}
      // ${rangeEnd && '&created_lte=' + rangeEnd}