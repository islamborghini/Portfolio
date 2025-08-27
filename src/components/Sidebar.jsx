import { motion } from "framer-motion";
import { 
  FaHome, 
  FaUser, 
  FaBriefcase, 
  FaTrophy, 
  FaCode, 
  FaProjectDiagram, 
  FaEnvelope,
  FaBars,
  FaTimes,
  FaGripVertical
} from "react-icons/fa";
import { useState, useRef, useEffect, useCallback } from "react";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(256);
  const [isResizing, setIsResizing] = useState(false);
  const sidebarRef = useRef(null);
  const startXRef = useRef(0);
  const startWidthRef = useRef(256);

  const minWidth = 64;
  const maxWidth = 400;

  const handleMouseDown = useCallback((e) => {
    setIsResizing(true);
    startXRef.current = e.clientX;
    startWidthRef.current = sidebarWidth;
    e.preventDefault();
  }, [sidebarWidth]);

  const handleMouseMove = useCallback((e) => {
    if (!isResizing) return;
    
    const deltaX = e.clientX - startXRef.current;
    const newWidth = Math.max(minWidth, Math.min(maxWidth, startWidthRef.current + deltaX));
    
    setSidebarWidth(newWidth);
    
    // Auto-collapse/expand based on width (with debouncing)
    if (newWidth < 150 && !isCollapsed) {
      setIsCollapsed(true);
    } else if (newWidth >= 150 && isCollapsed) {
      setIsCollapsed(false);
    }
  }, [isResizing, isCollapsed]);

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'ew-resize';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isResizing, handleMouseMove, handleMouseUp]);

  const menuItems = [
    { id: 'hero', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'achievements', label: 'Achievements', icon: FaTrophy },
    { id: 'technologies', label: 'Skills', icon: FaCode },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ];

  return (
    <div
      ref={sidebarRef}
      style={{ width: `${sidebarWidth}px` }}
      className={`bg-gradient-to-b from-gray-900 to-gray-800 border-r border-gray-700 flex flex-col relative ${
        isResizing ? 'select-none transition-none' : 'transition-all duration-200'
      }`}
    >
      {/* Toggle button */}
      <button
        onClick={() => {
          const newCollapsed = !isCollapsed;
          setIsCollapsed(newCollapsed);
          setSidebarWidth(newCollapsed ? minWidth : 256);
        }}
        className="absolute -right-3 top-6 bg-gray-800 border border-gray-600 rounded-full p-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors z-10"
      >
        {isCollapsed ? <FaBars size={14} /> : <FaTimes size={14} />}
      </button>

      {/* Logo/Title area */}
      <div className="p-6 border-b border-gray-700">
        {!isCollapsed && sidebarWidth >= 150 && (
          <div className="animate-fade-in">
            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Islam Assanov
            </h2>
            <p className="text-sm text-gray-400 mt-1">Full Stack Developer</p>
          </div>
        )}
        {(isCollapsed || sidebarWidth < 150) && (
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-sm">IA</span>
          </div>
        )}
      </div>

      {/* Navigation menu */}
      <nav className="flex-1 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center px-6 py-3 text-left transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } ${isCollapsed || sidebarWidth < 150 ? 'justify-center px-3' : ''}`}
                >
                  <IconComponent 
                    className={`${isCollapsed || sidebarWidth < 150 ? 'text-xl' : 'text-lg mr-3'} ${
                      isActive ? 'text-white' : 'group-hover:text-cyan-400'
                    }`} 
                  />
                  {(!isCollapsed && sidebarWidth >= 150) && (
                    <span className="font-medium">{item.label}</span>
                  )}
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute right-0 w-1 h-8 bg-white rounded-l-full" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-gray-700">
        {(!isCollapsed && sidebarWidth >= 150) && (
          <div className="text-xs text-gray-400 text-center animate-fade-in">
            <p>© 2025 Islam Assanov</p>
            <p className="mt-1">Portfolio</p>
          </div>
        )}
        {(isCollapsed || sidebarWidth < 150) && (
          <div className="text-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mx-auto"></div>
          </div>
        )}
      </div>

      {/* Resize Handle */}
      <div
        className={`absolute top-0 right-0 w-1 h-full bg-transparent hover:bg-cyan-400 transition-colors duration-200 cursor-ew-resize group ${
          isResizing ? 'bg-cyan-400' : ''
        }`}
        onMouseDown={handleMouseDown}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <FaGripVertical className="text-cyan-400 text-xs" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
