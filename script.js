
function toggleMenu() { 
    const menu = document.querySelector('.list'); 
    const menuBtn = document.querySelector('.menu-btn'); 
    menu.classList.toggle('active'); // تبديل إظهار وإخفاء القائمة 
    menuBtn.classList.toggle('active'); // تبديل حالة زر القائمة 
}


// إظهار السهم عند التمرير إلى أسفل الصفحة
window.addEventListener('scroll', function() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 200) { // يظهر السهم عند التمرير أكثر من 200 بكسل
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

// وظيفة التمرير إلى الأعلى
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // حركة التمرير تكون سلسة
    });
}
