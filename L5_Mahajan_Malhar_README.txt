# AI Image Generator - Lab 5

This project is a web-based AI Image Generator built as part of Lab 5: Choose Your Own Web Dev Adventure.
The web app allows users to input a text prompt, which is then sent to the Pixabay API to retrieve relevant images. 
The frontend is styled using Tailwind CSS, and Vanta.js is used to create an animated Three.js background effect.

* *Date Created*: 07 03 2025
* *Last Modification Date*: 08 03 2025
* *Lab URL*: https://67cbf6a86b776b813507f9e4--remarkable-paprenjak-9b8efd.netlify.app/
https://git.cs.dal.ca/mdmahajan/csci3172/labs/lab5.git


## Authors

If what is being submitted is an individual Lab or Assignment, you may simply include your name and email address. Otherwise list the members of your group.

* Malhar Mahajan (ml575444@dal.ca) - Developer



## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [Node.js](https://nodejs.org/en/download/) - Backend runtime environment  
* [Express.js](https://expressjs.com/) - Web framework for handling API requests  
* [Pixabay API](https://pixabay.com/api/docs/) - Fetching AI-generated images based on user input  
* [Tailwind CSS](https://tailwindcss.com/) - Styling framework for designing UI elements  
* [Vanta.js](https://www.vantajs.com/) - Animated background using Three.js  
* [Three.js](https://threejs.org/) - JavaScript library for rendering 3D graphics  



## Sources Used



### File: vanta-bg.js

Lines: Entire File

Original Code from Vanta.js Documentation
https://www.vantajs.com/?effect=net#(backgroundAlpha:1,backgroundColor:2433832,color:8019425,gyroControls:!f,maxDistance:25,minHeight:200,minWidth:200,mouseControls:!t,points:13,scale:1,scaleMobile:1,showDots:!t,spacing:16,touchControls:!t) Official Website

```
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


```

The code above was created by adapting the code in https://www.vantajs.com/ as shown below:

VANTA.NET({
    el: "#your-element-selector",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x7a5de1,
    backgroundColor: 0x252328,
    points: 13.00,
    maxDistance: 25.00,
    spacing: 16.00
});


```
VANTA.NET({
    el: "#your-element-selector",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x7a5de1,
    backgroundColor: 0x252328,
    points: 13.00,
    maxDistance: 25.00,
    spacing: 16.00
});

```

- <!---How---> The code from https://www.vantajs.com/ was implemented by dynamically loading the required scripts (Three.js and Vanta.js) and then initializing the Vanta.NET background effect on #vanta-bg.
- <!---Why---> The Vanta.js code was used because it provides an interactive and visually appealing animated background with minimal configuration.
- <!---How---> he code was modified to dynamically load both Three.js and Vanta.js, ensuring that Three.js is fully loaded before Vanta.js initializes. Additionally, a resize event listener was added to adjust the background dynamically when the window is resized.



Button Hover Effect

### index.html

*Lines 18 - 29*

```
<!-- Slide Hover Button -->
<button onclick="generateImage()"
    class="before:ease relative h-12 w-40 overflow-hidden border border-black shadow-2xl 
           before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right 
           before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 
           before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
    <span class="relative z-10">Generate</span>
</button>


```
The code above was created by adapting the code in https://www.creative-tim.com/twcomponents/component/button-hover-effects as shown

```
<button class="before:ease relative h-12 w-40 overflow-hidden border border-black shadow-2xl 
        before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right 
        before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 
        before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
    <span class="relative z-10">Slide hover</span>
</button>


```

- <!---How---> The code in https://www.creative-tim.com/twcomponents/component/button-hover-effects was implemented by applying a combination of Tailwind CSS classes to achieve a smooth slide-in hover effect for the button.
- <!---Why---> The button hover effect was used because it enhances the user experience by providing a visually appealing transition when interacting with the button.
- <!---How---> The original button text was changed from "Slide hover" to "Generate," ensuring it aligns with the purpose of triggering image generation. Additionally, the button click event (onclick="generateImage()") was added to integrate functionality.








## Acknowledgments

https://www.vantajs.com/ - Used for the animated background effect.
https://pixabay.com/ - Used for providing image generation functionality.
https://tailwindcss.com/ - Used for styling the UI efficiently.
https://www.creative-tim.com/twcomponents/component/button-hover-effects - Button Hover Effects - Used for hover button inspiration.

