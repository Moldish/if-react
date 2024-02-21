import React from "react";

import classes from "./LinkElement.module.css";
export default function LinkElement({ children }) {
  return <span className={classes.link}>{children}</span>;
}
