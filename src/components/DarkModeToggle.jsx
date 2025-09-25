import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleDarkMode}
      className="relative p-2 rounded-lg bg-background/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 group overflow-hidden"
    >
      <div className="relative z-10">
        {isDark ? (
          <Sun className="h-4 w-4 transition-all duration-500 group-hover:rotate-180 group-hover:scale-110" />
        ) : (
          <Moon className="h-4 w-4 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Button>
  );
}
