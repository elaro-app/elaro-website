// --- Scroll-triggered Fade-in Animations ---
document.addEventListener('DOMContentLoaded', () => {
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
        observer.observe(section);
    });
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
