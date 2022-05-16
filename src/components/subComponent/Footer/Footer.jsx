import React from "react";
import "./Footer.css";
import instagram from "../../../assets/images/instagram_logo.png";
import { Typography } from "../../UI/Typography/Typography";
import {
  footer_link1,
  footer_link2,
  footer_link3,
  footer_link4,
} from "../../../assets/data/footer";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="socials">
        <Typography size={"paragraph"} primary={true} text={"f"} />
        <Typography size={"paragraph"} primary={true} text={"in"} />
        <img src={instagram} alt="instagram" />
      </div>
      <div className="footer_navigation">
        <div className="links">
          {footer_link1.map((ele) => {
            return (
              <Typography
                key={ele.id}
                size={"paragraph"}
                primary={false}
                text={ele?.title}
              />
            );
          })}
        </div>
        <div className="links">
          {footer_link2.map((ele) => {
            return (
              <Typography
                key={ele.id}
                size={"paragraph"}
                primary={false}
                text={ele?.title}
              />
            );
          })}
        </div>
        <div className="links">
          {footer_link3.map((ele) => {
            return (
              <Typography
                key={ele.id}
                size={"paragraph"}
                primary={false}
                text={ele?.title}
              />
            );
          })}
        </div>
        <div className="links" style={{ width: "40%" }}>
          {footer_link4.map((ele) => {
            return (
              <Typography
                key={ele.id}
                size={"paragraph"}
                primary={false}
                text={ele?.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
