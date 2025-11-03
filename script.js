// --- Scroll-triggered Fade-in Animations ---
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure CSS is applied
    setTimeout(() => {
        // Get all feature sections
        const sections = document.querySelectorAll('.feature-section');

        // Create Intersection Observer
        const observerOptions = {
            threshold: 0.1, // Trigger when 10% of section is visible
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add 'visible' class when section enters viewport
                    entry.target.classList.add('visible');
                    // Stop observing once animated (optional - for performance)
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all sections
        sections.forEach(section => {
            // Check if section is already in viewport
            const rect = section.getBoundingClientRect();
            const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isInViewport && rect.top >= 0) {
                // Section is already visible, add visible class with a small delay
                setTimeout(() => {
                    section.classList.add('visible');
                }, 100);
            } else {
                // Section is not yet visible, observe it
                observer.observe(section);
            }
        });
    }, 50);
});

// --- Footer Loader ---
document.addEventListener('DOMContentLoaded', function() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                footerPlaceholder.innerHTML = '<p style="text-align:center; padding: 20px;">Footer could not be loaded.</p>';
            });
    }
});
