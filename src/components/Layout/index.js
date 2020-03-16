import React, { memo } from "react";

import TabFactory from "../TabFactory";
import Header from "../Header";

const tabsData = [
    {
        label: "Flights",
        path: "flights",
        icon: "plane"
    },
    {
        label: "Hotels",
        path: "hotels",
        icon: "hotel"
    },
    {
        label: "Cars",
        path: "cars",
        icon: "car"
    },
    {
        label: "Activity",
        path: "activity",
        icon: "ticket"
    },
]

const Layout = memo(({ children }) => {
    return (
        <>
            <Header />
            <TabFactory tabsData={tabsData}/>
            <main className="flex pv2 ph2">
                {children}
            </main>
        </>
    )
});

export default Layout;