// Get the timeline section
const aboutSection = document.getElementById("containerAbout");

// Get the timeline items
const aboutMain = document.querySelector(".about-main");

//Class name for animation
const aboutAnimationClasses = [ANIMATE_ANIMATED, ANIMATE_HEART];

// Create an intersection observer
const observerAbout = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {         
            updateClass(aboutMain, aboutAnimationClasses);
        }
        else {
            removeClass(aboutMain, aboutAnimationClasses);
        }
    });
}, {
    root: null,
    rootMargin: "0px",
    threshold: [0]
});

// Start observing the timeline section
observerAbout.observe(aboutSection);
