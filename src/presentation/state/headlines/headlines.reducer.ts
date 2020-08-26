import { NewsItemEntity } from "../../../domain/entities/newsItemEntity";
import {
  HEADLINES_LOAD_REQUEST,
  HEADLINES_LOAD_FAILURE,
  HEADLINES_LOAD_SUCCESS,
} from "./headlines.types";

export type HeadlinesState = {
  loading: boolean;
  newsItems: NewsItemEntity[];
};

export const initialHeadlinesNewsState: HeadlinesState = {
  loading: false,
  newsItems: [],
};

function headlines(state = initialHeadlinesNewsState, action: any = null) {
  switch (action.type) {
    case HEADLINES_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case HEADLINES_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case HEADLINES_LOAD_SUCCESS:
      return {
        ...state,
        newsItems: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default headlines;
