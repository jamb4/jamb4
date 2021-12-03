document.getElementById("next").addEventListener("click", mudaPaginaCima);
document.getElementById("over").addEventListener("click", mudaPaginaBaixo);

var paginaAtual = 0
var xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    
    let response = JSON.parse(this.responseText);
    console.log(JSON.parse(this.responseText));

    for (data of response.data) {
        let div = document.getElementById("columManga")
        let div1 = document.createElement("div")
        div1.classList.add("styManga")
        div.appendChild(div1)
        let div2 = document.createElement("div")
        div2.classList.add("imgind");
        div1.appendChild(div2);
        let div3 = document.createElement("div")
        div3.classList.add("textind")
        div1.appendChild(div3);
        a
        if (data.attributes.coverImage) {
            let image = document.createElement("img");
            div2.appendChild(image);
            image.src = data.attributes.coverImage.tiny;
            image.alt = data.attributes.slug
            image.classList.add("imgind");
            div1.id = data.id;
            div1.onclick = function (event) {
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
xhttp.open('GET', "https://kitsu.io/api/edge/manga?page[limit]=12&page[offset]=" + paginaAtual * 12);
xhttp.send();

function mudaPaginaCima() {
    paginaAtual += 1
    let div = document.getElementById("columManga")
    div.innerHTML = ""
    xhttp.onload = function () {
        let response = JSON.parse(this.responseText);
        console.log(JSON.parse(this.responseText));

        for (data of response.data) {
            let div1 = document.createElement("div")
            div1.classList.add("styManga")
            div.appendChild(div1)
            let div2 = document.createElement("div")
            div2.classList.add("imgind");
            div1.appendChild(div2);
            let div3 = document.createElement("div")
            div3.classList.add("textind")
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
                    window.location.href = `paginaep.html?manga=${id}` //"paginaep.html?anime=" + response.data[0].id
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
    xhttp.open('GET', "https://kitsu.io/api/edge/manga?page[limit]=12&page[offset]=" + paginaAtual * 12);
    xhttp.send();
}

function mudaPaginaBaixo() {
    paginaAtual -= 1
    let div = document.getElementById("columManga")
    div.innerHTML = ""
    xhttp.onload = function () {
        let response = JSON.parse(this.responseText);
        console.log(JSON.parse(this.responseText));

        for (data of response.data) {
            let div1 = document.createElement("div")
            div1.classList.add("styManga")
            div.appendChild(div1)
            let div2 = document.createElement("div")
            div2.classList.add("imgind");
            div1.appendChild(div2);
            let div3 = document.createElement("div")
            div3.classList.add("textind")
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
                    window.location.href = `paginaep.html?manga=${id}` //"paginaep.html?anime=" + response.data[0].id
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
    xhttp.open('GET', "https://kitsu.io/api/edge/manga?page[limit]=12&page[offset]=" + paginaAtual * 12);
    xhttp.send();
}
xhttp.open('GET', "https://kitsu.io/api/edge/manga?page[limit]=12&page[offset]=" + paginaAtual * 12);
xhttp.send();