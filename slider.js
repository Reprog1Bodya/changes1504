// slider.js
document.addEventListener('DOMContentLoaded', () => {
    // Инициализация элементов DOM
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.review-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');
    
    // Защита от ошибок, если блок слайдера не добавлен на страницу
    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Создание точек навигации динамически
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Обновление позиции трека и активной точки
    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach(d => d.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    // Переход к конкретному слайду
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
        resetAutoPlay();
    }

    // Следующий слайд (циклический)
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    // Предыдущий слайд (циклический)
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    // Обработчики кнопок
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoPlay();
    });

    // Автоматическое переключение каждые 5 секунд
    let autoPlayInterval = setInterval(nextSlide, 5000);
    const container = document.querySelector('.slider-container');

    // Остановка при наведении курсора
    container.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    
    // Возобновление при уходе курсора
    container.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(nextSlide, 5000);
    });

    // Сброс таймера при ручном управлении
    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlide, 5000);
    }
});