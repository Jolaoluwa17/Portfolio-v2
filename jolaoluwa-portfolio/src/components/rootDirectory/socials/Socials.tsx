import { NextPage } from "next";
import { BsGithub } from "react-icons/bs";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import "./socials.css";

interface Props {}

const Socials: NextPage<Props> = ({}) => {
  return (
    <div className="icon-root">
      <div className={`icon-content`}>
        <div className="icon">
          <div className="line-top"></div>
        </div>
        <button className="iconBtn">
          <span className="svgContainer">
            <BsGithub color="white" fontSize={20} />
          </span>
          <span className="BG github"></span>
        </button>
        <button className="iconBtn">
          <span className="svgContainer">
            <AiOutlineTwitter color="white" fontSize={20} />
          </span>
          <span className="BG twitter"></span>
        </button>
        <button className="iconBtn">
          <span className="svgContainer">
            <AiFillInstagram color="white" fontSize={20} />
          </span>
          <span className="BG instagram"></span>
        </button>
        <button className="iconBtn">
          <span className="svgContainer">
            <AiFillLinkedin color="white" fontSize={20} />
          </span>
          <span className="BG linkedIn"></span>
        </button>
        <div className="icon">
          <div className="line-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
