import React, { memo, useState, useCallback, useEffect } from "react";

import "./index.scss";

const strToTime = (str) =>  parseInt(str.split(":")[0]);

const FlightResultsComponent = memo(({ availableFlights, fetchFlights, location }) => {
    const [ flights, updateFlights ] = useState(availableFlights);
    const [ bookingData, updateBookingData ] = useState({});
    const qsData = new URLSearchParams(location.search);

    useEffect(() => {
        const data = {
            departure: qsData.get("departure"),
            destination: qsData.get("destination"),
            departdate: qsData.get("departdate"),
            returndate: qsData.get("returndate"),
            travelers: qsData.get("travelers"),
            class: qsData.get("class")
        }
        updateBookingData(data) 
        fetchFlights(data);
    }, []);

    useEffect(() => {
        updateFlights(availableFlights);
    }, [availableFlights])

    const sortFlights = useCallback((sortby) => {
        let updatedList = [];
        switch(sortby) {
            case "EARLY":
                updatedList = availableFlights.sort((a,b) => strToTime(a.deptTime) - strToTime(b.deptTime));
                break;
            case "DURATION":
                updatedList = availableFlights.sort((a,b) => a.duration - b.duration);
                break;
            case "PRICE":
                updatedList = availableFlights.sort((a,b) => a.price - b.price);
                break;
            default:
                updatedList = availableFlights;
        }
        updateFlights([...updatedList])
    }, [ availableFlights])

    return (
        <div className="flights-list  w100">
            <ul className="filter-nav flex flex-row w100">
                <li aria-label="sort by earliest" onClick={() => sortFlights("EARLY")}>Earliest</li>
                <li aria-label="sort by fastest" onClick={() => sortFlights("DURATION")}>Fastest</li>
                <li aria-label="sort by cheapest" onClick={() => sortFlights("PRICE")}>Cheapest</li>
            </ul>
            <ul className="flex flex-col w100">
                {
                    flights.map(({ logo_url, company, deptTime, arrivalTime, price, duration, via, id }) => {
                        return (
                            <li className={"flights-list-item items-center shadow-2 pv2"} key={id}>
                                <div className="flex flex-row justify-between company-details">
                                    <div className="flex">
                                        <img
                                            className="logo"
                                            src={logo_url}
                                            alt={`${company} Logo`}
                                        />
                                        <span className="c_name">{company}</span>
                                    </div>
                                    <div className="fl">
                                        <span aria-label="price" className="price">{`₹ ${price}`}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <div className="fl">
                                        <div aria-label="departure time" className="dept-time">{deptTime}</div>
                                        <p aria-label="departure city" className="dept-city">{bookingData.departure}</p>
                                    </div>
                                    <div className="fl middle">
                                        <div aria-label="duration" className="duration">{`${parseInt(duration/60)}hr ${(130%60)}m`}</div>
                                        <p className="separator"/>
                                        <div aria-label="route" className="via">{!!via ? `1 Stop via ${via}` : "Non Stop"}</div>
                                    </div>
                                    <div className="fl">
                                        <div aria-label="arrival time" className="dept-time">{arrivalTime}</div>
                                        <p aria-label="arrival city" className="dept-city">{bookingData.destination}</p>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
});

export default FlightResultsComponent;