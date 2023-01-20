const FADE_IN = "event-fading";

// Get the timeline section
const eventSection = document.getElementById("containerEvent");

// Get the timeline items
const eventMain = document.querySelector(".event-main");
const eventItems = document.querySelectorAll(".event-item");

//Class name for animation
const eventAnimationClasses = [ANIMATE_ANIMATED, ANIMATE_SWING];

// Create an intersection observer
const observerEvent = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            updateClass(eventMain, eventAnimationClasses);

            // Add the animation class to the timeline items
            eventItems.forEach((item, index) => {
                updateClass(item, [FADE_IN]);
            });
        }
        else {
            removeClass(eventMain, eventAnimationClasses);

            // Remove the animation class from the timeline items
            eventItems.forEach((item, index) => {
                removeClass(item, [FADE_IN]);
            });
        }
    });
}, {
    root: null,
    rootMargin: "0px",
    threshold: [0]
});

// Start observing the timeline section
observerEvent.observe(eventSection);

