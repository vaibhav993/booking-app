import React, { memo } from "react";

import "./index.scss";

const Input = memo(({ name, label, type="text", classes="", inputClasses="", value="", onChange }) => {

    const onInputChange = (e) => {
        onChange && onChange(name, e.target.value);
    }

    return (
        <div className={"input-group flex flex-col".concat(classes)}>
            {
                label && <label htmlFor={name} className="input-label">
                    {label}
                </label>
            }
            <input
                id={name}
                type={type}
                className={"form-input".concat(inputClasses)}
                value={value}
                onChange={onInputChange}
            />
        </div>
    )
});

export default Input;