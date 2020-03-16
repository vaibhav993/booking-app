import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "./rootReducer";

const logger = createLogger({});

export default function configureStore() {
    const middlewares = applyMiddleware(thunkMiddleware, logger);

    const store = createStore(rootReducer, middlewares);
    return store;
}