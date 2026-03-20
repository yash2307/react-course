import { useEffect, useRef } from "react";

export default function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value; // store current value AFTER render
  }, [value]);

  return ref.current;
}

/**
 * useRef() stores a value that persists across renders.

useEffect() runs after render, so it stores the value from the current render, which becomes the previous value for the next render.
 */