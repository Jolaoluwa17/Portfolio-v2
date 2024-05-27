"use client";

import { NextPage } from "next";
import "./projectPicOverview.css";
import Image from "next/image";

interface Props {
  data: any;
}

const ProjectPicOverview: NextPage<Props> = ({ data }) => {
  const hi = "/images/project-details/scribbleEase/ScribbleEase-Home.png";
  return (
    <div className="projectPicOverview_root">
      {data && data.platformTag === "Mobile"
        ? data.picOverview.map((item: any, index: number) => (
            <div className="mobile_view" key={index}>
              <Image
                src={item.image1}
                alt=""
                width={350}
                height={700}
                style={{
                  position: "absolute",
                  top: "50px",
                  left: "150px",
                }}
              />
              <Image
                src={hi}
                alt=""
                width={350}
                height={700}
                style={{
                  zIndex: 1,
                  marginTop: "120px",
                  position: "absolute",
                }}
              />
              <Image
                src={item.image3}
                alt="cgtuctfu"
                width={350}
                height={700}
                style={{
                  position: "absolute",
                  top: "50px",
                  right: "150px",
                }}
              />
            </div>
          ))
        : data.picOverview.map((item: any, index: number) => (
            <div className="web_view" key={index}>
              <Image
                src={item.laptop}
                alt="Laptop"
                width={850}
                height={1100}
                style={{
                  position: "absolute",
                  top: "50px",
                  left: "150px",
                }}
              />
              <Image
                src={item.phone}
                alt=""
                width={200}
                height={400}
                style={{
                  position: "absolute",
                  top: "100px",
                  right: "150px",
                }}
              />
            </div>
          ))}
    </div>
  );
};

export default ProjectPicOverview;
