// components/ParticleEffect.js
"use client";
import { useEffect, useRef } from 'react';

const ParticleEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let particles = [];
    const colors = ['#00BFFF', '#1E90FF', '#6495ED'];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const random = (min, max) => Math.random() * (max - min) + min;

    const createParticle = (x, y) => {
      particles.push({
        x,
        y,
        radius: random(5, 15),
        color: colors[Math.floor(Math.random() * colors.length)],
        dx: random(-2, 2),
        dy: random(-2, 2),
      });
    };

    const drawParticle = (particle) => {
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = particle.color;
      context.fill();
    };

    const updateParticle = (particle) => {
      particle.x += particle.dx;
      particle.y += particle.dy;
      particle.radius *= 0.96;
    };

    const animateParticles = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles = particles.filter(p => p.radius > 0.5);
      particles.forEach(particle => {
        updateParticle(particle);
        drawParticle(particle);
      });
      requestAnimationFrame(animateParticles);
    };

    const onMouseMove = (event) => {
      createParticle(event.clientX, event.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animateParticles();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none"></canvas>;
};

export default ParticleEffect;
