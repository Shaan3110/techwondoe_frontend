import React from "react";
import "./Header.css";
import { Typography } from "../../UI/Typography/Typography";
import arrow from "../../../assets/images/arrow.png";
import { navbar } from "../../../assets/data/navbar";
import hamburger from '../../../assets/images/hamburger.png'

export const Header = () => {
  return (
    <header>
      <div className="navigation">
        {navbar.map((ele) => {
          return (
            <div className="elements" key={ele.id}>
              <Typography size={"paragraph"} primary={false} text={ele?.main} />
              {ele?.subcontent ? <img src={arrow} alt="" /> : null}
            </div>
          );
        })}
      </div>
      <div className="hamburger">
          <img src={hamburger} alt="Loading.." />
      </div>
    </header>
  );
};
