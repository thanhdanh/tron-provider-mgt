/* eslint-disable no-undef */
import express from 'express';

const app = express();

app.use(express.json());


// In-memory storage for the best Tron provider
let bestTronProvider = '';

app.get('/api/v1/best-tron-provider', (req, res) => {
    res.json({ bestProvider: bestTronProvider || 'No provider set' });
});
app.post('/api/v1/best-tron-provider', (req, res) => {
    const { providerName } = req.body;

    if (!providerName) {
        return res.status(400).json({ error: 'Provider name is required' });
    }

    bestTronProvider = providerName;
    res.json({ message: 'Best Tron provider updated successfully', bestProvider: bestTronProvider });
});

const PORT = process.env.PORT || 3000;
let server;

function startServer() {
    server = app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

function stopServer() {
    if (server) {
        console.log('Stopping server...');
        server.close(() => {
            console.log('Server stopped gracefully.');
            process.exit(0);
        });
    }
}

// Handle termination signals for graceful stop
process.on('SIGINT', () => {
    console.log('SIGINT received (Ctrl+C).');
    stopServer();
});

process.on('SIGTERM', () => {
    console.log('SIGTERM received.');
    stopServer();
});

startServer();

export default app;