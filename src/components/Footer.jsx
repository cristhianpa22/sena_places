import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-400 font-sans text-sm selection:bg-emerald-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="flex items-start space-x-4">
          <svg className="w-16 h-16 text-white flex-shrink-0" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="20" r="8" />
            <path d="M25 40 h50 v6 h-50 z" />
            <path d="M35 52 L20 85 h8 L40 60 L52 85 h8 L45 52 z" />
            <path d="M65 52 L60 65 L68 85 h8 L65 52 z" />
          </svg>
          
          <div className="space-y-1">
            <h2 className="text-white font-bold text-base tracking-wide uppercase">
              <span className="text-[#39a900]">SENA</span> PLACES
            </h2>
            <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
              Your guide to know and explore the places in our training center.
            </p>
          </div>
        </div>

        <div className="md:pl-12">
          <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
            QUICK LINKS
          </h3>
          <ul className="space-y-2 text-xs">
            <li className="flex items-center space-x-2">
              <span className="text-gray-500 text-[10px]">&bull;</span>
              <a href="#home" className="hover:text-white transition-colors">Home</a>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-gray-500 text-[10px]">&bull;</span>
              <a href="#places" className="hover:text-white transition-colors">Places</a>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-gray-500 text-[10px]">&bull;</span>
              <a href="#programs" className="hover:text-white transition-colors">programs</a>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-gray-500 text-[10px]">&bull;</span>
              <a href="#regulations" className="hover:text-white transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
            FOLLOW US
          </h3>
          <div className="flex space-x-3">
            
            <a href="#" className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[#111111] hover:bg-gray-200 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.72-1 1-1h2V2h-3a4 4 0 00-4 4v2z"/></svg>
            </a>
            
            <a href="#" className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[#111111] hover:bg-gray-200 transition-colors">
              <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>

            <a href="#" className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[#111111] hover:bg-gray-200 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>

            <a href="#" className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[#111111] hover:bg-gray-200 transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

      </div>

      
      <div className="bg-[#1a1a1a] py-3 text-center text-[11px] text-gray-500 border-t border-neutral-800">
        &copy; 2026 SENA ADSO .Ficha 3293689.
      </div>
    </footer>
  );
}