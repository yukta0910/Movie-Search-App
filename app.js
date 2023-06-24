const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    // all famous movies
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    // searched movies

const movieBox = document.getElementById("movie-box")

async function getMovies(api){
    const response = await fetch(api)
    const data = await response.json()
    showMovies(data.results) 
    // console.log(data.results);
}


function showMovies(data){
    movieBox.innerHTML = "";
    data.forEach(
        (item) => {
            const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
            <img src="${IMGPATH + item.poster_path}" alt="" />
            <div class="overlay">
                <div class="title">
                ${item.original_title} <span>${item.vote_average}</span>
                </div>
                <h2>Overview:</h2>
                ${item.overview}
            </div>`

            movieBox.appendChild(box)
        
    });
}

    document.getElementById("search").addEventListener("keyup", function(event){
        if(event.target.value != ""){
            getMovies(SEARCHAPI + event.target.value)
        }
        else{
            getMovies(APIURL)
        }
    })

// in-it call
getMovies(APIURL)




