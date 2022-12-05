import React, { useState } from "react";
import TopCss from "../styles/CustomNotification.module.css";
const headingTitle = [
  "S.No.",
  "Chapter or Heading or sub-heading or tariff item",
  "Description of goods",
  "Standard rate",
  "Integrated Goods and Services Tax",
  "Condition",
  "Amended By Notification No.",
];
function TopBar(props) {
  console.log("props--------checking-", props);

  return (
    <div>
      <div className={TopCss.topbar_parent}>
        <div className={TopCss.topbar_parent_Title}>
          {/* <span style={{ marginRight: "15%" }} className={TopCss.headingTitle}>
            Keywords
          </span> */}
          {headingTitle?.map((data, index) => (
            <span className={TopCss.headingTitle} key={index}>
              {data}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
