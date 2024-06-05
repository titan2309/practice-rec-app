import React from "react";

export default function Alert(props) {
  if (!props.alert) return null;
  return (
    <div>
      <div>
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
