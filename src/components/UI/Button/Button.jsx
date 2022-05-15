import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

export const Button = ({ primary, backgroundColor, props, label, size }) => {
  const mode = primary
    ? "button--primary"
    : "button--secondary";
  return (
    <button
      type="button"
      className={["button", `button--${size}`, mode].join(
        " "
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: true,
  size: "medium",
  onClick: undefined,
};
