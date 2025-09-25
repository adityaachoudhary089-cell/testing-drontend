import React, { useState } from 'react';
import { Menu, Terminal, User, BookOpen } from 'lucide-react';
import { DarkModeToggle } from './DarkModeToggle.jsx';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useNavigate } from 'react-router-dom';

// Utility to get first letter of username
function getFirstLetter(name) {
  return name ? name.charAt(0).toUpperCase() : 'U';
}

export function Header() {
  const navigate = useNavigate();
  const navItems = ['Features', 'Distributions', 'Upcoming','Documentation', 'Download'];

  // Check authentication state
  const isAuthenticated = localStorage.getItem('authToken');
  const userData = localStorage.getItem('userData');
  const user = userData ? JSON.parse(userData) : null;

  // State to show/hide user card
  const [showUserCard, setShowUserCard] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    window.location.reload();
  };
  
  // Enhanced navigation function
    // Enhanced navigation function
  const handleNavClick = (e, item) => {
    e.preventDefault();
    
    // Handle route navigation for specific items
    if (item === 'Upcoming') {
      navigate('/upcoming');
      return;
    }
    
    if (item === 'Documentation') {
      navigate('/documentation');
      return;
    }
    
    // MODIFIED: Download button now redirects to /app-store when authenticated
    if (item === 'Download') {
      const isAuthenticated = localStorage.getItem('authToken');
      if (isAuthenticated) {
        // Redirect to /app-store (same as Try Install Suite button)
        navigate('/app-store');
      } else {
        // If not authenticated, redirect to login
        navigate('/login');
      }
      return;
    }
    
    // Handle smooth scrolling for home page sections
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // If element doesn't exist, navigate to home first then scroll
      navigate('/');
      setTimeout(() => {
        const homeElement = document.getElementById(item.toLowerCase());
        if (homeElement) {
          homeElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo with hover effect */}
        <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => navigate('/')}>
          <Terminal className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
          <span className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
            InstallSuite
          </span>
        </div>
        
        {/* Desktop Navigation with glassy hover effects */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item)}
              className="relative text-sm transition-all duration-300 hover:text-primary group px-3 py-2 rounded-lg hover:bg-primary/5 hover:backdrop-blur-sm"
            >
              <span className="relative z-10">{item}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
            </a>
          ))}
        </nav>
        
        {/* Right side actions */}
        <div className="flex items-center space-x-3">
          <div className="transform hover:scale-110 transition-transform duration-200">
            <DarkModeToggle />
          </div>
          
          {/* Conditional buttons based on auth state */}
          {!isAuthenticated ? (
            // Show original buttons when NOT logged in
            <div className="hidden md:flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/signup')}
                className="relative px-4 py-2 text-sm bg-background/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 group overflow-hidden hover:scale-105"
              >
                <BookOpen className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/login')}
                className="relative px-4 py-2 text-sm border-2 backdrop-blur-md bg-background/40 hover:bg-background/60 hover:shadow-xl hover:shadow-primary/15 transform hover:scale-105 transition-all duration-300 border-white/20 hover:border-white/30 group overflow-hidden"
              >
                <User className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative z-10">Sign In</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          ) : (
            // Show circular avatar and logout when logged in
            <div className="hidden md:flex items-center space-x-3 relative">
              <button 
                title={`Logged in as ${user?.username || 'User'}`}
                className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm hover:scale-110 transition-transform duration-200 cursor-pointer shadow-lg relative"
                onClick={() => setShowUserCard(!showUserCard)}
              >
                {getFirstLetter(user?.username)}
              </button>
              
              {/* User ID Card - Shows on click */}
              {showUserCard && (
                <div
                  className="absolute top-full right-0 mt-2 w-48 bg-card/90 backdrop-blur-md border border-border rounded-lg p-4 shadow-xl z-50"
                  onMouseLeave={() => setShowUserCard(false)}
                >
                  <h4 className="text-sm font-semibold mb-2 text-foreground">User Information</h4>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p><strong>ID:</strong> {user?.id || user?._id || 'N/A'}</p>
                    <p><strong>Username:</strong> {user?.username || 'N/A'}</p>
                    <p><strong>Email:</strong> {user?.email || 'N/A'}</p>
                  </div>
                </div>
              )}
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleLogout}
                className="relative px-4 py-2 text-sm border-2 backdrop-blur-md bg-background/40 hover:bg-background/60 hover:shadow-xl hover:shadow-primary/15 transform hover:scale-105 transition-all duration-300 border-white/20 hover:border-white/30 group overflow-hidden"
              >
                <User className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative z-10">Logout</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          )}
          
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="sm"
                className="hover:bg-primary/10 hover:backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-background/95 backdrop-blur-xl border-l border-border/50">
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, item)}
                    className="text-sm transition-all duration-300 hover:text-primary hover:translate-x-2 px-3 py-2 rounded-lg hover:bg-primary/5"
                  >
                    {item}
                  </a>
                ))}
                {/* Mobile buttons */}
                <div className="border-t border-border/50 pt-4 mt-4 space-y-2">
                  {!isAuthenticated ? (
                    <>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => navigate('/signup')}
                        className="w-full justify-start bg-background/50 hover:bg-primary/10 transition-all duration-300"
                      >
                        <BookOpen className="mr-2 h-4 w-4" />
                        Get Started
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => navigate('/login')}
                        className="w-full justify-start border border-border/50 hover:border-primary/30 hover:bg-primary/5"
                      >
                        <User className="mr-2 h-4 w-4" />
                        Sign In
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center space-x-2 px-3 py-2">
                        <button 
                          title={`Logged in as ${user?.username || 'User'}`}
                          className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs"
                          onClick={() => setShowUserCard(!showUserCard)}
                        >
                          {getFirstLetter(user?.username)}
                        </button>
                        <span className="text-sm text-muted-foreground">
                          {user?.username || 'User'}
                        </span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={handleLogout}
                        className="w-full justify-start border border-border/50 hover:border-primary/30 hover:bg-primary/5"
                      >
                        <User className="mr-2 h-4 w-4" />
                        Logout
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;

















