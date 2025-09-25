import { Shield, Zap, Code2, Users, Lock, Monitor } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Rock-Solid Security',
      description: 'Verified sources, integrity checks, and permission‑aware installs keep devices clean and safe.',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Select once, install everything in one pass—minutes, not hours.',
      gradient: 'from-yellow-500/20 to-orange-500/20',
      iconColor: 'text-yellow-400'
    },
    {
      icon: Code2,
      title: 'Open Source',
      description: 'Clear install steps, no bundled bloat, full visibility and control.',
      gradient: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-400'
    },
    {
      icon: Users,
      title: 'Strong Community',
      description: 'Curated app packs for devs, creators, gamers, and everyday setups.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'No telemetry, no tracking—only what’s needed to install.',
      gradient: 'from-red-500/20 to-rose-500/20',
      iconColor: 'text-red-400'
    },
    {
      icon: Monitor,
      title: 'Hardware Freedom',
      description: 'Consistent setups on fresh PCs, VMs, and rebuilds.',
      gradient: 'from-indigo-500/20 to-blue-500/20',
      iconColor: 'text-indigo-400'
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Reasons to Choose Install Suite.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover why this platform is the fastest way to select, install, and manage 
            multiple apps in one go—with smart AI guidance for every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-card/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Glass reflection effect */}
              <div className="absolute inset-[1px] rounded-[calc(1rem-1px)] bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-muted/20 backdrop-blur-sm flex items-center justify-center ${feature.iconColor} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-white/10`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground">
            Join over <span className="text-primary font-semibold">100 million users</span> who trust Linux for their computing needs
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
