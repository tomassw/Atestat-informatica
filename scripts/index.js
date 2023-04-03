const burger = document.querySelector('nav svg');

burger.addEventListener('click', () => {
    if(burger.classList.contains('active')) {
        gsap.to('.links', {x: '100%'})
        gsap.to('.line', {stroke: "white"});

        gsap.set('body', {overflow: "hidden"});
        gsap.set('body', {overflowX: 'hidden'});
    } else {
        gsap.to('.links', {x: '0%'})
        gsap.to('.line', {stroke: "black"});

        gsap.fromTo('.links a', 
        {opacity: 0, y: 0}, 
        {opacity: 1, y: 20, delay: 0.2, stagger: 0.25}
        );

        gsap.set('body', {overflow: "hidden"});
    }
    burger.classList.toggle("active");
})



/*Afla mai multe*/

const learnmorebtn = document.querySelector("#learnmore");

learnmorebtn.addEventListener('click', () => {
    document.getElementById("secondpage").scrollIntoView({block: 'start',  behavior: 'smooth' });
})

/*Mircea Roulette*/

const ruletabtn= document.querySelector("#ruleta");

ruletabtn.addEventListener('click', () => {
    document.getElementById("fifthpage").scrollIntoView({block: 'start',  behavior: 'smooth' });
})

/*Buton de scroll*/

const scrollbutton1 = document.querySelector("#scroll1");

scrollbutton1.addEventListener('click', () => {
    document.getElementById("thirdpage").scrollIntoView({block: 'start',  behavior: 'smooth' });
})


const scrollbutton2 = document.querySelector("#scroll2");

scrollbutton2.addEventListener('click', () => {
    document.getElementById("publicatii").scrollIntoView({block: 'start',  behavior: 'smooth' });
})


const scrollbutton3 = document.querySelector("#scroll3");

scrollbutton3.addEventListener('click', () => {
    document.getElementById("fifthpage").scrollIntoView({block: 'start',  behavior: 'smooth' });
});

/*Ruleta*/

(function () {
    const wheel = document.querySelector(".wheel");
    const startButton = document.querySelector('.startbutton');

    let deg = 0;

    startButton.addEventListener('click', () => {
        startButton.classList.add("hidden2");
        document.querySelector(".despre-ruleta").classList.add("hidden2");

        startButton.style.PointerEvent = 'none';    
        deg = Math.floor(3000 + Math.random() * 5000);
        wheel.style.transition = 'all 5s ease-out';
        wheel.style.transform = `rotate(${deg}deg)`;
        wheel.classList.add("blur");
    });

    wheel.addEventListener('transitionend', () => {
        wheel.classList.remove("blur");
        startButton.style.PointerEvent = 'auto';
        wheel.style.transition = 'none';
        const actualDeg = deg % 360;
        console.log(actualDeg);
        wheel.style.transform = `rotate(${actualDeg}deg)`;

        if (actualDeg >= 0 && actualDeg < 60) {
            document.querySelector("#video").src = "https://www.youtube.com/embed/tgbNymZ7vqY";
            document.querySelector("#sixthpage").innerHTML = "Mircea Dinescu e polițist";

            document.getElementById("sixthsection").classList.remove("hidden2");
            document.getElementById("video").scrollIntoView({block: 'start',  behavior: 'smooth' });
            console.log("passed");
        }

        if (actualDeg >= 60 && actualDeg < 120) {
            document.querySelector("#video").src = "https://www.youtube.com/embed/tgbNymZ7vqY";
            document.querySelector("#sixthpage").innerHTML = "Mircea merge la lapte";

            document.getElementById("sixthsection").classList.remove("hidden2");
            document.getElementById("video").scrollIntoView({block: 'start',  behavior: 'smooth' });
            console.log("passed");
        }

        if (actualDeg >= 120 && actualDeg < 180) {
            document.querySelector("#video").src = "https://www.youtube.com/embed/tgbNymZ7vqY";
            document.querySelector("#sixthpage").innerHTML = "Mircea Dinescu a devenit instructor auto!";

            document.getElementById("sixthsection").classList.remove("hidden2");
            document.getElementById("video").scrollIntoView({block: 'start',  behavior: 'smooth' });
            console.log("passed");
        }

        if (actualDeg >= 180 && actualDeg < 240) {
            document.querySelector("#video").src = "https://www.youtube.com/embed/tgbNymZ7vqY";
            document.querySelector("#sixthpage").innerHTML = "Brutăria lui Dinescu!";

            document.getElementById("sixthsection").classList.remove("hidden2");
            document.getElementById("video").scrollIntoView({block: 'start',  behavior: 'smooth' });
            console.log("passed");
        }

        if (actualDeg >= 240 && actualDeg < 300) {
            document.querySelector("#video").src = "https://www.youtube.com/embed/tgbNymZ7vqY";
            document.querySelector("#sixthpage").innerHTML = "Inspecţie în restaurantul lui Mircea Dinescu";

            document.getElementById("sixthsection").classList.remove("hidden2");
            document.getElementById("video").scrollIntoView({block: 'start',  behavior: 'smooth' });
            console.log("passed");
        }

        if (actualDeg >= 300 && actualDeg <= 360) {
            document.querySelector("#video").src = "https://www.youtube.com/embed/tgbNymZ7vqY";
            document.querySelector("#sixthpage").innerHTML = "Mircea Dinescu lansează postul de radio Evergreen";

            document.getElementById("sixthsection").classList.remove("hidden2");
            document.getElementById("video").scrollIntoView({block: 'start',  behavior: 'smooth' });
            console.log("passed");
        }
    });
})();




// Scroll back top index page

let scrollTop = document.querySelector("#sixthsection svg");
scrollTop.addEventListener("click", () => {
    const startButton = document.querySelector('.startbutton');
    document.querySelector(".front-page").scrollIntoView({block: 'start',  behavior: 'smooth' });
    startButton.classList.remove("hidden2");
    document.querySelector(".despre-ruleta").classList.remove("hidden2");
});

