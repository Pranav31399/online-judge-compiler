const express = require('express');
const app = express();
const { generateFile } = require('./generateFile');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

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
        return res.send(filePath);
    } catch (error) {
        return res.status(500).json({ sucess: false, error: error.message });
    }
    return res.json({ language, code })

});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});
