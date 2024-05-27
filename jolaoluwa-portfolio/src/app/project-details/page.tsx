"use client";

import styles from "./page.module.css";
import { MdKeyboardBackspace } from "react-icons/md";
import Overview from "@/components/projectDetails/overview/Overview";
import Link from "next/link";
import ProjectPicOverview from "@/components/projectDetails/projectPicOverview/ProjectPicOverview";
import ProjectHighlights from "@/components/projectDetails/projectHighlights/ProjectHighlights";
import ProjectIssues from "@/components/projectDetails/projectIssues/ProjectIssues";
import { ProjectsDetailsData } from "../../../utils/ProjectsDetailsData";
import { useSearchParams } from "next/navigation";

export default function ProjectDetails() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  // Find the project data that matches the name from the URL query parameter
  const project = ProjectsDetailsData.find((project) => project.name === name);

  return (
    <div className={styles.project_details_root}>
      <div className={styles.project_details_backBtn}>
        <Link href="/">
          <button className={styles.backBtn}>
            <MdKeyboardBackspace />
            <p>Back</p>
          </button>
        </Link>
      </div>
      <div className={styles.project_content}>
        {project && (
          <div key={project.id}>
            <div className={styles.project_name}>
              <h1>{project.name}</h1>
              <h3>
                {project.platform} — {project.timeFinished}
              </h3>
            </div>
            {/* <div className={styles.project_pic_overview}>
              <ProjectPicOverview data={project} />
            </div> */}
            <div className={styles.project_overview}>
              <Overview data={project} />
            </div>
            <div className={styles.project_highlights}>
              <ProjectHighlights data={project} />
            </div>
            <div className={styles.project_issues}>
              <ProjectIssues data={project} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
