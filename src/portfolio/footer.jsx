import React from "react";

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 border-t border-white/10">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl rotate-45"></div>
                <div className="absolute inset-1 bg-black rounded-lg rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm header">S</span>
                </div>
              </div>
              <div>
                <p className="text-xl header  font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                  Sujal Shah
                </p>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Sujal Shah. All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-1">Designed and built with ❤️ using React.js and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
