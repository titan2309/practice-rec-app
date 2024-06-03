import React from "react";

export default function Alert({ message, onClose }) {
  return (
    <div>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>{message}</strong>
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}
