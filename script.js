document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('loveModal');
    const heartsContainer = document.getElementById('hearts');

    modal.addEventListener('show.bs.modal', function () {
        for (let i = 0; i < 20; i++) {
            createHeart();
        }
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heartsContainer.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
});
