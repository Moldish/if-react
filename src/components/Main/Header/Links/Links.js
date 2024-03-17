import React from "react";
import { Link } from "react-router-dom";

import LinkElement from "./LinkElement";

import classes from "./Links.module.css";

export default function Links() {
  return (
    <nav className={classes.nav}>
      <Link to="/">
        <LinkElement>Stays</LinkElement>
      </Link>
      <Link to="/attractions">
        <LinkElement>Attractions</LinkElement>
      </Link>
    </nav>
  );
}
