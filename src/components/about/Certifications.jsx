import React from "react";

const certificationsContent = [
  {
    title: "AZ-900: Azure Fundamentals",
    organization: "Microsoft",
    year: "May 2022",
    description: "Successfully earned the Microsoft AZ-900 certification, demonstrating foundational knowledge of cloud services and how those services are provided with Microsoft Azure. Gained insights into core Azure concepts, services, solutions, management tools, security, compliance, pricing, and support.",
    badgeUrl: "https://images.credly.com/size/680x680/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png"
  },
  {
    title: "AI-900: Azure AI Fundamentals",
    organization: "Microsoft",
    year: "July 2022",
    description: "Earned the Microsoft AI-900 certification, demonstrating a foundational understanding of artificial intelligence (AI) and machine learning (ML) concepts and how they are implemented using Microsoft Azure services.",
    badgeUrl: "https://images.credly.com/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png"
  },
];

const Certifications = () => {
  return (
    <div className="row">
      {certificationsContent.map((val, i) => (
        <div className="col-lg-6" key={i}>
          <div className="certification-item">
            <div className="certification-badge">
              <img src={val.badgeUrl} alt={`${val.title} badge`} style={{ width: '100px', height: 'auto' }} />
            </div>
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