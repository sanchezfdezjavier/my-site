import { Fragment } from "react";
import React from "react";

import classes from "./MainTitle.module.css";

export default function MainTitle(props) {
  return (
    <Fragment>
      <h1 className={classes["main-title-3"]}>{props.children}</h1>
    </Fragment>
  );
}
