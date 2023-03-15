import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <nav>
      <h4>
        <NavLink exact to="/contact" activeClassName="bg-gray-200">
          Manage Team
        </NavLink>
      </h4>
      <h4>
        <NavLink exact to="/" activeClassName="bg-gray-200">
          Add Employee
        </NavLink>
      </h4>
      <h4>
        <NavLink exact to="/edit/0" activeClassName="bg-gray-200">
          Edit Employees
        </NavLink>
      </h4>
    </nav>
  );
}

export default Sidebar;
