import { useEffect, useRef } from 'react';

export default function FlowingLines() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');

    const resize = () => {
      cv.width  = window.innerWidth;
      cv.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    /* 8 horizontal sine waves — staggered amplitude, frequency, speed, opacity */
    const lines = [
      { yRatio: 0.08, amp: 18, freq: 0.008, phase: 0.0,  speed: 0.004, alpha: 0.04 },
      { yRatio: 0.20, amp: 24, freq: 0.010, phase: 1.2,  speed: 0.005, alpha: 0.05 },
      { yRatio: 0.33, amp: 16, freq: 0.007, phase: 2.5,  speed: 0.006, alpha: 0.06 },
      { yRatio: 0.45, amp: 28, freq: 0.012, phase: 0.8,  speed: 0.004, alpha: 0.07 },
      { yRatio: 0.57, amp: 20, freq: 0.009, phase: 3.1,  speed: 0.005, alpha: 0.06 },
      { yRatio: 0.68, amp: 22, freq: 0.011, phase: 1.7,  speed: 0.007, alpha: 0.05 },
      { yRatio: 0.80, amp: 15, freq: 0.008, phase: 4.0,  speed: 0.004, alpha: 0.04 },
      { yRatio: 0.92, amp: 26, freq: 0.010, phase: 2.2,  speed: 0.006, alpha: 0.03 },
    ];

    let t = 0;
    let raf;

    const draw = () => {
      const W = cv.width, H = cv.height;
      ctx.clearRect(0, 0, W, H);

      lines.forEach(l => {
        ctx.beginPath();
        for (let x = 0; x <= W; x += 3) {
          const y = l.yRatio * H + Math.sin(x * l.freq + t * l.speed + l.phase) * l.amp;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(255,255,255,${l.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      t++;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}