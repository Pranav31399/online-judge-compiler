const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World');
});

//language, code, custom input
app.post('/run', (req, res) => {
    const { language = 'cpp', code } = req.body;
    console.log(req.body);
    if (!code) {
        return res.status(400).json({
            sucess: false,
            error: 'Empty code body'
        });
    }
    try {

    } catch (error) {
        return res.status(500).json({ sucess: false, error: error.message });
    }
    return res.json({ language, code })

});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});
