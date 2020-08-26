import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { initialNewsState } from "../../presentation/state/news/news.reducer";
import { initialHeadlinesNewsState } from "../../presentation/state/headlines/headlines.reducer";
export type StoreState = {
  newsItems: typeof initialNewsState;
  headlines: typeof initialHeadlinesNewsState;
};
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
