import {
  NEWS_LIST_LOAD_REQUEST,
  NEWS_LIST_LOAD_SUCCESS,
  NEWS_LIST_LOAD_FAILURE,
} from "./news.types";
import { NewsItem } from "../../../domain/entities/newsItem";

export type NewsState = {
  loading: boolean;
  newsItems: NewsItem[];
};
const initialState: NewsState = {
  loading: false,
  newsItems: [],
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
        newsItems: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default newsItems;
