import React from "react";

import classes from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <p className={classes["text-body"]}>
      I'm a Software Engineer at{" "}
      <a className={classes["a-link"]} href="https://canonical.com/">
        Canonical
      </a>{" "}
      (the makers of Ubuntu)
    </p>
  );
}
