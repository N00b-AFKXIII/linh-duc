const TIMELINE_ITEM_LAST = "timeline-item-last";
const TIMELINE_INVERTED = "timeline-inverted";
const LAST = "last";
const ODD = "odd";
const EVEN = "even";

// Get the timeline section
const timelineSection = document.getElementById("containerTimeline");

// Get the timeline items
const timelineMain = document.querySelector(".timeline-main");
const timelineItems = document.querySelectorAll(".timeline-item");

//Class name for animation
const timelineAnimationClasses = [ANIMATE_ANIMATED, ANIMATE_ZOOM_INDOWN];

// Create an intersection observer
const observerTimeline = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            //Add the animation to the timeline main
            updateClass(timelineMain, timelineAnimationClasses);
            
            // Add the animation class to the timeline items
            timelineItems.forEach((item, index) => {
                const last = item.classList.contains(TIMELINE_ITEM_LAST);
                const inverted = item.classList.contains(TIMELINE_INVERTED);
                item.classList.add(last ? LAST : inverted ? ODD : EVEN);
            });
        }
        else {
            //Remove the animation for the timeline main
            removeClass(timelineMain, timelineAnimationClasses);

            // Remove the animation class from the timeline items
            timelineItems.forEach((item, index) => {
                removeClass(item, [EVEN, ODD, LAST]);
            });
        }
    });
}, {
    root: null,
    rootMargin: "0px",
    threshold: [0]
});

// Start observing the timeline section
observerTimeline.observe(timelineSection);

//Update cursor image
const timelineImages = document.querySelectorAll('.timeline-image');

timelineImages.forEach(image => {
    image.addEventListener('mouseover', function() {
        let cursorImage = this.getAttribute('data-cursor-image');
        this.style.cursor = 'url(' + cursorImage + '), auto';
    });
    image.addEventListener('mouseout', function() {
        this.style.cursor = 'auto';
    });
});