import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToHash handles smooth scrolling to elements when the URL contains a hash.
 * It also handles cases where the user navigates to a hash from another page.
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // Wait for page transition and content rendering
    const timer = setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Combined height of main nav (64px) + sub nav (49px) + some buffer
        const offset = 125;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
