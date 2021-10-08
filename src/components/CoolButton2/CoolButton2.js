import React from "react";

import "./CoolButton2.css";

export default function CoolButton2(props) {
  return (
    <div className="container">
      <button className="button-29" role="button">
        {props.children}
      </button>
    </div>
  );
}
