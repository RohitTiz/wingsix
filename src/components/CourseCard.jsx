import React from 'react';

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col h-full">
    {/* Image Section */}
    <div className="relative p-2">
      <img 
        src={course.image || "/api/placeholder/300/200"} 
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      {/* Course Type Badge */}
      <div className="absolute top-2 right-2">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          course.type === 'live' ? 'bg-red-100 text-red-800' :
          course.type === 'recorded' ? 'bg-blue-100 text-blue-800' :
          'bg-green-100 text-green-800'
        }`}>
          {course.type === 'live' ? 'LIVE' : course.type === 'recorded' ? 'RECORDED' : 'FREE'}
        </span>
      </div>
    </div>

    {/* Content Section */}
    <div className="p-4 flex flex-col flex-grow">
      {/* Course Title */}
      <h3 className="font-bold text-lg mb-2 text-gray-800">{course.title}</h3>
      
      {/* Course Description */}
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
      
      {/* Duration and Rating */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-gray-500">{course.duration}</span>
        <div className="flex items-center space-x-1">
          <span className="text-yellow-500">★</span>
          <span className="text-sm font-medium">{course.rating}</span>
        </div>
      </div>

      {/* Spacer to push divider to bottom */}
      <div className="flex-grow"></div>

      {/* Fixed Divider Line */}
      <div className="border-t border-gray-200 w-full"></div>

      {/* Price and Enroll Button - Fixed Position */}
      <div className="flex justify-between items-center pt-3">
        <span className="text-2xl font-bold text-blue-600">
          {course.price === 0 ? 'Free' : `₹${course.price}`}
        </span>
        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
          Enroll Now
        </button>
      </div>
    </div>
  </div>
);

export default CourseCard;