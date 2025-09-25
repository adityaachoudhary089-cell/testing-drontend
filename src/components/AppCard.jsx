import { motion } from 'framer-motion';
import { Star, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './ImageWithFallback';
import { getAppImage } from '../utils/appImages';

export function AppCard({ 
  app, 
  isSelected, 
  isInstalled, 
  onSelectionChange, 
  onClick, 
  index, 
  viewMode 
}) {
  const imageUrl = app.imageUrl || getAppImage(app.category, app.id);

  const handleCardClick = (e) => {
    // If clicking on the detail area, show modal
    if (e.target.closest('[data-detail-click]')) {
      onClick(app);
    } else {
      // Otherwise toggle selection
      onSelectionChange(app.id, !isSelected);
    }
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        key={app.id}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: index * 0.01 }}
        whileHover={{ x: 5 }}
      >
        <Card 
          className={`transition-all duration-300 cursor-pointer ${
            isSelected 
              ? 'ring-2 ring-primary bg-primary/10 border-primary' 
              : 'hover:bg-card/80 hover:border-primary/30'
          }`}
          onClick={handleCardClick}
        >
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={imageUrl}
                  alt={app.displayName}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0" data-detail-click>
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-semibold">{app.displayName}</h3>
                  <Badge variant="outline" className="text-xs">
                    v{app.version}
                  </Badge>
                  {isInstalled && (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {app.description}
                </p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span>{app.developer}</span>
                  <span>•</span>
                  <span>{app.size}</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    {/* badd me add karunga */}
                    <span>{app.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{app.downloads}</span>
                </div>
              </div>
              
              <Badge variant="secondary">
                {app.category.split(' ')[0]}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={app.id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="cursor-pointer"
    >
      <Card 
        className={`h-full transition-all duration-300 overflow-hidden group ${
          isSelected 
            ? 'ring-2 ring-primary bg-primary/10 border-primary' 
            : 'hover:bg-card/80 hover:border-primary/30'
        }`}
        onClick={handleCardClick}
      >
        <CardContent className="p-0">
          {/* App Image */}
          <div className="relative h-32 overflow-hidden">
            <ImageWithFallback
              src={imageUrl}
              alt={app.displayName}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            {/* Installation status */}
            {isInstalled && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-3 right-3 bg-green-500 text-white rounded-full p-1"
              >
                <CheckCircle className="h-4 w-4" />
              </motion.div>
            )}

            {/* Selection indicator overlay */}
            {isSelected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-primary/20 flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-primary text-primary-foreground rounded-full p-2"
                >
                  <CheckCircle className="h-6 w-6" />
                </motion.div>
              </motion.div>
            )}
          </div>

          <div className="p-4" data-detail-click>
            {/* App info */}
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{app.displayName}</h3>
                  <p className="text-xs text-muted-foreground">{app.developer}</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-2">
                {app.description}
              </p>
              
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                  <span>{app.rating}</span>
                </div>
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Users className="h-3 w-3" />
                  <span>{app.downloads}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {app.size}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  v{app.version}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
