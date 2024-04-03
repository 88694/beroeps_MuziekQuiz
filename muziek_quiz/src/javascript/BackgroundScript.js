function randomBrightColor() {
    let r, g, b;

    do {
        r = Math.floor(Math.random() * 256); 
        g = Math.floor(Math.random() * 256); 
        b = Math.floor(Math.random() * 256);
    } while (
        r < 150 || g < 150 || b < 150 ||
        (r > 100 && r < 180 && g > 80 && g < 160 && b > 50 && b < 130) ||
        (r < 20 && g < 20 && b < 20) || (r > 230 && g > 230 && b > 230)
    );

    return `rgb(${r},${g},${b})`;
}

function breathingBackground() {
    setInterval(function() {
        document.body.style.backgroundColor = randomBrightColor();
    }, 1000); 
}

breathingBackground();
