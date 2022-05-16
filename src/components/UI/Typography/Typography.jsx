import React from "react";
import "./Typography.css";
import PropTypes from "prop-types";

export const Typography = ({ primary, color, props, text, size }) => {
  const mode = primary
    ? "typography--primary"
    : "typography--secondary";
  return (
    <h1
      type="typography"
      className={["typography", `typography--${size}`, mode].join(
        " "
      )}
      style={color && { color }}
      {...props}
    >
      {text}
    </h1>
  );
};

Typography.propTypes = {
  key: PropTypes.string,
  props: PropTypes.string,
  primary: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOf(["heading", "subheading", "paragraph"]).isRequired,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

Typography.defaultProps = {
  color: null,
  primary: true,
  text: "Text",
  onClick: undefined,
  size:"heading"
};
