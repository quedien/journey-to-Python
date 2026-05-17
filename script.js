document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('image-gallery');
    const cards = document.querySelectorAll('.image-card');
    const countEl = document.getElementById('count');
    const totalLikesEl = document.getElementById('total-likes');
    const likeButtons = document.querySelectorAll('.like-btn');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const gridBtn = document.getElementById('grid-view');
    const listBtn = document.getElementById('list-view');

    // Счётчик изображений
    if (countEl) {
        countEl.textContent = String(cards.length);
    }

    // Лайки
    let totalLikes = 0;
    likeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const countSpan = btn.querySelector('.like-count');
            let current = parseInt(countSpan.textContent);

            if (btn.classList.contains('liked')) {
                current--;
                totalLikes--;
                btn.classList.remove('liked');
            } else {
                current++;
                totalLikes++;
                btn.classList.add('liked');
            }

            countSpan.textContent = current;
            if (totalLikesEl) totalLikesEl.textContent = totalLikes;

            // Анимация 
            btn.style.transform = 'scale(1.15)';
            setTimeout(() => (btn.style.transform = 'scale(1)'), 200);
        });
    });

    // Фильтрация 
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            cards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // Переключение "сетка <-> список"
    if (gridBtn && listBtn && gallery) {
        gridBtn.addEventListener('click', () => {
            gallery.classList.remove('list-view');
            gridBtn.classList.add('active');
            listBtn.classList.remove('active');
        });

        listBtn.addEventListener('click', () => {
            gallery.classList.add('list-view');
            listBtn.classList.add('active');
            gridBtn.classList.remove('active');
        });
    }
});
