import React, { useState, useEffect } from 'react';
import '../index.css';
import BCL from '../assets/bcl.png';
import ALM from '../assets/alm.png';
import TSC from '../assets/tsc.png';

const testimonials = [
  {
    companyLogo: BCL,
    text: '"EnterpriseOne has transformed how we manage our business! From inventory to payroll, everything is now seamless and efficient."'
  },

  {
    companyLogo: ALM,
    text: '"Switching to EnterpriseOne was our best decision this year. The software is user-friendly and insightful."'
  },

  {
    companyLogo: TSC,
    text: '"With EnterpriseOne, tracking our processes has become much easier. We’ve saved time and significantly reduced errors in our system."'

    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const total = testimonials.length;
  
    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % total);
      }, 5000);
      return () => clearInterval(timer);
    }, [total]);
  
    const prevTestimonial = () => {
      setIndex((prev) => (prev - 1 + total) % total);
    };
  
    const nextTestimonial = () => {
      setIndex((prev) => (prev + 1) % total);
    };
  
    const current = testimonials[index];
  
    return (
      <div className="testimonial-container">
            <h2 className="testimonial-heading">Testimonials</h2>
            <div className="testimonial-box">
                <button className="arrow left" onClick={prevTestimonial}>&lt;</button>
        
                <div className="testimonial-content">
                    <img src={current.companyLogo} alt="Company Logo" className="testimonial-logo" />
                    <p className="testimonial-text">{current.text}</p>
                </div>
        
                <button className="arrow right" onClick={nextTestimonial}>&gt;</button>
            </div>
      </div>
    );
  };
  
  export default Testimonials;