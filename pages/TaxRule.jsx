import React, { useState } from "react";
import CustomNotification from "../components/CustomNotification";
import TopBar from "../components/TopBar";
import Request from "../styles/CustomNotification.module.css";

function TaxRule() {
  const [SearchTerm, setSearchTerm] = useState("");

  return (
    <div className={Request.parent}>
      <input
        style={{
          width: "50rem",
          height: "3rem",
          marginLeft: "14%",
          marginBottom: "1%",
        }}
        type="text"
        placeholder={"Search by Description of goods..."}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <TopBar headingTitle={"Request"} />
      {/* {request.length > 0 && <RequestDataList requestData={request} />} */}
      {<CustomNotification searchItems={SearchTerm} />}
    </div>
  );
}

export default TaxRule;
