import React from "react";
import PropTypes from "prop-types";

// Destructure here, so we don't have to type props.... each time
const TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange
}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                className="form-control form-control-lg"
                placeholder={placeholder}
                // Will not be able to type in input field, until there is an onChange() event, because initial state is immutable
                value={value}
                // Use onChange property to and object to pass the function to change state
                onChange={onChange}
            />
        </div>
    );
};

TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

TextInputGroup.defaultProps = {
    type: "text"
};

export default TextInputGroup;
