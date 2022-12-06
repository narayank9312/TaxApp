import React from "react";
import { taxData } from "../utils/taxtable";
import TopCss from "../styles/CustomNotification.module.css";

const CustomNotification = ({ searchItems }) => {
  return (
    <div
      style={{
        background: "#212121",
        width: "71.3rem",
      }}
    >
      {taxData
        ?.filter((data) => {
          if (searchItems === "") return data;
          if (data?.["Description of goods"]) {
            if (
              data["Description of goods"]
                .toLowerCase()
                .includes(searchItems.toLowerCase())
            ) {
              return data;
            }
          }
        })
        .map((data, index) => (
          <>
            {index !== 0 && data?.["S.No."] && (
              <div className={TopCss.divider}></div>
            )}
            <div
              key={index}
              style={{ marginTop: "1%", width: "71.3rem" }}
              className={TopCss.topbar_parent_Title}
            >
              {/* <span className={TopCss.request_Keywords}>{data?.["S.No."]}</span>
          <span className={TopCss.request_Keywords}>
            {data?.["Description of goods"]}
          </span> */}

              <span style={{ width: "14%" }} className={TopCss.request_status}>
                {data?.["S.No."]}
              </span>
              <span
                style={{ width: "14%" }}
                className={TopCss.request_requested}
              >
                {data?.["Chapter or Heading or sub-heading or tariff item"]}
              </span>
              <span
                style={{ width: "14%" }}
                className={TopCss.request_requested}
              >
                {data?.["Description of goods"]}
              </span>
              <span
                style={{ width: "14%" }}
                className={TopCss.request_resolved}
              >
                {data?.["Standard rate"] !== "Nil" &&
                  !isNaN(data?.["Standard rate"] * 100) &&
                  data?.["Standard rate"] * 100 + `%`}
                {/* {data?.["Standard rate"]} */}
              </span>
              <span style={{ width: "14%" }} className={TopCss.request_update}>
                {data?.["Integrated Goods and Services Tax"]}
              </span>
              <span
                style={{ width: "14%" }}
                className={TopCss.request_resolved}
              >
                {data?.["Amended By Notification No."]}
              </span>
              <span
                style={{ width: "14%" }}
                className={TopCss.request_resolved}
              >
                {data?.["Condition No."]}
              </span>
              {/* <span className={TopCss.request_resolved}>
            {data?.["Standard rate"]}
          </span> */}
              {/* <span className={TopCss.request_resolved}>
            {data?.["Condition No."]}
          </span> */}
            </div>
          </>
        ))}
    </div>
  );
};

export default CustomNotification;
