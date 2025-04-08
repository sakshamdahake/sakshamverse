import React from "react";

const skillsContent = [
  { skillClass: "p80", skillPercent: "80", skillName: "PYTHON" },
  { skillClass: "p75", skillPercent: "75", skillName: "CLOJURE" },
  { skillClass: "p50", skillPercent: "50", skillName: "JAVA" },
  { skillClass: "p60", skillPercent: "60", skillName: "REACT" },
  { skillClass: "p75", skillPercent: "75", skillName: "JAVASCRIPT" },
  { skillClass: "p80", skillPercent: "80", skillName: "GoLang" },
  { skillClass: "p50", skillPercent: "50", skillName: "ANGULAR" },
  { skillClass: "p60", skillPercent: "60", skillName: "AWS" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
