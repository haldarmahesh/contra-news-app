import { combineReducers } from "redux";

import newsItems from "../../presentation/state/news/news.reducer";
import headlines from "../../presentation/state/headlines/headlines.reducer";

const rootReducer = combineReducers({
  newsItems,
  headlines,
});

export default rootReducer;
