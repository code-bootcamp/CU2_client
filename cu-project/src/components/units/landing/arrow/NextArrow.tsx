import { useEffect, useRef, useState } from "react";

export default function NextArrow({
  className,
  style,
  onClick,
  scrollDownRef,
}) {
  return (
    <div
      className={className}
      ref={scrollDownRef}
      style={{
        ...style,
        display: "none",
      }}
      onClick={onClick}
    />
  );
}
