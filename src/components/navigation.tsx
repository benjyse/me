import React from "react";
import { Link } from "gatsby";

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
