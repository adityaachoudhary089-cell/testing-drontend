import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Distributions() {
  const distributions = [
    {
      name: 'Ubuntu',
      description: 'User-friendly and perfect for beginners. Great community support and regular releases.',
      category: 'Beginner Friendly',
      color: 'bg-orange-500',
      gradient: 'from-orange-500/25 to-amber-500/25',
      glowGradient: 'from-orange-500/40 to-amber-500/40',
      borderColor: 'border-orange-500/30',
    },
    {
      name: 'Fedora',
      description: 'Cutting-edge features with stability. Sponsored by Red Hat for innovation.',
      category: 'Latest Features',
      color: 'bg-blue-500',
      gradient: 'from-blue-500/25 to-indigo-500/25',
      glowGradient: 'from-blue-500/40 to-indigo-500/40',
      borderColor: 'border-blue-500/30',
    },
    {
      name: 'Debian',
      description: 'Rock-solid stability and security. The foundation for many other distributions.',
      category: 'Stable',
      color: 'bg-red-500',
      gradient: 'from-red-500/25 to-rose-500/25',
      glowGradient: 'from-red-500/40 to-rose-500/40',
      borderColor: 'border-red-500/30',
    },
    {
      name: 'Arch Linux',
      description: 'Minimalist and customizable. Build your system exactly how you want it.',
      category: 'Advanced',
      color: 'bg-cyan-500',
      gradient: 'from-cyan-500/25 to-teal-500/25',
      glowGradient: 'from-cyan-500/40 to-teal-500/40',
      borderColor: 'border-cyan-500/30',
    },
    {
      name: 'openSUSE',
      description: 'Professional-grade with excellent tools. Great for enterprise and development.',
      category: 'Enterprise',
      color: 'bg-green-500',
      gradient: 'from-green-500/25 to-emerald-500/25',
      glowGradient: 'from-green-500/40 to-emerald-500/40',
      borderColor: 'border-green-500/30',
    },
    {
      name: 'Linux Mint',
      description: 'Elegant and easy to use. Perfect transition from other operating systems.',
      category: 'User Friendly',
      color: 'bg-lime-500',
      gradient: 'from-lime-500/25 to-green-500/25',
      glowGradient: 'from-lime-500/40 to-green-500/40',
      borderColor: 'border-lime-500/30',
    },
  ];

  return (
    <section id="distributions" className="py-20 relative overflow-hidden">
      {/* Enhanced background with glass-like effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/15 backdrop-blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Choose Your Distribution
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Linux comes in many flavors. Find the perfect distribution 
            that matches your needs and experience level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {distributions.map((distro, index) => (
            <div key={index} className="relative group">
              {/* Enhanced hover glow effect */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${distro.glowGradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              <Card className={`relative bg-card/50 backdrop-blur-2xl border ${distro.borderColor} shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-700 cursor-pointer group-hover:scale-[1.02] group-hover:-translate-y-2 overflow-hidden`}>
                {/* Glass-like inner border */}
                <div className="absolute inset-[1px] rounded-[calc(var(--radius)-1px)] bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
                
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${distro.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                {/* Glass reflection effect */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-500">
                      {distro.name}
                    </CardTitle>
                    <Badge 
                      variant="secondary" 
                      className="text-xs bg-background/60 backdrop-blur-md border border-white/20 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-500"
                    >
                      {distro.category}
                    </Badge>
                  </div>
                  <div className={`w-full h-1 rounded-full ${distro.color} transition-all duration-700 group-hover:h-2 group-hover:shadow-lg group-hover:shadow-current/50`}></div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base group-hover:text-foreground transition-colors duration-500">
                    {distro.description}
                  </CardDescription>
                </CardContent>
                
                {/* Enhanced shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1500 ease-out"></div>
                </div>

                {/* Subtle noise texture for glass effect */}
                <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:20px_20px] pointer-events-none"></div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground hover:text-foreground transition-colors duration-500 cursor-pointer inline-block hover:scale-105 transform transition-transform duration-300">
            Download apps for your chosen distribution and start your Linux journey today!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Distributions;
