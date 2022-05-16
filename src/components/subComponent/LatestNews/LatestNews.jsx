import React from "react";
import "./LatestNews.css";
import { Typography } from "../../UI/Typography/Typography";
import { Button } from "../../UI/Button/Button";
import { latestnews } from "../../../assets/data/latestnews";
import latestnewslink from '../../../assets/images/latestnewslink.png'

export const LatestNews = () => {
  return (
    <div className="latestnews">
      <div className="latestnews_head">
        <Typography size={"heading"} primary={false} text={"Latest News"} />
        <div className="latestnews_button">
          <Button primary={true} size={"large"} label={"View all"} />
        </div>
      </div>
      <div className="latestnews_sections">
        {latestnews.map((ele) => {
          return (
            <div className="latestnews_section">
              <img src={ele?.src} alt="loading..." />
              <div className="latestnews_author">
                <Typography
                  size={"paragraph"}
                  primary={false}
                  text={`by ${ele.author} | ${ele.time}`}
                />
              </div>
              <div className="latestnews_title">
                <Typography
                  size={"paragraph"}
                  primary={false}
                  text={ele.title}
                />
              </div>
              <div className="latestnews_link">

              <img src={latestnewslink} alt="Read more ->" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
