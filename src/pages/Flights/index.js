import { connect } from "react-redux";

import FlightsComponent from "./FlightsComponent";
import { fetchAirports, fetchFlights } from "../../store/flights/actions";

const mapStateToProps = (state) => ({
    airports: state.flights.airports
});

export default connect(mapStateToProps, {
    fetchAirports,
    fetchFlights
})(FlightsComponent);