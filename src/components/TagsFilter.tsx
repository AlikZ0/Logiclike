// src/components/TagsFilter.tsx

import React from 'react';
import './TagsFilter.scss';

interface TagsFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagSelection: (selectedTags: string[]) => void;
}

const TagsFilter: React.FC<TagsFilterProps> = ({ tags, selectedTags, onTagSelection }) => {
  const handleTagClick = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    onTagSelection(newSelectedTags);
  };

  return (
    <div className="tags-filter">
      {tags.map(tag => (
        <button
          key={tag}
          className={`tag-button ${selectedTags.includes(tag) ? 'selected' : ''}`}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagsFilter;
