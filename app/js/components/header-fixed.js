export function blockFixed(className) {
    window.addEventListener('scroll', showBlock);
    function showBlock() {
        if (window.pageYOffset > 300) {
            className.classList.add('fixed');
        } else {
            className.classList.remove('fixed');
        }
    }
}
