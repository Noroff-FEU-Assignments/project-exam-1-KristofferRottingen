const button = document.querySelector(".hp_button")

button.addEventListener("click", function() {

    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
    });
});