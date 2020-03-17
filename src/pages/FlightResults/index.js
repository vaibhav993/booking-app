import { connect } from "react-redux";

import FlightResultsComponent from "./FlightResultsComponent";
import { fetchFlights } from "../../store/flights/actions";

const mapStateToProps = (state) => ({
    availableFlights: state.flights.availableFlights,
    //bookingData: state.flights.bookingData
});

export default connect(mapStateToProps, {
    fetchFlights
})(FlightResultsComponent);