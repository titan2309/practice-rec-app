import React from "react";

export default function Alert(props) {
  if (props.alert === true) return null;
  return (
    <div>
      <div style={{ height: "0px" }}>
        <div
          className={`alert alert-${
            props.alert.type === "Welcome" ? "success" : "danger"
          } alert-dismissible fade show`}
          role="alert"
        >
          <strong>
            {props.alert.type} {props.alert.message}
          </strong>
        </div>
      </div>
    </div>
  );
}
