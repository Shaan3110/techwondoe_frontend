import React from "react";
import { Typography } from "../../UI/Typography/Typography";
import tick from "../../../assets/images/tick.png";
import "./Features.css";
import { features } from "../../../assets/data/data";

export const Features = () => {
  return (
    <div className="features">
      <Typography size={"heading"} primary={false} text={"Why choose us?"} />
      <div style={{width:"50%",textAlign:"center"}}>

      <Typography
        size={"paragraph"}
        primary={false}
        text={
          "We have decades of experience, having successfully recruited across the globle for many years."
        }
      />
      </div>
      <div className="segments">
        {features.map((ele) => {
          return (
            <div className="segment">
              <div className="segment_heading">
                <img src={tick} alt="" />
                <Typography
                  size={"paragraph"}
                  primary={false}
                  text={ele?.title}
                />
              </div>
              <Typography
                size={"paragraph"}
                primary={false}
                text={
                  ele?.content
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
