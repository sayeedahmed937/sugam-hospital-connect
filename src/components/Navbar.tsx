
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { List, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl md:text-3xl font-bold text-hospital-700">
          Sugam Hospital
        </Link>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleMenu}
          className="md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <List size={24} />}
        </Button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={cn(
                "px-4 py-2 text-lg rounded-md font-medium transition-colors",
                location.pathname === item.path 
                  ? "bg-hospital-100 text-hospital-700" 
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto py-2 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={cn(
                  "px-4 py-4 text-xl border-b border-gray-100 font-medium",
                  location.pathname === item.path 
                    ? "text-hospital-700 font-semibold" 
                    : "text-gray-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
