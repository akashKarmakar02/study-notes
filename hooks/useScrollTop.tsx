import { useEffect, useState } from "react";

function useScrollTop(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);

  function handleScroll() {
    if (window.scrollY > threshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);
  return scrolled;
}

export default useScrollTop;
