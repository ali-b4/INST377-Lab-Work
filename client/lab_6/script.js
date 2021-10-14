const names = [];

async function fetchRequest(evt) {
  const request = await fetch(url);
  const json = await request.json();
  console.table(json);
  return json;
}
const url = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json'
const data = fetchRequest(url)
//fetch(endpoint)
//  .then((blob) => blob.json())
//  .then((data) => names.push(...data));

function findMatches(wordToMatch, data) {
  return data.filter((place) => names.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.names.match(regex) || place.state.match(regex);
  }));
}

function displayMatches() {
  const matchArray = findMatches(this.value, names);
  const html = matchArray.map((place) => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = play.city.replace(regex, '<span class = "h1">$ {this.value}</span');
      const stateName = place.state.replace(regex, '<span class="h1"> ${this.value}</span>');
      return 
      '<li><span class = "name"> ${cityName}, ${stateName}</span></li>';
  }
}).join('');

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);