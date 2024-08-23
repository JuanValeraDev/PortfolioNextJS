import React from "react";

const skillsContent = [
  {
    name: "React + Next.js",
    skillPercent: "80",
  },
  {
    name: "React Native",
    skillPercent: "60",
  },
  {
    name: "Android",
    skillPercent: "90",
  },
  {
    name: "Spring Boot",
    skillPercent: "75",
  },
  {
    name: "AI",
    skillPercent: "70",
  },
  {
    name: "Other",
    skillPercent: "80",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
