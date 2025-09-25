import { Download, Github, Star } from 'lucide-react';
import { Button } from './ui/button';
import { useTypingEffect } from './hooks/useTypingEffect.jsx';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const typingSteps = [
    { text: 'sudo apt update', type: 'command', delay: 500 },
    { text: 'Reading package lists... Done', type: 'output', delay: 500 },
    { text: 'Building dependency tree... Done', type: 'output', delay: 500 },
    { text: 'Reading state information... Done', type: 'output', delay: 200 },
    { text: 'neofetch', type: 'command', delay: 500 },
    { text: 'OS: Linux x86_64\nKernel: 6.5.0\nUptime: 7 days, 3 hours\nShell: bash 5.1.16\nTerminal: gnome-terminal', type: 'output', delay: 1500 },
    { text: 'echo "Welcome to Linux!"', type: 'command', delay: 600 },
    { text: 'Welcome to Linux!', type: 'output', delay: 200 },
    
  ];





  const { currentStepIndex, currentText, showCursor, completedSteps } = useTypingEffect(typingSteps, 80);

  const navigate = useNavigate();
  const handleTryInstall = () => {
  const isAuthenticated = localStorage.getItem('authToken');
  if (isAuthenticated) {
    navigate('/app-store');
  } else {
    navigate('/login');
  }
};



  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Enhanced background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/12 backdrop-blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                The Power of{' '}
                <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Open Source
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Experience the speed of installing every essential app in one open, 
                transparent flow—then get back to work faster.
              </p>
            </div>

            {/* CTA Buttons with enhanced glassy effects */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary hover:shadow-2xl hover:shadow-primary/30 transform hover:scale-105 transition-all duration-500 backdrop-blur-md border border-white/10"
                onClick={handleTryInstall}
              >
                <Download className="mr-2 h-4 w-4" />
                Try Install Suite
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.open('https://github.com/aditya8950958')}
                className="w-full sm:w-auto border-2 backdrop-blur-md bg-background/40 hover:bg-background/60 hover:shadow-xl hover:shadow-primary/15 transform hover:scale-105 transition-all duration-500 border-white/20 hover:border-white/30"
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
            </div>

            {/* Stats with hover effects */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-1 hover:scale-105 transition-transform duration-300 cursor-pointer">
                {/* <Star className="h-4 w-4 text-yellow-500 fill-current" /> */}
                {/* <span className="text-sm">50K+ Stars</span> */}
              </div>
              <div className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer">
                {/* 100M+ Active Users */}
              </div>
              <div className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer">
                {/* 30+ Years Strong */}
              </div>
            </div>
          </div>

          {/* Terminal mockup with enhanced glassy effects */}
          <div className="lg:pl-8">
            <div className="relative group">
              {/* Enhanced glow effect */}
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative bg-card/40 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl shadow-black/10 overflow-hidden transform group-hover:scale-[1.01] transition-all duration-700">
                {/* Glass-like inner border */}
                <div className="absolute inset-[1px] rounded-[calc(var(--radius)+0.25rem-1px)] bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
                
                {/* Terminal header with glassy effect */}
                <div className="bg-muted/60 backdrop-blur-md px-4 py-3 flex items-center space-x-2 border-b border-white/10 relative">
                  {/* Header glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                  
                  <div className="flex space-x-1 relative z-10">
                    <div className="w-3 h-3 bg-red-500 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg"></div>
                  </div>
                  <span className="text-sm text-muted-foreground ml-4 relative z-10">terminal</span>
                </div>
                
                {/* Terminal content with typing effect */}
                <div className="bg-black/90 backdrop-blur-sm text-green-400 p-6 font-mono text-sm min-h-[300px] relative">
                  {/* Terminal content glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
                  
                  <div className="space-y-2 relative z-10">
                    {/* Completed steps */}
                    {completedSteps.map((step, index) => (
                      <div key={index}>
                        {step.type === 'command' ? (
                          <div>
                            <span className="text-blue-400">user@linux</span>
                            <span className="text-white">:</span>
                            <span className="text-blue-400">~</span>
                            <span className="text-white">$ </span>
                            <span className="text-green-400">{step.text}</span>
                          </div>
                        ) : (
                          <div className="text-gray-300 whitespace-pre-line pl-4">
                            {step.text}
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* Current typing step */}
                    {currentStepIndex < typingSteps.length && (
                      <div>
                        {typingSteps[currentStepIndex].type === 'command' ? (
                          <div>
                            <span className="text-blue-400">user@linux</span>
                            <span className="text-white">:</span>
                            <span className="text-blue-400">~</span>
                            <span className="text-white">$ </span>
                            <span className="text-green-400">{currentText}</span>
                            {showCursor && <span className="text-green-400 animate-pulse">_</span>}
                          </div>
                        ) : (
                          <div className="text-gray-300 whitespace-pre-line pl-4">
                            {currentText}
                            {showCursor && <span className="text-gray-300 animate-pulse">_</span>}
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Final cursor when done */}
                    {currentStepIndex >= typingSteps.length && (
                      <div className="mt-4">
                        <span className="text-blue-400">user@linux</span>
                        <span className="text-white">:</span>
                        <span className="text-blue-400">~</span>
                        <span className="text-white">$ </span>
                        <span className="animate-pulse text-green-400">_</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add default export for easier importing
export default Hero;
