document.addEventListener('DOMContentLoaded', function() {
    let stars = document.getElementById('stars');
    let moon = document.getElementById('moon');
    let mountain1 = document.getElementById('mountains1');
    let mountain2 = document.getElementById('mountains2');
    let mountain3 = document.getElementById('mountains3');
    let river = document.getElementById('river');
    let boat = document.getElementById('boat');

    window.onscroll = function() {
        let value = scrollY;
        stars.style.left = value + 'px';
        moon.style.top = value * 3 + 'px';
        mountain1.style.top = value * 1.5 + 'px';
        mountain2.style.top = value * 1.2 + 'px';
        mountain3.style.top = value + 'px';
        river.style.top = value + 'px';
        boat.style.left = value * 3 + 'px';
        boat.style.top = value * 1.5 + 'px';
    }
});
