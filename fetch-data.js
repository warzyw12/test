const fetchDataButton = document.getElementById("fetch-data");
const resultDiv = document.getElementById("result");
const urlInput = document.getElementById("url-input");

fetchDataButton.addEventListener("click", async () => {
  const url = urlInput.value;
  const proxyURL = `https://cors-anywhere.herokuapp.com/${url}`;

  try {
    const response = await fetch(proxyURL);
    const fetchedContent = await response.text();
    const summary = await generateSummary(fetchedContent);
    resultDiv.innerHTML = `<p>${summary}</p>`;
  } catch (error) {
    console.error("Error:", error);
  }
});
