// Load Three.js first
const scriptThreeJS = document.createElement("script");
scriptThreeJS.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
scriptThreeJS.onload = function () {
    console.log("Three.js loaded successfully!");

    // Load Vanta.js after Three.js is fully loaded
    const scriptVantaJS = document.createElement("script");
    scriptVantaJS.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js";
    document.head.appendChild(scriptVantaJS);

    scriptVantaJS.onload = function () {
        console.log("Vanta.js loaded successfully!");

        // Initialize Vanta background
        VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: window.innerHeight,
            minWidth: window.innerWidth,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x7a5de1, // Purple dots
            backgroundColor: 0x252328, // Black background
            points: 13.00,
            maxDistance: 25.00,
            spacing: 16.00
        });

        // Adjust background on window resize
        window.addEventListener("resize", () => {
            VANTA.NET({
                el: "#vanta-bg",
                minHeight: window.innerHeight,
                minWidth: window.innerWidth
            });
        });
    };
};

// Append Three.js script first
document.head.appendChild(scriptThreeJS);
