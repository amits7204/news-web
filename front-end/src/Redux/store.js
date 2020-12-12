import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../Redux/reducer";
const rootReducer = combineReducers({ data: reducer });

let composeEnhancers = compose;
const logger = (store) => (next) => (action) => {
  const val = next(action);
  console.log(store.getState());
  return val;
};
if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}
const enhancer = composeEnhancers(applyMiddleware(thunk, logger));
const store = createStore(rootReducer, enhancer);

export { store };
