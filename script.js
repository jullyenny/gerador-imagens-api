async function getDataPhotos() {
    console.log("passei por aqui")
    const cover = await fetch("https://api.unsplash.com/photos?client_id=Qpm9hXofTAPi7q807lUDI2j8XC6ptQA1CCn4PmsbOdo").then((response) => {
        return response.json()
    }).then(jsonInfo => { return jsonInfo })
    document.querySelector(".list").remove();

    document.querySelector(".conteiner-list").innerHTML = '<ul class="list"></ul>';

    //fazer um map com o result das cover 
    for (i = 0; i < cover.length; i++){
        const list = document.querySelector(".list");
        const itemList = document.createElement("li");
        itemList.className = "item-list";
        itemList.innerHTML = `<img src="${cover[i].urls.thumb}" />`;

        list.append(itemList);

    }

    return cover
}

getDataPhotos();