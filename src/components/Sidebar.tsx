
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface SectionLink {
  title: string;
  path: string;
}

interface SidebarSectionProps {
  title: string;
  links: SectionLink[];
  isActive: boolean;
  isOpen: boolean;
  toggleSection: () => void;
  currentPath: string;
}

const SidebarSection = ({ 
  title, 
  links, 
  isActive, 
  isOpen,
  toggleSection,
  currentPath
}: SidebarSectionProps) => {
  return (
    <div className="mb-4">
      <button 
        className={`flex items-center justify-between w-full p-2 text-left font-medium rounded-md ${
          isActive ? 'bg-pink text-zinc-800' : 'hover:bg-pink/20'
        }`}
        onClick={toggleSection}
      >
        <span>{title}</span>
        {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </button>
      
      {isOpen && (
        <div className="ml-4 mt-2 space-y-1">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block p-2 rounded-md ${
                currentPath === link.path ? 'bg-pink/30 font-medium' : 'hover:bg-pink/10'
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const sections = [
    {
      title: "HTML Basics",
      key: "html",
      links: [
        { title: "Introduction to HTML", path: "/html" },
        { title: "Setting up HTML Files", path: "/html/setup" },
        { title: "Common HTML Tags", path: "/html/tags" },
        { title: "Semantics & Accessibility", path: "/html/semantics" },
        { title: "HTML Exercise", path: "/html/exercise" },
        { title: "Pop Quiz", path: "/html/quiz" },
      ]
    },
    {
      title: "CSS Basics",
      key: "css",
      links: [
        { title: "Introduction to CSS", path: "/css" },
        { title: "External CSS Files", path: "/css/external" },
        { title: "Selectors, Classes & IDs", path: "/css/selectors" },
        { title: "Styling Properties", path: "/css/styling" },
        { title: "CSS Exercise", path: "/css/exercise" },
        { title: "Pop Quiz", path: "/css/quiz" },
      ]
    },
    {
      title: "JavaScript Basics",
      key: "javascript",
      links: [
        { title: "Introduction to JavaScript", path: "/javascript" },
        { title: "Adding Scripts", path: "/javascript/scripts" },
        { title: "Variables & Functions", path: "/javascript/basics" },
        { title: "DOM Manipulation", path: "/javascript/dom" },
        { title: "JavaScript Exercise", path: "/javascript/exercise" },
        { title: "Pop Quiz", path: "/javascript/quiz" },
      ]
    },
    {
      title: "React Basics",
      key: "react-basics",
      links: [
        { title: "Introduction to React", path: "/react-basics" },
        { title: "Setting Up VS Code", path: "/react-basics/setup" },
        { title: "Terminal Basics", path: "/react-basics/terminal" },
        { title: "Create React App", path: "/react-basics/create-react-app" },
        { title: "Components & Props", path: "/react-basics/components" },
        { title: "React Exercise", path: "/react-basics/exercise" },
        { title: "Pop Quiz", path: "/react-basics/quiz" },
      ]
    },
    {
      title: "React Intermediate",
      key: "react-intermediate",
      links: [
        { title: "State Management", path: "/react-intermediate" },
        { title: "React Hooks", path: "/react-intermediate/hooks" },
        { title: "Folder Structure", path: "/react-intermediate/structure" },
        { title: "Working with Forms", path: "/react-intermediate/forms" },
        { title: "API Connection", path: "/react-intermediate/api" },
        { title: "Final Project", path: "/react-intermediate/project" },
        { title: "Pop Quiz", path: "/react-intermediate/quiz" },
      ]
    }
  ];

  // Determine which section is active based on the current path
  const getActiveSection = () => {
    if (currentPath.includes('/html')) return 'html';
    if (currentPath.includes('/css')) return 'css';
    if (currentPath.includes('/javascript')) return 'javascript';
    if (currentPath.includes('/react-basics')) return 'react-basics';
    if (currentPath.includes('/react-intermediate')) return 'react-intermediate';
    return '';
  };

  const activeSection = getActiveSection();
  
  // State to track which sections are expanded
  const [openSections, setOpenSections] = useState([activeSection]);
  
  const toggleSection = (sectionKey: string) => {
    if (openSections.includes(sectionKey)) {
      setOpenSections(openSections.filter(key => key !== sectionKey));
    } else {
      setOpenSections([...openSections, sectionKey]);
    }
  };

  return (
    <aside className="bg-sidebar w-64 h-[calc(100vh-61px)] hidden md:block overflow-auto fixed top-[61px]">
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Learning Modules</h3>
          <p className="text-sm text-zinc-500">Track your progress through our course.</p>
        </div>
        
        {sections.map((section) => (
          <SidebarSection
            key={section.key}
            title={section.title}
            links={section.links}
            isActive={activeSection === section.key}
            isOpen={openSections.includes(section.key)}
            toggleSection={() => toggleSection(section.key)}
            currentPath={currentPath}
          />
        ))}
        
        <div className="mt-8 pt-6 border-t border-pink/30">
          <Link to="/resources">
            <Button variant="ghost" className="w-full justify-start">
              Resources & Cheatsheets
            </Button>
          </Link>
          <Link to="/glossary">
            <Button variant="ghost" className="w-full justify-start">
              Web Dev Glossary
            </Button>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
