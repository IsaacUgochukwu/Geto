function getParagraph(card) {
    // Importing Elements
    const spinner = document.getElementById("spinner");
    const main = document.getElementById("main");
    const searchresult = document.getElementById("searchresult");
    const title = document.getElementById("title");
    const artistbio = document.getElementById("bio");
    const back = document.getElementById("back");
    const p = card.querySelector("p");
    const img = document.getElementById("artistimg");

    // Element modifications
    const pText = p.innerHTML;

    // Elements styling
    main.style.display = "none";
    spinner.style.display = "block";
    back.style.display = "block";

    // URL components
    const apiKey = import.meta.env.API_KEY;
    const endpoint = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + pText + "&api_key=" + apiKey + "&format=json";

    // URL fetching
    fetch(endpoint)
    .then(response => response.json())
    .then(data => { 
        spinner.style.display = "none";
        searchresult.style.display = "block";
        const bio = data.artist.bio.summary;
        const id = data.artist.mbid;
        title.innerHTML = pText;
        artistbio.innerHTML = bio;

        // URL components
        const imgendpoint = "https://lastfm-img2.akamaized.net/i/u/300x300/" + id + ".png?" + "api_key=" + apiKey;
        
        return fetch(imgendpoint)
        .then(response => response.blob())
        .then(blob => {
            img.src = URL.createObjectURL(blob);
        })
        .catch(error => console.error(error));
        })
        
    .catch(error => console.error(error));
}