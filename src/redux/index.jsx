import { combineReducers, createStore } from "redux";
import ActiveSidebar from "./reducers/ActiveSidebar";

const reducers = combineReducers({
  sidebar:ActiveSidebar
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
