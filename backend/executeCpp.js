const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// const outputPath = path.join(__dirname, 'outputs');

// if (!fs.existsSync(outputPath)) {
//     fs.mkdirSync(outputPath, { recursive: true });
// }

const executeCpp = async (filePath, inputFilePath) => {
    const jobId = path.basename(filePath).split('.')[0];
    const inputJobId = path.basename(inputFilePath).split('.')[0];
    // const outPath = path.join(outputPath, `${jobId}.exe`);
    return new Promise((resolve, reject) => {
        exec(`cd ./compile_code && g++ ${jobId}.cpp -o ${jobId}.exe && ${jobId}.exe < ${inputJobId}.txt`, (error, stdout, stderr) => {
            if (error) {
                reject({ error, stderr });
            }
            if (stderr) {
                reject(stderr);
            }
            resolve(stdout);
        });
    });
}

module.exports = {
    executeCpp
};