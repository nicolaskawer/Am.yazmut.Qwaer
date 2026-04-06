import { useEffect, useState } from "react";

const useNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowNavbar(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // empty array: attach once, clean up on unmount

  return { showNavbar };
};

export default useNavbar;
