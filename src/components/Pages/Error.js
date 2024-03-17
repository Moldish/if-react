import React from "react";

import { Link } from "react-router-dom";
import LinkElement from "../Main/Header/Links/LinkElement";
export default function Stays() {
  return (
    <>
      <Link to="/">
        <LinkElement>Home</LinkElement>
      </Link>
    </>
  );
}
