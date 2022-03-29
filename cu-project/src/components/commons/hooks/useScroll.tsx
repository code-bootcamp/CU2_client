import { useEffect, useState } from "react";

export const useScroll = () => {
    const [scrollLocation, setScrollLocation] = useState({ x: 0, y: 0 });
    const onScroll = () => {
      setScrollLocation({ x: window.scrollX, y: window.scrollY });
    };
    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return scrollLocation;
  };