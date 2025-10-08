document.addEventListener('DOMContentLoaded', () => {
    // --- Element References ---
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
        currentSceneIndex = (currentSceneIndex + 1) % scenes.length;
        playScene(scenes[currentSceneIndex]);
    }

    // --- Initialization ---
    playScene(scenes[0]); // Play the first scene immediately
    setInterval(cycleScenes, sceneDuration); // Start the cycle
});