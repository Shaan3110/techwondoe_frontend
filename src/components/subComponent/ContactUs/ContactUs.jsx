import React from "react";
import "./ContactUs.css";
import { Typography } from "../../UI/Typography/Typography";
import { Button } from "../../UI/Button/Button";

export const ContactUs = () => {
  return (
    <div className="contactus">
      <Typography
        size={"heading"}
        primary={false}
        text={"Speak to a Career Expert"}
      />
      <div className="connectus_tagline">
        <Typography
          size={"paragraph"}
          primary={false}
          text={
            "We have are dedicated to finding the best fit for you. Get in touch to organise a face-to-face cactch up with somone from our team"
          }
        />
      </div>
      <Button primary={false} size={"large"} label={"Get in touch"} />
    </div>
  );
};
