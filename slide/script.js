let timer;
let startTime;
let slideIndex = -1; // Start with -1 so that it advances to 0 on the first press
let slideData = [
    { slide: 1, speaker: 'B' },
    { slide: 2, speaker: 'B' },
    { slide: 3, speaker: 'F' },
    { slide: 4, speaker: 'F' },
    { slide: 5, speaker: 'B' },
    { slide: 6, speaker: 'B' },
    { slide: 7, speaker: 'B' },
    { slide: 8, speaker: 'B' },
    { slide: 9, speaker: 'F' },
    { slide: 10, speaker: 'B' },
    { slide: 11, speaker: 'F' },
    { slide: 12, speaker: 'F' },
    { slide: 13, speaker: 'F' },
    { slide: 14, speaker: 'F' },
    { slide: 15, speaker: 'F' },
    { slide: 16, speaker: 'B' },
    { slide: 17, speaker: 'F' },
    { slide: 18, speaker: 'B' },
    { slide: 19, speaker: 'B' },
    { slide: 20, speaker: 'B' },
    { slide: 21, speaker: 'F' },
    { slide: 22, speaker: 'F' }
];

const displayTimer = () => {
    const currentTime = Math.floor((Date.now() - startTime) / 1000);
    const remainingTime = Math.max(25 * 60 - currentTime, 0);
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('timer').textContent = formattedTime;
};

const displaySlideInfo = () => {
    const slideInfoContainer = document.getElementById('slide-info');
    const currentSlide = slideData[slideIndex];
    slideInfoContainer.innerHTML = `<h2>Slide ${currentSlide.slide}: ${currentSlide.speaker}</h2>`;
    slideInfoContainer.innerHTML += `<p>Elapsed time: ${displayElapsedTime()}</p>`;
};

const displayElapsedTime = () => {
    const currentTime = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const startTimer = () => {
    startTime = Date.now();
    timer = setInterval(() => {
        displayTimer();
        displaySlideInfo();
    }, 1000);
};

const advanceToNextSlide = () => {
    slideIndex++;
    if (slideIndex < slideData.length) {
        displaySlideInfo();
    } else {
        clearInterval(timer); // Stop the timer if all slides are completed
        alert('Presentation completed!');
    }
};

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && slideIndex < slideData.length) {
        if (!timer) {
            startTimer();
        }
        advanceToNextSlide();
    }
});

// Initial display of the timer (without the first slide info)
displayTimer();
