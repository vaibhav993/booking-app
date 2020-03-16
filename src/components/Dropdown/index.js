import React, { memo } from "react";

const Dropdown = memo(({ name, label, classes="", inputClasses="", options, value="default", defaultValue="", onChange }) => {

    const onSelect = (e) => {
        onChange && onChange(name, e.target.value);
    }

    return (
        <div className={"input-group flex flex-col".concat(classes)}>
            {
                label && <label htmlFor={name} className="input-label">
                    {label}
                </label>
            }
            <select 
                id={name}
                className={value === "default" ? "form-input txt-disabled".concat(inputClasses) : "form-input".concat(inputClasses) }
                value={value}
                onChange={onSelect}
            >
                <option value='default' disabled>{defaultValue}</option>
                {
                    options.map(o => (
                        <option className="tb" key={o.value} value={o.value}>{o.label}</option>
                    ))
                }
            </select>
        </div>
    )
});

export default Dropdown;