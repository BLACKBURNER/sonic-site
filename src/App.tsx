import { BrowserRouter, useLocation } from 'react-router-dom';
import { Suspense, useState, useEffect, useRef } from 'react';
import { AppRoutes } from './router';
import Navigation from './components/feature/Navigation';
import Footer from './components/feature/Footer';
import SchemaOrg from './components/feature/SchemaOrg';
import CalendlyWidget from './components/feature/CalendlyWidget';
import SkipLink from './components/base/SkipLink';
import ScrollToHash from './components/base/ScrollToHash';

function PageLoader() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(30);
    const t1 = setTimeout(() => setWidth(60), 100);
    const t2 = setTimeout(() => setWidth(85), 400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-sonic-lime z-system transition-all duration-300 ease-out shadow-[0_0_8px_rgba(200,212,0,0.6)]"
      style={{ width: `${width}%` }}
    />
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [visible, setVisible] = useState(true);
  const pendingLocation = useRef(location);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      // Start fade out
      setVisible(false);
      pendingLocation.current = location;
      
      const swap = setTimeout(() => {
        setDisplayLocation(pendingLocation.current);
        
        // Use requestAnimationFrame to ensure scroll happens after the new page is rendered
        requestAnimationFrame(() => {
          if (!pendingLocation.current.hash) {
            window.scrollTo({ top: 0, behavior: 'instant' });
          }
          // Small safety timeout to override any browser scroll restoration
          setTimeout(() => {
            if (!pendingLocation.current.hash && window.scrollY > 0) {
              window.scrollTo({ top: 0, behavior: 'instant' });
            }
          }, 20);
        });

        setVisible(true);
      }, 300); // Wait for fade out
      
      return () => clearTimeout(swap);
    }
  }, [location, displayLocation]);

  return (
    <div
      key={displayLocation.pathname}
      className="transition-opacity duration-300 ease-in-out"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <Suspense fallback={<PageLoader />}>
        <AppRoutes />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <SchemaOrg type="organization" />
      <CalendlyWidget />
      <SkipLink />
      <ScrollToHash />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-wood-light/5 to-white">
        <Navigation />
        <main id="main-content" className="flex-1 pt-20">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
