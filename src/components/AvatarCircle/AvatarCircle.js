import React from "react";

import "./AvatarCircle.css";

export default function AvatarCircle(props) {
  return (
    <div className="container clip-border">
      <img src={props.img} className="img-fluid clip-circle" alt="avatar" />
    </div>
  );
}
