let urlString = window.location.href;
let url = new URL(urlString)
let value = url.searchParams.get("anime");

var xhttp = new XMLHttpRequest();

xhttp.onload = function () {
    let response = JSON.parse(this.responseText);
    console.log(JSON.parse(this.responseText));


    
    let divImage = document.getElementById("imageinfo");
    let img = document.createElement("img");
    divImage.appendChild(img);
    img.src = response.data.attributes.coverImage.tiny;
    img.alt =  response.data.attributes.slug;
    img.classList.add("imgind");

    let name = document.getElementById("name");
    name.textContent=response.data.attributes.canonicalTitle;
    let ep = document.getElementById("ep");
    ep.textContent=response.data.attributes.episodeCount;
    let pop = document.getElementById("pop");
    pop.textContent=response.data.attributes.ratingRank;
    let releases = document.getElementById("releases");
    releases.textContent=response.data.attributes.endDate;
    let stats = document.getElementById("stats");
    stats.textContent=response.data.attributes.status;

}
xhttp.open('GET', "https://kitsu.io/api/edge/anime/" + value);
xhttp.send();