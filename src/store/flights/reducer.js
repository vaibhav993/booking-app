import {
    SEARCH_FLIGHTS,
    SEARCH_FLIGHTS_SUCCESS,
    GET_AIRPORTS,
    GET_AIRPORTS_SUCCESS,
    GET_FAILURE
} from "./actions";


const initialState = {
    isLoading: false,
    status: "INIT", // INIT|SUCCESS|ERROR,
    airports: [],
    availableFlights: [],
    bookingData: {}
}

const flightsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_AIRPORTS:
            return {
                ...state,
                isLoading: true
            }
        case GET_AIRPORTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                airports: action.data,
                status: "SUCCESS"
            }
        case SEARCH_FLIGHTS:
            return {
                ...state,
                isLoading: true,
                bookingData: action.data
            }
        case SEARCH_FLIGHTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                availableFlights: action.data,
                status: "SUCCESS"
            }
        case GET_FAILURE:
            return {
                ...state,
                isLoading: false,
                status: "ERROR"
            }
        default: 
            return state;
    }
}

export default flightsReducer;