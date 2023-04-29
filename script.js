const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";

const promptText = `Please summarize the following content:
{content}`;

async function generateSummary(content) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${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}`,
    },
    body: JSON.stringify({
      prompt: promptText.replace("{content}", content),
      max_tokens: 50,
      n: 1,
      stop: null,
      temperature: 0.5,
    }),
  });

  const result = await response.json();
  return result.choices[0].text.trim();
}
