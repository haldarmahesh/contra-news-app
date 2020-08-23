import {
  NEWS_LIST_LOAD_REQUEST,
  NEWS_LIST_LOAD_SUCCESS,
  NEWS_LIST_LOAD_FAILURE,
} from "./news.types";
import { getNewsUseCase } from "../../../../domain/usecases/getNewsUseCase";

export const getNewsList = async (dispatch: any) => {
  dispatch({ type: NEWS_LIST_LOAD_REQUEST });

  try {
    const newItems = await getNewsUseCase();
    dispatch({ type: NEWS_LIST_LOAD_SUCCESS, payload: newItems });
  } catch (error) {
    dispatch({ type: NEWS_LIST_LOAD_FAILURE, error });
  }
};
