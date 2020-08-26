import { Dispatch } from "redux";
import NewsListRepositoryImpl from "../../../data/repository/newListRepositoryImpl";
import { NewsItemEntity } from "../../../domain/entities/newsItemEntity";
import {
  HEADLINES_LOAD_REQUEST,
  HEADLINES_LOAD_SUCCESS,
  HEADLINES_LOAD_FAILURE,
} from "./headlines.types";
import { GetHeadlinesUseCase } from "../../../domain/usecases/getHeadlinesUseCase";

export const getHeadlines = async (dispatch: Dispatch) => {
  console.log(">> 11", dispatch);
  dispatch(fetchHeadlinesPending());

  try {
    const newsListRepositoryImpl = new NewsListRepositoryImpl();
    const headlinesUsecase = new GetHeadlinesUseCase(newsListRepositoryImpl);

    const newItems = await headlinesUsecase.getHeadlines();
    console.log("HEA", newItems);
    dispatch(fetchHeadlinesSuccess(newItems));
  } catch (error) {
    console.log("err", error);
    dispatch(fetchHeadlinesError(error));
  }
};

export function fetchHeadlinesPending() {
  return { type: HEADLINES_LOAD_REQUEST };
}
export function fetchHeadlinesSuccess(newItems: NewsItemEntity[]) {
  return { type: HEADLINES_LOAD_SUCCESS, payload: newItems };
}

export function fetchHeadlinesError(error: Error) {
  return { type: HEADLINES_LOAD_FAILURE, error };
}
