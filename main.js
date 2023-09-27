const container = document.querySelector(".container");
const thankYou = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit-rating");
const ratings = document.querySelectorAll(".btn");
const actualRating = document.getElementById("rating");

submitButton.addEventListener("click", () =>{
    container.style.display = "none";
    thankYou.classList.remove("hidden");
})

ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
        actualRating.innerHTML = rating.innerHTML
    })
})

