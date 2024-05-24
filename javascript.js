window.addEventListener('scroll', function() {
    const parallax = document.querySelectorAll('.parallax');
    for (let i = 0; i < parallax.length; i++) {
        let scroll = window.pageYOffset;
        parallax[i].style.backgroundPositionY = scroll * 0.5 + 'px';
    }
});