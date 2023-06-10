/*
window.swiper = new Swiper({
    el: '.slider__contenedor', //Busca este elemeneto (elemento padre de los sliders)
    slideClass: 'slider__slide', //Elemento hijo (elemento de la imagen para el slider)
    createElements: true, //Nos genere el resto del html
    autoplay: { //Para que se pase automaticamnte la foto
        delay: 2000
    },
    loop: true, // Llegando al ultimo vuelve a aparecer el primero
    spaceBetween: 20, //Separacion entre slides
    pagination: true, //Viñetas en la parte de abajo (Cuantas fotos hay y en cual esta)
    navigation: true, //Añade las flechas para ir a la siguiente o anterior imagen

});
*/
var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    loop: true, 
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: { //Para que se pase automaticamnte la foto
        delay: 2000
    }
  });