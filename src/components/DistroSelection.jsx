import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Package, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './ImageWithFallback';
import { appStoreService } from '../services/appStoreAPI';

export function DistroSelection({ onBack, onSelectDistro }) {
  const [distributions, setDistributions] = useState([]);
  const [selectedDistro, setSelectedDistro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDistributions();
  }, []);

  const loadDistributions = async () => {
    try {
      const distrosData = await appStoreService.getDistributions();
      
      // Convert backend data to your UI format with RHEL as separate card
      const formattedDistros = Object.entries(distrosData).map(([id, config]) => {
        const colorMap = {
          ubuntu: {
            color: 'bg-orange-500',
            hoverGlow: 'from-orange-300/90 via-amber-400/80 to-orange-600/90',
            gradientFrom: 'from-orange-400/40',
            gradientTo: 'to-amber-500/40'
          },
          debian: {
            color: 'bg-red-500',
            hoverGlow: 'from-red-300/90 via-pink-400/80 to-rose-600/90',
            gradientFrom: 'from-red-400/40',
            gradientTo: 'to-pink-500/40'
          },
          fedora: {
            color: 'bg-blue-500',
            hoverGlow: 'from-blue-300/90 via-sky-400/80 to-indigo-600/90',
            gradientFrom: 'from-blue-400/40',
            gradientTo: 'to-indigo-500/40'
          },
          centos: {
            color: 'bg-purple-500',
            hoverGlow: 'from-purple-300/90 via-violet-400/80 to-fuchsia-600/90',
            gradientFrom: 'from-purple-400/40',
            gradientTo: 'to-fuchsia-500/40'
          },
          // ADD RHEL AS COMPLETELY SEPARATE CARD WITH RED STYLING
          rhel: {
            color: 'bg-red-600',
            hoverGlow: 'from-red-400/90 via-rose-500/80 to-red-700/90',
            gradientFrom: 'from-red-500/40',
            gradientTo: 'to-rose-600/40'
          },
          opensuse: {
            color: 'bg-green-500',
            hoverGlow: 'from-green-300/90 via-emerald-400/80 to-lime-600/90',
            gradientFrom: 'from-green-400/40',
            gradientTo: 'to-emerald-500/40'
          },
          arch: {
            color: 'bg-blue-600',
            hoverGlow: 'from-cyan-300/90 via-sky-400/80 to-blue-600/90',
            gradientFrom: 'from-sky-400/40',
            gradientTo: 'to-blue-500/40'
          },
          manjaro: {
            color: 'bg-yellow-500',
            hoverGlow: 'from-lime-300/90 via-green-400/80 to-emerald-600/90',
            gradientFrom: 'from-green-400/40',
            gradientTo: 'to-emerald-500/40'
          },
          mint: {
            color: 'bg-green-600',
            hoverGlow: 'from-lime-300/90 via-green-400/80 to-green-600/90',
            gradientFrom: 'from-lime-400/40',
            gradientTo: 'to-green-500/40'
          },
          elementary: {
            color: 'bg-indigo-500',
            hoverGlow: 'from-blue-300/90 via-indigo-400/80 to-sky-600/90',
            gradientFrom: 'from-blue-400/40',
            gradientTo: 'to-sky-500/40'
          },
          kali: {
            color: 'bg-gray-800',
            hoverGlow: 'from-blue-400/90 via-cyan-500/80 to-slate-700/90',
            gradientFrom: 'from-blue-400/40',
            gradientTo: 'to-slate-600/40'
          },
          popos: {
            color: 'bg-orange-600',
            hoverGlow: 'from-orange-300/90 via-amber-400/80 to-yellow-600/90',
            gradientFrom: 'from-orange-400/40',
            gradientTo: 'to-yellow-500/40'
          }
        };

        return {
          id,
          name: config.name,
          imageUrl: `/logos/${id}.png`, // RHEL will use /logos/rhel.png
          ...colorMap[id] || colorMap.ubuntu
        };
      });

      setDistributions(formattedDistros);
    } catch (error) {
      console.error('Failed to load distributions:', error);
      alert('Failed to load distributions. Make sure appstore-server.js is running on port 3000');
    } finally {
      setLoading(false);
    }
  };

  // REST OF YOUR COMPONENT CODE STAYS EXACTLY THE SAME
  // (All the beautiful UI, animations, cards, etc.)

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading distributions...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ALL YOUR EXISTING HEADER CODE STAYS EXACTLY THE SAME */}
      <motion.header
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="ghost" onClick={onBack} className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </Button>
              </motion.div>
              
              <div className="flex items-center space-x-3">
                <motion.div
                  className="p-3 rounded-xl bg-primary/10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Package className="h-8 w-8 text-primary" />
                </motion.div>
                <div>
                  <h1 className="text-3xl font-bold">Choose Your Distribution</h1>
                  <p className="text-muted-foreground">
                    Select a Linux distribution to get started
                  </p>
                </div>
              </div>
            </div>
            {selectedDistro && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Button 
                  onClick={() => onSelectDistro(selectedDistro.id)}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                >
                  Continue with {selectedDistro.name}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-12">
        {/* ALL YOUR EXISTING GRID CODE STAYS EXACTLY THE SAME */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 lg:gap-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {distributions.map((distro, index) => (
              <motion.div
                key={distro.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.02
                }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  transition: { 
                    duration: 0.2,
                    ease: "easeOut",
                    type: "tween"
                  }
                }}
                whileTap={{ 
                  scale: 0.97,
                  transition: { duration: 0.1 }
                }}
                className="cursor-pointer relative group"
                onClick={() => setSelectedDistro(distro)}
              >
                {/* ALL YOUR EXISTING CARD STYLING STAYS EXACTLY THE SAME */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${distro.hoverGlow} rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl`} />
                
                <div className={`absolute -inset-1 bg-gradient-to-r ${distro.hoverGlow} rounded-2xl opacity-0 group-hover:opacity-60 transition-all duration-700 blur-sm`} />
                
                <Card className={`
                  relative h-full transition-all duration-500 overflow-hidden group
                  bg-gradient-to-br from-white/10 via-white/5 to-transparent
                  backdrop-blur-xl border border-white/20
                  shadow-[0_8px_32px_rgba(0,0,0,0.12)]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
                  hover:border-white/40 hover:backdrop-blur-2xl
                  dark:bg-gradient-to-br dark:from-white/5 dark:via-white/2 dark:to-transparent
                  dark:border-white/10 dark:hover:border-white/30
                  ${selectedDistro?.id === distro.id 
                    ? 'ring-4 ring-primary/50 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent shadow-[0_20px_60px_rgba(0,0,0,0.25)] border-primary/40' 
                    : ''
                  }
                `}>
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/5] h-full">
                      
                      <div className="absolute inset-0 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-card/50 backdrop-blur-2xl" />
                        
                        <div className="absolute inset-[1px] rounded-[calc(var(--radius)-1px)] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                        
                        <div className={`absolute inset-0 bg-gradient-to-br ${distro.gradientFrom} ${distro.gradientTo} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                        
                        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <ImageWithFallback
                            src={distro.imageUrl}
                            alt={`${distro.name} Linux Distribution`}
                            className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 ease-out drop-shadow-2xl filter brightness-110"
                          />
                        </div>
                        
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-600 ease-out" />
                        </div>
                        
                        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:20px_20px] pointer-events-none" />
                      </div>
                      
                      {selectedDistro?.id === distro.id && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent backdrop-blur-sm flex items-center justify-center"
                        >
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                            className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full p-3 shadow-lg border border-white/20"
                          >
                            <Package className="h-6 w-6" />
                          </motion.div>
                        </motion.div>
                      )}
                      
                      <div className="absolute inset-0 flex flex-col justify-between p-4">
                        <div className="flex-1" />
                        
                        <div className="relative">
                          <motion.h3 
                            className="text-white font-bold text-base lg:text-lg text-center drop-shadow-2xl"
                            whileHover={{ 
                              scale: 1.05,
                              transition: { duration: 0.2 }
                            }}
                          >
                            {distro.name}
                          </motion.h3>
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent -z-10 rounded-lg blur-sm" />
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 rounded-lg ring-1 ring-white/10 group-hover:ring-2 group-hover:ring-white/30 transition-all duration-200" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ALL YOUR EXISTING PREVIEW CODE STAYS EXACTLY THE SAME */}
        <AnimatePresence>
          {selectedDistro && (
            <motion.div
              key={selectedDistro.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="mt-16"
            >
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-primary/2 to-transparent backdrop-blur-xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.1)]">
                <CardContent className="p-0">
                  <div className="flex items-center justify-center py-12">
                    <div className="text-center space-y-4">
                      <motion.div
                        key={`${selectedDistro.id}-preview`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-lg ring-2 ring-white/10"
                      >
                        <div className="relative w-full h-full bg-card/50 backdrop-blur-2xl flex items-center justify-center">
                          <div className="absolute inset-[1px] rounded-[calc(var(--radius)-1px)] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                          
                          <div className={`absolute inset-0 bg-gradient-to-br ${selectedDistro.gradientFrom} ${selectedDistro.gradientTo} opacity-80`} />
                          
                          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/15 to-transparent" />
                          
                          <ImageWithFallback
                            key={selectedDistro.imageUrl}
                            src={selectedDistro.imageUrl}
                            alt={selectedDistro.name}
                            className="relative z-10 w-12 h-12 object-contain drop-shadow-lg filter brightness-110"
                          />
                          
                          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:20px_20px] pointer-events-none" />
                        </div>
                      </motion.div>
                      
                      <div>
                        <h2 className="text-2xl font-bold mb-2">Ready to install apps for</h2>
                        <h3 className="text-3xl font-bold text-primary">{selectedDistro.name}</h3>
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="pt-4"
                      >
                        <Button 
                          onClick={() => onSelectDistro(selectedDistro.id)}
                          size="lg"
                          className="bg-primary hover:bg-primary/90 text-lg px-12 py-3 shadow-lg"
                        >
                          Continue to App Store
                          <ChevronRight className="ml-3 h-6 w-6" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
