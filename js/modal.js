const api = "https://kristoffer-api-exam1.no/Exam/wp-json/wp/v2/posts/" + id;
const modalContent = document.querySelector(".modal");

const toggleImg = () => {

    modalContent.classList.toggle("modal_hidden")

    document.querySelector(".bg")
    .classList.toggle("bg_hidden");
};

document.querySelector(".image")
.addEventListener("click", toggleImg);

async function getImg() {
    
    try{
        const response = await fetch(api);

        const result = await response.json();

        console.log(result);
        
        modalContent.innerHTML = `<img scr="${result.acf.main_image}" alt="${result.acf.title} image">`;

    } catch (error){
        console.log(error);
    }

    
};

getImg();


