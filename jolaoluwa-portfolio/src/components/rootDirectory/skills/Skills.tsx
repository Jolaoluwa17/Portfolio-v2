"use client";

import { NextPage } from "next";
import "./skills.css";
import Image from "next/image";
import { SkillsData } from "../../../../utils/SkillsData";
import React, { useState } from "react";
import { Meteors } from "@/components/Meteors";

interface Props {}

const Skills: NextPage<Props> = ({}) => {

  return (
    <div className="skills_root">
      <div className="skills_header">
        <h3>MY STACK</h3>
        <h1>Technologies</h1>
      </div>
      <div className="content">
        {SkillsData.map((skill, index) => (
          <div className="skills_card" key={index}>
            <skill.image
              fontSize={40}
              color={skill.color}
              style={{ zIndex: 1 }}
            />
            <span style={{ marginLeft: "20px", fontWeight: "600", zIndex: 1 }}>
              {skill.name}
            </span>
            <div className="skills_meteors">
              <Meteors number={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
