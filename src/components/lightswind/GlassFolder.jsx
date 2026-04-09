"use client";

import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

const GlassFolder = ({ icon, className, children, images = [], onClick }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 1200);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section
      onClick={onClick}
      className={cn(
        "relative group flex flex-col items-center justify-center cursor-pointer",
        className
      )}
    >
      <div className="relative w-60 h-40 origin-bottom [perspective:1500px]">

        {/* Layers */}
        <div className="absolute inset-1 bg-white/5 backdrop-blur-md rounded-2xl transition-all group-hover:[transform:rotateX(-20deg)]"/>
        <div className="absolute inset-1 bg-white/5 backdrop-blur-md rounded-2xl transition-all group-hover:[transform:rotateX(-30deg)]"/>
        <div className="absolute inset-1 bg-white/5 backdrop-blur-md rounded-2xl transition-all group-hover:[transform:rotateX(-38deg)]"/>

        {/* Front */}
        <div className="absolute bottom-0 w-full h-[156px] bg-white/10 backdrop-blur-md rounded-2xl rounded-tr-none overflow-hidden transition-all group-hover:[transform:rotateX(-46deg)]">

          {/* Slideshow */}
          {images.length > 0 && (
            <img
              src={images[index]}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
            />
          )}

          {/* Default Icon */}
          <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition">
            {icon}
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 text-center px-3 transition">
            {children}
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlassFolder;