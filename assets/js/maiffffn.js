document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu ul').classList.toggle('show');
});

window.addEventListener('load', () => {
    document.querySelector('.loader').classList.add('hidden');
    setTimeout(() => {
        document.querySelector('.welcome-popup').classList.remove('hidden');
    }, 1000);
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.service-card').forEach(card => {
            card.classList.toggle('hidden', filter !== 'all' && !card.classList.contains(filter));
        });
    });
});

document.querySelector('.signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('input[placeholder="نام کافه"]').value;
    const email = document.querySelector('input[placeholder="ایمیل"]').value;
    const phone = document.querySelector('input[placeholder="شماره تماس"]').value;
    const feedback = document.createElement('p');
    feedback.className = 'form-feedback';

    if (!name || !email.includes('@') || !phone.match(/^\d{10,11}$/)) {
        feedback.textContent = 'لطفاً همه فیلدها را به درستی پر کنید!';
        feedback.style.color = '#e76f51';
    } else {
        feedback.textContent = 'ثبت‌نام با موفقیت انجام شد! به‌زودی با شما تماس می‌گیریم.';
        feedback.style.color = '#2a4d3e';
        document.querySelector('.signup-form').reset();
    }
    document.querySelector('.signup-form').appendChild(feedback);
    setTimeout(() => feedback.remove(), 3000);
});

let slideIndex = 0;
const slides = document.querySelectorAll('.hero-slide');
let slideInterval;

function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex = (slideIndex % slides.length) + 1;
    slides[slideIndex - 1].classList.add('active');
}

function startSlider() {
    slideInterval = setInterval(showSlides, 5000);
}

function stopSlider() {
    clearInterval(slideInterval);
}

startSlider();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startSlider();
        } else {
            stopSlider();
        }
    });
}, { threshold: 0.1 });

observer.observe(document.querySelector('.hero-slider'));

document.querySelectorAll('.hero-slide img').forEach(img => {
    if (img.complete) {
        img.classList.add('loaded');
    } else {
        img.addEventListener('load', () => img.classList.add('loaded'));
    }
});

document.querySelector('.chat-icon').addEventListener('click', () => {
    document.querySelector('.chat-window').classList.toggle('hidden');
});

document.querySelector('.chat-send').addEventListener('click', () => {
    const input = document.querySelector('.chat-input').value;
    if (input) {
        alert('پیامت دریافت شد! به‌زودی جواب می‌دیم 😊');
        document.querySelector('.chat-input').value = '';
        document.querySelector('.chat-window').classList.add('hidden');
    }
});

let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.querySelector('.progress-bar').style.width = scrolled + '%';

            const backToTop = document.querySelector('.back-to-top');
            backToTop.classList.toggle('hidden', window.scrollY <= 300);

            ticking = false;
        });
        ticking
