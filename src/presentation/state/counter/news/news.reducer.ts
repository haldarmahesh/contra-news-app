import {
  NEWS_LIST_LOAD_REQUEST,
  NEWS_LIST_LOAD_SUCCESS,
  NEWS_LIST_LOAD_FAILURE,
} from "./news.types";

const initialState = {
  loading: false,
  items: [],
};

function newsItems(state = initialState, action: any = null) {
  switch (action.type) {
    case NEWS_LIST_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case NEWS_LIST_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case NEWS_LIST_LOAD_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default newsItems;
