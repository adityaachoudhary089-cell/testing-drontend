import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Code, Smartphone, Globe, BookOpen, Users, Terminal, AppWindowIcon, SettingsIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function Upcoming({ onBack }) {
  const upcomingFeatures = [
    {
      title: 'AI-Assisted Terminal Control',
      description: 'Type a problem in plain language and let Install Suite diagnose, fix, and run the needed commands.',
      icon: Terminal,
      status: 'Coming Soon',
      timeline: '2026'
    },
    {
      title: 'Expanded Application Support',
      description: 'Hands-on tutorials and guided walkthroughs for learning Linux concepts.',
      icon: AppWindowIcon,
      status: 'In Development',
      timeline: '2026'
    },
    {
      title: 'Comprehensive Driver Support',
      description: 'Auto-detect hardware and install the best graphics, Wi-Fi, audio, printer, and peripheral drivers.',
      icon: SettingsIcon,
      status: 'Planning',
      timeline: '2026'
    },
    {
      title: 'Multi-distro support:',
      description: 'Seamless installs coming to niche distros like  MX Linux, Parrot OS, Tails, Alpine, Garuda Linux, and NixOS.',
      icon: Code,
      status: 'Coming Soon',
      timeline: '2026'
    },
    // {
    //   title: 'Multi-language Support',
    //   description: 'Platform available in multiple languages to serve the global Linux community.',
    //   icon: Globe,
    //   status: 'Planning',
    //   timeline: '2026'
    // }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-xl font-semibold">Upcoming Features</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Welcome Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">What's Coming Next</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
           We're constantly working to improve Install Suite and add new features that make discovering, 
           installing, and managing applications even easier. Here's what we have planned.
          </p>
        </motion.div>

        {/* Upcoming Features */}
        <motion.div
          className="space-y-6 mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {upcomingFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge 
                        variant={feature.status === 'In Development' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {feature.status}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {feature.timeline}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Roadmap Timeline */}
        {/* <motion.div
          className="mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6">Development Roadmap</h3>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <div className="font-medium">Q2 2024</div>
                    <div className="text-sm text-muted-foreground">Mobile App Store, API Access</div>
                  </div>
                  <Badge variant="default">Active</Badge>
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <div className="font-medium">Q3 2024</div>
                    <div className="text-sm text-muted-foreground">Interactive Tutorials, Enhanced Search</div>
                  </div>
                  <Badge variant="secondary">Planned</Badge>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <div className="font-medium">Q4 2024</div>
                    <div className="text-sm text-muted-foreground">Community Features, Multi-language Support</div>
                  </div>
                  <Badge variant="secondary">Future</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div> */}

        {/* Stay Updated CTA */}
        {/* <motion.div
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Want to Stay Updated?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Follow our development progress and be the first to know when new features are released. 
                Your feedback helps shape the future of Linux Hub.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline">
                  Follow Updates
                </Button>
                <Button onClick={onBack}>
                  Explore Current Features
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </div>
  );
}
