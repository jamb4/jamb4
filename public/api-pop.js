var xhttp = new XMLHttpRequest();

xhttp.onload = function () {

    let response = JSON.parse(this.responseText);
    console.log(JSON.parse(this.responseText));

    for (data of response.data) {
        let div = document.getElementById("colum2")
        let div1 = document.createElement("div")
        div1.classList.add("sty²")
        div.appendChild(div1)
        let div2 = document.createElement("div")
        div2.classList.add("imagepop");
        div1.appendChild(div2);
        let div3 = document.createElement("div")
        div3.classList.add("textpop")
        div1.appendChild(div3);
        if (data.attributes.coverImage) {
            let image = document.createElement("img");
            div2.appendChild(image);
            image.src = data.attributes.coverImage.large;
            image.alt = data.attributes.slug
            image.classList.add("imgind");
            image.id = data.id;
            image.onclick = function (event) {
                let id = event.target.id;
                window.location.href = `paginaep.html?anime=${id}` //"paginaep.html?anime=" + response.data[0].id
            }
        }

        let h2 = document.createElement("h2");
        h2.textContent = data.attributes.canonicalTitle;
        div3.appendChild(h2);
        let span = document.createElement("span");
        span.textContent = data.attributes.description;
        span.classList.add("textind");
        div3.appendChild(span);
    }
}
xhttp.open('GET', "https://kitsu.io/api/edge/trending/anime");
xhttp.send()