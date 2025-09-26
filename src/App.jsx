import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Distributions } from './components/Distributions';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { DistroSelection } from './components/DistroSelection';
import { AppStore } from './components/AppStore';
import { Documentation } from './components/Documentation';
import { Upcoming } from './components/Upcoming';



// Backend Wake-up Service
class BackendWakeupService {
  constructor() {
    this.backends = [
      {
        name: 'Auth API',
        url: process.env.REACT_APP_API_URL || process.env.VITE_API_URL || 'https://backend1-rexi.onrender.com'
      },
      {
        name: 'App Store API', 
        url: process.env.REACT_APP_APPSTORE_API_URL || process.env.VITE_APPSTORE_API_URL || 'https://backend2-ponc.onrender.com'
      }
    ];
    this.wakeupInterval = null;
  }

  async wakeupBackends() {
    console.log('🚀 Waking up backends...');
    const promises = this.backends.map(backend => 
      fetch(`${backend.url}/health`, { method: 'GET' })
        .then(() => console.log(`✅ ${backend.name} awake`))
        .catch(() => console.log(`⚠️ ${backend.name} still waking...`))
    );
    await Promise.allSettled(promises);
  }

  startPeriodicWakeup() {
    this.wakeupBackends(); // Immediate wake
    this.wakeupInterval = setInterval(() => {
      this.wakeupBackends();
    }, 12 * 60 * 1000); // Every 12 minutes
  }

  stopPeriodicWakeup() {
    if (this.wakeupInterval) {
      clearInterval(this.wakeupInterval);
      this.wakeupInterval = null;
    }
  }
}


// Session Manager Component
function SessionManager({ children }) {
  const [isSessionValid, setIsSessionValid] = useState(null);
  const [wakeupService] = useState(() => new BackendWakeupService());


  useEffect(() => {
    // Initialize backend wakeup
    wakeupService.startPeriodicWakeup();

    // Generate unique session ID for this browser instance
    const generateSessionId = () => {
      return Date.now().toString() + Math.random().toString(36).substr(2, 9);
    };

    // Check and validate user session
    const validateSession = () => {
      const authToken = localStorage.getItem('authToken');
      const userData = localStorage.getItem('userData');
      const sessionId = localStorage.getItem('sessionId');

      if (authToken && userData) {
        try {
          const user = JSON.parse(userData);
          
          // Create unique session ID if it doesn't exist
          if (!sessionId) {
            const newSessionId = generateSessionId();
            localStorage.setItem('sessionId', newSessionId);
            localStorage.setItem('sessionStartTime', Date.now().toString());
          }

          // Add user-specific session data
          const userSession = {
            userId: user.id || user._id,
            sessionId: sessionId || generateSessionId(),
            lastActivity: Date.now()
          };
          
          localStorage.setItem('userSession', JSON.stringify(userSession));
          setIsSessionValid(true);
        } catch (error) {
          // Invalid session data, clear it
          clearSession();
          setIsSessionValid(false);
        }
      } else {
        // No session data
        setIsSessionValid(false);
      }
    };

    // Clear session function
    const clearSession = () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      localStorage.removeItem('sessionId');
      localStorage.removeItem('userSession');
      localStorage.removeItem('sessionStartTime');
    };

    // Update last activity timestamp
    const updateActivity = () => {
      const userSession = localStorage.getItem('userSession');
      if (userSession) {
        try {
          const session = JSON.parse(userSession);
          session.lastActivity = Date.now();
          localStorage.setItem('userSession', JSON.stringify(session));
        } catch (error) {
          console.error('Session update failed:', error);
        }
      }
    };

    // Listen for user activity
    const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
    const handleActivity = () => {
      updateActivity();
    };

    // Add activity listeners
    activityEvents.forEach(event => {
      document.addEventListener(event, handleActivity, { passive: true });
    });

    // Validate session on app start
    validateSession();

    // Listen for storage changes (handles multi-tab scenarios)
    const handleStorageChange = (e) => {
      if (e.key === 'authToken' || e.key === 'userData') {
        validateSession();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup function
    return () => {
      activityEvents.forEach(event => {
        document.removeEventListener(event, handleActivity);
      });
      window.removeEventListener('storage', handleStorageChange);
      wakeupService.stopPeriodicWakeup();
    };
  }, []);

  // Show loading state while validating session
  if (isSessionValid === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return children;
}

// Protected Route Component
function ProtectedRoute({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const authToken = localStorage.getItem('authToken');
      const userSession = localStorage.getItem('userSession');
      
      if (authToken && userSession) {
        try {
          const session = JSON.parse(userSession);
          const now = Date.now();
          const lastActivity = session.lastActivity || now;
          
          // Session timeout: 24 hours of inactivity
          const SESSION_TIMEOUT = 24 * 60 * 60 * 1000;
          
          if (now - lastActivity < SESSION_TIMEOUT) {
            setIsAuthorized(true);
          } else {
            // Session expired
            localStorage.clear();
            setIsAuthorized(false);
          }
        } catch (error) {
          setIsAuthorized(false);
        }
      } else {
        setIsAuthorized(false);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthorized) {
    return <LoginPage />;
  }

  return children;
}

// Home Page Component (your original layout)
function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Distributions />
      </main>
      <Footer />
    </div>
  );
}

// Login Page Component
function LoginPage() {
  const navigate = useNavigate();
  const handleBack = () => navigate('/');
  const handleShowSignUp = () => navigate('/signup');

  return (
    <Login 
      onBack={handleBack} 
      onSignUp={handleShowSignUp}
    />
  );
}

// SignUp Page Component
function SignUpPage() {
  const navigate = useNavigate();
  const handleBack = () => navigate('/');
  const handleShowLogin = () => navigate('/login');

  return (
    <SignUp 
      onBack={handleBack} 
      onSignIn={handleShowLogin}
    />
  );
}

// Documentation Page Component
function DocumentationPage() {
  const navigate = useNavigate();
  const handleBack = () => navigate('/');

  return (
    <Documentation onBack={handleBack} />
  );
}

// Upcoming Page Component
function UpcomingPage() {
  const navigate = useNavigate();
  const handleBack = () => navigate('/');

  return (
    <Upcoming onBack={handleBack} />
  );
}

// Distro Selection Page Component (Linux Distribution Picker)
function DistroSelectionPage() {
  const navigate = useNavigate();
  const handleBack = () => navigate('/');

  const handleSelectDistro = (distroId) => {
    console.log('Selected Linux distribution:', distroId);
    // Navigate to App Store with the selected distro
    navigate(`/store/${distroId}`);
  };

  return (
    <ProtectedRoute>
      <DistroSelection 
        onBack={handleBack} 
        onSelectDistro={handleSelectDistro} 
      />
    </ProtectedRoute>
  );
}

// App Store Page Component (Linux Apps Installation)
function AppStorePage() {
  const navigate = useNavigate();
  const { distroId } = useParams();
  const handleBack = () => navigate('/app-store');

  return (
    <ProtectedRoute>
      <AppStore 
        onBack={handleBack} 
        selectedDistro={distroId} 
      />
    </ProtectedRoute>
  );
}

// 404 Page Component
function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-muted-foreground">Page Not Found</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Go Home
          </button>
          <button 
            onClick={() => navigate(-1)}
            className="px-6 py-2 border border-border rounded-md hover:bg-accent transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

// Main App Component with React Router
function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Router>
        <SessionManager>
          <Routes>
            {/* Home page - Full landing page with Hero, Features, etc. */}
            <Route 
              path="/" 
              element={<HomePage />} 
            />
            
            {/* Authentication pages */}
            <Route 
              path="/login" 
              element={<LoginPage />} 
            />
            
            <Route 
              path="/signup" 
              element={<SignUpPage />} 
            />

            {/* Documentation page */}
            <Route 
              path="/documentation" 
              element={<DocumentationPage />} 
            />

            {/* Upcoming features page */}
            <Route 
              path="/upcoming" 
              element={<UpcomingPage />} 
            />
            
            {/* Protected routes - require authentication */}
            <Route 
              path="/app-store" 
              element={<DistroSelectionPage />} 
            />
            
            <Route 
              path="/store/:distroId" 
              element={<AppStorePage />} 
            />
            
            {/* 404 fallback route - Must be last */}
            <Route 
              path="*" 
              element={<NotFoundPage />} 
            />
          </Routes>
        </SessionManager>
      </Router>
    </div>
  );
}

export default App;

