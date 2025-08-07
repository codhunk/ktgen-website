import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let ripples = [];

    const createRipple = (x, y) => {
      ripples.push({ x, y, radius: 0, alpha: 0.2 });
    };

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripples.forEach((ripple, index) => {
        ripple.radius += 1.6; // slower expansion
        ripple.alpha -= 0.003; // slower fade

        if (ripple.alpha <= 0) {
          ripples.splice(index, 1);
        } else {
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, 2 * Math.PI);
          ctx.strokeStyle = `rgba(173, 216, 230, ${ripple.alpha})`; // light blue
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });

      requestAnimationFrame(update);
    };

    update();

    const handleMouseMove = (e) => {
      createRipple(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "screen", // optional glow blending
      }}
    />
  );
}
