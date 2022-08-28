export function menuOpener (opener, elt, eltToOpen, closeElt) {

    const headerElt = eltToOpen;
    const overlay = document.querySelector('.overlay');
    const closeEl = closeElt || opener;

    function outOfAreaHandler(evt) {
        if (elt.contains(evt.target))  return;        
        closeHandler();
    }

    function animationHandler(evt) {
        evt.animationName === 'headerdrop' 
            ? elt.classList.remove('header__menu--dropped') 
            : elt.classList.remove('header__menu--lifted');
    }
    
    function closeHandler() {
        headerElt.classList.remove('opened');
        closeEl.removeEventListener('click', closeHandler);
        overlay.removeEventListener('click', outOfAreaHandler);
        opener.addEventListener('click', openHandler);
        elt.addEventListener('animationend', animationHandler);
        elt.classList.add('header__menu--lifted');
        overlay.classList.remove('overlay--active');
    }

    function openHandler() { 
        headerElt.classList.add('opened');
        opener.removeEventListener('click', openHandler);
        closeEl.addEventListener('click', closeHandler);
        overlay.addEventListener('click', outOfAreaHandler);
        elt.classList.add('header__menu--dropped');
        elt.addEventListener('animationend', animationHandler);
        overlay.classList.add('overlay--active');
    }

    opener.addEventListener('click', openHandler);
}