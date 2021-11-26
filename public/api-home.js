document.getElementById("next").addEventListener("click", mudaPaginaMais);
document.getElementById("over").addEventListener("click", mudaPaginaMenos);
var paginaAtual = 0
var xhttp = new XMLHttpRequest();

xhttp.onload = function () {

    let response = JSON.parse(this.responseText);
    console.log(JSON.parse(this.responseText));

    for (data of response.data) {
        let div = document.getElementById("colum1")
        let div1 = document.createElement("div")
        div1.classList.add("styInd")
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
xhttp.open('GET', "https://kitsu.io/api/edge/anime?page[limit]=8&page[offset]=0");
xhttp.send();

function mudaPaginaMais () {
    paginaAtual += 1
    let div = document.getElementById("colum1")
    div.innerHTML = ""
    xhttp.onload = function () {
        let response = JSON.parse(this.responseText);
        console.log(JSON.parse(this.responseText));

        for (data of response.data) {
            let div1 = document.createElement("div")
            div1.classList.add("styInd")
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
    xhttp.open('GET', "https://kitsu.io/api/edge/anime?page[limit]=8&page[offset]=" + paginaAtual * 8);
    xhttp.send();
}



    function mudaPaginaMenos() {
        paginaAtual -= 1
        let div = document.getElementById("colum1")
        div.innerHTML = ""
        xhttp.onload = function () {
            let response = JSON.parse(this.responseText);
            console.log(JSON.parse(this.responseText));
    
            for (data of response.data) {
                let div1 = document.createElement("div")
                div1.classList.add("styInd")
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
        xhttp.open('GET', "https://kitsu.io/api/edge/anime?page[limit]=8&page[offset]=" + paginaAtual * 8);
        xhttp.send();
    }
    
    xhttp.open('GET', "https://kitsu.io/api/edge/anime?page[limit]=8&page[offset]=" + paginaAtual * 8);
    xhttp.send();


/*
   let divDescriptionpop1 = document.getElementById("descriptionPop1");
   let h2pop1 = document.createElement("h2");
   h2pop1.textContent = response.data[10].attributes.canonicalTitle;
   divDescriptionpop1.appendChild(h2pop1);
   let spanpop1 = document.createElement("span");
   spanpop1.textContent = response.data[10].attributes.description;
   spanpop1.classList.add("textind");
   divDescriptionpop1.appendChild(spanpop1);

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

   // pop3
   let divPop3 = document.getElementById("pop3");
   if (response.data[9].attributes.coverImage) {
       let pop3 = document.createElement("img");
       divPop3.appendChild(pop3);
       pop3.src = response.data[9].attributes.coverImage.large;
       pop3.alt = "cowboy beebop";
       pop3.classList.add("imagepop");
   }

   let divDescriptionpop3 = document.getElementById("descriptionPop3");
   let h3pop3 = document.createElement("h2");
   h3pop3.textContent = response.data[9].attributes.canonicalTitle;
   divDescriptionpop3.appendChild(h3pop3);
   let spanpop3 = document.createElement("span");
   spanpop3.textContent = response.data[9].attributes.description;
   spanpop3.classList.add("textind");
   divDescriptionpop3.appendChild(spanpop3);

  // pop4
  let divPop4 = document.getElementById("pop4");
  if (response.data[11].attributes.coverImage) {
      let pop4 = document.createElement("img");
      divPop4.appendChild(pop4);
      pop4.src = response.data[11].attributes.coverImage.large;
      pop4.alt = "cowboy beebop";
      pop4.classList.add("imagepop");
  }

  let divDescriptionpop4 = document.getElementById("descriptionPop4");
  let h4pop4 = document.createElement("h2");
  h4pop4.textContent = response.data[11].attributes.canonicalTitle;
  divDescriptionpop4.appendChild(h4pop4);
  let spanpop4 = document.createElement("span");
  spanpop4.textContent = response.data[11].attributes.description;
  spanpop4.classList.add("textind");
  divDescriptionpop4.appendChild(spanpop4);

 
}
*/