const limite = 12;
var selectCategoria = document.getElementsByTagName("select")[0]
selectCategoria.onchange = pegaDados;
var paginaAtual = 0
var xhttp = new XMLHttpRequest();

function montaPagina(response) {
    for (data of response.data) {
        let div = document.getElementById("colum1");
        let div1 = document.createElement("div");
        div1.classList.add("styInd");
        div.appendChild(div1);
        let div2 = document.createElement("div");
        div2.classList.add("imgind");
        div1.appendChild(div2);
        let div3 = document.createElement("div");
        div3.classList.add("textind");
        div1.appendChild(div3);
        if (data.attributes.coverImage) {
            let image = document.createElement("img");
            div2.appendChild(image);
            image.src = data.attributes.coverImage.large;
            image.alt = data.attributes.slug;
            image.classList.add("imgind");
            div1.id = data.id;
            div1.addEventListener('click', function (event) {
                let id = pegaDivPai(event.target);
                window.location.href = `paginaep.html?anime=${id}`; //"paginaep.html?anime=" + response.data[0].id
            });
        }

        let h2 = document.createElement("h2");
        h2.textContent = data.attributes.canonicalTitle;
        div3.appendChild(h2);
        let span = document.createElement("span");
        span.textContent = data.attributes.description;
        span.classList.add("textind1");
        div3.appendChild(span);
    }
}

function pegaDivPai(node) {
    while(node.tagName.toLowerCase() !== 'div' || !node.id) {
        node = node.parentNode;   
    }
    return node.id;
}

document.getElementById("next").onclick = () => {
    paginaAtual += 1;
    pegaDados();
}

document.getElementById("over").onclick = () => {
    paginaAtual -= 1;
    pegaDados();
}

function pegaDados() {
    let div = document.getElementById("colum1");
    div.innerHTML = "";
    xhttp.onload = function () {
        let response = JSON.parse(this.responseText);
        console.log(JSON.parse(this.responseText));
        let btn = document.createElement("button");
      
        montaPagina(response);
    }
    xhttp.open('GET', getURL());
    xhttp.send();
}


function getURL() {
    if (selectCategoria.value !== "-") {
        return "https://kitsu.io/api/edge/anime?filter[categories]= " + selectCategoria.value + "&page[limit]=12&page[offset]=" + paginaAtual * limite;
    }
    return "https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=" + paginaAtual * limite;
}

pegaDados()
/*
   // pop2
   let divPop2 = document.getElementById("pop2");
   if (response.data[8].attributes.coverImage) {
       let pop2 = document.createElement("img");
       divPop2.appendChild(pop2);
       pop2.src = response.data[8].attributes.coverImage.large;
       pop2.alt = "cowboy beebop";
       pop2.classList.add("imagepop");
   }

   let divDescriptionpop2 = document.getElementById("descriptionPop2");
   let h2pop2 = document.createElement("h2");
   h2pop2.textContent = response.data[8].attributes.canonicalTitle;
   divDescriptionpop2.appendChild(h2pop2);
   let spanpop2 = document.createElement("span");
   spanpop2.textContent = response.data[8].attributes.description;
   spanpop2.classList.add("textind");
   divDescriptionpop2.appendChild(spanpop2);

*/