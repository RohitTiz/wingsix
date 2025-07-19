import React from 'react';

const WhyJoinSection = () => {
  const programs = [
    {
      title: 'Code Warriors Bootcamp',
      description: 'Master programming through game development and projects.',
      age: '12–18 years',
      image: '/whyjoinus/one.png', // ✅ LOCAL IMAGE
      bgColor: 'bg-green-200',
    },
    {
      title: 'AI Explorers Lab',
      description: 'Intro to AI and machine learning through fun challenges.',
      age: '14+ years',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
      bgColor: 'bg-purple-200',
    },
    {
      title: 'Web Design Studio',
      description: 'Learn to design beautiful websites with UI/UX basics.',
      age: '10–16 years',
      image: '/whyjoinus/two.png', // ✅ LOCAL IMAGE
      bgColor: 'bg-yellow-200',
    },
    {
      title: 'Robotics Playground',
      description: 'Build real robots and program them to solve challenges.',
      age: '9–14 years',
      image: '/whyjoinus/three.png', // ✅ LOCAL IMAGE
      bgColor: 'bg-blue-200',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">Why Join Us?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="rounded-3xl shadow-sm hover:shadow-md transition bg-gray-50 flex flex-col justify-between"
            >
              <div className="p-5">
                <div className="inline-block text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full mb-3">
                  {program.age}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
                <p className="text-sm text-gray-600">{program.description}</p>
              </div>

              <div className={`p-0 rounded-b-3xl overflow-hidden ${program.bgColor}`}>
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-36 object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-black text-white hover:bg-gray-800 transition font-medium py-3 px-8 rounded-full text-sm">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;

