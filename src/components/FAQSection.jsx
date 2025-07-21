import React, { useState } from 'react';

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
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="px-6 py-20 max-w-7xl mx-auto font-sans text-xl">
      <h2 className="text-6xl font-bold text-center mb-16 text-gray-800">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Question list */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center px-8 py-6 cursor-pointer border-b border-gray-100 transition-all duration-200 ${
                activeIndex === index
                  ? 'bg-gradient-to-r from-[#bde6ea] via-[#e8c3d3] to-[#b29ab2]'
                  : 'hover:bg-gray-50'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full mr-5 transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-[#e8c3d3]'
                    : 'bg-[#bde6ea]'
                }`}
              />
              <span
                className={`flex-1 text-lg ${
                  activeIndex === index
                    ? 'font-semibold text-gray-800'
                    : 'text-gray-700'
                }`}
              >
                {faq.question}
              </span>
              <span className={`text-2xl ${
                activeIndex === index ? 'text-gray-700' : 'text-gray-400'
              }`}>
                ›
              </span>
            </div>
          ))}
        </div>

        {/* Right: Answer display with even softer gradient */}
        <div className="flex-1 bg-gradient-to-br from-[#bde6ea] via-[#e8c3d3] to-[#b29ab2] border border-white/20 rounded-2xl p-10 shadow-lg backdrop-blur-md">
          <h4 className="text-3xl font-bold text-gray-800 mb-6 drop-shadow-sm">
            {faqs[activeIndex].question}
          </h4>
          <p className="text-gray-700 leading-relaxed text-lg">
            {faqs[activeIndex].answer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
