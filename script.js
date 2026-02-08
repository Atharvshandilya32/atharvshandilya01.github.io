// Simple interactivity for the cake page
document.addEventListener('DOMContentLoaded', function() {
    const cake = document.getElementById('cake');
    const message = document.getElementById('message');
    const candles = document.querySelectorAll('.candle');
    
    if (cake) {
        cake.addEventListener('click', function() {
            candles.forEach(candle => candle.classList.add('lit'));
            message.textContent = 'Candles blown out! Happy Birthday, Dad! 🎉';
        });
    }
});
