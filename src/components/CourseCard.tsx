// src/components/CourseCard.tsx

import React from 'react';
import './CourseCard.scss';

interface Course {
  id: number;
  title: string;
  tags: string[];
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <div className="tags">
        {course.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;

