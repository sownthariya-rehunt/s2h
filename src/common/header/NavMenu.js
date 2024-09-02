import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";

// Recursive component to render menu items
const MenuItem = ({ item }) => {
  return (
    <li className={`${item.has_dropdown ? "dropdown" : ''}`}>
      <Link href={item.link}>{item.title}</Link>
      {item.sub_menus && (
        <ul>
          {item.sub_menus.map((sub_item, sub_i) => (
            <MenuItem key={sub_i} item={sub_item} />
          ))}
        </ul>
      )}
    </li>
  );
};

// Main menu component
const NavMenu = () => {
  return (
    <ul className="main-menu__list">
      {menu_data.map((item, i) => (
        <MenuItem key={i} item={item} />
      ))}
    </ul>
  );
};

export default NavMenu;
