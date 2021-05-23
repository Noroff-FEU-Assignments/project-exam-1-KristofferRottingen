/* Get data from api-----> */
const sectionOne = document.querySelector(".sec1");
const sectionTwo = document.querySelector(".sec2");
const sectionThree = document.querySelector(".sec3");
const sectionFour = document.querySelector(".sec4");

const url = "https://kristoffer-api-exam1.no/Exam/wp-json/wp/v2/posts";


async function getApi(){
    try {
        const res = await fetch(url);

        const data = await res.json();

        createpost(data);
        
    } catch(error) {
        console.log(error);
    }
}

getApi();



function createpost(data) {
    for(let i = 0; i < data.length; i++)  {
   
        if (i = 8) {
            break;
        }
    }
    sectionOne.innerHTML += `<div class="sec_content1"><a href="post.html?id=${data[0].id}" class="post_card">
                                <img src="${data[0].acf.main_image}" alt="burger">
                                <h3>${data[0].acf.title}</h3>
                                <p>${data[0].acf.post_dato}</p>
    </a></div>
    
    <div class="sec_content2"><a href="post.html?id=${data[1].id}" class="post_card">
                            <img src="${data[1].acf.main_image}" alt="burger">
                            <h3>${data[1].acf.title}</h3>
                            <p>${data[1].acf.post_dato}</p>
    </a></div>`;
    
    sectionTwo.innerHTML += `<div class="sec_content3"><a href="post.html?id=${data[2].id}" class="post_card">
                                <img src="${data[2].acf.main_image}" alt="burger">
                                <h3>${data[2].acf.title}</h3>
                                <p>${data[2].acf.post_dato}</p>
    </a></div>
    
    <div class="sec_content4"><a href="post.html?id=${data[3].id}" class="post_card">
                                <img src="${data[3].acf.main_image}" alt="burger">
                                <h3>${data[3].acf.title}</h3>
                                <p>${data[3].acf.post_dato}</p>
    </a></div>`;

    sectionThree.innerHTML += `<div class="sec_content5"><a href="post.html?id=${data[4].id}" class="post_card">
                                <img src="${data[4].acf.main_image}" alt="burger">
                                <h3>${data[4].acf.title}</h3>
                                <p>${data[4].acf.post_dato}</p>
    </a></div>
    
    <div class="sec_content6"><a href="post.html?id=${data[5].id}" class="post_card">
                                <img src="${data[5].acf.main_image}" alt="burger">
                                <h3>${data[5].acf.title}</h3>
                                <p>${data[5].acf.post_dato}</p>
    </a></div>`;

    sectionFour.innerHTML += `<div class="sec_content7"><a href="post.html?id=${data[6].id}" class="post_card">
                                <img src="${data[6].acf.main_image}" alt="burger">
                                <h3>${data[6].acf.title}</h3>
                                <p>${data[6].acf.post_dato}</p>
    </a></div>
    
    <div class="sec_content8"><a href="post.html?id=${data[7].id}" class="post_card">
                                <img src="${data[7].acf.main_image}" alt="burger">
                                <h3>${data[7].acf.title}</h3>
                                <p>${data[7].acf.post_dato}</p>
    </a></div>`;


}






/* Carousel glider-----> */
const slider = document.querySelector(".latest_posts");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const markParent = document.querySelector(".nav_arrows ul");

var index = 0;

function setIndex(){
    document.querySelector(".nav_arrows .chosen").classList.remove("chosen");
    slider.style.transform = "translate(" + (index) * -25 +  "%)";
}

/* navigation dots ----> */
document.querySelectorAll(".nav_arrows li").forEach(function( mark, ind) {
    mark.addEventListener("click", function() {
        index = ind;
        setIndex();
        mark.classList.add("chosen")
    });
});

/* left and rigth aroww -----> */
leftArrow.addEventListener("click", function() {
    index = (index > 0) ? index - 1 : 0;
    setIndex();
    markParent.children[index].classList.add("chosen");
});

rightArrow.addEventListener("click", function() {
    index = (index < 3) ? index + 1 : 3;
    setIndex();
    markParent.children[index].classList.add("chosen");
});