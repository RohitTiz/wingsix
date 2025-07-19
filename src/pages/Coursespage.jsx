import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Brain, 
  Shield, 
  Clock, 
  Users, 
  Award, 
  Play, 
  Star, 
  ArrowRight, 
  BookOpen, 
  CheckCircle, 
  Filter,
  Search
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import AuthSection from '../components/AuthSection';

const CoursePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Courses', icon: BookOpen },
    { id: 'web', name: 'Web Development', icon: Code },
    { id: 'mobile', name: 'Mobile Development', icon: Smartphone },
    { id: 'data', name: 'Data Science', icon: Database },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud Computing', icon: Globe }
  ];

  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      category: 'web',
      level: 'Beginner to Advanced',
      duration: '6 months',
      students: '2,500+',
      rating: 4.9,
      price: '$499',
      originalPrice: '$799',
      instructor: 'Sarah Johnson',
      image: 'https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=Full+Stack+Web+Dev',
      description: 'Master modern web development with React, Node.js, and MongoDB',
      features: ['React & Redux', 'Node.js & Express', 'MongoDB', 'Authentication', 'Deployment'],
      popular: true
    },
    {
      id: 2,
      title: 'Python Data Science Bootcamp',
      category: 'data',
      level: 'Intermediate',
      duration: '4 months',
      students: '1,800+',
      rating: 4.8,
      price: '$399',
      originalPrice: '$599',
      instructor: 'Dr. Mike Chen',
      image: 'https://via.placeholder.com/400x250/059669/FFFFFF?text=Python+Data+Science',
      description: 'Complete data science pipeline from data collection to machine learning',
      features: ['Pandas & NumPy', 'Data Visualization', 'Machine Learning', 'SQL', 'Projects'],
      popular: false
    },
    {
      id: 3,
      title: 'Mobile App Development',
      category: 'mobile',
      level: 'Beginner',
      duration: '5 months',
      students: '1,200+',
      rating: 4.7,
      price: '$549',
      originalPrice: '$749',
      instructor: 'Alex Rodriguez',
      image: 'https://via.placeholder.com/400x250/DC2626/FFFFFF?text=Mobile+App+Dev',
      description: 'Build native iOS and Android apps with React Native',
      features: ['React Native', 'Navigation', 'APIs', 'Push Notifications', 'App Store'],
      popular: true
    },
    {
      id: 4,
      title: 'AI & Machine Learning',
      category: 'ai',
      level: 'Advanced',
      duration: '8 months',
      students: '950+',
      rating: 4.9,
      price: '$699',
      originalPrice: '$999',
      instructor: 'Dr. Emily Watson',
      image: 'https://via.placeholder.com/400x250/7C3AED/FFFFFF?text=AI+Machine+Learning',
      description: 'Deep dive into artificial intelligence and machine learning algorithms',
      features: ['TensorFlow', 'PyTorch', 'Neural Networks', 'Computer Vision', 'NLP'],
      popular: false
    },
    {
      id: 5,
      title: 'Cybersecurity Essentials',
      category: 'cybersecurity',
      level: 'Intermediate',
      duration: '3 months',
      students: '750+',
      rating: 4.6,
      price: '$349',
      originalPrice: '$499',
      instructor: 'James Wilson',
      image: 'https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Cybersecurity',
      description: 'Protect systems and networks from digital threats',
      features: ['Network Security', 'Ethical Hacking', 'Risk Assessment', 'Compliance', 'Tools'],
      popular: false
    },
    {
      id: 6,
      title: 'Cloud Computing with AWS',
      category: 'cloud',
      level: 'Intermediate',
      duration: '4 months',
      students: '1,100+',
      rating: 4.8,
      price: '$449',
      originalPrice: '$649',
      instructor: 'Rachel Kumar',
      image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=AWS+Cloud',
      description: 'Master cloud architecture and services with Amazon Web Services',
      features: ['EC2 & S3', 'Lambda', 'RDS', 'CloudFormation', 'DevOps'],
      popular: true
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const CourseCard = ({ course }) => (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {course.popular && (
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          🔥 Popular
        </div>
      )}
      
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <button 
              onClick={() => setSelectedCourse(course)}
              className="w-full bg-white/90 backdrop-blur-sm text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-white transition-all duration-300 flex items-center justify-center"
            >
              <Play className="w-4 h-4 mr-2" />
              View Details
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            {course.level}
          </span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-600">{course.rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

        <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {course.students}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">{course.price}</span>
            <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );

  const CourseModal = ({ course, onClose }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-64 object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300"
          >
            ✕
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">{course.title}</h2>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-1 font-medium text-gray-600">{course.rating}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Overview</h3>
              <p className="text-gray-600 mb-6">{course.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-500 mr-3" />
                  <span><strong>Duration:</strong> {course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-green-500 mr-3" />
                  <span><strong>Students:</strong> {course.students}</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-purple-500 mr-3" />
                  <span><strong>Level:</strong> {course.level}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h3>
              <ul className="space-y-2 mb-6">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">{course.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{course.originalPrice}</span>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Save {((parseFloat(course.originalPrice.slice(1)) - parseFloat(course.price.slice(1))) / parseFloat(course.originalPrice.slice(1)) * 100).toFixed(0)}%
                  </span>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Enroll Now - Limited Time Offer!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
    <AuthSection/>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-6 py-24 mx-auto max-w-7xl">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Courses
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your career with industry-leading courses designed by experts. 
              From beginner to advanced, we've got you covered.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Animated background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-12 bg-white">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="py-16 px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div 
              key={course.id}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <BookOpen className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        <div className="px-6 mx-auto max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of students who have already transformed their careers with our courses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
              View All Courses
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105">
              Contact Advisor
              <Users className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Course Modal */}
      {selectedCourse && (
        <CourseModal 
          course={selectedCourse} 
          onClose={() => setSelectedCourse(null)} 
        />
      )}
    </div>
    <Footer/>
    <ChatWidget/>
    </>
  );
};

export default CoursePage;