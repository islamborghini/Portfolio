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
  FaTimes
} from "react-icons/fa";
import { useState } from "react";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

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
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        isCollapsed ? 'w-16' : 'w-64'
      } bg-gradient-to-b from-gray-900 to-gray-800 border-r border-gray-700 flex flex-col transition-all duration-300 relative`}
    >
      {/* Toggle button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 bg-gray-800 border border-gray-600 rounded-full p-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors z-10"
      >
        {isCollapsed ? <FaBars size={14} /> : <FaTimes size={14} />}
      </button>

      {/* Logo/Title area */}
      <div className="p-6 border-b border-gray-700">
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Islam Assanov
            </h2>
            <p className="text-sm text-gray-400 mt-1">Full Stack Developer</p>
          </motion.div>
        )}
        {isCollapsed && (
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
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
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center px-6 py-3 text-left transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } ${isCollapsed ? 'justify-center px-3' : ''}`}
                >
                  <IconComponent 
                    className={`${isCollapsed ? 'text-xl' : 'text-lg mr-3'} ${
                      isActive ? 'text-white' : 'group-hover:text-cyan-400'
                    }`} 
                  />
                  {!isCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute right-0 w-1 h-8 bg-white rounded-l-full"
                    />
                  )}
                </motion.button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-gray-700">
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs text-gray-400 text-center"
          >
            <p>© 2025 Islam Assanov</p>
            <p className="mt-1">Portfolio</p>
          </motion.div>
        )}
        {isCollapsed && (
          <div className="text-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mx-auto"></div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Sidebar;
