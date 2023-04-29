async function getSummary() {
    const url = document.getElementById('url').value;
    const summaryContainer = document.getElementById('summary');

    try {
        const content = await fetchUrlContent(url);
        const summary = await getChatGPTSummary(content);
        summaryContainer.innerHTML = summary;
    } catch (error) {
        summaryContainer.innerHTML = 'Error: ' + error.message;
    }
}

async function fetchUrlContent(url) {
    const response = await fetch(url);
    const data = await response.text();
    return data;
}

async function getChatGPTSummary(content) {
    const apiKey = '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';
    const apiEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    const prompt = `Summarize the following content:\n\n${content}\n\nSummary:`;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            'prompt': prompt,
            'max_tokens': 100,
            'n': 1,
            'stop': null,
            'temperature': 0.7,
        }),
    };

    const response = await fetch(apiEndpoint, requestOptions);
    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
        return data.choices[0].text.trim();
    } else {
        throw new Error('Unable to generate summary');
    }
}
