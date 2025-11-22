import React from 'react';

function SelectableCard({ label, isSelected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative w-full text-left p-4 rounded-xl border-2 transition-all duration-200 group
        flex items-start gap-3
        ${
          isSelected
            ? 'border-blue-500 bg-blue-50 shadow-md transform scale-[1.01]'
            : 'border-gray-100 bg-white hover:border-blue-200 hover:bg-gray-50 hover:shadow-sm'
        }
      `}
    >
      <div
        className={`
          mt-0.5 flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors
          ${
            isSelected
              ? 'bg-blue-500 border-blue-500'
              : 'bg-white border-gray-300 group-hover:border-blue-400'
          }
        `}
      >
        {isSelected && (
          <svg
            className="w-3.5 h-3.5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>

      <span
        className={`
          text-sm font-medium leading-tight transition-colors
          ${
            isSelected
              ? 'text-blue-900'
              : 'text-gray-600 group-hover:text-gray-900'
          }
        `}
      >
        {label}
      </span>
    </button>
  );
}

export default SelectableCard;
