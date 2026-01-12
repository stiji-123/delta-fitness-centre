document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery-container');
    const items = gallery.children;
    let currentIndex = 0;

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
});