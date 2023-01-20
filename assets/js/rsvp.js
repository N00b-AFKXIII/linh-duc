var form = document.getElementById('rsvpForm');

// Add a submit event listener to the form
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nameInput = document.getElementById("Name");
    const emailInput = document.getElementById("Email");
    const guestsInput = document.getElementById("Guests");
    const messageInput = document.getElementById("message");

    //Name is mandatory
    if (nameInput.value.trim() === "") {
        raiseError("Làm ơn điền tên của bạn.");
        return;
    }

    //Guest number is mandatory
    if (guestsInput.value.trim() === "") {
        raiseError("Làm ơn cho biết số người đi kèm.");
        return;
    }

    if(emailInput.value.trim() !== "" && !validateEmail(emailInput.value)) {
        raiseError("Làm ơn điền email hợp lệ.");
        return;
    }

    submmitForm(this);
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function raiseError(message){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message
    })
}

function raiseSuccessSubmit(){
    Swal.fire({
        icon: 'success',
        title: 'Cám ơn bạn đã trả lời',
        confirmButtonText: 'Đóng'
    })
}

function submmitForm(form){

    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("rsvpForm")),
    }).then(
        response => response.json()
    ).then((html) => {
        raiseSuccessSubmit();
        form.reset();
    });
}


// Get the timeline section
const rsvpSection = document.getElementById("containerRsvp");

// Get the timeline items
const rsvpMain = document.querySelector(".rsvp-main");

//Class name for animation
const rsvpAnimationClasses = [ANIMATE_ANIMATED, ANIMATE_LIGHT_SPEED];

// Create an intersection observer
const observerRsvp = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            //Add the animation to the rsvp main
            updateClass(rsvpMain, rsvpAnimationClasses);
        }
        else {
            //Remove the animation for the rsvp main
            removeClass(rsvpMain, rsvpAnimationClasses);
        }
    });
}, {
    root: null,
    rootMargin: "0px",
    threshold: [0]
});

// Start observing the timeline section
observerRsvp.observe(rsvpSection);