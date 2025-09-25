import { motion } from 'motion/react';
import { ArrowLeft, Monitor, Download, Search, Settings, Users, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Documentation({ onBack }) {
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
          <h1 className="text-xl font-semibold">Documentation</h1>
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
          <h2 className="text-3xl font-bold mb-4">How Install Suite Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Install Suite is your gateway to discovering and exploring the world of Linux distributions and applications. 
            Here's how our platform helps you on your open-source journey.
          </p>
        </motion.div>

        {/* How It Works Steps */}
        <motion.div
          className="space-y-8 mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Monitor className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">1. Choose Your Distribution</h3>
                  <p className="text-muted-foreground">
                    Browse an expertly curated list of 
                    Linux distros—each with screenshots, key specs, and use-case tips—so you 
                    can pick the perfect fit fast.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">2. Explore Applications</h3>
                  <p className="text-muted-foreground">
                    Search a categorized app store and discover the must-have tools for 
                    productivity, development, gaming, multimedia, and 
                    more—all in one place.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Download className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">3. Get Installation Guidance</h3>
                  <p className="text-muted-foreground">
                    Follow clear, step-by-step instructions covering requirements, setup, 
                    and best practices for a trouble-free install.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Features */}
        <motion.div
          className="mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6">What Makes Install Suite Special</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-orange-500" />
                  <CardTitle className="text-lg">Curated Content</CardTitle>
                </div>
                <CardDescription>
                  Every distro and app is hand-selected and quality-checked for relevance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <CardTitle className="text-lg">Beginner Friendly</CardTitle>
                </div>
                <CardDescription>
                  Plain-language guidance replaces intimidating jargon.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-green-500" />
                  <CardTitle className="text-lg">Comprehensive Coverage</CardTitle>
                </div>
                <CardDescription>
                  From mainstream Ubuntu to niche tools, the entire Linux ecosystem is at your fingertips.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Monitor className="h-5 w-5 text-purple-500" />
                  <CardTitle className="text-lg">Always Updated</CardTitle>
                </div>
                <CardDescription>
                  Content stays current with the latest releases so you always install the freshest versions.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </motion.div>

        {/* Getting Started CTA */}
        {/* <motion.div
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Ready to Start Your Linux Journey?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're a complete beginner or looking to explore new distributions and applications, 
                Linux Hub provides everything you need to make informed decisions about your Linux setup.
              </p>
              <Button onClick={onBack} size="lg">
                Explore Distributions
              </Button>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </div>
  );
}
