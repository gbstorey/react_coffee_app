import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={(isActive) => (isActive ? classes.active : "")}
              end
            >
              All Entries
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/new-entry"}
              className={(isActive) => (isActive ? classes.active : "")}
              end
            >
              New Entry
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
