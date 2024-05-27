import { NextPage } from "next";
import "./overview.css";
import React from "react";

interface Props {
  data: any;
}

const Overview: NextPage<Props> = ({ data }) => {
  return (
    <div className="overview_root">
      <div className="left">
        <div className="item">
          <div className="project_overview_header">My Role</div>
          <p>{data.role}</p>
        </div>
        <div className="item">
          <div className="project_overview_header">Team</div>
          <ul>
            {data.team.map((team: any, index: number) => (
              <li key={index}>
                {team.member}, <b>{team.role}</b>
              </li>
            ))}
          </ul>
        </div>
        <div className="item">
          <div className="project_overview_header">Timeline & Status</div>
          <p>
            {data.timeline}, <b>Lauched in {data.launched}</b>
          </p>
        </div>
      </div>
      <div className="right">
        <div className="project_overview_header">Overview</div>
        <p>
          {data.overview.split("<br>").map((line: any, index: number) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Overview;
