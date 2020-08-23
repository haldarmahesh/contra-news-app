import { combineReducers } from "redux";

import counterReducer from "../../presentation/state/counter/counter.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
