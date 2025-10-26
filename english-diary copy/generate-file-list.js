const fs = require('fs');
const path = require('path');

function getAllJsonFiles(dir, fileList = [], baseDir = dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            getAllJsonFiles(filePath, fileList, baseDir);
        } else if (file.endsWith('.json')) {
            const relativePath = path.relative(baseDir, filePath).replace(/\\/g, '/');
            fileList.push(relativePath);
        }
    });

    return fileList;
}

const dataDir = path.join(__dirname, 'data');
const jsonFiles = getAllJsonFiles(dataDir);

// files.js 파일 생성
const output = `// 자동 생성된 파일 - generate-file-list.js로 재생성하세요
const jsonFiles = ${JSON.stringify(jsonFiles, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'files.js'), output);

console.log(`✓ ${jsonFiles.length}개의 JSON 파일을 찾았습니다.`);
console.log('✓ files.js 파일이 생성되었습니다.');
