import React from 'react';
import './Testimonial.css';
import quotesIcon from '/src/assets/quotes.svg';

export default function Testimonial ({ name = "", image = "", company = "", jobTitle = "", children }) {
  if(image) {
    return (
      <div className="testimonial-container">
        <div className="testimonial">
          <div className="image-container"><img src={image} className="testimonial-image" /></div>
          <div className="testimonial-content">
            <div className="quotes-copntainer">
              <img src={quotesIcon} alt='quotes icon' className="quotes-icon" />
            </div>
            <p className="testimonial-text">{children}</p>
            { name && <h3 className="testimonial-name">{name}</h3> }
            {(company || jobTitle) && <div className="company">{company && `${company}`}{(company && jobTitle) && `, `}{jobTitle && `${jobTitle}`}</div>}
          </div>
        </div>
      </div>
    )
  }


  // TODO: finish no image version
  return (
    <div className="testimonial-container no-image">
      <div className="testimonial">
        <div className="testimonial-content">
          <p className="testimonial-text">{children}</p>
          <h3 className="testimonial-name">{name} {jobTitle && image && `/ ${jobTitle}`}</h3>
        </div>
      </div>
    </div>
  );  
};

