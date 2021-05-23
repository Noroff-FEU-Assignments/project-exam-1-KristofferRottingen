const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const title = document.querySelector("title");

const introSection = document.querySelector(".img_intro");
const ingredientsSection = document.querySelector(".ing_img");
const htdSection = document.querySelector(".how_to_do");



const stars = `<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star-half-alt"></i>`;

const url = "https://kristoffer-api-exam1.no/Exam/wp-json/wp/v2/posts/" + id;

async function getDetails() {
    try{
        const response = await fetch(url);

        const result = await response.json();

        console.log(result);

        title.innerHTML += `${result.acf.title} | FoodBlog`;
        

        introSection.innerHTML = `<div class="normal_image"><img id="main_img" src="${result.acf.main_image}" alt="${result.acf.title} image"></div>
        <div class="overlay"><img class="overlay_image" src="${result.acf.main_image}" alt="${result.acf.title} image"></div>
        <h1>${result.acf.title}</h1>
        <div class="stars">${stars}</div>
        <p class="dato">${result.acf.post_dato}</p>
        <p>${result.acf.intro}</p>`;

        ingredientsSection.innerHTML = `<div class="ingredients">
        <h2>${result.acf.ing_heading}</h2>
        <p>${result.acf.ing}</p>
        </div>
        <div class="recipe_image">
            <img id="image2" src="${result.acf.img2}" alt="${result.acf.title} recipe image">
        </div>
        <div class="overlay2">
            <img class="overlay_img2" src="${result.acf.img2}" alt="${result.acf.title} recipe image">
        </div>`;

        htdSection.innerHTML = `
        <h2>How to do</h2>
        <ul>
            <li>${result.acf.parg1}</li>
            <li>${result.acf.parg2}</li>
            <li>${result.acf.parg3}</li>
            <li>${result.acf.parg4}</li>
            <li>${result.acf.parg5}</li>
        </ul>`;

        /* Overlay ------> */

        const mainImage = document.querySelector("#main_img");
        const overlay = document.querySelector(".overlay");

        mainImage.addEventListener("click", function () {
            overlay.classList.add("modal");
        });

        overlay.addEventListener("click", function () {
            overlay.classList.remove("modal");
        });

        const img2 = document.querySelector("#image2");
        const overlay2 = document.querySelector(".overlay2");

        img2.addEventListener("click", function () {
            overlay2.classList.add("modal");
        });

        overlay2.addEventListener("click", function () {
            overlay2.classList.remove("modal");
        });


        /* Overlay ------> */
        




    } catch(error) {
        console.log(error);
    }
}
getDetails();


