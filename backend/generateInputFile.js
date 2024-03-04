const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');

const dirInput = path.join(__dirname, 'compile_code');

if (!fs.existsSync(dirInput)) {
    fs.mkdirSync(dirInput, { recursive: true });
}

const generateInputFile = async (input) => {
    const jobId = uuid();
    const inputFilename = `${jobId}.txt`;
    const inputFilePath = path.join(dirInput, inputFilename);
    await fs.writeFileSync(inputFilePath, input);
    return inputFilePath;
}

module.exports = {
    generateInputFile
};