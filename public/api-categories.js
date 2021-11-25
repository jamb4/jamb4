var xhttp = new XMLHttpRequest();

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