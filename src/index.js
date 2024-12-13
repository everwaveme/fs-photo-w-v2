import './scss/main.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import fslightbox from 'fslightbox';

//AOS animation
AOS.init({
  once: true,
});

//Open/Close burger menu
const burger = document.querySelector('.js-nav-burger');
const nav = document.querySelector('.js-nav');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
  body.classList.toggle('lock');
});

//Dark/Light mode switcher
