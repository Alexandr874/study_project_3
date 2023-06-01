 // Прототип остальных слайдеров 
 export default class Slider {
     constructor({container = null,
            btns = null,
            next = null,
            prev = null,
            prevmodule = null,
            nextmodule = null,
            activeClass = ' ',
            animate,
            autoplay,
            slides} = {}) {
        this.container = document.querySelector(container);
        try{this.slides = this.container.children;} catch(e){}
        this.btns = document.querySelectorAll(btns);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.prevmodule = document.querySelectorAll(prevmodule);
        this.nextmodule = document.querySelectorAll(nextmodule);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay; 
        this.slideIndex = 1;

     }

 }