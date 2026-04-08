import { useEffect } from "react";

export const useAccessibility = () => {
  useEffect(() => {
    // Ensure all images have an alt attribute (empty string for decorative)
    document.querySelectorAll("img:not([alt])").forEach((img) => {
      img.setAttribute("alt", "");
    });

    // Ensure text-less anchor tags have an aria-label
    document.querySelectorAll("a").forEach((a) => {
      if (!a.textContent.trim() && !a.getAttribute("aria-label")) {
        a.setAttribute("aria-label", "קישור");
      }
    });
  }, []);
};
