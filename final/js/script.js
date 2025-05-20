document.addEventListener('DOMContentLoaded', function() {
    const photoGrids = document.querySelectorAll('.photo-grid');
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxCaption = document.getElementById('lightbox-caption');
    let currentGridImages = [];
    let currentIndex = 0;

    function openLightbox(images, index) {
        currentGridImages = images;
        currentIndex = index;
        const currentImage = currentGridImages.item(currentIndex);
        lightboxImage.src = currentImage.dataset.lightboxSrc;
        lightboxImage.alt = currentImage.alt;
        lightboxCaption.textContent = currentImage.dataset.title || '';
        lightboxOverlay.style.display = 'flex';

        // Hide navigation if only one image
        if (currentGridImages.length <= 1) {
            lightboxOverlay.classList.add('single-image');
        } else {
            lightboxOverlay.classList.remove('single-image');
        }
    }

    function closeLightbox() {
        lightboxOverlay.style.display = 'none';
    }

    function navigateLightbox(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = currentGridImages.length - 1;
        } else if (currentIndex >= currentGridImages.length) {
            currentIndex = 0;
        }
        const currentImage = currentGridImages.item(currentIndex);
        lightboxImage.src = currentImage.dataset.lightboxSrc;
        lightboxImage.alt = currentImage.alt;
        lightboxCaption.textContent = currentImage.dataset.title || '';
    }

    photoGrids.forEach(grid => {
        const images = grid.querySelectorAll('img');
        images.forEach((img, index) => {
            img.addEventListener('click', function() {
                openLightbox(images, index);
            });
        });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    lightboxNext.addEventListener('click', () => navigateLightbox(1));

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightboxOverlay.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                navigateLightbox(-1);
            } else if (e.key === 'ArrowRight') {
                navigateLightbox(1);
            }
        }
    });
});
