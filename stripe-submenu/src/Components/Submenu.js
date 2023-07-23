import React from "react";
import sublinks from "../data/data";

export default function Submenu({ page }) {
  function getLinks() {
    return sublinks.filter((sublink) => sublink.page === page);
  }
  const links = getLinks()[0].links;

  return (
    <div>
      <h2>{page}</h2>
      <ul>
        {links.map((link) => {
          return (
            <li>
              {link.icon}
              {link.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
