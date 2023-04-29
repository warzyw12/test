const fetchDataBtn = document.getElementById("fetch-data-btn");
const urlInput = document.getElementById("url-input");
const output = document.getElementById("output");

fetchDataBtn.addEventListener("click", async () => {
  const url = urlInput.value;
  if (url) {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
    const text = await response.text();
    const summary = await generateSummary(text);
    output.innerText = summary;
  }
});
