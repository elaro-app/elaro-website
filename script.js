document.addEventListener('DOMContentLoaded', () => {
    // --- Element References ---
    const body = document.body;
    const headlineStandard = document.getElementById('headline-standard');
    const headlineFinale = document.getElementById('headline-finale');
    const finaleLine1 = document.getElementById('finale-line-1');
    const finaleLine2 = document.getElementById('finale-line-2');
    
    const dynamicContentWrapper = document.getElementById('dynamic-content');
    const dynamicTextElement = document.getElementById('dynamic-text');
    const dynamicImageElement = document.getElementById('dynamic-image');

    // Fade in the initial static text
    // We target the container now to handle both headline types
    setTimeout(() => {
        document.querySelector('.hero-text-static').style.opacity = 1;
    }, 100);

    // --- Scene Data ---
    const scenes = [
        { type: 'standard', text: "revise what you studied.", image: "revise.png" },
        { type: 'standard', text: "submit an assignment.", image: "submit.png" },
        { type: 'standard', text: "attend a lecture.", image: "Lecture.png" },
        { type: 'finale', image: "focus.png" }
    ];

    let currentSceneIndex = 0;
    const sceneDuration = 4000; // 4 seconds per scene

    // --- Animation Logic ---
    function playScene(scene) {
        // Hide all dynamic elements initially
        dynamicContentWrapper.style.opacity = 0;
        headlineStandard.style.display = 'none';
        headlineFinale.style.display = 'none';
        finaleLine2.style.opacity = 0; // Reset finale line 2

        setTimeout(() => {
            if (scene.type === 'standard') {
                // --- Standard Scene Logic ---
                headlineStandard.style.display = 'block';
                dynamicTextElement.textContent = scene.text;
                dynamicImageElement.src = scene.image;
                dynamicTextElement.style.display = 'block'; // Ensure it's visible
                dynamicContentWrapper.style.opacity = 1;

            } else if (scene.type === 'finale') {
                // --- Finale Scene Logic (Option A) ---
                headlineFinale.style.display = 'block';
                dynamicTextElement.style.display = 'none'; // Hide the standard dynamic text
                
                // 1. Show first line
                finaleLine1.style.opacity = 1;

                // 2. After a pause, show the second line and the image
                setTimeout(() => {
                    finaleLine2.style.opacity = 1;
                    dynamicImageElement.src = scene.image;
                    dynamicContentWrapper.style.opacity = 1;
                }, 1500); // 1.5-second pause
            }
        }, 500); // 0.5s fade-out time
    }

    function cycleScenes() {
        // Remove any existing scene classes from the body
        body.classList.remove('scene-revise', 'scene-submit', 'scene-lecture', 'scene-focus');
        
        currentSceneIndex = (currentSceneIndex + 1) % scenes.length;
        
        // Add the new class based on the current scene's image name
        const sceneName = scenes[currentSceneIndex].image.split('.')[0].toLowerCase(); // e.g., "revise", "submit"
        body.classList.add(`scene-${sceneName}`);
        
        playScene(scenes[currentSceneIndex]);
    }

    // --- Initialization ---
    // Add initial scene class to body
    const initialSceneName = scenes[0].image.split('.')[0].toLowerCase();
    body.classList.add(`scene-${initialSceneName}`);
    
    playScene(scenes[0]); // Play the first scene immediately
    setInterval(cycleScenes, sceneDuration); // Start the cycle
});

// --- Reusable Footer Loader ---
document.addEventListener('DOMContentLoaded', function() {
    // Check if the footer placeholder exists on the page
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
                // Optional: You could add a fallback footer here if the fetch fails
                footerPlaceholder.innerHTML = '<p style="text-align:center; padding: 20px;">Footer could not be loaded.</p>';
            });
    }
});