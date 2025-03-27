export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    if (!response.ok) throw new Error(`Gemini API request failed: ${response.status}`);
    const result = await response.json();
    const analysis = result.candidates?.[0]?.content?.parts?.[0]?.text || 'Analysis unavailable';
    console.log('Gemini analysis:', analysis);
    res.status(200).json({ analysis });
  } catch (error) {
    console.error('Error in getGeminiAnalysis:', error);
    res.status(500).json({ error: 'Failed to get analysis' });
  }
}
