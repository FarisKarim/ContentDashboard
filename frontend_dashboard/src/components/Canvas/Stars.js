export const createStars = (count, canvasWidth, canvasHeight) => {
    const colors = ['#FF4500', '#32CD32', '#1E90FF', '#FFD700'];
    const stars = [];
    for (let i = 0; i < count; i++) {
        const dx = (Math.random() - 0.5) / 5;
        const dy = (Math.random() - 0.5) / 5;
        stars.push({
            x: Math.random() * canvasWidth,
            y: Math.random() * canvasHeight,
            dx: dx,
            dy: dy,
            radius: Math.random() * 3 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
        });
    }
    return stars;
};

export const updateStars = (stars, canvasWidth, canvasHeight) => {
    stars.forEach(star => {
        star.x += star.dx;
        star.y += star.dy;
        if (star.x - star.radius < 0 || star.x + star.radius > canvasWidth) {
            star.dx = -star.dx;
        }
        if (star.y - star.radius < 0 || star.y + star.radius > canvasHeight) {
            star.dy = -star.dy;
        }
    });
    
};
