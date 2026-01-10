import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This snaps the page to top instantly when the route changes
    // It prevents the "scrolling up" animation on the old page
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    } catch (error) {
      // Fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;