import './scss/main.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import fslightbox from 'fslightbox';

//AOS animation
AOS.init({
  once: true,
});

//Open/Close burger menu
const burger = document.querySelector('.js-header-burger');
const nav = document.querySelector('.js-nav');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
  if (nav.classList.contains('active') == true) {
    nav.classList.remove('active');
    body.classList.remove('lock');
  } else {
    nav.classList.add('active');
    body.classList.add('lock');
  }
});
