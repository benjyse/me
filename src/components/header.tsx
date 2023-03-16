import * as React from "react";
import { PageProps } from "gatsby";
import "../styles/main.scss";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="header">
      <button className="btn">This is a test</button>
      <h1>Hello!</h1>
    </header>
  );
};

export default Header;
