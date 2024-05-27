"use client";

import { NextPage } from "next";
import "./intro.css";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

interface Props {}

const Intro: NextPage<Props> = ({}) => {
  return (
    <div className="intro_root">
      <div className="intro_left_section">
        <div className="welcome_text" style={{ height: "140px" }}>
          <Typewriter
            words={[" Hello!", "My Name is Jolaoluwa"]}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </div>
        <div className="content">
          <p>
            I am a front-end developer based in Nigeria. I am passionate about
            creating dynamic user experiences using UI effects and animations. I
            am a detail-oriented and organized problem-solver, and I value
            independence and teamwork equally. <br /> <br />
            In my free time, I enjoy outdoor activities, watching TV series, and
            reading English literature. As I am interested in all aspects of
            frontend development, I am always eager to work on ambitious
            projects with positive and like-minded individuals. <br /> <br /> As
            a graduate of Babcock University, I am actively seeking
            opportunities to develop my skills and gain experience in the field
            of front-end development.
          </p>
        </div>
      </div>
      <div className="intro_right_section">
        <Image src="/images/landingPage.png" alt="" width={700} height={450} />
      </div>
    </div>
  );
};

export default Intro;
