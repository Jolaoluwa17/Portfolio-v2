import { NextPage } from "next";
import "./projectIssues.css";
import { VscIssues } from "react-icons/vsc";

interface Props {
  data: any;
}

const ProjectIssues: NextPage<Props> = ({ data }) => {
  return (
    <div className="projectIssues_root">
      <div className="left">
        <VscIssues style={{ marginRight: "8px" }} />
        Challenges Faced
      </div>
      <div className="right">
        <ul>
          {data.challenges.map((challenge: any, index: number) => (
            <li key={index}>
              <h3>
                {challenge.no}. {challenge.title}
              </h3>
              <p>{challenge.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectIssues;
