const express = require('express');
const app = express();
const { generateFile } = require('./generateFile');
const { executeCpp } = require('./executeCpp');
const cors = require('cors');

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

//language, code, custom input
app.post('/run', async (req, res) => {
    const { language = 'cpp', code } = req.body;
    if (!code) {
        return res.status(400).json({
            sucess: false,
            error: 'Empty code body'
        });
    }
    try {
        const filePath = await generateFile(language, code);
        const output = await executeCpp(filePath);
        return res.send({ filePath, output });
    } catch (error) {
        return res.status(500).json({ sucess: false, error: error.stderr });
    }
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});
