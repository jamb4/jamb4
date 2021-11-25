let urlString = window.location.href;
let url = new URL(urlString)
let value = url.searchParams.get("anime");

var xhttp = new XMLHttpRequest();

xhttp.onload = function () {
    let response = JSON.parse(this.responseText);
    console.log(JSON.parse(this.responseText));


    // let divCategory = document.getElementById("options");

    let divImage = document.getElementById("imageinfo");
    let img = document.createElement("img");
    divImage.appendChild(img);
    img.src = response.data.attributes.coverImage.tiny;
    img.alt = "cowboy beebop";
    img.classList.add("imgind");

    let name = document.getElementById("name");
    name.textContent=response.data.attributes.canonicalTitle;

}
xhttp.open('GET', "https://kitsu.io/api/edge/anime/" + value);
xhttp.send();