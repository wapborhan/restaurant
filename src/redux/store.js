import { createStore, applyMiddleware } from "redux";
import { Reducer } from "./reducer";
import logger from "redux-logger";

const myStore = createStore(Reducer, applyMiddleware(logger));

export default myStore;
