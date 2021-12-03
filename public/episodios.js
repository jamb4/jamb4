var xhttp = new XMLHttpRequest();

xhttp.onload = function () {
   
    let response = JSON.parse(this.responseText);
    console.log(JSON.parse(this.responseText));

    for (data of response.data) {
    let div= document.getElementById("colum1");
    let div1= document.createElement("div");
    div1.classList.add("styInd");
    div.appendChild(div1);
    let div2 = document.createElement("div");
    div1.appendChild(div2);
    div2.classList.add("textind");
    
    
    div2.src = data.relationships.episodes.links.self;
    
   
  
}

}

xhttp.open('GET', "https://kitsu.io/api/edge/anime?");
xhttp.send();