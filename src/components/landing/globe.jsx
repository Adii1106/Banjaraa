import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,

      phi: 0,
      theta: 0.3,

      dark: 1,
      diffuse: 3,

      mapSamples: 16000,
      mapBrightness: 6,

      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.3, 0.6, 1],

      markers: [
        { location: [28.61, 77.20], size: 0.05 }, // Delhi
        { location: [19.07, 72.87], size: 0.05 }, // Mumbai
        { location: [17.38, 78.48], size: 0.05 }, // Hyderabad
        { location: [40.71, -74.00], size: 0.05 }, // NYC
      ],

      opacity: 1,
      scale: 1,
    });

    const animate = () => {
      phi += 0.003;

      globe.update({
        phi,
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => globe.destroy();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: 600,
        height: 600,
        maxWidth: "100%",
        aspectRatio: 1,
      }}
    />
  );
}