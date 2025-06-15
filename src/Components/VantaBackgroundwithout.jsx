import React, { useEffect, useRef } from 'react';

const VantaBackgroundwithout = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect;

    const loadScript = (src) => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        document.body.appendChild(script);
      });
    };

    const initVanta = () => {
      if (window.VANTA && !vantaEffect) {
        vantaEffect = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3b82f6,           // Tailwind blue-500
          backgroundColor: 0x1c1c1c, // Tailwind gray-800
          points: 10.0,
          maxDistance: 2.0,
          spacing: 15.0,
        });
      }
    };

    // Load scripts sequentially
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js')
      .then(() => loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js'))
      .then(() => initVanta());

    // Cleanup
    return () => {
      if (vantaEffect && vantaEffect.destroy) vantaEffect.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full min-h-screen -z-10" />
  );
};

export default VantaBackgroundwithout;
