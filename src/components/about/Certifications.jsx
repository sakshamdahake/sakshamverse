import React from "react";

const certificationsContent = [
  {
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    year: "2023",
    description: "Designed and deployed scalable, highly available systems on AWS infrastructure."
  },
  {
    title: "Professional Scrum Master I",
    organization: "Scrum.org",
    year: "2022",
    description: "Certified in implementing Scrum practices and facilitating Agile project management."
  },
];

const Certifications = () => {
  return (
    <div className="row">
      {certificationsContent.map((val, i) => (
        <div className="col-lg-6" key={i}>
          <div className="certification-item">
            <h4>{val.title}</h4>
            <h5>{val.organization}</h5>
            <p>{val.year}</p>
            <p>{val.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications; 