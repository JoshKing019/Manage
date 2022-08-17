// favours part starts here
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:8,
    nav:false,
    autoplay:true,
    dots:false,
    arrows:false,
    responsive:{
        // 0:{
        //     items:1,
        //     nav:false,
        // },
        250:{
            items:1,
            nav:false,
        },
        750:{
            items:3,
            nav:false,
        },
        1000:{
            items:3,
            nav:false,
        }
    }
})

const menuOpen = document.querySelector('.ri-menu-line')
const menuClose = document.querySelector('.ri-close-line')
const menu = document.querySelector('.navLinks')

menuOpen.addEventListener('click', function(){
    menu.style.top = "7%"
    menuOpen.style.display = "none"
    menuClose.style.display = "block"
})

menuClose.addEventListener('click', function(){
    menu.style.top = "-7%"
    menuClose.style.display = "none"
    menuOpen.style.display = "block"
})