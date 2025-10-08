import { type RefObject, useEffect, useState } from 'react';

type Options = {
  threshold?: number | number[];
  once?: boolean;
  root?: Element | null;
  rootMargin?: string;
};

export const useInView = (
  ref: RefObject<Element | null>,
  { threshold = 0.1, once = false, root = null, rootMargin = '0px 0px -20% 0px' }: Options = {}
) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect(); // ✅ cleanup
  }, [ref, threshold, once, root, rootMargin]);

  return isInView;
};
