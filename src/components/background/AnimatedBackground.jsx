import { useRef, useEffect } from "react";
import { useBackground } from "../../hooks/useBackground";
import { useTheme } from "../../hooks/useTheme";

const SHAPE_COUNT = 18;
const BLUE_DARK = "#3399ff";
const BLUE_LIGHT = "#007fff";
const YELLOW_DARK = "#fff133";
const YELLOW_LIGHT = "#ffb700";

function createShapes(width, height) {

  const shapes = [];
  for (let i = 0; i < SHAPE_COUNT; i++) {
    shapes.push({
      index: i,
      x: Math.random() * width,
      y: Math.random() * height,
      size: 20 + Math.random() * 40,
      rotation: Math.random() * Math.PI * 2,
      driftX: (Math.random() - 0.5) * 0.5,
      driftY: (Math.random() - 0.5) * 0.3,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      type: ["square", "triangle", "circle"][Math.floor(Math.random() * 3)],
      opacity: 0.4 + Math.random() * 0.12,
    });
  }
  return shapes;
}

function drawShape(ctx, shape, color) {
  const { x, y, size, rotation, type, opacity } = shape;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.strokeStyle = color;
  ctx.globalAlpha = opacity;
  ctx.lineWidth = 1.5;

  if (type === "square") {
    ctx.strokeRect(-size / 2, -size / 2, size, size);
  } else if (type === "triangle") {
    ctx.beginPath();
    ctx.moveTo(0, -size / 2);
    ctx.lineTo(-size / 2, size / 2);
    ctx.lineTo(size / 2, size / 2);
    ctx.closePath();
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.restore();
}

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const shapesRef = useRef(null);
  const rafRef = useRef(null);
  const { visible } = useBackground();
  const { theme } = useTheme();

  useEffect(() => {
    if (!visible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (!shapesRef.current) {
        shapesRef.current = createShapes(canvas.width, canvas.height, theme);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const shape of shapesRef.current) {
        const color = theme === "light" ? (shape.index % 2 === 0 ? BLUE_LIGHT : YELLOW_LIGHT) : (shape.index % 2 === 0 ? BLUE_DARK : YELLOW_DARK);
        shape.x += shape.driftX;
        shape.y += shape.driftY;
        shape.rotation += shape.rotationSpeed;

        // Wrap around edges
        if (shape.x < -60) shape.x = canvas.width + 60;
        if (shape.x > canvas.width + 60) shape.x = -60;
        if (shape.y < -60) shape.y = canvas.height + 60;
        if (shape.y > canvas.height + 60) shape.y = -60;

        drawShape(ctx, shape, color);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [visible, theme]);

  if (!visible) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
