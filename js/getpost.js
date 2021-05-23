const url = "https://kristoffer-api-exam1.no/Exam/wp-json/wp/v2/posts";

const allPosts = document.querySelector(".all_posts");

async function getAllPosts(){
    try {
        const response = await fetch(url);

        const result = await response.json();

        console.log(result);

        allPosts.innerHTML = "";

        for(let i = 0; i < 8; i++)  {
            console.log(result[i].id);

            allPosts.innerHTML += 
            `<div class="blog_grid">
                <a href="post.html?id=${result[i].id}" class="grid_post_card">
                    <img src="${result[i].acf.main_image}" alt="${result[i].acf.title}">
                    <h3>${result[i].acf.title}</h3>
                    <p>${result[i].acf.post_dato}</p>
                </a>
            </div>`;
        }
        
    } catch(error) {
        console.log(error);
    }
}

getAllPosts();

/* Click event for more posts -----> */
const viewMoreBtn = document.querySelector(".view_more_btn");
const morePost = document.querySelector(".view_posts");
const loader = document.querySelector(".loader");

const morePostApi = "https://kristoffer-api-exam1.no/Exam/wp-json/wp/v2/posts?categories=1"

viewMoreBtn.addEventListener("click", () => {

    async function Api(){
        try {
            const response = await fetch(morePostApi);

            const result = await response.json();

            for (let i = 0; i < result.length; i++) {

                viewMoreBtn.style.display = "none";

                morePost.innerHTML += `<div class="blog_grid">
                <a href="post.html?id=${result[i].id}" class="grid_post_card">
                    <img src="${result[i].acf.main_image}" alt="${result[i].acf.title}">
                    <h3>${result[i].acf.title}</h3>
                    <p>${result[i].acf.post_dato}</p>
                </a>
                </div>`;
            }
        } catch(error) {
            console.log(error);
        }
    };
    Api();
});


/* Click event for more posts -----> */


