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
        const apiKey = "40435b0af7d9d884b64fd112db6c2118";
        const endpoint = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + search + "&api_key=" + apiKey + "&format=json";
        const id = "JCYrqVQcuVTtGHx51ZZrHxNy2-HFWQ1X";
        const url = "https://musicbrainz.org/ws/2/artist/?fmt=json";

        // URL fetching
        fetch(url, {
            method: "GET",
            headers: {
                "Authorization": Bearer + id,
                "User-Agent": "Geto"
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))


        // URL fetching
        fetch(endpoint)
        .then(response => response.json())
        .then(data => { 
            spinner.style.display = "none";
            searchresult.style.display = "block";
            const bio = data.artist.bio.summary;
            title.innerHTML = search;
            artistbio.innerHTML = bio;
            })
        .catch(error => console.error(error));
        }
}
