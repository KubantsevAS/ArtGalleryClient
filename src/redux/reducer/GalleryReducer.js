import { getGalleryData } from "../../api/api";

const LOAD_GALLERY = "LOAD_GALLERY";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_FILTERS = "SET_FILTERS";
const SET_FETCHING = "SET_FETCHING";

const initialState = {
  data: [],
  filter: {
    name: "",
    authorId: "",
    locationId: "",
    rangeStart: "",
    rangeEnd: "",
  },
  currentPage: 1,
  isFetching: false,
};

function GalleryReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GALLERY:
      return {
        ...state,
        data: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_FILTERS:
      return {
        ...state,
        filter: { ...state.filter, ...action.payload },
      };
    case SET_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    default:
      return state;
  }
}

// ACTION CREATORS
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setGalleryItems = (items) => ({
  type: LOAD_GALLERY,
  payload: items,
});

export const setFilterItems = (items) => ({
  type: SET_FILTERS,
  payload: items,
});

export const setFetching = (status) => ({
  type: SET_FETCHING,
  payload: status,
});

// THUNK CREATOR
export const requestPageItems = (obj) => {
  return async (dispatch) => {
    dispatch(setFetching(true));
    const data = await getGalleryData(obj);
    dispatch(setGalleryItems(data.data));
    dispatch(setFilterItems(data.filter));
    dispatch(setFetching(false));
  };
};

export default GalleryReducer;
