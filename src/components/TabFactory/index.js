import React, { memo, useState } from "react";
import { Link } from "react-router-dom";

import "./index.scss";
const FA = require('react-fontawesome');

const TabFactory = memo(({ tabsData }) => {
    const [ activeLink, setActiveLink ] = useState(tabsData[0].label);

    const onLinkClicked = (label) => {
        const activeTab = tabsData.find(o => o.label === label);

        if(activeTab)
            setActiveLink(activeTab.label);
    }

    return (
        <nav className="navbar flex flex-row pv2 ph2">
            <ul className="flex flex-row w100">
                {
                    tabsData.map(({ label, path, icon }) => {
                        const isActive = label === activeLink;
                        return (
                            <li className={isActive ? "items-center active-border" : "items-center"} key={`nav_${label}`}>
                                <Link className={isActive? "link active" : "link"} to={`/${path}`} onClick={e => onLinkClicked(label)}>
                                    {
                                        icon && <FA className="nav-icon link" name={icon}/>
                                    }
                                    {label}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
});

export default TabFactory;