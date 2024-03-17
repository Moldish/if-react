import React from "react";

import {Logo} from "../../../icons/Logo/Logo";


import Links from "./Links/Links";
import {Night} from "../../../icons/Night/Night";
import {Account} from "../../../icons/Account/Account";

import classes from "./Header.module.css";
export default function Header() {
  return (
    <header className={classes.header}>
        <Logo/>
        <div className={classes.controls}>
            <Links/>
            <div className={classes.btns}>
                <Night className={classes.svg}/>
                <Account className={classes.svg}/>
            </div>
        </div>
    </header>
  );
}
