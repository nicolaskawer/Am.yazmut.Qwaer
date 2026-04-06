import { useEffect } from "react";

/**
 * Observes every <section> except #Hero and adds .section--visible
 * when it enters the viewport. Triggers only once per section.
 */
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -50px 0px" }
    );

    document
      .querySelectorAll("section:not(#Hero)")
      .forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);
};

export default useScrollReveal;
