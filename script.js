document.addEventListener('DOMContentLoaded', function() {
    // --- POLISH: Hero Text Fade-in ---
    const staticHeroText = document.querySelector('.hero-text-static');
    if (staticHeroText) {
        setTimeout(() => {
            staticHeroText.style.opacity = 1;
        }, 100);
    }

    // --- DYNAMIC CONTENT LOGIC ---
    const dynamicContentWrapper = document.getElementById('dynamic-content');
    if (dynamicContentWrapper) {
        const dynamicItems = [
            { text: "revise what you studied.", image: "https://via.placeholder.com/400x300/007AFF/FFFFFF?text=Revise+Mockup" },
            { text: "submit an assignment.", image: "https://via.placeholder.com/400x300/007AFF/FFFFFF?text=Assignment+Mockup" },
            { text: "attend a lecture.", image: "https://via.placeholder.com/400x300/007AFF/FFFFFF?text=Lecture+Mockup" }
        ];
        const changeInterval = 4000;
        const dynamicTextElement = document.getElementById('dynamic-text');
        const dynamicImageElement = document.getElementById('dynamic-image');
        let currentIndex = 0;

        function updateContent() {
            const item = dynamicItems[currentIndex];
            dynamicTextElement.textContent = item.text;
            dynamicImageElement.src = item.image;
        }

        function cycleContent() {
            dynamicContentWrapper.style.opacity = 0;
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % dynamicItems.length;
                updateContent();
                dynamicContentWrapper.style.opacity = 1;
            }, 500);
        }

        updateContent();
        dynamicContentWrapper.style.opacity = 1;
        setInterval(cycleContent, changeInterval);
    }
});