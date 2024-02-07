import { useState, useEffect, useRef, ImgHTMLAttributes } from "react";

interface IlazyImage extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

function LazyImage({ className, ...props }: IlazyImage) {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const callback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setIsInView(true);
    });
  };

  useEffect(() => {
    const element = imgRef.current;
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });
    if (element) observer.observe(element);
    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  return isInView ? (
    <img
      className={`aspect-square rounded-md bg-cover bg-center object-cover ${className}`}
      loading="lazy"
      width={200}
      height={200}
      {...props}
    />
  ) : (
    <img
      className={`animate-pulse rounded-md bg-slateGray ${className}`}
      width={200}
      height={200}
      ref={imgRef}
    />
  );
}

export default LazyImage;
