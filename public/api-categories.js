var xhttp = new XMLHttpRequest();

function filtroCategoria(){
    let categoria = document.getElementById("select").value
    xhttp.onload = function(){
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
    xhttp.open("GET","https://kitsu.io/api/edge/anime?filter[categories]= " + categoria)
    xhttp.send();
}
xhttp.onload = function () {
    let response = JSON.parse(this.responseText);
    console.log(JSON.parse(this.responseText));

    let divCategory = document.getElementById("category");
    let select = document.getElementsByTagName("select")[0];

    for (data of response.data) {
        let option = document.createElement("option");
        option.value = data.attributes.slug;
        option.textContent = data.attributes.title;
        select.appendChild(option);


        let innerDivCategory = document.createElement("div");
        innerDivCategory.classList.add("textind");
        divCategory.appendChild(innerDivCategory);
        let h2Category = document.createElement("h2");
        h2Category.textContent = data.attributes.title;
        innerDivCategory.appendChild(h2Category);
        let spanCategory = document.createElement("span");
        spanCategory.textContent = data.attributes.totalMediaCount;
        spanCategory.classList.add("textind");
        innerDivCategory.appendChild(spanCategory);
    }
}
xhttp.open('GET', "https://kitsu.io/api/edge/categories");
xhttp.send();