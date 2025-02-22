import { useRef, useEffect } from "react";

function DotsBackground() {
  const canvasRef = useRef(null);

  const colors = [
    "rosewater",
    "flamingo",
    "pink",
    "mauve",
    "red",
    "maroon",
    "peach",
    "yellow",
    "green",
    "teal",
    "sky",
    "sapphire",
    "blue",
    "lavender",
    "text",
  ];

  const dotSize = 3;
  const space = 40;
  const radius = 50;
  const fadeDistance = 200;
  const maxOpacity = 0.7;
  const minOpacity = 0.05;
  const defaultColor = "#242438";
  let dots = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      dots = [];
      for (let x = 0; x < width; x += space) {
        for (let y = 0; y < height; y += space) {
          dots.push({
            x,
            y,
            color: getComputedStyle(root).getPropertyValue(
              "--" + colors[Math.floor(Math.random() * colors.length)],
            ),
          });
        }
      }
    }
    handleResize();
    const drawDots = (mouseX = -1000, mouseY = -1000) => {
      ctx.clearRect(0, 0, width, height);
      dots.forEach(({ x, y, color }) => {
        const dx = x - mouseX;
        const dy = y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        let opacity = 0;

        if (distance > fadeDistance) {
          ctx.globalAlpha = 1;
          ctx.fillStyle = defaultColor;
        } else {
          if (distance < radius) {
            opacity = maxOpacity;
          } else {
            opacity =
              maxOpacity * (1 - (distance - radius) / (fadeDistance - radius));
          }
          ctx.globalAlpha = Math.max(minOpacity, opacity);
          ctx.fillStyle = color;
        }

        ctx.beginPath();
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
    };

    let animationFrameId;
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      animationFrameId = requestAnimationFrame(() => drawDots(mouseX, mouseY));
    };

    drawDots();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed left-0 top-0 -z-10 h-full w-full bg-mantle md:hidden"
    ></canvas>
  );
}

export default DotsBackground;
