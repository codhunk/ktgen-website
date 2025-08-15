import React, { useEffect, useRef } from 'react';

const MousePointerEffect = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    const moveCursor = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Center the glow around the cursor
      if (glow) {
        glow.style.left = `${mouseX}px`;
        glow.style.top = `${mouseY}px`;
      }
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="glow-circle" />

      <style>{`
        .glow-circle {
          position: fixed;
          width: 70px;
          height: 70px;
          pointer-events: none;
          top: 0;
          left: 0;
          margin-left: -30px; /* Half of width */
          margin-top: -40px;  /* Half of height */
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%);
          filter: blur(12px);
          z-index: 9999;
          animation: pulse 2s infinite ease-in-out;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0,255,255,0.6), 0 0 40px rgba(0,255,255,0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(0,255,255,0.8), 0 0 60px rgba(0,255,255,0.4);
          }
        }
      `}</style>
    </>
  );
};

export default MousePointerEffect;
