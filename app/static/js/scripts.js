
// HOME.HTML

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.tabs');
    var instances = M.Tabs.init(elems);
});






// CARROUSSEL.HTML

var carrouselOptions = {
    fullWidth: true,
    indicators: false,
    duration: 200,
    numVisible: 30,
    padding: 10
};

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, carrouselOptions);

    var autoPlayInterval;

    // Function to update the carousel (move to next slide)
    function updateCarousel() {
        var instance = M.Carousel.getInstance(elems[0]);
        if (instance) {
            instance.next();
        }
    }

    // Set interval for autoplay
    function startAutoplay() {
        autoPlayInterval = setInterval(updateCarousel, 2500);
    }

    // Initial autoplay start
    startAutoplay();

    // Pause autoplay on interaction
    elems[0].addEventListener('mouseenter', function () {
        clearInterval(autoPlayInterval); // Stop autoplay when mouse enters
    });

    elems[0].addEventListener('mouseleave', function () {
        startAutoplay(); // Restart autoplay after interaction ends
    });

    elems[0].addEventListener('mousedown', function () {
        clearInterval(autoPlayInterval); // Stop autoplay on mouse down
    });

    elems[0].addEventListener('touchstart', function () {
        clearInterval(autoPlayInterval); // Stop autoplay on touch start
    });

    elems[0].addEventListener('mouseup', function () {
        startAutoplay(); // Restart autoplay when mouse up
    });

    elems[0].addEventListener('touchend', function () {
        startAutoplay(); // Restart autoplay when touch ends
    });
});





// ARTICLES.HTML
// Não mexer nisso, deixa com a tag <script> lá mesma, senão buga.






// INICIO.HTML

function hidePlaceholder() {
    const placeholder = document.getElementById('mapaPlaceholder');
    placeholder.classList.add('hidden'); // Add the hidden class to start fading out
    setTimeout(() => {
        placeholder.style.display = 'none'; // Set display to none after the fade-out transition
    }, 1000); // Match this duration with the CSS transition duration
}


const audioControl = document.getElementById('hinoDiv');
const audio = document.getElementById('hinoTag');
const disco = document.getElementById('disco');
disco.classList.add('pause');

audioControl.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        disco.classList.remove('pause');
    } else {
        audio.pause();
        disco.classList.add('pause');
    }
});

window.onload = function () {
    document.getElementById('loadingScreen').style.opacity = '0';

    setTimeout(function () {
        document.getElementById('loadingScreen').style.display = 'none'; // Hide the loading screen
        document.getElementById('content').style.display = 'block'; // Show the main content
    }, 1000); // The time (in ms) must match the transition duration (1s)
};