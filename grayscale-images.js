for (const image of document.querySelectorAll('img')) {
    image.style.filter = 'grayscale(100%)';
    image.addEventListener('mouseover', function(e) {
        e.target.style.filter = null;
    });
    image.addEventListener('mouseleave', function(e) {
        e.target.style.filter = 'grayscale(100%)';
    })
}
