import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Saksham" },
  { meta: "last name", metaInfo: "Dahake" },
  { meta: "Age", metaInfo: "25 Years" },
  { meta: "Nationality", metaInfo: "Indian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "3/289, Hanuman Nagar, Ring Road, Gondia, Maharashtra, India - 441614" },
  { meta: "phone", metaInfo: "+91 9764736153" },
  { meta: "Email", metaInfo: "sakdahake28@gmail.com" },
  { meta: "LinkedIn", metaInfo: " saksham.dahake" },
  { meta: "langages", metaInfo: "English, Hindi" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
