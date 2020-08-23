import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { NewsState } from "../../presentation/state/news/news.reducer";
export type StoreState = {
  newsItems: NewsState;
};
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
