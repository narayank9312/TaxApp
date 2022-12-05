import React from "react";
import { taxData } from "../utils/taxtable";
import TopCss from "../styles/CustomNotification.module.css";

const CustomNotification = () => {
  console.log("taxData------", taxData);

  return (
    <div>
      {taxData?.map((data, index) => (
        <>
          <div
            key={index}
            style={{ marginTop: "3%", width: "71.3rem" }}
            className={TopCss.topbar_parent_Title}
          >
            {/* <span className={TopCss.request_Keywords}>{data?.["S.No."]}</span>
          <span className={TopCss.request_Keywords}>
            {data?.["Description of goods"]}
          </span> */}

            <span style={{ width: "14%" }} className={TopCss.request_status}>
              {data?.["S.No."]}
            </span>
            <span style={{ width: "14%" }} className={TopCss.request_requested}>
              {data?.["Chapter or Heading or sub-heading or tariff item"]}
            </span>
            <span style={{ width: "14%" }} className={TopCss.request_requested}>
              {data?.["Description of goods"]}
            </span>
            <span style={{ width: "14%" }} className={TopCss.request_resolved}>
              {data?.["Standard rate"] !== "Nil" &&
                !isNaN(data?.["Standard rate"] * 100) &&
                data?.["Standard rate"] * 100 + `%`}
              {/* {data?.["Standard rate"]} */}
            </span>
            <span style={{ width: "14%" }} className={TopCss.request_update}>
              {data?.["Integrated Goods and Services Tax"]}
            </span>
            <span style={{ width: "14%" }} className={TopCss.request_resolved}>
              {data?.["Amended By Notification No."]}
            </span>
            <span style={{ width: "14%" }} className={TopCss.request_resolved}>
              {data?.["Condition No."]}
            </span>
            {/* <span className={TopCss.request_resolved}>
            {data?.["Standard rate"]}
          </span> */}
            {/* <span className={TopCss.request_resolved}>
            {data?.["Condition No."]}
          </span> */}
          </div>

          {data?.["S.No."] && <div className={TopCss.divider}></div>}
        </>
      ))}
    </div>
  );
};

export default CustomNotification;
