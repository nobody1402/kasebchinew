// منوی موبایل
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const navMenu = document.querySelector('.nav-menu ul');
    if (navMenu) {
        navMenu.classList.toggle('show');
    }
});

// لودر
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add('hidden');
    }
    setTimeout(() => {
        const popup = document.querySelector('.welcome-popup');
        if (popup) {
            popup.classList.remove('hidden');
        }
    }, 1000);
});

// جلوگیری از گیر کردن لودر
setTimeout(() => {
    const loader = document.querySelector('.loader');
    if (loader && !loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
    }
}, 3000);

// فیلتر خدمات
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.service-card').forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// فرم ثبت‌نام
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

// اسلایدر خودکار
let slideIndex = 0;
const slides = document.querySelectorAll('.hero-slide');
function showSlides() {
    if (slides.length > 0) {
        slides.forEach(slide => slide.classList.remove('active'));
        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1;
        slides[slideIndex - 1].classList.add('active');
        setTimeout(showSlides, 5000);
    }
}
if (slides.length > 0) {
    showSlides();
}

// افکت لودینگ تصاویر
document.querySelectorAll('.hero-slide img').forEach(img => {
    if (img.complete) {
        img.classList.add('loaded');
    } else {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
        img.addEventListener('error', () => {
            img.classList.add('loaded'); // حتی اگه تصویر لود نشه، لودر گیر نکنه
        });
    }
});

// چت‌بات
document.querySelector('.chat-icon').addEventListener('click', () => {
    const chatWindow = document.querySelector('.chat-window');
    if (chatWindow) {
        chatWindow.classList.toggle('hidden');
    }
});

document.querySelector('.chat-send').addEventListener('click', () => {
    const input = document.querySelector('.chat-input').value;
    if (input) {
        alert('پیامت دریافت شد! به‌زودی جواب می‌دیم 😊');
        document.querySelector('.chat-input').value = '';
        document.querySelector('.chat-window').classList.add('hidden');
    }
});

// دکمه برگشت به بالا
document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// کنترل Dark Mode
const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', toggle.checked);
});
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    toggle.checked = true;
}

// کنترل پاپ‌آپ
document.querySelector('.popup-close').addEventListener('click', () => {
    const popup = document.querySelector('.welcome-popup');
    if (popup) {
        popup.classList.add('hidden');
    }
});

// نوار پیشرفت اسکرول
window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.remove('hidden');
        } else {
            backToTop.classList.add('hidden');
        }
    }
});
