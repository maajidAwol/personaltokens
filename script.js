function togle() {
    const nav = document.getElementById('navigation');
    if (nav.classList.contains('main-nav-mobile-hidden')) {
        nav.classList.remove('main-nav-mobile-hidden');
    } else {
        nav.classList.add('main-nav-mobile-hidden');
    }
}