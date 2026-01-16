document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        let isDragging = false;
        let startX = 0;
        let scrollLeft = 0;
        
        const handleMouseDown = (e) => {
            isDragging = true;
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        };
        
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 1.5;
            carousel.scrollLeft = scrollLeft - walk;
        };
        
        const handleMouseUp = () => { isDragging = false; };
        
        const handleTouchStart = (e) => {
            isDragging = true;
            startX = e.touches[0].clientX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        };
        
        const handleTouchMove = (e) => {
            if (!isDragging) return;
            const x = e.touches[0].clientX - carousel.offsetLeft;
            const walk = (x - startX) * 0.8;
            carousel.scrollLeft = scrollLeft - walk;
        };
        
        const handleTouchEnd = () => { isDragging = false; };
        
        carousel.addEventListener('mousedown', handleMouseDown);
        carousel.addEventListener('mousemove', handleMouseMove);
        carousel.addEventListener('mouseup', handleMouseUp);
        carousel.addEventListener('mouseleave', handleMouseUp);
        
        carousel.addEventListener('touchstart', handleTouchStart);
        carousel.addEventListener('touchmove', handleTouchMove);
        carousel.addEventListener('touchend', handleTouchEnd);
    });
});
