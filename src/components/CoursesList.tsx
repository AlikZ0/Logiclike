
// src/components/CoursesList.tsx

import React from 'react';
import './CoursesList.scss';
import CourseCard from './CourseCard';

interface Course {
  id: number;
  title: string;
  tags: string[];
}

interface CoursesListProps {
  courses: Course[];
}

const CoursesList: React.FC<CoursesListProps> = ({ courses }) => {
  return (
    <div className="courses-list">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesList;
