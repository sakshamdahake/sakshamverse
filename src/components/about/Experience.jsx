import React from "react";
import company1Logo from "../../assets/img/logos/company1-logo.png";
import company2Logo from "../../assets/img/logos/company2-logo.png";

const experienceContent = [
  {
    year: "2025 - Present",
    position: "AI/ML Engineer - Contractor",
    compnayName: "Indium",
    logo: company1Logo,
    details: `Currently working with a project under the MAANG umbrella, collaborating with their Large Language Model (LLM) team. Focused on improving AI-augmented responses for coding and computer science queries. Involved in fine-tuning models, optimizing prompts, and enhancing model behavior for technical accuracy and relevance.`,
  },
  {
    year: "2024 - Present",
    position: "Senior Software Engineer",
    compnayName: "Persistent Systems Ltd.",
    logo: company2Logo,
    details: `Working primarily as a frontend developer using React and Angular, with backend contributions in Clojure. Upgraded and maintained multiple core client libraries, significantly enhancing the UI for the client's CCaaS and VCaaS applications. Also implemented a call transcription system using AWS Lex and Chime, integrated with AI transcription and sentiment analysis services to derive real-time insights and improve customer experience.`,
  },
  {
    year: "2022 - 2024",
    position: "Software Engineer",
    compnayName: "Persistent Systems Ltd.",
    logo: company2Logo,
    details: `Contributed to a major project for one of the world's leading clients in the CCaaS and VCaaS domain. Executed the migration of the messaging bus from AWS SQS to AWS MSK (Kafka), reducing downtime by 30% and improving system uptime by 70%. Implemented a new messaging architecture that increased message throughput by 40% and reduced message latency by 25%, resulting in a more resilient and scalable system.`,
  },
  {
    year: "2021 - 2022",
    position: "Software Engineer - Intern",
    compnayName: "Persistent Systems Ltd.",
    logo: company2Logo,
    details: `Gained hands-on experience in building end-to-end applications and developing internal tools using Java and Spring Boot. Contributed to backend services and supported various teams in delivering efficient and maintainable solutions.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <div className="company-logo">
            <img src={val.logo} alt={`${val.compnayName} logo`} />
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
