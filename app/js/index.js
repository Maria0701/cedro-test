import { blockFixed } from "./components/header-fixed";
import { menuOpener } from "./components/menuopener";
import Swiper, { Navigation, Pagination } from 'swiper';

try {
    const opener = document.querySelector('.header__toggler');
    const menuElt = document.querySelector('.header__menu');  
    const eltToOpen = document.querySelector('.header');


    if (opener && menuElt) {        
        menuOpener(opener, menuElt, eltToOpen);
    }

    const subTogglers = document.querySelectorAll('.menu__sub-toggler');

    const togglerHandler = (evt) => {
        const target = evt.target.closest('.menu__item');
        subTogglers.forEach(toggler => {
            const el = toggler.closest('.menu__item');
            if (el.classList.contains('opened') && el !== target) {
                el.classList.remove('opened');
            }
        })
        target.classList.toggle('opened');
    }    

    if (subTogglers.length > 0) {
        subTogglers.forEach(toggler => {
            toggler.addEventListener('click', togglerHandler);
        })
    }

    if (eltToOpen) {   
        blockFixed(eltToOpen);
    }
} catch(e) {
    console.log(e);
}

try{
    const teamSwiper = new Swiper(".team-slider", {
        modules: [Navigation, Pagination],
        loop: true,
        observer: true,
        observeParents: true,        
        pagination: {
            el: ".team-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.team-pagination-next',
            prevEl: '.team-pagination-prev',
        },
        breakpoints: {
            320: {
              slidesPerView: 1,
            },

            600: {
              slidesPerView: 2,
            },
        },
    });

} catch(e) {
  console.log(e);
}

try{
    const newsSwiper = new Swiper(".news-slider", {
        modules: [Navigation],
        loop: false,
        /*observer: true,
        observeParents: true,*/
        navigation: {
            nextEl: '.news-slider__arrow--right',
            prevEl: '.news-slider__arrow--left',
        },
        slidesPerView: 1,
        breakpoints: {
            700: {
             slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        }
    });

} catch(e) {
  console.log(e);
}

try {
    const phones = document.querySelectorAll('.phone');
     if (phones.length > 0) {
        phones.forEach(phone => phoneMask(phone));
    }
  } catch(e) {
    console.log(e);
  }