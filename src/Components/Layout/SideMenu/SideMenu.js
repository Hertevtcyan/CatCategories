import React, { Fragment } from "react";
import { Menu, Text } from "./styles/index";
import { NavLink } from "react-router-dom";
import "../../../../src/index.css";

const SideMenu = ({ categories }) => {
  return (
    <Menu>
      {categories.map((link) => (
        <NavLink activeClassName="active" to={`/${link.id}`} key={link.id}>
          <Text>{link.name}</Text>
        </NavLink>
      ))}
    </Menu>
  );
};

export default SideMenu;
