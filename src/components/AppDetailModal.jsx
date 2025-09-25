import { motion, AnimatePresence } from 'framer-motion';
import { Download, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './ImageWithFallback';
import { getAppImage } from '../utils/appImages';

export function AppDetailModal({ 
  app, 
  isSelected, 
  isInstalled, 
  onClose, 
  onSelectionChange 
}) {
  if (!app) return null;

  const imageUrl = app.imageUrl || getAppImage(app.category, app.id);

  const handleToggleSelection = () => {
    onSelectionChange(app.id, !isSelected);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-card border border-border rounded-xl w-full max-w-4xl max-h-[80vh] overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side - Image */}
            <div className="relative h-64 md:h-auto">
              <ImageWithFallback
                src={imageUrl}
                alt={app.displayName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h2 className="text-2xl font-bold text-white">{app.displayName}</h2>
                <p className="text-white/80">{app.developer}</p>
              </div>
              
              {/* Close button */}
              <div className="absolute top-4 right-4">
                <Button 
                  onClick={onClose} 
                  variant="ghost" 
                  size="sm"
                  className="bg-black/50 text-white hover:bg-black/70"
                >
                  ×
                </Button>
              </div>

              {/* Selection indicator */}
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute top-4 left-4 bg-primary text-primary-foreground rounded-full p-2"
                >
                  <CheckCircle className="h-5 w-5" />
                </motion.div>
              )}
            </div>

            {/* Right side - Details */}
            <div className="p-6 overflow-y-auto max-h-[50vh] md:max-h-none">
              <div className="space-y-4">
                {/* App info */}
                <div>
                  <div className="flex items-center space-x-4 text-sm mb-4">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">★</span>
                      <span>{app.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{app.downloads}</span>
                    <span>•</span>
                    <span>{app.size}</span>
                    <span>•</span>
                    <span>v{app.version}</span>
                    {isInstalled && (
                      <>
                        <span>•</span>
                        <div className="flex items-center space-x-1 text-green-500">
                          <CheckCircle className="h-3 w-3" />
                          <span>Installed</span>
                        </div>
                      </>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{app.description}</p>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="font-semibold mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {app.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Category and Version info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Category</span>
                    <p className="font-medium">{app.category}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Version</span>
                    <p className="font-medium">{app.version}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Size</span>
                    <p className="font-medium">{app.size}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Downloads</span>
                    <p className="font-medium">{app.downloads}</p>
                  </div>
                </div>

                {/* Installation controls */}
                <div className="pt-4 border-t space-y-3">
                  <Button 
                    onClick={handleToggleSelection}
                    variant={isSelected ? "default" : "outline"}
                    className="w-full"
                    disabled={isInstalled}
                  >
                    {isInstalled ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Installed
                      </>
                    ) : isSelected ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Selected for Installation
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4 mr-2" />
                        Select for Installation
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
