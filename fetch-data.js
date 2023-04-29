document.getElementById("fetch-data").addEventListener("click", fetchData);

function fetchData() {
  fetch('https://cors-anywhere.herokuapp.com/https://adamblicharz.com/')
    .then(response => response.text())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
