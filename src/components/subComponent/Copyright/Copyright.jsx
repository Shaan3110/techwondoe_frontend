import React from "react";
import "./Copyright.css";
import { Typography } from "../../UI/Typography/Typography";

export const Copyright = () => {
  return (
    <div className="copyright">
      <Typography
        size={"paragraph"}
        primary={false}
        text={"Copyright © 2021 - Beyond Ltd. "}
      />
    </div>
  );
};
