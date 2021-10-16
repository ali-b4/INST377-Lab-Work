async function fetchRequest(evt) {
  try {
    const request = await fetch(url);
    const json = await request.json();
    return json;
  } catch (err) {
    console.error(err);
    return err;
  }
}

function mainThread() {
  console.log('loaded main script');
  const url = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

  const inputBox = document.querySelector('#zipcode');
  document.addEventListener('input', (event) => {
    console.log(event.target.value);
  });
}