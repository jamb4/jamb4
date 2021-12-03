var xhttp = new XMLHttpRequest();

xhttp.onload = function () {
    let response = JSON.parse(this.responseText);
    console.log(JSON.parse(this.responseText));

    let select = document.getElementsByTagName("select")[0];

    for (data of response.data) {
        let option = document.createElement("option");
        option.value = data.attributes.slug;
        option.textContent = data.attributes.title;
        select.appendChild(option);
    }
}
xhttp.open('GET', "https://kitsu.io/api/edge/categories");
xhttp.send();