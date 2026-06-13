const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk('C:\\Users\\Nesty\\OneDrive\\Documents\\GitHub\\HRIS-WEB\\app', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    const regex = /export\s+const\s+runtime\s*=\s*['"]edge['"];?\r?\n?/g;
    if (regex.test(content)) {
      content = content.replace(regex, '');
      fs.writeFileSync(filePath, content);
      console.log('Removed from', filePath);
    }
  }
});
