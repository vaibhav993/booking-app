import { combineReducers } from "redux";

import flightsReducer from "./flights/reducer";

export default combineReducers({
    flights: flightsReducer
});
