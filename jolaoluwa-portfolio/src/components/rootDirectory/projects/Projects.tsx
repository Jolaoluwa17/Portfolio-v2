"use client";

import { NextPage } from "next";
import "./projects.css";
import { useState, useEffect, useRef } from "react";
import { ProjectsData } from "../../../../utils/ProjectsData";
import { ProjectsDetailsData } from "../../../../utils/ProjectsDetailsData";
import Link from "next/link";
import { Meteors } from "@/components/Meteors";

interface Props {}

const Projects: NextPage<Props> = ({}) => {
  return (
    <div className="projects_root">
      <div className="projects_header">
        <h3>My Recent Work</h3>
        <h1>Projects</h1>
      </div>
      <div className="content">
        {ProjectsDetailsData.map((project, index) => (
          <div className="item" key={index}>
            <div className="project_img">{/* Add project image here */}</div>
            <div className="project_title">{project.name}</div>
            <div className="project_overview">
              <p>{project.overview.replace(/<br\s*\/?>/gi, "")}</p>
            </div>
            <div className="project_nav">
              <Link href={`/project-details?name=${project.name}`}>
                <button className="details_btn">Details</button>
              </Link>
              <button className="demo_btn">Live Demo</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
