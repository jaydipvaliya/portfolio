import { useEffect, useRef } from 'react';

export default function FlowingLines() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      cv.width  = window.innerWidth * dpr;
      cv.height = window.innerHeight * dpr;
      cv.style.width = window.innerWidth + 'px';
      cv.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    /* 6 horizontal sine waves — reduced from 8 */
    const lines = [
      { yRatio: 0.10, amp: 18, freq: 0.008, phase: 0.0,  speed: 0.004, alpha: 0.04 },
      { yRatio: 0.28, amp: 24, freq: 0.010, phase: 1.2,  speed: 0.005, alpha: 0.05 },
      { yRatio: 0.45, amp: 28, freq: 0.012, phase: 0.8,  speed: 0.004, alpha: 0.06 },
      { yRatio: 0.62, amp: 20, freq: 0.009, phase: 3.1,  speed: 0.005, alpha: 0.05 },
      { yRatio: 0.78, amp: 15, freq: 0.008, phase: 4.0,  speed: 0.004, alpha: 0.04 },
      { yRatio: 0.92, amp: 26, freq: 0.010, phase: 2.2,  speed: 0.006, alpha: 0.03 },
    ];

    let t = 0;
    let raf;
    let lastFrame = 0;
    const FRAME_INTERVAL = 33; // ~30fps

    const draw = (now) => {
      raf = requestAnimationFrame(draw);
      if (now - lastFrame < FRAME_INTERVAL) return;
      lastFrame = now;

      const W = window.innerWidth, H = window.innerHeight;
      ctx.clearRect(0, 0, W, H);

      lines.forEach(l => {
        ctx.beginPath();
        for (let x = 0; x <= W; x += 5) {
          const y = l.yRatio * H + Math.sin(x * l.freq + t * l.speed + l.phase) * l.amp;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(255,255,255,${l.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      t++;
    };

    raf = requestAnimationFrame(draw);
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