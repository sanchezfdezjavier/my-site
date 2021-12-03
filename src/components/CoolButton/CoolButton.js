import React from "react";

import classes from "./CoolButton.module.css";

export default function CoolButton(props) {
  return (
    <div className={classes.container}>
      <a href={props.url} className={classes["chip-blue"]}>
        {props.children}
      </a>
    </div>
  );
}
