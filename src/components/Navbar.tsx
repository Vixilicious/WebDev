
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react'; 
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink to-orange flex items-center justify-center">
            <span className="font-bold text-white">WD</span>
          </div>
          <span className="text-xl font-bold gradient-text hidden sm:inline-block">WebDev Beginner</span>
        </Link>
        
        <div className="hidden md:flex space-x-1">
          <Link to="/html" className="px-3 py-2 rounded-md hover:bg-pink/30 transition-colors">HTML</Link>
          <Link to="/css" className="px-3 py-2 rounded-md hover:bg-pink/30 transition-colors">CSS</Link>
          <Link to="/javascript" className="px-3 py-2 rounded-md hover:bg-pink/30 transition-colors">JavaScript</Link>
          <Link to="/react-basics" className="px-3 py-2 rounded-md hover:bg-pink/30 transition-colors">React Basics</Link>
          <Link to="/react-intermediate" className="px-3 py-2 rounded-md hover:bg-pink/30 transition-colors">React Intermediate</Link>
        </div>
        
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md pb-2 animate-fade-in">
          <div className="flex flex-col space-y-1 px-4">
            <Link 
              to="/html" 
              className="px-3 py-2 rounded-md hover:bg-pink/30 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              HTML
            </Link>
            <Link 
              to="/css" 
              className="px-3 py-2 rounded-md hover:bg-pink/30 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CSS
            </Link>
            <Link 
              to="/javascript" 
              className="px-3 py-2 rounded-md hover:bg-pink/30 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              JavaScript
            </Link>
            <Link 
              to="/react-basics" 
              className="px-3 py-2 rounded-md hover:bg-pink/30 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              React Basics
            </Link>
            <Link 
              to="/react-intermediate" 
              className="px-3 py-2 rounded-md hover:bg-pink/30 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              React Intermediate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
