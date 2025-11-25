import React, { useState, useRef, useEffect } from "react";

interface LazyImageProps {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  threshold?: number; // How early to start loading (0-1)
  rootMargin?: string; // How far from viewport to start loading
  fill?: boolean; // Add this prop for better dimension control
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt = "", 
  className = "",
  priority = false,
  threshold = 0.1, // Start loading when 10% visible
  rootMargin = "200px", // Start loading 200px before entering viewport
  fill = false // For absolute positioning
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(priority ? src : "");
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      // Load immediately for priority images
      setIsLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            // Start loading when element enters viewport
            setImageSrc(src);
            observer.disconnect();
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, priority, isLoaded, threshold, rootMargin]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    console.warn(`Failed to load image: ${src}`);
  };

  // Build class names properly
  const imageClasses = [
    className,
    'transition-opacity duration-300',
    isLoaded ? 'opacity-100' : 'opacity-0',
    fill ? 'absolute inset-0 w-full h-full' : ''
  ].filter(Boolean).join(' ');

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={imageClasses}
      onLoad={handleLoad}
      onError={handleError}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
};

export default LazyImage;