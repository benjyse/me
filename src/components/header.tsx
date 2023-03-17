import * as React from "react";
import "../styles/main.scss";
import Navigation from "./navigation";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="header">
      <button className="btn">This is a test</button>
      <h1>Hello!</h1>
      <Navigation/>
    </header>
  );
};

export default Header;
