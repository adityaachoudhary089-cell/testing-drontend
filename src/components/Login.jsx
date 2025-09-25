import { useState } from 'react';
import { Eye, EyeOff, Terminal, ArrowLeft, Loader2, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { authAPI } from '../services/api';




export function Login({ onBack, onSignUp }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await authAPI.login(formData);
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('userData', JSON.stringify(response.data.user));
      window.location.href = '/';
    } catch (error) {
      alert('Login failed');
    }
    setIsLoading(false);
  };



  //   const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   try {
  //     const response = await authAPI.login(formData);
  //     const { token, user } = response.data;

  //     // Store token and user data
  //     localStorage.setItem('authToken', token);
  //     localStorage.setItem('userData', JSON.stringify(user));

  //     setIsSuccess(true);

  //     // Reset after showing success animation
  //     setTimeout(() => {
  //       setIsSuccess(false);
  //       console.log('Login successful:', user);

  //       // Navigate to home page
  //       navigate('/');
  //     }, 1500);

  //   } catch (error) {
  //     console.error('Login failed:', error);
  //     alert(error.response?.data?.message || 'Login failed');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };










  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-primary/20 rounded-full"
      initial={{
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600),
        opacity: 0
      }}
      animate={{
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600),
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  ));

  return (
    <motion.div
      className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 backdrop-blur-3xl"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles}
      </div>

      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-primary/10 rotate-45"
        initial={{ rotate: 45, scale: 0, opacity: 0 }}
        animate={{ rotate: 225, scale: 1, opacity: 0.3 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 rounded-full border border-primary/10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
      />

      <motion.div
        className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg rotate-12"
        initial={{ rotate: 12, scale: 0, opacity: 0 }}
        animate={{ rotate: 192, scale: 1, opacity: 0.4 }}
        transition={{ duration: 4, ease: "easeOut" }}
      />

      <motion.div
        className="w-full max-w-md relative"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Back button */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </motion.div>

        {/* Login Card */}
        <motion.div
          className="relative group"
          initial={{ y: 30, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {/* Enhanced glow effect */}
          <motion.div
            className="absolute -inset-3 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <Card className="relative bg-card/60 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/10 overflow-hidden">
            {/* Glass-like inner border */}
            <div className="absolute inset-[1px] rounded-[calc(var(--radius)-1px)] bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>

            {/* Header */}
            <CardHeader className="text-center space-y-4 relative z-10">
              <motion.div
                className="flex justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 200 }}
              >
                <div className="p-3 rounded-full bg-primary/10 backdrop-blur-sm">
                  <Terminal className="h-8 w-8 text-primary" />
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <CardTitle className="text-2xl">Welcome Back</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Sign in to your Linux account
                </CardDescription>
              </motion.div>
            </CardHeader>

            <CardContent className="space-y-6 relative z-10">
              <AnimatePresence mode="wait">
                {!isLoading && !isSuccess ? (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Email field */}
                    <motion.div
                      className="space-y-2"
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <Label htmlFor="email">Email</Label>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          id="email"
                          type="email"
                          placeholder="user@linux.org"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="bg-input-background/80 backdrop-blur-sm border-border/50 focus:border-primary/50 transition-all duration-300"
                          required
                        />
                      </motion.div>
                    </motion.div>

                    {/* Password field */}
                    <motion.div
                      className="space-y-2"
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <Label htmlFor="password">Password</Label>
                      <motion.div
                        className="relative"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                          className="bg-input-background/80 backdrop-blur-sm border-border/50 focus:border-primary/50 transition-all duration-300 pr-10"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                    </motion.div>
                  </motion.div>

                    {/* Forgot password */}
                <motion.div
                  className="text-right"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button variant="link" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Login button */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
                    >
                      Sign In
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.form>
              ) : isLoading ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col items-center justify-center py-8 space-y-4"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Loader2 className="h-8 w-8 text-primary" />
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  className="h-1 bg-primary/20 rounded-full overflow-hidden"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent"
                  />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm text-muted-foreground"
                >
                  Signing you in...
                </motion.p>
              </motion.div>
              ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col items-center justify-center py-8 space-y-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <CheckCircle className="h-12 w-12 text-green-500" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm text-muted-foreground"
                >
                  Welcome back!
                </motion.p>
              </motion.div>
                )}
            </AnimatePresence>

            {!isLoading && !isSuccess && (
              <>
                {/* Divider */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border/50"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </motion.div>

                {/* Social login */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full border-border/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
                    >
                      <motion.svg
                        className="mr-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </motion.svg>
                      Continue with Google
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Sign up link */}
                <motion.div
                  className="text-center text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  Don't have an account?{' '}
                  <motion.div
                    className="inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Button
                      variant="link"
                      onClick={onSignUp}
                      className="text-primary hover:underline font-medium"
                    >
                      Sign up
                    </Button>
                  </motion.div>
                </motion.div>
              </>
            )}
          </CardContent>

          {/* Glass reflection effect */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </Card>
      </motion.div>
    </motion.div>
    </motion.div >
  );
}

export default Login;
