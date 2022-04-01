import { useEffect, useRef } from "react";

export default function PrevArrow({ className, style, onClick, scrollUpRef }) {
  return (
    <div
      className={className}
      ref={scrollUpRef}
      style={{
        ...style,
        zIndex: -1,
      }}
      onClick={onClick}
    />
  );
}
