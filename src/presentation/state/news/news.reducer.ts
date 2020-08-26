import {
  NEWS_LIST_LOAD_REQUEST,
  NEWS_LIST_LOAD_SUCCESS,
  NEWS_LIST_LOAD_FAILURE,
} from "./news.types";
import { NewsItemEntity } from "../../../domain/entities/newsItemEntity";

export type NewsState = {
  loading: boolean;
  newsItems: NewsItemEntity[];
};
export const initialNewsState: NewsState = {
  loading: false,
  newsItems: [],
};

function newsItems(state = initialNewsState, action: any = null) {
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
