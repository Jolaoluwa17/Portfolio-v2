import { NextPage } from "next";
import "./navBar.css";
import { NavLink } from "react-router-dom";

interface Props {
  onSkillsClick: () => void;
  onProjectsClick: () => void;
}

const NavBar: NextPage<Props> = ({ onSkillsClick, onProjectsClick }) => {
  return (
    <div className="navBar_root">
      <div className="navBar_container">
        <div className="navBar_left">
          <ul>
            <li className="nav_hover_effect">About Me</li>
            <li className="nav_hover_effect" onClick={onSkillsClick}>
              My Skills
            </li>
            <li className="nav_hover_effect" onClick={onProjectsClick}>
              Project
            </li>
            <li className="nav_hover_effect">Resume</li>
            <li></li>
          </ul>
        </div>
        <div className="navBar_right"></div>
      </div>
    </div>
  );
};

export default NavBar;
