import { type RefObject, useEffect, useState } from "react";

export const useInView = (
  ref: RefObject<Element | null>,
  options = {
    threshold: 0.1, once: true,
  }) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.once) {
            observer.disconnect();
          }
        } else if (!options.once) {
          setIsInView(false);
        }
      },
      {
        threshold: options.threshold,
      },
    );

    observer.observe(ref.current);
  }, [ref, options.threshold, options.once]);

  return isInView;
};
