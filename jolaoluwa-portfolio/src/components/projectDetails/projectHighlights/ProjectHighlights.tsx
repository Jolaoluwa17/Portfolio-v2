import { NextPage } from "next";
import "./projectHighlights.css";
import { FaProjectDiagram } from "react-icons/fa";
import Image from "next/image";

interface Props {
  data: any;
}

const ProjectHighlights: NextPage<Props> = ({ data }) => {
  return (
    <div className="projectHighlight_root">
      <div className="projectHighlight_container">
        <div className="projectDiagram">
          <FaProjectDiagram fontSize={20} />
        </div>
        <h3>HIGHLIGHTS</h3>
        <h1>{data.highlights}</h1>
        <div className="videoSection">
          {/* <div className="phone_view">
            <Image
              src="/images/project-details/scribbleEase/ScribbleEase-Home.png"
              alt=""
              width={300}
              height={600}
            />
          </div> */}
          <div className="laptop_view">
            <Image
              src="/images/project-details/tictactoe/plainLaptop.png"
              alt=""
              width={800}
              height={1100}
            />
          </div>
        </div>
        <div className="img_tag">Video Clip</div>
        <div className="imgSection">
          <Image
            src="/images/project-details/scribbleEase/ScribbleEase-Home.png"
            alt=""
            width={250}
            height={500}
            style={{ marginTop: "-200px" }}
          />
          <Image
            src="/images/project-details/scribbleEase/ScribbleEase-Home.png"
            alt=""
            width={250}
            height={500}
            style={{ marginTop: "-80px" }}
          />
          <Image
            src="/images/project-details/scribbleEase/ScribbleEase-Home.png"
            alt=""
            width={250}
            height={500}
            style={{ marginTop: "80px" }}
          />
        </div>
        <div className="img_tag">Images</div>
      </div>
    </div>
  );
};

export default ProjectHighlights;
