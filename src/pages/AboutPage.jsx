import React, { useState, useEffect } from 'react';
import { Users, BookOpen, Award, Target, Zap, Globe, Star, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import AuthSection from '../components/AuthSection';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '10,000+', label: 'Students Trained', icon: Users },
    { number: '500+', label: 'Courses Offered', icon: BookOpen },
    { number: '95%', label: 'Placement Rate', icon: Award },
    { number: '50+', label: 'Industry Partners', icon: Globe }
  ];

  const features = [
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from industry veterans with 10+ years of real-world experience'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Courses',
      description: 'From beginner to advanced levels across multiple technologies'
    },
    {
      icon: Award,
      title: 'Guaranteed Internships',
      description: 'Every student gets hands-on experience with our partner companies'
    },
    {
      icon: Target,
      title: 'Career Support',
      description: 'Dedicated placement assistance and career guidance'
    }
  ];

  const tabContent = {
    mission: {
      title: 'Our Mission',
      content: 'To bridge the gap between academic learning and industry requirements by providing world-class education, practical training, and career opportunities that empower students to excel in their chosen fields.'
    },
    vision: {
      title: 'Our Vision',
      content: 'To become the leading educational platform that transforms lives through technology education, creating a skilled workforce ready for the digital future.'
    },
    values: {
      title: 'Our Values',
      content: 'Excellence in education, integrity in practice, innovation in approach, and commitment to student success. We believe in fostering a culture of continuous learning and growth.'
    }
  };

  return (
    <>
    <AuthSection/>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-[#566afc] to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-6 py-24 mx-auto max-w-7xl">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              About CodeBrain
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Empowering the next generation of tech professionals through cutting-edge education, 
              industry expertise, and guaranteed career opportunities.
            </p>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#566afc]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className={`text-center group transition-all duration-700 delay-${index * 100} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-r from-blue-500 to-[#566afc] rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-[#566afc] bg-clip-text text-transparent">Code Brain</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our comprehensive approach to tech education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className={`group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 delay-${index * 100} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-6 bg-gradient-to-r from-blue-500 to-[#566afc] rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mission/Vision/Values Section */}
      <div className="py-20 bg-white">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 to-[#566afc] bg-clip-text text-transparent">Foundation</span>
              </h2>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-gray-100 rounded-2xl p-2">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 capitalize ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-blue-500 to-[#566afc] text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-gradient-to-r from-blue-50 to-[#566afc]/10 rounded-3xl p-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  {tabContent[activeTab].content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-900 via-[#566afc] to-indigo-900">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join thousands of successful graduates who started their journey with us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
                Explore Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105">
                Apply for Internship
                <Star className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">EduTech Pro</h3>
            <p className="text-gray-400">
              Building tomorrow's tech leaders today
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutPage;