import React from "react";

export function Card({ image, title, description , linkText, linkUrl}) {
  return (
    <div className="max-w-xs bg-red rounded-2xl shadow-md overflow-hidden border border-gray-100 font-sans">
      <div className="relative h-40">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute -bottom-6 left-6 bg-emerald-600 p-3 rounded-full shadow-md border-4 border-white flex items-center justify-center w-12 h-12">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            ></path>
          </svg>
        </div>
      </div>
      <div className="pt-8 pb-6 px-6">
        <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
        <a
          href={linkUrl}
          className="inline-flex items-center mt-4 text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors"
        >
          {linkText}
          <span className="ml-1 text-base">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
