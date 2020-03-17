import React, { memo, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import useForm from "../../hooks/useForm";
import "./index.scss"

const travellersData = [
    {
        label: "1 Adult",
        value: "1adult"
    },
    {
        label: "2 Adults",
        value: "2adults"
    },
    {
        label: "3 Adults",
        value: "3adults"
    }
];

const travelClassData = [
    {
        label: "Economy",
        value: "economy"
    },
    {
        label: "Business",
        value: "business"
    },
    {
        label: "First Class",
        value: "firstclass"
    }
]

const FlightsComponent = memo(({ airports, fetchAirports }) => {
    const history = useHistory();
    const { state, onChange } = useForm({
        departure: "default",
        destination: "default",
        departdate: "",
        returndate: "",
        travelers: "1adult",
        class: "economy"
    });

    useEffect(() => {
        fetchAirports();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        const qs = new URLSearchParams(state).toString();
        history.push(`/flights_search?${qs}`);
    }

    return (
        <div className="flex flex-row items-center w100">
            <form className="w100" onSubmit={onSubmit}>
                <div className="flex flex-col w100">
                    <Dropdown
                        name="departure"
                        label="Departure"
                        options={airports}
                        defaultValue="Airport Or City"
                        value={state.departure}
                        onChange={onChange}
                    />
                    <Dropdown
                        name="destination"
                        label="Destination"
                        options={airports}
                        defaultValue="Airport Or City"
                        value={state.destination}
                        onChange={onChange}
                    />
                </div>
                <div className="flex flex-col w100">
                    <div className="flex flex-row w100">
                        <Input
                            name="departdate"
                            label="Depart date"
                            type="date"
                            value={state.departdate}
                            onChange={onChange}
                        />
                        <Input
                            name="returndate"
                            label="Return date"
                            type="date"
                            classes=" ml4"
                            value={state.returndate}
                            onChange={onChange}
                        />
                    </div>
                    <div className="flex flex-row w100 ">
                        <Dropdown
                            name="travelers"
                            label="Travelers"
                            options={travellersData}
                            defaultValue="Select class"
                            value={state.travelers}
                            onChange={onChange}
                        />
                        <Dropdown
                            name="class"
                            label="Class"
                            options={travelClassData}
                            defaultValue="Select class"
                            classes=" ml4"
                            value={state.class}
                            onChange={onChange}
                        />
                    </div>
                    <div className="flex flex-row w100 ">
                        <Input
                            name="searchflights"
                            type="submit"
                            value="Search Flights"
                            classes=" mb1"
                            inputClasses=" btn-success"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
});


export default FlightsComponent;