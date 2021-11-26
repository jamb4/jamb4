var xhttp = new XMLHttpRequest();

xhttp.onload = function () {
   
    let response = JSON.parse(this.responseText);
    console.log(JSON.parse(this.responseText));

    for (data of response.data) {
    let div= document.getElementById("colum1")
    let div1= document.createElement("div")
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
    image.id=data.id;
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

   /* // conteudo da posicao 3

    let divImage2 = document.getElementById("image2");
    let image2 = document.createElement("img");
    divImage2.appendChild(image2);
    image2.src = response.data[1].attributes.coverImage.large;
    image2.alt = "cowboy beebop";
    image2.classList.add("imgind");
    image2.onclick = function () {
        window.location.href = `paginaep.html?anime=${response.data[1].id}` //"paginaep.html?anime=" + response.data[0].id
    }

    let divDescriptionImage2 = document.getElementById("descriptionImage2");
    let h2Image2 = document.createElement("h2");
    h2Image2.textContent = response.data[1].attributes.canonicalTitle;
    divDescriptionImage2.appendChild(h2Image2);
    let spanImage2 = document.createElement("span");
    spanImage2.textContent = response.data[1].attributes.description;
    spanImage2.classList.add("textind");
    divDescriptionImage2.appendChild(spanImage2);


    // conteudo da posicao 3 
    let divImage3 = document.getElementById("image3");
    let image3 = document.createElement("img");
    divImage3.appendChild(image3);
    image3.src = response.data[2].attributes.coverImage.large;
    image3.alt = "cowboy beebop";
    image3.classList.add("imgind");

    let divDescriptionImage3 = document.getElementById("descriptionImage3");
    let h2Image3 = document.createElement("h2");
    h2Image3.textContent = response.data[2].attributes.canonicalTitle;
    divDescriptionImage3.appendChild(h2Image3);
    let spanImage3 = document.createElement("span");
    spanImage3.textContent = response.data[2].attributes.description;
    spanImage3.classList.add("textind");
    divDescriptionImage3.appendChild(spanImage3);

    // conteudo da posicao 4 
    let divImage4 = document.getElementById("image4");
    let image4 = document.createElement("img");
    divImage4.appendChild(image4);
    image4.src = response.data[3].attributes.coverImage.large;
    image4.alt = "cowboy beebop";
    image4.classList.add("imgind");

    let divDescriptionImage4 = document.getElementById("descriptionImage4");
    let h2Image4 = document.createElement("h2");
    h2Image4.textContent = response.data[3].attributes.canonicalTitle;
    divDescriptionImage4.appendChild(h2Image4);
    let spanImage4 = document.createElement("span");
    spanImage4.textContent = response.data[3].attributes.description;
    spanImage4.classList.add("textind");
    divDescriptionImage4.appendChild(spanImage4);

    // conteudo da posicao 5 
    let divImage5 = document.getElementById("image5");
    if (response.data[4].attributes.coverImage) {
        let image5 = document.createElement("img");
        divImage5.appendChild(image5);
        image5.src = response.data[4].attributes.coverImage.large;
        image5.alt = "cowboy beebop";
        image5.classList.add("imgind");
    }

    let divDescriptionImage5 = document.getElementById("descriptionImage5");
    let h2Image5 = document.createElement("h2");
    h2Image5.textContent = response.data[4].attributes.canonicalTitle;
    divDescriptionImage5.appendChild(h2Image5);
    let spanImage5 = document.createElement("span");
    spanImage5.textContent = response.data[4].attributes.description;
    spanImage5.classList.add("textind");
    divDescriptionImage5.appendChild(spanImage5);

    // conteudo da posicao 6 
    let divImage6 = document.getElementById("image6");
    if (response.data[5].attributes.coverImage) {
        let image6 = document.createElement("img");
        divImage6.appendChild(image6);
        image6.src = response.data[5].attributes.coverImage.large;
        image6.alt = "cowboy beebop";
        image6.classList.add("imgind");
    }

    let divDescriptionImage6 = document.getElementById("descriptionImage6");
    let h2Image6 = document.createElement("h2");
    h2Image6.textContent = response.data[5].attributes.canonicalTitle;
    divDescriptionImage6.appendChild(h2Image6);
    let spanImage6 = document.createElement("span");
    spanImage6.textContent = response.data[5].attributes.description;
    spanImage6.classList.add("textind");
    divDescriptionImage6.appendChild(spanImage6);

    // conteudo da posicao 7 
    let divImage7 = document.getElementById("image7");
    if (response.data[6].attributes.coverImage) {
        let image7 = document.createElement("img");
        divImage7.appendChild(image7);
        image7.src = response.data[6].attributes.coverImage.large;
        image7.alt = "cowboy beebop";
        image7.classList.add("imgind");
    }

    let divDescriptionImage7 = document.getElementById("descriptionImage7");
    let h2Image7 = document.createElement("h2");
    h2Image7.textContent = response.data[6].attributes.canonicalTitle;
    divDescriptionImage7.appendChild(h2Image7);
    let spanImage7 = document.createElement("span");
    spanImage7.textContent = response.data[6].attributes.description;
    spanImage7.classList.add("textind");
    divDescriptionImage7.appendChild(spanImage7);

    // conteudo da posicao 8 
    let divImage8 = document.getElementById("image8");
    if (response.data[7].attributes.coverImage) {
        let image8 = document.createElement("img");
        divImage8.appendChild(image8);
        image8.src = response.data[7].attributes.coverImage.large;
        image8.alt = "cowboy beebop";
        image8.classList.add("imgind");
    }

    let divDescriptionImage8 = document.getElementById("descriptionImage8");
    let h2Image8 = document.createElement("h2");
    h2Image8.textContent = response.data[7].attributes.canonicalTitle;
    divDescriptionImage8.appendChild(h2Image8);
    let spanImage8 = document.createElement("span");
    spanImage8.textContent = response.data[7].attributes.description;
    spanImage8.classList.add("textind");
    divDescriptionImage8.appendChild(spanImage8);

   // coluna 2
   // pop1
   let divPop1 = document.getElementById("pop1");
   if (response.data[10].attributes.coverImage) {
       let pop1 = document.createElement("img");
       divPop1.appendChild(pop1);
       pop1.src = response.data[10].attributes.coverImage.large;
       pop1.alt = "cowboy beebop";
       pop1.classList.add("imagepop");
   }

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

xhttp.open('GET', "https://kitsu.io/api/edge/anime?page[limit]=8&page[offset]=0");
xhttp.send();