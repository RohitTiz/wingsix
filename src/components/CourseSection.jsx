import React, { useState } from 'react';
import { ChevronDown, Filter, BookOpen, Video, Radio } from 'lucide-react';
import CourseCard from './CourseCard';
import courses from '../data/courses.json';

const CourseSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('all');
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  // Category filters
  const categories = ['All', 'AI/ML', 'Python', 'Java', 'Web Development'];
  
  // Type filters
  const typeFilters = [
    { value: 'all', label: 'All Courses', icon: BookOpen },
    { value: 'recorded', label: 'Recorded Courses', icon: Video },
    { value: 'live', label: 'Live Courses', icon: Radio }
  ];

  // Filter logic
  const filteredCourses = courses.filter(course => {
    const categoryMatch = activeFilter === 'All' || course.category === activeFilter;
    const typeMatch = typeFilter === 'all' || course.type === typeFilter || course.type === 'all';
    return categoryMatch && typeMatch;
  });

  const selectedTypeFilter = typeFilters.find(filter => filter.value === typeFilter);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Our Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover a wide range of courses designed to help you master new skills and advance your career
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            {/* Type Filter (Top Left) */}
            <div className="relative">
              <button
                onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <Filter className="w-4 h-4 text-gray-600" />
                <selectedTypeFilter.icon className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">
                  {selectedTypeFilter.label}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                  showTypeDropdown ? 'rotate-180' : ''
                }`} />
              </button>
              
              {showTypeDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {typeFilters.map((filter) => (
                    <button
                      key={filter.value}
                      onClick={() => {
                        setTypeFilter(filter.value);
                        setShowTypeDropdown(false);
                      }}
                      className={`w-full flex items-center space-x-2 px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                        typeFilter === filter.value ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <filter.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{filter.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <BookOpen className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No courses found
            </h3>
            <p className="text-gray-500">
              Try adjusting your filters to see more courses
            </p>
          </div>
        )}

        {/* Explore More Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            Explore All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;