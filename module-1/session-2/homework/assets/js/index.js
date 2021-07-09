const alertSubmit = (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    console.log(title);
    console.log(description);

    if(title == "" || description == "") {
        alert(`Form input keduanya harus diisi!`);
    } else {
        alert(`Berhasil input dengan title (${title}) dan description (${description})`);
    }
};

document.getElementById("submit").addEventListener("click", alertSubmit);

const getData = () => {
    fetch("https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json")
    .then((response) => {
        if(!response.ok) {
            return Promise.reject("there is an error fetching the data");
        }
        console.log("status ok", response);
        return response.json();
    })
    .then((data) => {
        console.log("resolved: ", data);

        // let img = document.getElementById("img");
        // let title = document.getElementById("title");
        // let artist = document.getElementById("artist");
        // let album = document.getElementById("album");
        // let a = document.querySelector(".playlist-item a");

        // img.setAttribute("src", data.album.images[0].url);
        // img.setAttribute("width", data.album.images[0].width);
        // img.setAttribute("height", data.album.images[0].height);

        // title.innerText = data.name;
        // artist.innerText = data.artists[0].name;
        // album.innerText = data.album.name;
        // a.setAttribute("href", data.href);

        valuePlaylist(data);

    })
    .catch((err) => {
        console.log("error", err);
        alert(`error ${err}`);
    })
}

const valuePlaylist = (data) => {
    let img = document.getElementById("img");
    let title = document.getElementById("title");
    let artist = document.getElementById("artist");
    let album = document.getElementById("album");
    let a = document.querySelector(".playlist-item a");

    img.setAttribute("src", data.album.images[0].url);
    img.setAttribute("width", data.album.images[0].width);
    img.setAttribute("height", data.album.images[0].height);

    title.innerText = data.name;
    artist.innerText = data.artists[0].name;
    album.innerText = data.album.name;
    a.setAttribute("href", data.href);
}

getData();