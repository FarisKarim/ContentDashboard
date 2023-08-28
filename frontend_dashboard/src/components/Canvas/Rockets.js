export const createRockets = (canvasWidth, canvasHeight) => {
    return [
        {
            x: -100,
            y: Math.random() * canvasHeight,
            dx: Math.random() * 2 + 1,
            dy: (Math.random() - 0.5) * 2,
            color: 'blue'
        },
        {
            x: canvasWidth + 100,
            y: Math.random() * canvasHeight,
            dx: -(Math.random() * 2 + 1),
            dy: (Math.random() - 0.5) * 2,
            color: 'red'
        }
    ];
};

export const updateRockets = (rockets, canvasWidth, canvasHeight) => {
    rockets.forEach(rocket => {
        rocket.x += rocket.dx;
        rocket.y += rocket.dy;
        if (rocket.x < -100 || rocket.x > canvasWidth + 100) {
            rocket.x = rocket.color === 'blue' ? -100 : canvasWidth + 100;
            rocket.y = Math.random() * canvasHeight;
            rocket.dx = rocket.color === 'blue' ? Math.random() * 2 + 1 : -(Math.random() * 2 + 1);
            rocket.dy = (Math.random() - 0.5) * 2;
        }
    });
};