import {
  NEWS_LIST_LOAD_REQUEST,
  NEWS_LIST_LOAD_SUCCESS,
  NEWS_LIST_LOAD_FAILURE,
} from "./news.types";
import { Dispatch } from "redux";
import { NewsUsecase } from "../../../domain/usecases/getNewsUseCase";
import NewsListRepositoryImpl from "../../../data/repository/newListRepositoryImpl";
import { NewsItemEntity } from "../../../domain/entities/newsItemEntity";
type IAction = {
  type: string;
  payload?: any;
};
export const getNewsList = async (dispatch: Dispatch, seachQuery: string) => {
  dispatch(fetchNewsListPending());

  try {
    const newsListRepositoryImpl = new NewsListRepositoryImpl();
    const newsUsecase = new NewsUsecase(newsListRepositoryImpl);

    const newItems = await newsUsecase.getNewsUseCase(seachQuery);
    dispatch(fetchNewsListSuccess(newItems));
  } catch (error) {
    dispatch(fetchNewsListError(error));
  }
};

export function fetchNewsListPending() {
  return { type: NEWS_LIST_LOAD_REQUEST };
}
export function fetchNewsListSuccess(newItems: NewsItemEntity[]) {
  return { type: NEWS_LIST_LOAD_SUCCESS, payload: newItems };
}

export function fetchNewsListError(error: Error) {
  return { type: NEWS_LIST_LOAD_FAILURE, error };
}
