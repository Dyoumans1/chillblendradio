// Main JavaScript file for MSKITHEDJ website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            document.querySelector('.nav-links').classList.toggle('active');
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.getElementById('main-header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // FAQ toggle functionality (for contact page)
    const faqItems = document.querySelectorAll('.faq-question');
    if (faqItems.length > 0) {
        faqItems.forEach((item) => {
            item.addEventListener('click', () => {
                const parent = item.parentElement;
                parent.classList.toggle('active');
                const icon = item.querySelector('.faq-toggle i');
                if (icon) {
                    if (parent.classList.contains('active')) {
                        icon.classList.replace('fa-plus', 'fa-minus');
                    } else {
                        icon.classList.replace('fa-minus', 'fa-plus');
                    }
                }
            });
        });
    }

    // Video player controls (for gallery page)
    const videoItems = document.querySelectorAll('.gallery-item.video-item');
    if (videoItems.length > 0) {
        videoItems.forEach(item => {
            const video = item.querySelector('video');
            const playOverlay = item.querySelector('.video-play-overlay');
            
            if (video && playOverlay) {
                // Check if this is video has auto-play 
                if (video.querySelector('source') && video.querySelector('source').src.includes('LUP1.mp4')) {
                    // Make sure it's playing (as backup to the autoplay attribute)
                    video.play().catch(e => {});
                    // Update UI to show it's playing
                    item.classList.add('playing');
                    playOverlay.style.opacity = 0;
                }
                
                item.addEventListener('mouseenter', () => {
                    video.controls = true;
                });
                
                item.addEventListener('mouseleave', () => {
                    if (video.paused) {
                        video.controls = false;
                    }
                });
                
                video.addEventListener('play', () => {
                    item.classList.add('playing');
                    playOverlay.style.opacity = 0;
                });
                
                video.addEventListener('pause', () => {
                    item.classList.remove('playing');
                    playOverlay.style.opacity = 1;
                });
                
                video.muted = true;
            }
        });
    }

    // Copyright year update
    const copyrightYearElements = document.querySelectorAll('.copyright p');
    if (copyrightYearElements.length > 0) {
        copyrightYearElements.forEach(element => {
            if (element.innerHTML.includes('document.write(new Date().getFullYear())')) {
                element.innerHTML = element.innerHTML.replace(
                    'document.write(new Date().getFullYear())',
                    new Date().getFullYear()
                );
            }
        });
    }
});