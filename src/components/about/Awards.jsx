import React from "react";

const awardsContent = [
  {
    title: "Best Innovation Award",
    organization: "Tech Conference 2023",
    year: "2023",
    description: "Received for developing a cutting-edge solution that improved efficiency by 45%."
  },
  {
    title: "Employee of the Year",
    organization: "Company Name",
    year: "2022",
    description: "Selected among 200+ employees for outstanding performance and leadership."
  },
];

const Awards = () => {
  return (
    <div className="row">
      {awardsContent.map((val, i) => (
        <div className="col-lg-6" key={i}>
          <div className="award-item">
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

export default Awards; 