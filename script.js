import API_KEY from './api_key.js';

document.getElementById('generateButton').addEventListener('click', async function () {
    let companyDetails = document.getElementById('companyDetails').value;
    let jobDescription = document.getElementById('jobDescription').value;
    let jobPosition = document.getElementById('jobPosition').value;

    // WARNING: Do not use this method in production, as your API key will be exposed
    let response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
            prompt: `Generate content for landing page with the following inputs:\n\nCompany details: ${companyDetails}\nJob description: ${jobDescription}\nJob position: ${jobPosition}\n\nOutput:\n\nJob title: \nMain tasks: \nCatchy headline: \nJob benefits: \nSalary range: \nAbout the company: `,
            max_tokens: 200,
            n: 1,
            stop: null,
            temperature: 0.8,
        }),
    });

    let data = await response.json();
    let output = data.choices[0].text.trim();

    document.getElementById('output').innerHTML = output;
});
