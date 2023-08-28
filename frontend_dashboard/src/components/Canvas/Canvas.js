import React, { useEffect, useRef } from 'react';
import './Canvas.css';
import { createStars, updateStars } from './Stars';
import { createRockets, updateRockets } from './Rockets';

const Canvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const stars = createStars(100, canvas.width, canvas.height);
        const rockets = createRockets(canvas.width, canvas.height);

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update positions
            updateStars(stars, canvas.width, canvas.height);
            updateRockets(rockets, canvas.width, canvas.height);

            // Draw stars
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = star.color;
                ctx.fill();
            });
            for (let i = 0; i < stars.length; i++) {
                for (let j = i + 1; j < stars.length; j++) {
                    const dist = Math.hypot(stars[j].x - stars[i].x, stars[j].y - stars[i].y);
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(stars[i].x, stars[i].y);
                        ctx.lineTo(stars[j].x, stars[j].y);
                        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
                        ctx.stroke();
                    }
                }
            }
            // Draw rockets
            rockets.forEach(rocket => {
                ctx.fillStyle = rocket.color;
                ctx.fillRect(rocket.x, rocket.y, 30, 10);  // body
                ctx.beginPath();  // nose
                if(rocket.color === 'blue') {
                    ctx.moveTo(rocket.x + 30, rocket.y);
                    ctx.lineTo(rocket.x + 40, rocket.y + 5);
                    ctx.lineTo(rocket.x + 30, rocket.y + 10);
                } else {
                    ctx.moveTo(rocket.x, rocket.y);
                    ctx.lineTo(rocket.x - 10, rocket.y + 5);
                    ctx.lineTo(rocket.x, rocket.y + 10);
                }
                ctx.closePath();
                ctx.fill();

                // Flame for the rocket
                if(rocket.color === 'blue') {
                    ctx.fillStyle = 'orange';
                    ctx.beginPath();
                    ctx.arc(rocket.x, rocket.y + 5, Math.random() * 10 + 5, Math.PI, 0, false);
                    ctx.fill();
                } else {
                    ctx.fillStyle = 'orange';
                    ctx.beginPath();
                    ctx.arc(rocket.x + 30, rocket.y + 5, Math.random() * 10 + 5, 0, Math.PI, false);
                    ctx.fill();
                }
            });

            requestAnimationFrame(draw);
        }

        draw();

    }, []);

    return <canvas ref={canvasRef} className="backgroundCanvas" />;
}

export default Canvas;
