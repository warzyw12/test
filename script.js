async function generateSummary(text) {
  const apiKey = "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";
  const prompt = `Please summarize the following text:\n\n${text}`;
  const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt,
      max_tokens: 100,
      n: 1,
      stop: null,
      temperature: 0.5,
    }),
  });

  const data = await response.json();
  return data.choices[0].text;
}
