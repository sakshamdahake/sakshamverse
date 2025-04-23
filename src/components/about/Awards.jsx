import React, { useState } from "react";

const awardsContent = [
  {
    title: "High Five - Individual Award",
    organization: "Persistent systems Ltd.",
    year: "2023",
    description: "Received High Five - Individual Award from Senior engineering partner at Persistent systems Ltd. for showing excellent work behaviour in every aspect of my Job. Got appreciation for my hard work, dedication, and for demonstrating company's values of responsible and confident",
    awardImage: process.env.PUBLIC_URL + "/images/awards/high-five-award.jpg"
  },
  {
    title: "Bravo - Team Award",
    organization: "Persistent systems Ltd.",
    year: "2022",
    description: "Recieved Bravo - Team Award from Head of Learning and Development Deptartment at Persistent systems Ltd. for recognition of my consistent performance in Trainings and excellent participation.",
    awardImage: process.env.PUBLIC_URL + "/images/awards/bravo-award.jpg"
  },
  {
    title: "Silver Medal - NPTEL: The Joy of computing using Python",
    organization: "NPTEL",
    year: "2020",
    description: "Received Silver Medal for scoring 86% in the NPTEL: The Joy of computing using Python course.",
    awardImage: process.env.PUBLIC_URL + "/images/awards/nptel-silver-medal.jpg"
  },
];

const Awards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);
  const [imageError, setImageError] = useState(false);

  const openModal = (award) => {
    console.log('Opening modal for award:', award);
    console.log('Image path:', award.awardImage);
    setSelectedAward(award);
    setIsModalOpen(true);
    setImageError(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAward(null);
    setImageError(false);
  };

  const handleImageError = () => {
    console.error('Error loading image:', selectedAward?.awardImage);
    setImageError(true);
  };

  return (
    <>
      <div className="row">
        {awardsContent.map((val, i) => (
          <div className="col-lg-6" key={i}>
            <div className="award-item">
              {val.badgeUrl && (
                <div className="award-badge">
                  <img src={val.badgeUrl} alt={`${val.title} badge`} style={{ width: '100px', height: 'auto' }} />
                </div>
              )}
              <h4>{val.title}</h4>
              <h5>{val.organization}</h5>
              <p>{val.year}</p>
              <p>{val.description}</p>
              <button 
                onClick={() => openModal(val)}
                className="button"
              >
                <span className="button-text">View Award</span>
                <span className="button-icon fa fa-eye"></span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedAward && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
          onClick={closeModal}
        >
          <div 
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              maxWidth: '90%',
              maxHeight: '90%',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#333'
              }}
            >
              ×
            </button>
            {imageError ? (
              <div style={{ 
                padding: '20px', 
                textAlign: 'center',
                color: '#666'
              }}>
                <i className="fa fa-exclamation-circle" style={{ fontSize: '48px', marginBottom: '10px' }}></i>
                <p>Unable to load the award image.</p>
                <p>Please check if the image exists at: {selectedAward.awardImage}</p>
              </div>
            ) : (
              <img 
                src={selectedAward.awardImage} 
                alt={selectedAward.title}
                onError={handleImageError}
                style={{
                  maxWidth: '100%',
                  maxHeight: '80vh',
                  display: 'block'
                }}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Awards; 