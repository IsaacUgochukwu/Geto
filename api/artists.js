export default async function handler(req, res) {
    
    try {
        const apiKey = process.env.API_KEY;
        const { name } = req.query;
        // Fetch data
        const response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + name + "&api_key=" + apiKey + "&format=json");
        const data = await response.json();
        // Send data to frontend
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}