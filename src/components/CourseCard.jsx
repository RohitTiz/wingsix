import React from 'react';

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
    <div className="relative">
      <img 
        src={course.image || "/api/placeholder/300/200"} 
        alt={course.title}
        className="w-full h-48 object-cover"
      />
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
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2 text-gray-800">{course.title}</h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{course.duration}</span>
        <div className="flex items-center space-x-1">
          <span className="text-yellow-500">★</span>
          <span className="text-sm font-medium">{course.rating}</span>
        </div>
      </div>
      <div className="mt-3">
        <span className="text-2xl font-bold text-blue-600">
          {course.price === 0 ? 'Free' : `₹${course.price}`}
        </span>
      </div>
    </div>
  </div>
);

export default CourseCard;