import API from "../../utils/API";

export const getAirports = () => {
    return API.get("./getAirports.json");
}

export const getFlights = () => {
    return API.get("./getFlights.json");
}