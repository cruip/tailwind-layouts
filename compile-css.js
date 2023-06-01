const glob = require('glob');
const path = require('path');
const { execSync } = require('child_process');

const inputFiles = glob.sync('./css/*.css');
const watch = process.argv.includes('--watch') ? '--watch' : '';

inputFiles.forEach(inputFile => {
  const outputFile = path.join('./', path.basename(inputFile));
  const cmd = `npx tailwindcss -i ${inputFile} -o ${outputFile} ${watch}`;
  execSync(cmd, { stdio: 'inherit' });
});
