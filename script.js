let toggleButton = document.querySelector('.toggle-menu');
let nav = document.querySelector('.links');
toggleButton.addEventListener('click', function () {
    nav.classList.toggle('active');
});

let navbar = document.querySelector(".navbar");

window.addEventListener('scroll' , function(){
    navbar.classList.toggle('full-container' , window.scrollY > 0);
    nav.classList.toggle('active-onscroll' , window.scrollY > 0);
})


let numbersValue = document.querySelectorAll('.my-num');
        let counterSection = document.querySelector('.counter');
        let interval = 5000;
        let start = false;

        window.onscroll = function () {
            if (window.scrollY >= counterSection.offsetTop) {
                if (!start) {
                    numbersValue.forEach(numberValue => {
                        let startValue = 0;
                        let endValue = parseInt(numberValue.getAttribute('num-val'));
                        let duration = Math.floor(interval / endValue);
                        let counter = setInterval(function () {
                            startValue += 5;
                            numberValue.textContent = startValue;
                            if (startValue == endValue) {
                                clearInterval(counter)
                            }
                        }, (duration));
                    });
                }
                start = true
            }
        }

// Get the offset position of the navbar
/* let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
} */