import React from "react";
import { Link } from "gatsby";

const Menu = props => {
  return (
    <ul className="navigation">
      <li>
        {" "}
        <Link to="/home">Home</Link>{" "}
      </li>
      <li>
        <div onClick={props.showAll}>Campaigns</div>{" "}
        <ul>
          <li>
            <Link to="/campaigns">C 1</Link>{" "}
          </li>
          <li>
            <Link to="/campaigns">C 2</Link>{" "}
          </li>
        </ul>
      </li>
      <li>
        <div onClick={props.showAll}>Portfolio</div>{" "}
        <ul>
          <li>
            <Link to="/project1">Poject 1</Link>{" "}
          </li>
          <li>
            <Link to="/project2">Poject 2</Link>{" "}
          </li>
          <li>
            <Link to="/project3">Poject 3</Link>{" "}
          </li>
        </ul>
      </li>
      <li>
        <div title="Contact">Contact</div>
      </li>

      <li>
        {" "}
        <Link to="/update-content">Update Content</Link>{" "}
      </li>
      <div className="clear" />
    </ul>
  );
};

export default Menu;
