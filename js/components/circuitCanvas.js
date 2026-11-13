/**
 * Circuit Canvas — Subtle Engineering Background Grid & Signal Traces
 * Lightweight, hardware-accelerated canvas animation.
 */

export function initCircuitCanvas(canvasId = 'circuit-bg') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Grid properties
  const gridSize = 48;
  const nodes = [];
  const pulses = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initNodes();
  }

  function initNodes() {
    nodes.length = 0;
    const cols = Math.floor(width / gridSize) + 1;
    const rows = Math.floor(height / gridSize) + 1;

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        // Only keep a selective percentage of nodes as circuit junctions
        if (Math.random() < 0.12) {
          nodes.push({
            x: c * gridSize,
            y: r * gridSize,
            size: Math.random() < 0.3 ? 2.5 : 1.5,
            opacity: 0.15 + Math.random() * 0.25,
            pulseTimer: Math.random() * 100
          });
        }
      }
    }
  }

  function spawnPulse() {
    if (pulses.length >= 8 || isReducedMotion) return;
    if (nodes.length === 0) return;

    const startNode = nodes[Math.floor(Math.random() * nodes.length)];
    // Choose cardinal direction
    const directions = [
      { dx: gridSize, dy: 0 },
      { dx: -gridSize, dy: 0 },
      { dx: 0, dy: gridSize },
      { dx: 0, dy: -gridSize }
    ];
    const dir = directions[Math.floor(Math.random() * directions.length)];

    pulses.push({
      x: startNode.x,
      y: startNode.y,
      targetX: startNode.x + dir.dx * Math.floor(2 + Math.random() * 4),
      targetY: startNode.y + dir.dy * Math.floor(2 + Math.random() * 4),
      currentX: startNode.x,
      currentY: startNode.y,
      speed: 1.5 + Math.random() * 1.5,
      progress: 0,
      color: Math.random() > 0.4 ? 'rgba(56, 189, 248, 0.7)' : 'rgba(34, 211, 238, 0.7)'
    });
  }

  initNodes();

  let lastTime = 0;
  let pulseSpawnInterval = 0;

  function render(time) {
    ctx.clearRect(0, 0, width, height);

    // 1. Draw subtle coordinate grid dots
    ctx.fillStyle = 'rgba(30, 41, 59, 0.35)';
    const cols = Math.floor(width / gridSize) + 1;
    const rows = Math.floor(height / gridSize) + 1;

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const x = c * gridSize;
        const y = r * gridSize;
        ctx.fillRect(x - 0.75, y - 0.75, 1.5, 1.5);
      }
    }

    // 2. Draw Circuit Traces
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      // Draw junction node
      ctx.fillStyle = `rgba(56, 189, 248, ${node.opacity})`;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
      ctx.fill();

      // Connect to close horizontal/vertical neighbors
      for (let j = i + 1; j < Math.min(i + 8, nodes.length); j++) {
        const other = nodes[j];
        const dx = Math.abs(node.x - other.x);
        const dy = Math.abs(node.y - other.y);

        if ((dx === gridSize && dy === 0) || (dy === gridSize && dx === 0)) {
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      }
    }

    // 3. Animate Traveling Signal Packets
    if (!isReducedMotion) {
      pulseSpawnInterval++;
      if (pulseSpawnInterval > 75) {
        spawnPulse();
        pulseSpawnInterval = 0;
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += 0.015 * p.speed;

        p.currentX = p.x + (p.targetX - p.x) * p.progress;
        p.currentY = p.y + (p.targetY - p.y) * p.progress;

        // Draw glowing packet
        ctx.fillStyle = p.color;
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.currentX, p.currentY, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        if (p.progress >= 1) {
          pulses.splice(i, 1);
        }
      }
    }

    requestAnimationFrame(render);
  }

  window.addEventListener('resize', resize, { passive: true });
  requestAnimationFrame(render);
}
