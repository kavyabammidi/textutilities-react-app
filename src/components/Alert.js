import React from "react";

function Alert(props) {
  if (!props.alert) return null; // Prevent rendering when no alert

  return (
    <div className="alert alert-success alert-dismissible fade show" role="alert">
      {props.alert}
      <button
        type="button"
        className="btn-close"
        onClick={props.onClose} // Calls the hideAlert function from props
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
