AOS.init();

const dataDoEvento = new Date("Dec 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000)

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'O evento já encerrou.';
    }
}, 1000);


const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
const nextButton = document.querySelector(".carousel-button.next");
const prevButton = document.querySelector(".carousel-button.prev");
const indicators = document.querySelectorAll(".carousel-indicators button");

let currentIndex = 0;
const intervalTime = 5000;
let autoSlideInterval;

function updateCarousel(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((btn, i) => btn.classList.toggle("active", i === index));
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel(currentIndex);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, intervalTime);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

nextButton.addEventListener("click", () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
});

prevButton.addEventListener("click", () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

indicators.forEach((btn, index) => {
    btn.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel(currentIndex);
    stopAutoSlide();
    startAutoSlide(); 
    });
});

startAutoSlide();