import { useState, useEffect } from "react";

/**
 * Hook to detect if the user's device supports WebGL for 3D rendering.
 * Falls back gracefully when WebGL is unavailable.
 */
export function useWebGL(): boolean {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") || canvas.getContext("webgl");
      setSupported(!!gl);
    } catch {
      setSupported(false);
    }
  }, []);

  return supported;
}
