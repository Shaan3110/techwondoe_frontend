import React from "react";
import "./Header.css";
import { Typography } from "../../UI/Typography/Typography";
import arrow from '../../../assets/images/arrow.png'

export const Header = () => (
  <header>
    <div className="navigation">
        <div className="elements">
            <Typography size={"paragraph"} primary={false} text={"About"}/>
            <img src={arrow} alt="" />
        </div>
        <div className="elements">
            <Typography size={"paragraph"} primary={false} text={"Job Search"}/>
        </div>
        <div className="elements">
            <Typography size={"paragraph"} primary={false} text={"Candidates"}/>
            <img src={arrow} alt="" />
        </div>
        <div className="elements">
            <Typography size={"paragraph"} primary={false} text={"Employers"}/>
            <img src={arrow} alt="" />
        </div>
        <div className="elements">
            <Typography size={"paragraph"} primary={false} text={"Latest News"}/>
        </div>
        <div className="elements">
            <Typography size={"paragraph"} primary={false} text={"Contact"}/>
        </div>
    </div>
  </header>
);
