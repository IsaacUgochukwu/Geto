// Search Functionality
document.querySelector('.search-btn').addEventListener('click', () => {
    const searchInput = document.querySelector(".search-input").value.trim();

    if (searchInput) {
        // Importing elements
        const spinner = document.querySelector(".spinner");
        const suggestions = document.querySelector(".suggestions");
        const searchResult = document.querySelector(".search-result");
        const titleContainer = document.querySelector(".title");
        const artistBioContainer = document.querySelector(".bio");
        const backBtn = document.querySelector(".back");

        // Elements styling
        suggestions.style.display = "none";
        spinner.style.display = "block";
        backBtn.style.display = "block";

        // URL components
        const apiKey = process.env.API_KEY;
        const endpoint = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + searchInput + "&api_key=" + apiKey + "&format=json";

        // URL fetching
        fetch(endpoint)
        .then(response => response.json())
        .then(data => { 
            spinner.style.display = "none";
            searchResult.style.display = "block";
            const bio = data.artist.bio.summary;
            const id = data.artist.mbid;
            titleContainer.innerHTML = searchInput;
            artistBioContainer.innerHTML = bio;
          })
        .catch(error => console.error(error));
   }  
})

// Suggestions Functionality
const  getParagraph = (card) => {
  // Importing Elements
  const spinner = document.querySelector(".spinner");
  const suggestions = document.querySelector(".suggestions");
  const searchResult = document.querySelector(".search-result");
  const titleContainer = document.querySelector(".title");
  const artistBioContainer = document.querySelector(".bio");
  const backBtn = document.querySelector(".back");
  const p = card.querySelector("p");
  const imgContainer = document.querySelector("artist-img");

  // Element modifications
  const pText = p.innerHTML;

  // Elements styling
  suggestions.style.display = "none";
  spinner.style.display = "block";
  backBtn.style.display = "block";

  // URL components
  const apiKey = process.env.API_KEY;
  const endpoint = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + pText + "&api_key=" + apiKey + "&format=json";

  // URL fetching
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      spinner.style.display = "none";
      searchResult.style.display = "block";
      const bio = data.artist.bio.summary;
      const id = data.artist.mbid;
      titleContainer.innerHTML = pText;
      artistBioContainer.innerHTML = bio;
    })
    .catch(error => console.error(error))
}