import React, { useState } from 'react';

const MultiSelectDropdown = ({ options, value, onChange, placeholder, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (selectedOption) => {
    const isSelected = value.includes(selectedOption);

    if (isSelected) {
      // Remove the option if it is already selected
      onChange(value.filter((option) => option !== selectedOption));
    } else {
      // Add the option if it is not selected
      onChange([...value, selectedOption]);
    }
  };

  return (
    <div className={`relative h-[40px] sm:h-[60px] ${className} text-[14px] sm:text-[16px]`}>
      <div
        className="h-full flex items-center border border-[#c9c9c9] px-4 py-2 cursor-pointer"
        onClick={handleToggle}
      >
        {value.length > 0 ? (
          value.map((val, index) => (
            <span key={index} className="mr-2 bg-gray-200 px-2 py-1 rounded">
              {options.find(option => option.value === val)?.label || val}
            </span>
          ))
        ) : (
          <span className="text-[#9CA3AF]">{placeholder}</span>
        )}
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full border border-[#c9c9c9] bg-white z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${value.includes(option.value) ? 'bg-gray-200' : ''}`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
