import React from "react";

export default function SidebarItem({ name, active, handleClick }) {
  console.log(name);
  return (
    <button
      className={`sidebar-item ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}
