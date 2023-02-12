import { useEffect, useState } from "react";
import { throttle } from "underscore";

export function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScrol = throttle(function () {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)
    window.addEventListener('scroll', handleScrol)
    return () => {
      window.removeEventListener('scroll', handleScrol);
    }
  }, [])
  return { scrollX, scrollY }
}