import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';

const ParticlesContainer = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);
      
    const options = {
        fullScreen: { enable: false },
        background: { color: { value: '' } },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: { enable: false, mode: 'push' },
                // onHover: { enable: true, mode: 'repulse' },
                resize: true,
            },
            modes: {
                push: { quantity: 100 },
                repulse: { distance: 200, duration: 0.4 },
            },
        },
        particles: {
            color: { value: '#1b1b1b' },
            links: {
                color: '#1b1b1b',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: { enable: true },
            move: {
                directions: 'none',
                enable: true,
                outModes: { default: 'bounce' },
                random: false,
                speed: 0.8,
                straight: false,
            },
            number: {
                density: { enable: true, area: 800 },
                value: 60,
            },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
    };

    const particlesLoaded = useCallback(async () => {}, []);

    return (
        <Particles 
            id="tsparticles" 
            className="w-full absolute top-0 left-0 opacity-80 z-0 p-6 pb-0 h-[103%]"
            init={particlesInit} 
            loaded={particlesLoaded} 
            options={options} 
        />
    );
};

export default ParticlesContainer;
