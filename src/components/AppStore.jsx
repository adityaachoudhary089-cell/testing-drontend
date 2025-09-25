import { appMetadata } from '../data/appMetadata'; 
import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Search, 
  Download, 
  Package,
  Filter,
  Grid3X3,
  List,
  Loader2,
  Brain,
  Sparkles,
  Target,
  Zap,
  TrendingUp,
  Copy,
  Check,
  Terminal,
  Info,
  X
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { AppCard } from './AppCard';
import { AppDetailModal } from './AppDetailModal';
import { appStoreService } from '../services/appStoreAPI';
import { getAppImage } from '../utils/appImages';
import { categoryIcons } from '../constants/categoryIcons';

export function AppStore({ onBack, selectedDistro }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedApp, setSelectedApp] = useState(null);
  const [selectedApps, setSelectedApps] = useState(new Set());
  const [isInstalling, setIsInstalling] = useState(false);
  const [installedApps, setInstalledApps] = useState(new Set());
  const [aiRecommendations, setAiRecommendations] = useState([]);
  const [isGeneratingRecommendations, setIsGeneratingRecommendations] = useState(false);

  // Backend data state
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  // NEW: Installation Commands Modal State
  const [showInstallCommands, setShowInstallCommands] = useState(false);
  const [installCommands, setInstallCommands] = useState([]);
  const [scriptFileName, setScriptFileName] = useState('');

  // Load apps from backend
  useEffect(() => {
    loadApps();
  }, []);

  const loadApps = async () => {
    try {
      const appsData = await appStoreService.getApps();
      
      const formattedApps = appsData.map(app => {
        const metadata = appMetadata[app.id] || {
          displayName: app.name,
          description: `Install ${app.name} on your Linux system`,
          developer: 'Linux Community',
          version: '1.0.0',
          size: '50MB',
          rating: 4.5,
          downloads: '1M+',
          tags: [app.category.toLowerCase(), 'linux', 'software'],
          imageUrl: getAppImage(app.category, app.id)
        };

        return {
          id: app.id,
          displayName: metadata.displayName,
          name: app.name,
          category: app.category,
          description: metadata.description,
          developer: metadata.developer,
          version: metadata.version,
          size: metadata.size,
          rating: metadata.rating,
          downloads: metadata.downloads,
          tags: metadata.tags,
          imageUrl: metadata.imageUrl
        };
      });

      setApps(formattedApps);
    } catch (error) {
      console.error('Failed to load apps:', error);
      alert('Failed to load apps. Make sure appstore-server.js is running on port 3000');
    } finally {
      setLoading(false);
    }
  };

  // NEW: Installation Commands Modal Component
  const InstallCommandsModal = ({ isOpen, onClose, commands, fileName }) => {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const copyToClipboard = (text, index) => {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      });
    };

    if (!isOpen) return null;

    return (
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-background rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-border bg-muted/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Download className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Installation Script Ready!</h3>
                  <p className="text-sm text-muted-foreground">
                    File downloaded: <span className="font-mono text-primary">{fileName}</span>
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Commands */}
          <div className="p-6">
            <div className="mb-4">
              <h4 className="font-semibold mb-2 flex items-center space-x-2">
                <Terminal className="h-4 w-4" />
                <span>Execute these commands in your terminal:</span>
              </h4>
              <p className="text-sm text-muted-foreground">
                Navigate to your Downloads folder and run these commands:
              </p>
            </div>

            <div className="space-y-3">
              {commands.map((command, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-2 p-3 bg-muted/30 rounded-lg border">
                    <span className="text-sm font-medium text-primary min-w-[24px]">
                      {index + 1}.
                    </span>
                    <code className="flex-1 text-sm font-mono bg-background/50 px-3 py-2 rounded border">
                      {command.text}
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(command.text, index)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {copiedIndex === index ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  {command.description && (
                    <p className="text-xs text-muted-foreground mt-1 ml-8">
                      {command.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="flex items-start space-x-3">
                <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-blue-700 dark:text-blue-300 mb-1">
                    Installation Tips:
                  </p>
                  <ul className="space-y-1 text-blue-600 dark:text-blue-400">
                    <li>• Make sure you have internet connection</li>
                    <li>• Run commands in the Downloads directory</li>
                    <li>• Some installations may require sudo password</li>
                    <li>• The script will show progress for each app</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-border bg-muted/10 flex justify-end space-x-3">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button 
              onClick={() => {
                const allCommands = commands.map(cmd => cmd.text).join('\n');
                copyToClipboard(allCommands, 'all');
              }}
              className="bg-primary hover:bg-primary/90"
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy All Commands
            </Button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const categories = ['All', ...Array.from(new Set(apps.map(app => app.category)))];

  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      const matchesSearch = app.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [apps, searchQuery, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts = { 'All': apps.length };
    apps.forEach(app => {
      counts[app.category] = (counts[app.category] || 0) + 1;
    });
    return counts;
  }, [apps]);

  const handleAppSelection = (appId, selected) => {
    const newSelected = new Set(selectedApps);
    if (selected) {
      newSelected.add(appId);
    } else {
      newSelected.delete(appId);
    }
    setSelectedApps(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedApps.size === filteredApps.length) {
      setSelectedApps(new Set());
    } else {
      setSelectedApps(new Set(filteredApps.map(app => app.id)));
    }
  };

  // UPDATED: Enhanced installation with commands modal
  const handleInstallSelected = async () => {
    if (selectedApps.size === 0) return;
    
    setIsInstalling(true);
    
    try {
      const selectedAppIds = Array.from(selectedApps);
      
      // Generate installation script using backend
      const scriptData = await appStoreService.generateScript(selectedDistro, selectedAppIds);
      
      // Create filename
      const fileName = `install_${selectedDistro}_apps.sh`;
      
      // Download the generated script
      const blob = new Blob([scriptData.script], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(url);
      
      // Prepare commands based on the distribution and script
      const commands = [
        {
          text: `cd ~/Downloads`,
          description: 'Navigate to Downloads directory'
        },
        {
          text: `chmod +x ${fileName}`,
          description: 'Make the script executable'
        },
        {
          text: `./${fileName}`,
          description: 'Run the installation script'
        }
      ];

      // If it's a distribution that might need sudo
      if (['ubuntu', 'debian', 'fedora', 'rhel', 'centos'].includes(selectedDistro)) {
        commands.push({
          text: `# If permission issues occur, try: sudo ./${fileName}`,
          description: 'Alternative command with sudo privileges'
        });
      }

      // Set the commands and show modal
      setInstallCommands(commands);
      setScriptFileName(fileName);
      setShowInstallCommands(true);
      
      // Mark apps as installed
      setInstalledApps(new Set([...installedApps, ...selectedAppIds]));
      setSelectedApps(new Set());
      
    } catch (error) {
      console.error('Installation failed:', error);
      alert('❌ Failed to generate installation script. Please try again.');
    } finally {
      setIsInstalling(false);
    }
  };

  const generateAiRecommendations = async () => {
    setIsGeneratingRecommendations(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const developmentApps = apps.filter(app => 
      app.category === 'Development' || app.category === 'Text Editors'
    ).slice(0, 3);
    
    const multimediaApps = apps.filter(app => 
      app.category === 'Graphics & Design' || app.category === 'Audio & Video'
    ).slice(0, 2);
    
    const recommendations = [...developmentApps, ...multimediaApps];
    setAiRecommendations(recommendations);
    setIsGeneratingRecommendations(false);
  };

  const handleSmartSelection = (type) => {
    let smartApps = [];
    
    switch (type) {
      case 'essential':
        smartApps = apps
          .filter(app => ['Web Browsers', 'File Managers', 'System Tools'].includes(app.category))
          .slice(0, 8)
          .map(app => app.id);
        break;
      case 'development':
        smartApps = apps
          .filter(app => ['Development', 'Text Editors', 'Terminal Emulators'].includes(app.category))
          .slice(0, 10)
          .map(app => app.id);
        break;
      case 'creative':
        smartApps = apps
          .filter(app => ['Graphics & Design', 'Audio & Video', 'Photography'].includes(app.category))
          .slice(0, 8)
          .map(app => app.id);
        break;
      case 'gaming':
        smartApps = apps
          .filter(app => ['Games', 'Entertainment'].includes(app.category))
          .slice(0, 6)
          .map(app => app.id);
        break;
    }
    
    setSelectedApps(new Set(smartApps));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading applications...</p>
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
      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4 py-4">
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
                  className="p-2 rounded-lg bg-primary/10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Package className="h-6 w-6 text-primary" />
                </motion.div>
                <div>
                  <h1 className="text-2xl font-bold">InstallSuite Store</h1>
                  <p className="text-sm text-muted-foreground">
                    {selectedDistro ? `Installing for: ${selectedDistro}` : 'Click apps to select for installation'}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {/* Install Selected Button */}
              {selectedApps.size > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center space-x-2"
                >
                  <Button
                    onClick={handleInstallSelected}
                    disabled={isInstalling}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {isInstalling ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Installing...
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Install Selected ({selectedApps.size})
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
              {/* View Mode Toggle */}
              <div className="flex items-center space-x-1 bg-muted/50 rounded-lg p-1">
                <Button
                  size="sm"
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  onClick={() => setViewMode('grid')}
                  className="h-8 w-8 p-0"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  onClick={() => setViewMode('list')}
                  className="h-8 w-8 p-0"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              {/* Search */}
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search apps..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background/50"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <motion.aside
            className="w-64 space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold flex items-center space-x-2">
                  <Filter className="h-4 w-4" />
                  <span>Categories</span>
                </h2>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleSelectAll}
                  className="text-xs hover:bg-primary/10"
                >
                  {selectedApps.size === filteredApps.length ? 'Deselect All' : 'Select All'}
                </Button>
              </div>
              <div className="space-y-2">
                {categories.map((category, index) => {
                  const Icon = categoryIcons[category] || Package;
                  return (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Button
                        variant={selectedCategory === category ? 'default' : 'ghost'}
                        onClick={() => setSelectedCategory(category)}
                        className="w-full justify-start space-x-2 text-sm"
                      >
                        <Icon className="h-4 w-4" />
                        <span className="flex-1 text-left">{category}</span>
                        <Badge variant="secondary" className="text-xs">
                          {categoryCounts[category] || 0}
                        </Badge>
                      </Button>
                    </motion.div>
                  );
                })}
              </div>
            </Card>

            {/* AI Assisted Control */}
            <Card className="p-4 bg-gradient-to-br from-primary/5 via-primary/2 to-transparent border-primary/20">
              <div className="flex items-center space-x-2 mb-4">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Brain className="h-5 w-5 text-primary" />
                </motion.div>
                <h3 className="font-semibold text-primary">AI Assisted Control</h3>
              </div>
              
              <div className="space-y-3">
                {/* Smart Selection Buttons */}
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground mb-2">Smart Collections</p>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleSmartSelection('essential')}
                      className="text-xs h-8 hover:bg-primary/10"
                    >
                      <Target className="h-3 w-3 mr-1" />
                      Essential
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleSmartSelection('development')}
                      className="text-xs h-8 hover:bg-primary/10"
                    >
                      <Zap className="h-3 w-3 mr-1" />
                      Dev Tools
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleSmartSelection('creative')}
                      className="text-xs h-8 hover:bg-primary/10"
                    >
                      <Sparkles className="h-3 w-3 mr-1" />
                      Creative
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleSmartSelection('gaming')}
                      className="text-xs h-8 hover:bg-primary/10"
                    >
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Gaming
                    </Button>
                  </div>
                </div>

                {/* AI Recommendations */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">AI Recommendations</p>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={generateAiRecommendations}
                      disabled={isGeneratingRecommendations}
                      className="text-xs h-6 px-2 hover:bg-primary/10"
                    >
                      {isGeneratingRecommendations ? (
                        <Loader2 className="h-3 w-3 animate-spin" />
                      ) : (
                        <Sparkles className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                  
                  {aiRecommendations.length > 0 && (
                    <div className="space-y-1">
                      {aiRecommendations.slice(0, 3).map((app) => (
                        <motion.div
                          key={app.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center justify-between p-2 rounded-md bg-background/50 hover:bg-background/80 transition-colors cursor-pointer"
                          onClick={() => setSelectedApp(app)}
                        >
                          <span className="text-xs font-medium truncate">{app.displayName}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAppSelection(app.id, !selectedApps.has(app.id));
                            }}
                            className="h-6 w-6 p-0 hover:bg-primary/20"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Package className={`h-3 w-3 ${selectedApps.has(app.id) ? 'text-primary' : 'text-muted-foreground'}`} />
                            </motion.div>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                  
                  {aiRecommendations.length === 0 && !isGeneratingRecommendations && (
                    <p className="text-xs text-muted-foreground/60 text-center py-2">
                      Click ✨ to generate recommendations
                    </p>
                  )}
                </div>
              </div>
            </Card>

            {/* Stats Card */}
            <Card className="p-4">
              <h3 className="font-semibold mb-3">Selection Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Apps</span>
                  <span className="font-medium">{apps.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Selected</span>
                  <span className="font-medium text-primary">{selectedApps.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Installed</span>
                  <span className="font-medium text-green-600">{installedApps.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Showing</span>
                  <span className="font-medium">{filteredApps.length}</span>
                </div>
              </div>
            </Card>
          </motion.aside>

          {/* Main Content */}
          <motion.main
            className="flex-1"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold">
                  {selectedCategory === 'All' ? 'All Applications' : selectedCategory}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {filteredApps.length} apps found
                  {searchQuery && ` for "${searchQuery}"`}
                  {selectedApps.size > 0 && ` • ${selectedApps.size} selected`}
                </p>
              </div>
            </div>

            {/* Apps Grid/List */}
            <AnimatePresence mode="wait">
              {viewMode === 'grid' ? (
                <motion.div
                  key="grid"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {filteredApps.map((app, index) => (
                    <AppCard
                      key={app.id}
                      app={app}
                      isSelected={selectedApps.has(app.id)}
                      isInstalled={installedApps.has(app.id)}
                      onSelectionChange={handleAppSelection}
                      onClick={setSelectedApp}
                      index={index}
                      viewMode="grid"
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="list"
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {filteredApps.map((app, index) => (
                    <AppCard
                      key={app.id}
                      app={app}
                      isSelected={selectedApps.has(app.id)}
                      isInstalled={installedApps.has(app.id)}
                      onSelectionChange={handleAppSelection}
                      onClick={setSelectedApp}
                      index={index}
                      viewMode="list"
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {filteredApps.length === 0 && (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No apps found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or category filter
                </p>
              </motion.div>
            )}
          </motion.main>
        </div>
      </div>

      {/* App Detail Modal */}
      <AppDetailModal
        app={selectedApp}
        isSelected={selectedApp ? selectedApps.has(selectedApp.id) : false}
        isInstalled={selectedApp ? installedApps.has(selectedApp.id) : false}
        onClose={() => setSelectedApp(null)}
        onSelectionChange={handleAppSelection}
      />

      {/* NEW: Installation Commands Modal */}
      <InstallCommandsModal
        isOpen={showInstallCommands}
        onClose={() => setShowInstallCommands(false)}
        commands={installCommands}
        fileName={scriptFileName}
      />
    </motion.div>
  );
}
