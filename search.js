function search() {
    const search = document.getElementById("search").value.trim();

    if (search) {
        // Importing elements
        const spinner = document.getElementById("spinner");
        const main = document.getElementById("main");
        const searchresult = document.getElementById("searchresult");
        const title = document.getElementById("title");
        const artistbio = document.getElementById("bio");
        const back = document.getElementById("back");

        // Elements styling
        main.style.display = "none";
        spinner.style.display = "block";
        back.style.display = "block";

        // URL components
        const apiKey = process.env.API_KEY;
        const endpoint = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + search + "&api_key=" + apiKey + "&format=json";

        // URL fetching
        fetch(endpoint)
        .then(response => response.json())
        .then(data => { 
            spinner.style.display = "none";
            searchresult.style.display = "block";
            const bio = data.artist.bio.summary;
            const id = data.artist.mbid;
            title.innerHTML = search;
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
}
