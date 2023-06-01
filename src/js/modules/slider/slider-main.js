 
 // предаём сюда прототип слайдера 
 import Slider from './slider'; 

// сделали 1 глобальный слайдер
 export default class MainSlider extends Slider {
      


    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = this.slides.length; 
        }
        // код в этом блоке (try-catch) будет запускаться при условии, что сайт будет 
        // перелистан на 3страницу ((n === 3))
        try {
            this.hanson.style.opacity = '0';

            if (n === 3) {
                 this.hanson.classList.add('animated');
                  setTimeout(() => {
                    this.hanson.style.opacity ='1';
                    this.hanson.classList.add('slideInUp'); 
                  }, 3000);
            } else {
                this.hanson.classList.remove ('slideInUp'); 
            }
        }catch(e) {}

        this.slides.forEach(slide => {
            slide.style.display = 'none'; 
        });

        this.slides[this.slideIndex - 1].style.display = 'block';

       

     }

     plusSlides(n) {
        this.showSlides(this.slideIndex += n);
     }



     bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlides(1); 
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex); 
            });
        });

        this.prevmodule.forEach(item => { // второй модуль 
            item.addEventListener('click', (e) => { 
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(-1);
            });
        });

        this.nextmodule.forEach(item => { // второй модуль 
            item.addEventListener('click', (e) => { 
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(1);
            });
        });
     }

     

     render() {
        if (this.container) {
            try {
                this.hanson = document.querySelector('.hanson');// получаем в методе рендер, потому что этот 
                // блок будет работать только когда будет срабатывать (setTimeout на 3странице сайта) и помещаем 
                // в блок (try-catch), что бы не было ошибки при работе другого кода
            } catch(e) {}
             
            this.showSlides(this.slideIndex); 

            this.bindTriggers();

        } 
     } 
 }