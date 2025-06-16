// accessibility.js
import { useEffect } from "react";

export const useAccessibility = () => {
  useEffect(() => {
    // תמונות - אם חסר alt, נוסיף תיאור ריק
    document.querySelectorAll("img").forEach((img) => {
      if (!img.hasAttribute("alt")) {
        img.setAttribute("alt", "");
      }
    });

    // כפתורים שמבוססים על div/spans
    document.querySelectorAll("div[onClick], span[onClick]").forEach((el) => {
      if (!el.hasAttribute("role")) {
        el.setAttribute("role", "button");
      }
      if (!el.hasAttribute("tabindex")) {
        el.setAttribute("tabindex", "0");
      }
      if (!el.getAttribute("aria-label") && el.textContent.trim() === "") {
        el.setAttribute("aria-label", "לחצן פעולה");
      }
    });

    // אייקונים ללא טקסט
    document.querySelectorAll("svg").forEach((icon) => {
      const parent = icon.closest("button, div, span");
      if (parent && !parent.getAttribute("aria-label") && parent.textContent.trim() === "") {
        parent.setAttribute("aria-label", "אייקון פעולה");
      }
    });

    // שדות טופס
    document.querySelectorAll("input, textarea").forEach((field) => {
      if (!field.hasAttribute("aria-label")) {
        const placeholder = field.getAttribute("placeholder") || "שדה טופס";
        field.setAttribute("aria-label", placeholder);
      }
    });

    // קישורים ללא טקסט
    document.querySelectorAll("a").forEach((a) => {
      if (a.textContent.trim() === "" && !a.getAttribute("aria-label")) {
        a.setAttribute("aria-label", "קישור");
      }
    });

    // תמונות בפורטפוליו – הוספת alt לפי טקסט קרוב אם אפשר
    document.querySelectorAll(".portfolio .image__container img").forEach((img) => {
      const titleEl = img.closest(".portfolio")?.querySelector(".title");
      if (titleEl && !img.alt) {
        img.alt = `תמונה של פרויקט: ${titleEl.textContent}`;
      }
    });
  }, []);
};
