import { Terminal, Github, Twitter, Globe, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const footerSections = [
    {
      title: 'Learn',
      links: ['Getting Started', 'Documentation', 'Tutorials', 'Best Practices'],
    },
    {
      title: 'Community',
      links: ['Forums', 'Discord', 'Reddit', 'Stack Overflow'],
    },
    {
      title: 'Contribute',
      links: ['Source Code', 'Bug Reports', 'Feature Requests', 'Donations'],
    },
    {
      title: 'Resources',
      links: ['Download', 'Release Notes', 'System Requirements', 'Migration Guide'],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-muted/50 border-t border-border/50 backdrop-blur-xl overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 group cursor-pointer">
              <Terminal className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                InstallSuite
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 group-hover:text-foreground transition-colors duration-300">
              Pick a stack, install it all at once, and stay in control with auditable, community‑driven updates.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 rounded-lg bg-background/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 cursor-pointer group hover:scale-110">
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <div className="p-2 rounded-lg bg-background/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 cursor-pointer group hover:scale-110">
                <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <div className="p-2 rounded-lg bg-background/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 cursor-pointer group hover:scale-110">
                <Globe className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
            </div>
          </div>

          {/* Links sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="group">
              <h3 className="font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block hover:underline decoration-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            {/* © 2024 Linux Community. Licensed under GPL v2. */}
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline decoration-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline decoration-primary">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline decoration-primary">
              Code of Conduct
            </a>
            
            {/* Scroll to top button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="rounded-full bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:scale-110 transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
