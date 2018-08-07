import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// Destructure here, so we don't have to type props.... each time
const TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error
}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                className={classnames("form-control form-control-lg", {
                    "is-invalid": error
                })}
                placeholder={placeholder} // Will not be able to type in input field, until there is an onChange() event, because initial state is immutable
                value={value} // Use onChange property to and object to pass the function to change state
                onChange={onChange}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};

TextInputGroup.defaultProps = {
    type: "text"
};

export default TextInputGroup;
