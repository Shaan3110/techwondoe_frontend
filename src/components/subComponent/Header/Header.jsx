import React from "react";
import "./Header.css";
import { Typography } from "../../UI/Typography/Typography";
import arrow from "../../../assets/images/arrow.png";
import { navbar } from "../../../assets/data/navbar";

export const Header = () => {
  return (
    <header>
      <div className="navigation">
        {navbar.map((ele) => {
          return (
            <div className="elements">
              <Typography size={"paragraph"} primary={false} text={ele?.main} />
              {ele?.subcontent ? <img src={arrow} alt="" /> : null}
            </div>
          );
        })}
      </div>
    </header>
  );
};
