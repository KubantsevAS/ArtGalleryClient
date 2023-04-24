import { getFiltredItems, getGalleryData } from "../../api/api";

const LOAD_GALLERY = "LOAD_GALLERY";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_FILTERS = "SET_FILTERS";

const initialState = {
  data: [],
  currentPage: 1,
}

function GalleryReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_GALLERY:
      return {
        ...state,
        data: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }
    case SET_FILTERS: 
      return {
        ...state,
        data: action.payload,
      }
    default: 
      return state;
  }
}

// ACTION CREATORS
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: page})

export const setGalleryItems = (items) => ({type: LOAD_GALLERY, payload: items});

export const setFilterItems = (items) => ({type: SET_FILTERS, payload: items})

// THUNK CREATORS
export const requestPageItems = (page) => {
  return async (dispatch) => { 
    dispatch(setCurrentPage(page))
    let data = await getGalleryData(page);
    dispatch(setGalleryItems(data.data));
  }
}

export const requestFiltredItems = (obj) => {
  return async (dispatch) => {
    let data = await getFiltredItems(obj);
    dispatch(setFilterItems(data.data));
  }
}

export default GalleryReducer;
