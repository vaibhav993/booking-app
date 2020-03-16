import React, { memo } from "react";

import "./index.scss";

const Header = memo(() => {
    return (
        <header className="flex flex-row ph4 pv2 shadow-2">
            <div className="center">
                <h1 className="m0">
                    <img
                        className="header-logo"
                        src="./img/logo.png"
                        alt="cxLoyalty"
                    />
                </h1>
            </div>
        </header>
    )
});

export default Header;