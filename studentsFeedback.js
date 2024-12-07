let feedbackModal = document.querySelector(".feedback-modal");
let feedbackOverlay = document.querySelector(".feedback-overlay");
let feedbackClose = document.querySelector(".feedback-close");

let videoIcon = document.querySelector(".feedback-card-right .icon");

videoIcon.addEventListener("click", ()=>{
    feedbackModal.style.display = "flex"
    feedbackOverlay.style.display = "block"
})

feedbackClose.addEventListener("click", () =>{
    feedbackModal.style.display = "none"
    feedbackOverlay.style.display = "none"
})

// slider
let dot1 = document.querySelector(".dot1");
let dot2 = document.querySelector(".dot2");
let cardLeftStars = document.querySelector(".card-left-stars");

dot1.addEventListener("click", () => {
    dot1.style.color = "#36348E";
    dot2.style.color = "#CFCEE8";

    cardLeftStars.innerHTML = `
        
    `
})

dot2.addEventListener("click", () => {
    dot2.style.color = "#36348E";
    dot1.style.color = "#CFCEE8";
})