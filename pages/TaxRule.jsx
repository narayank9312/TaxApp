import React from "react";
import CustomNotification from "../components/CustomNotification";
import TopBar from "../components/TopBar";
import Request from "../styles/CustomNotification.module.css";

function TaxRule() {
  return (
    <div className={Request.parent}>
      <TopBar headingTitle={"Request"} />
      {/* {request.length > 0 && <RequestDataList requestData={request} />} */}
      {<CustomNotification />}
    </div>
  );
}

export default TaxRule;
