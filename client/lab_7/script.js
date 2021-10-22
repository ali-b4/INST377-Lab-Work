async function fetchRequest(url) {
  try {
    const request = await fetch(url);
    const json = await request.json();
    return json;
  } catch (err) {
    console.error(err);
    return err;
  }
}

async function mainThread() {
  console.log('loaded main script');
  const url = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
  const inputBox = document.querySelector('#zipcode');
  const listOfFilteredItems = document.querySelector('.append-box');

  const fetchElement = document.querySelector('.fetch');
  const data = await fetchRequest(url);
  const dataSet = [];

  console.log('external dataset', data);

  document.addEventListener('input', (event) => {
    console.log(event.target.value);
    const filteredList = data.filter((item, index) => {
      const zipcode = event.target.value;
      return item.zip === zipcode;
    });
    console.table(filteredList);
    filteredList.forEach((item, index) => {
      listOfFilteredItems.innerHTML += `<span class="resto-name">${item.name}</span> <br>`;
    });
  });
}

window.onload = mainThread;

const mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'your.mapbox.access.token'
}).addTo(mymap);