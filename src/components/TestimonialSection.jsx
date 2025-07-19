import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonials = [
  {
    quote: "The content is highly structured, with practical examples and resources. Whether you're new to the field or looking to sharpen your skills, this provides everything you need to become a confident digital marketer.",
    name: 'Sandeep H.',
    title: 'Digital Marketing Strategist',
    avatar: '',
    initials: 'SH',
  },
  {
    quote: 'Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.',
    name: 'William Wachlin',
    title: 'Partner Account Manager at AWS',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    quote: 'Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.',
    name: 'Alvin Lim',
    title: 'CTO at Dimensional',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    quote: 'The courses are comprehensive and well-structured. I was able to transition careers thanks to what I learned here.',
    name: 'Maria Garcia',
    title: 'Frontend Developer',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
  },
  {
    quote: 'Best investment in my career. The practical knowledge helped me get promoted within 6 months.',
    name: 'James Wilson',
    title: 'Senior Product Manager',
    avatar: '',
    initials: 'JW',
  },
  {
    quote: 'The instructors are top-notch and the content is always up-to-date with industry standards.',
    name: 'Lisa Chen',
    title: 'UX Designer',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const visibleCards = 3;
  const totalSlides = Math.ceil(testimonials.length / visibleCards);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => 
      (prev - 1 + totalSlides) % totalSlides
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => 
      (prev + 1) % totalSlides
    );
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      handlePrev();
    }
  };

  useEffect(() => {
    if (!isAutoPlaying) {
      const timer = setTimeout(() => setIsAutoPlaying(true), 10000);
      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  return (
    <section className="bg-indigo-900 py-16 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Learners Say
        </h2>

        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 shadow-lg backdrop-blur-sm"
            aria-label="Previous testimonials"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 shadow-lg backdrop-blur-sm"
            aria-label="Next testimonials"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials
                      .slice(slideIndex * visibleCards, slideIndex * visibleCards + visibleCards)
                      .map((testimonial, index) => (
                        <TestimonialCard 
                          key={`${slideIndex}-${index}`} 
                          testimonial={testimonial} 
                          isActive={currentIndex === slideIndex}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white w-6' : 'bg-white/30'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div className={`bg-white text-gray-800 rounded-xl p-6 shadow-lg h-full transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <span className="text-4xl text-indigo-500 font-serif leading-none">"</span>
          <p className="text-gray-700 mt-2 mb-4">{testimonial.quote}</p>
        </div>
        
        <div className="mt-auto flex items-center">
          {testimonial.avatar ? (
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name} 
              className="w-12 h-12 rounded-full object-cover border-2 border-indigo-200"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
              {testimonial.initials}
            </div>
          )}
          <div className="ml-4">
            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;