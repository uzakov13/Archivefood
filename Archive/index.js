
let offer__slide = document.querySelectorAll('.offer__slide')
let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let current = document.querySelector('#current')
let total = document.querySelector('#total')

let slideIndex = 0

prev.onclick = () => {
    slideIndex--
    showSlide(slideIndex)
}  
next.onclick = () => {
    slideIndex++
    showSlide(slideIndex)
} 

function showSlide(n) {

    if(n >= offer__slide.length) {
        slideIndex = 0
    }
    if(n == -1) {
        slideIndex = offer__slide.length - 1
    }
    offer__slide.forEach(img => {
        img.style.display = 'none'
    });
    offer__slide[slideIndex].style.display = "block"
    
    current.innerHTML = '0' + (slideIndex+1) 
}


showSlide()



let days = document.querySelector('.days')
let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')

seconds.innerHTML = 60

setInterval(() =>{
    seconds.innerHTML--
    if (seconds <= 0){
        seconds.innerHTML = 60
        minutes.innerHTML--

        if (minutes <= 0){
            minutes.innerHTML = 60
            hours.innerHTML--

            if (hours <=0) {
                hours.innerHTML = 60
                days.innerHTML--
            }
        }

        
    }
}, 1000);
