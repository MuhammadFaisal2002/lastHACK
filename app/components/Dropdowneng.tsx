'use client';

import { useState } from 'react';

export default function Dropdowneng() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center  text-white "
      >
        ENG <span >&#9662;</span>
      </button>
      {isOpen && (
        <ul className="absolute mt-2 bg-white border rounded shadow w-24 text-[#272343]">
          {['ENG', 'ESP', 'FRA'].map((lang) => (
            <li
              key={lang}
              className="px-2 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}