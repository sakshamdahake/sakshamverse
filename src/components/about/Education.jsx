import React from "react";
import asuLogo from "../../assets/img/logos/asu-logo.png";
import rcoemLogo from "../../assets/img/logos/rcoem-logo.png";

const educationContent = [
  {
    year: "2025 - Present",
    degree: "MASTER DEGREE",
    institute: "ARIZONA STATE UNIVERSITY, TEMPE, AZ, USA",
    logo: asuLogo,
    details: `Currently pursuing my Master's degree in Data Science, Analytics and Engineering with a specialization in Computing and Decision Analytics track.`,
  },
  {
    year: "2018 - 2022",
    degree: "BACHELOR DEGREE",
    institute: "SHRI RAMDEOBABA COLLEGE OF ENGINEERING AND MANAGEMENT, NAGPUR, MH, INDIA",
    logo: rcoemLogo,
    details: `Completed Bachelor of Engineering with a major in Electrical Engineering.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <div className="institute-logo">
            <img src={val.logo} alt={`${val.institute} logo`} />
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
