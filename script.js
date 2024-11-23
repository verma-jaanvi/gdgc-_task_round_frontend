document.addEventListener('DOMContentLoaded', () => {
            const sliderTrack = document.querySelector('.slider-track');
            const children = Array.from(sliderTrack.children);
            children.forEach((child) => {
                const clone = child.cloneNode(true);
                sliderTrack.appendChild(clone);
            });
            sliderTrack.addEventListener('mouseenter', () => {
                sliderTrack.style.animationPlayState = 'paused';
            });
    
            sliderTrack.addEventListener('mouseleave', () => {
                sliderTrack.style.animationPlayState = 'running';
            });
        });

//hamberger menu addEventListener
document.getElementById('hamburger-menu').addEventListener('click', () => {
    const menu = document.getElementById('menu-list');
    menu.classList.toggle('active');
});
