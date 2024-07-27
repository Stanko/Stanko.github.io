const fs = require('fs');

const dir = fs.readdirSync('./_posts');

function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}


dir.forEach(file => {
  const filePath = `./_posts/${ file }`;
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8'} );


  const redirectFromString = 'redirect_from:';

  if (fileContent.search(redirectFromString) === -1) {
    const position = getPosition(fileContent, '---', 2);

    const before = fileContent.substr(0, position);
    const after = fileContent.substr(position);

    const oldUrl = file.substr(11).replace('.md', '')


    const newContent =
      before +
      `redirect_from: "/${ oldUrl }"\n` +
      after;

    console.log('Added redirect for: ' + filePath);
    fs.writeFileSync(filePath, newContent, { encoding: 'utf8' })
  }
});
