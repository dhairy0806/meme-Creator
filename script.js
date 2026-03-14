// Fetch from API (replace with your key)
async function getCaption(topic) {
    const res = await fetch(`https://api.x.ai/v1/chat/completions`, {
        method: 'POST',
        headers: { 'Authorization': 'Bearer YOUR_API_KEY', 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: 'grok-beta',
            messages: [{ role: 'user', content: `Generate funny top/bottom meme text for topic: ${topic}` }]
        })
    });
    const data = await res.json();
    return data.choices[0].message.content.split('\n'); // Parse top/bottom
}
