import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../redux/reducer";

const initialState = {};

const middleware = [applyMiddleware(thunk)];

export default createStore(rootReducer, initialState, compose(...middleware));
