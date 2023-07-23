import { AiFillHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdTaskAlt } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header">
      <NavLink to={"/"}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/882/882730.png"
          alt=""
          className="Header_logo"
        />
      </NavLink>
      <div className="Header_center">
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "nav-links_active" : "nav-links"
              }
            >
              <AiFillHome size={15} />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-links_active" : "nav-links"
              }
              to={"/projects"}
            >
              <AiOutlineFundProjectionScreen size={15} />
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-links nav-links_active" : "nav-links"
              }
              to={"/tasks"}
            >
              <MdTaskAlt size={15} />
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-links_active" : "nav-links"
              }
              to={"/team"}
            >
              <RiTeamFill size={15} />
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-links_active" : "nav-links"
              }
              to={"/setting"}
            >
              <IoIosSettings size={15} />
              Setting
            </NavLink>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};
export default Header;
