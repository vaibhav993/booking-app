import { getAirports, getFlights } from "../../services/flights";

export const SEARCH_FLIGHTS = "SEARCH_FLIGHTS";
export const SEARCH_FLIGHTS_SUCCESS = "SEARCH_FLIGHTS_SUCCESS";
export const GET_AIRPORTS = "GET_AIRPORTS";
export const GET_AIRPORTS_SUCCESS = "GET_AIRPORTS_SUCCESS";
export const GET_FAILURE = "GET_FAILURE";

const airports = () => {
    return {
        type: "GET_AIRPORTS"
    }
}

const airportsSuccess = (data) => {
    return {
        type: "GET_AIRPORTS_SUCCESS",
        data
    }
}

export const fetchAirports = () => {
    return (dispatch) => {
        dispatch(airports);
        return getAirports()
            .then(data => data.map(o => ({
                label: `(${o.code}) ${o.name}`,
                value: o.code
            })))
            .then(data => {
                return dispatch(airportsSuccess(data));
            })
            .catch(e => {
                return dispatch(failure(e));
            })
    }
}

const searchFlights = (formData) => {
    return {
        type: "SEARCH_FLIGHTS",
        data: formData
    }
}

const searchFlightsSuccess = (data) => {
    return {
        type: "SEARCH_FLIGHTS_SUCCESS",
        data
    }
}

const failure = (msg) => {
    return {
        type: "GET_FAILURE",
        errorMessage: msg
    }
}

export const fetchFlights = (formData) => {
    return (dispatch) => {
        dispatch(searchFlights(formData));
        return getFlights()
            .then(data => {
                return dispatch(searchFlightsSuccess(data));
            })
            .catch(e => {
                return dispatch(failure(e));
            })
    }
}