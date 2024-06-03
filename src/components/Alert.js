import React, { useState } from "react";

export default function Alert() {
  return (
    <div>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>This is an Alert!!</strong>
      </div>
    </div>
  );
}
