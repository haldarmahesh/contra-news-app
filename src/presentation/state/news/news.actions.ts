import {
  NEWS_LIST_LOAD_REQUEST,
  NEWS_LIST_LOAD_SUCCESS,
  NEWS_LIST_LOAD_FAILURE,
} from "./news.types";
import { newsUsecase } from "../../../domain/usecases/getNewsUseCase";
import { Dispatch } from "redux";

export const getNewsList = async (dispatch: Dispatch) => {
  dispatch({ type: NEWS_LIST_LOAD_REQUEST });

  try {
    const newItems = await newsUsecase.getNewsUseCase();
    dispatch({ type: NEWS_LIST_LOAD_SUCCESS, payload: newItems });
  } catch (error) {
    dispatch({ type: NEWS_LIST_LOAD_FAILURE, error });
  }
};
