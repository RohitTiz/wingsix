import React, { useState } from 'react';

// FAQ data array
const faqs = [
  {
    question: 'What is a Payment Gateway?',
    answer:
      'A payment gateway is a technology used to accept debit or credit card purchases from customers.',
  },
  {
    question: 'Do I need to pay to Instapay even when there is no transaction going on in my business?',
    answer:
      'No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!',
  },
  {
    question: 'What platforms does ACME payment gateway support?',
    answer:
      'ACME supports all major e-commerce platforms like Shopify, WooCommerce, and Magento.',
  },
  {
    question: 'Does ACME provide international payments support?',
    answer:
      'Yes, ACME allows businesses to accept payments from international customers in multiple currencies.',
  },
  {
    question: 'Is there any setup fee or annual maintenance fee that I need to pay regularly?',
    answer:
      'There are no setup or annual maintenance fees. You only pay per transaction.',
  },
];

const FAQSection = () => {
  // State to keep track of the currently active question index
  const [activeIndex, setActiveIndex] = useState(1);

  // Section wrapper style
  const sectionStyle = {
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Roboto, sans-serif',
  };

  // Heading style
  const titleStyle = {
    fontSize: '2.2rem',
    fontWeight: '700',
    marginBottom: '40px',
    textAlign: 'center',
  };

  // FAQ layout container
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
  };

  // Sidebar container for questions
  const listStyle = {
    flex: '1 1 300px',
    minWidth: '280px',
    border: '1px solid #eee',
    borderRadius: '8px',
    backgroundColor: '#fff',
  };

  // Style for each question item in the list
  const listItemStyle = (index) => ({
    padding: '18px 20px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: index !== faqs.length - 1 ? '1px solid #eee' : 'none',
    cursor: 'pointer',
    backgroundColor: activeIndex === index ? '#f9f9ff' : '#fff',
    transition: 'background-color 0.3s ease',
  });

  // Indicator dot beside question
  const indicatorStyle = (index) => ({
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: activeIndex === index ? '#4338ca' : '#c7d2fe',
    marginRight: '16px',
    flexShrink: 0,
  });

  // Text style for each question in the list
  const questionStyle = (index) => ({
    flex: 1,
    fontWeight: activeIndex === index ? '500' : '400',
    fontSize: '0.95rem',
    color: activeIndex === index ? '#1f1f1f' : '#333',
  });

  // Right-side container for selected answer
  const answerContainerStyle = {
    flex: '1 1 320px',
    minWidth: '280px',
    padding: '24px',
    backgroundColor: '#f9f9ff',
    borderRadius: '12px',
    fontFamily: 'Inter, sans-serif',
  };

  // Style for selected question title
  const questionTitleStyle = {
    fontWeight: '600',
    fontSize: '1.1rem',
    marginBottom: '10px',
    color: '#1f1f1f',
  };

  // Style for answer text
  const answerTextStyle = {
    color: '#444',
    lineHeight: '1.6',
    fontSize: '0.95rem',
  };

  return (
    <section style={sectionStyle}>
      {/* Section heading */}
      <h2 style={titleStyle}>Frequently Asked Questions</h2>

      {/* Main container with list and answer section */}
      <div style={containerStyle}>
        {/* Left: Question list */}
        <div style={listStyle}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)} // Update selected question
              style={listItemStyle(index)}
            >
              <span style={indicatorStyle(index)}></span>
              <span style={questionStyle(index)}>{faq.question}</span>
              <span style={{ color: '#999', fontSize: '1rem' }}>›</span>
            </div>
          ))}
        </div>

        {/* Right: Answer display */}
        <div style={answerContainerStyle}>
          <h4 style={questionTitleStyle}>{faqs[activeIndex].question}</h4>
          <p style={answerTextStyle}>{faqs[activeIndex].answer}</p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
