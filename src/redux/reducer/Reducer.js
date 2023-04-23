import getGalleryData from "../../api/api";

const LOAD_GALLERY = "LOAD_GALLERY";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const initialState = {
  data: [],
  currentPage: 1,
}

function Reducer(state = initialState, action) {
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
    default: 
      return state;
  }
}

// ACTION CREATORS
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: page})

export const setGalleryItems = (items) => ({type: LOAD_GALLERY, payload: items});

// THUNK CREATORS

export const requestPageItems = (page) => {
  return async (dispatch) => { 
    dispatch(setCurrentPage(page))
    let data = await getGalleryData(page);
    dispatch(setGalleryItems(data.data));
  }
}

export default Reducer;