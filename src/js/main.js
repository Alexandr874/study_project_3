
import MainSlider from "./modules/slider/slider-main";
import MiniSlaider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/playVideo";
import Difference from "./modules/difference";
import Form from "./modules/forms";
import ShowInfo from "./modules/showInfo";
import Download from "./modules/download";




 window.addEventListener('DOMContentLoaded', () => {

    const slider = new MainSlider({container: '.page', btns: '.next'});
    slider.render(); 

    const modulePageSlider = new MainSlider({
      container: '.moduleapp',
       btns: '.next',
       prevmodule: '.prevmodule',
       nextmodule: '.nextmodule'
   });
    modulePageSlider.render();

    const showUpSlider = new MiniSlaider({
      container: '.showup__content-slider',
      next: '.showup__next',
      prev: '.showup__prev',
      activeClass: 'card-active',
      animate: true 
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlaider({
      container: '.modules__content-slider',
      next: '.modules__info-btns .slick-prev',
      prev: '.modules__info-btns .slick-next',
      activeClass: 'card-active',
      animate: true,
      autoplay: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlaider({
      container: '.feed__slider',
      next: '.feed__slider .slick-prev',
      prev: '.feed__slider .slick-next',
      activeClass: 'feed__item-active'  
    });
    feedSlider .init();

    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init(); 
     

    new Difference('.officerold', '.officernew', '.officer__card-item').init();

    new Form('.form').init();

    new ShowInfo('.plus').init();

    new Download('.download').init();

    
     

 });