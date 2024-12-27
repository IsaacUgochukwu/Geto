// Search Functionality
document.querySelector('.search-btn').addEventListener('click', () => {
    const searchInput = document.querySelector(".search-input").value.trim();

    if (searchInput) {
        // Importing elements
        const loader = document.querySelector(".loader");
        const suggestions = document.querySelector(".suggestions");
        const searchResult = document.querySelector(".search-result");
        const titleContainer = document.querySelector(".title");
        const artistBioContainer = document.querySelector(".bio");
        const backBtn = document.querySelector(".back");
        const hero = document.querySelector('.hero');

        // Elements styling
        suggestions.style.display = "none";
        loader.classList.add('flex');
        backBtn.style.display = "block";
        hero.style.display = 'none';

        // URL fetching
        fetch("/api/artists?name=" + searchInput)
        .then(response => response.json())
        .then(data => { 
            loader.classList.remove('flex');
            loader.style.display = "none";
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
  const loader = document.querySelector(".loader");
  const suggestions = document.querySelector(".suggestions");
  const searchResult = document.querySelector(".search-result");
  const titleContainer = document.querySelector(".title");
  const artistBioContainer = document.querySelector(".bio");
  const backBtn = document.querySelector(".back");
  const p = card.querySelector("p");
  const imgContainer = document.querySelector("artist-img");
  const hero = document.querySelector('.hero');

  // Element modifications
  const pText = p.innerHTML;

  // Elements styling
  suggestions.style.display = "none";
  loader.classList.add('flex');
  backBtn.style.display = "block";
  hero.style.display = 'none';

  // URL fetching
  fetch("/api/artists?name=" + pText)
    .then(response => response.json())
    .then(data => {
      loader.classList.remove('flex');
      loader.style.display = "none";
      searchResult.style.display = "block";
      const bio = data.artist.bio.summary;
      const id = data.artist.mbid;
      titleContainer.innerHTML = pText;
      artistBioContainer.innerHTML = bio;
    })
    .catch(error => console.error(error))
}

// Back functionality
document.querySelector('.back').addEventListener('click', () => {
  // Importing elements
  const suggestions = document.querySelector(".suggestions").classList.add('cards');
  const suggestions2 = document.querySelector('.suggestions').style.display = "block";
  const searchResult = document.querySelector(".search-result").style.display = "none";
  const backBtn = document.querySelector(".back").style.display = 'none';
  const hero = document.querySelector('.hero').style.display = "block";
  const loader = document.querySelector('.loader').classList.remove('flex');
});