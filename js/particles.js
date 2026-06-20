/**
 * Interactive Canvas Particles
 * Renders connected node points in the Hero background.
 * Color-adapts dynamically to active site themes.
 */

class HeroParticles {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.animationId = null;
    
    // Config
    this.maxParticles = 80;
    this.connectionDistance = 120;
    this.mouseRadius = 150;
    
    this.mouse = {
      x: null,
      y: null,
      radius: this.mouseRadius
    };
    
    // Core color settings (fetched dynamically based on active theme)
    this.colors = {
      particle: 'rgba(37, 99, 235, 0.35)', // Royal Blue default
      line: 'rgba(37, 99, 235, 0.08)'      // Blue line default
    };
    
    this.init();
    this.setupEventListeners();
  }
  
  init() {
    this.resizeCanvas();
    this.updateColors();
    this.createParticles();
    this.animate();
  }
  
  resizeCanvas() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }
  
  updateColors() {
    // Light-mode locked colors
    this.colors.particle = 'rgba(0, 86, 179, 0.18)'; // Rich Royal Blue
    this.colors.line = 'rgba(2, 132, 199, 0.08)';    // Sky Blue lines
  }
  
  createParticles() {
    this.particles = [];
    const count = Math.min(this.maxParticles, (this.canvas.width * this.canvas.height) / 12000);
    
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2.5 + 1
      });
    }
  }
  
  setupEventListeners() {
    window.addEventListener('resize', () => {
      // Debounce resize
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        this.resizeCanvas();
        this.createParticles();
      }, 200);
    });
    
    // Track mouse coordinates relative to hero container
    const parent = this.canvas.parentElement;
    parent.addEventListener('mousemove', (e) => {
      const rect = parent.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });
    
    parent.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
    
    // Listen for custom theme switch events
    document.addEventListener('themeChanged', () => {
      this.updateColors();
    });
  }
  
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Update and draw particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      
      // Move
      p.x += p.vx;
      p.y += p.vy;
      
      // Boundary collisions
      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;
      
      // Mouse interaction (repel effect)
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < this.mouse.radius) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          const angle = Math.atan2(dy, dx);
          // Gently push particle away
          p.x += Math.cos(angle) * force * 1.5;
          p.y += Math.sin(angle) * force * 1.5;
        }
      }
      
      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = this.colors.particle;
      this.ctx.fill();
      
      // Draw connections
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < this.connectionDistance) {
          // Fade line based on distance
          const alpha = (1 - dist / this.connectionDistance) * 0.8;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          
          // Use alpha modifier on line color
          const baseLineColor = this.colors.line;
          // Extract colors and replace alpha channels
          this.ctx.strokeStyle = baseLineColor.replace(/[\d\.]+\)$/, `${alpha})`);
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

// Global initialization helper
window.HeroParticles = HeroParticles;
