import React from "react";
import "./OurTeam.css";
import { Typography } from "../../UI/Typography/Typography";
import { Button } from "../../UI/Button/Button";
import ourTeam from "../../../assets/images/ourTeam.png";
import backgroundteam from "../../../assets/images/backgroundteam.png";

export const OurTeam = () => {
  return (
    <div
      className="ourteam"
      style={{ backgroundImage: `url(${backgroundteam})` }}
    >
      <img src={ourTeam} alt="Loading.." />
      <div className="ourteam_details">
        <div className="head_ourteam">
          <Typography size={"paragraph"} primary={true} text={"Our Team"} />
        </div>
        <div className="main_head_ourteam">
          <Typography
            size={"heading"}
            primary={false}
            text={"A team you can trust"}
          />
        </div>
        <Typography
          size={"paragraph"}
          primary={false}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu ."
          }
        />
        <div className="ourteam_button">
          <Button primary={true} size={"medium"} label={"Learn more"} />
        </div>
      </div>
    </div>
  );
};
