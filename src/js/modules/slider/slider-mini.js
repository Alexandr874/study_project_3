
import Slider from './slider'; 

export default class MiniSlaider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) { 
        super(container, next, prev, activeClass, animate, autoplay); 
    } 

   

    decorizeSlides() {
         this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if(this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
                
             }
         });

         if (!this.slides[0].closest('button')) {
            this.slides[0].classList.add(this.activeClass);
         }
         
         if(this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
             
         }
    }

    moveButtonsToEnd() {

          this.slides.forEach((slide, i) => {
            if(slide.tagName === "BUTTON") {
                this.container.appendChild(this.slides[i]);
            }
        });  
 
        
    }

    nextSlide() {
            this.container.appendChild(this.slides[0]);
            this.decorizeSlides();
            this.moveButtonsToEnd();

    }

    bindTriggers() {
        this.next.addEventListener('click', () => {
            this.nextSlide();
        });

        this.prev.addEventListener('click', () => {

            let active = this.slides[0];
            this.container.insertBefore(active, this.slides[this.slides.length - 1]);
            this.decorizeSlides();
            this.moveButtonsToEnd();

            
        });
    }

    activateAnimation() {
       this.paused = setInterval(() =>  this.nextSlide(),  5000);
    }

    init() {
       try {
        this.container.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        overflow: hidden; 
        align-items: flex-start;
    `;

    this.bindTriggers();
    this.decorizeSlides();
    
    if (this.autoplay) {
        this.container.addEventListener('mouseenter', () => clearInterval(this.paused));
         this.next.addEventListener('mouseenter', () => clearInterval(this.paused));
         this.prev.addEventListener('mouseenter', () => clearInterval(this.paused));
         this.container.addEventListener('mouseleave', () => this.activateAnimation());
         this.next.addEventListener('mouseleave', () => this.activateAnimation());
         this.prev.addEventListener('mouseleave', () => this.activateAnimation());
         this.activateAnimation();
        
    }

       } catch(e) {}
        
    }
}