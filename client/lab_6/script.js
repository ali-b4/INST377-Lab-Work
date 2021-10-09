const endpoint = "https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json";

const names = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => names.push(...data))
    
function findMatches(wordToMatch, names) {
  return names.filter(place => {
    return names.filter(place => {

        const regex = new RegExp(wordToMatch, 'gi');
            return place.names.match(regex) || place.state.match(regex)
        })
    })
}

function displayMatches() {
    console.log(this.value);
}

const searchInput = document.querySelector('.search');
const suggest = document.querySelector('.suggestions');


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);