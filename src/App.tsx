import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import CoursesList from './components/CoursesList';
import TagsFilter from './components/TagsFilter';

interface Course {
  id: number;
  title: string;
  tags: string[];
}

const App: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    axios.get('https://logiclike.com/docs/courses.json')
      .then(response => {
        const coursesData = response.data;
        setCourses(coursesData);
        setFilteredCourses(coursesData);

        // Получение всех уникальных тегов
        const uniqueTags = Array.from(new Set(coursesData.flatMap((course: Course) => course.tags) as string[]));
        setTags(uniqueTags);
      })
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  const handleTagSelection = (selectedTags: string[]) => {
    setSelectedTags(selectedTags);
    if (selectedTags.length === 0) {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(courses.filter(course => selectedTags.some(tag => course.tags.includes(tag))));
    }
  };

  return (
    <div className="App">
      <TagsFilter tags={tags} selectedTags={selectedTags} onTagSelection={handleTagSelection} />
      <CoursesList courses={filteredCourses} />
    </div>
  );
}

export default App;
