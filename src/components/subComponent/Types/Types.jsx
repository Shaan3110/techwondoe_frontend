import React from "react";
import "./Types.css";
import { Typography } from "../../UI/Typography/Typography";
import { types } from "../../../assets/data/types";

export const Types = () => {
  return (
    <div className="types">
      {types.map((ele) => {
        return (
          <div className="type" key={ele.id}>
            <img src={ele?.img} alt="loading..." />
            <Typography size={"subheading"} primary={false} text={ele?.title} />
            <Typography
              size={"paragraph"}
              primary={false}
              text={ele?.content}
            />
            <div className="types_link">
              <Typography
                size={"paragraph"}
                primary={true}
                text={"Learn more"}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
