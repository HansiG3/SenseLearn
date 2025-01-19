const fs = require('fs');
const path = require('path');

const projectStructure = {
  'SenseLearn': {
    'client': {},
    'server': {},
    'ml': {},
    'docker-compose.yml': '',
    '.env': '',
    '.gitignore': '',
  }
};

function createDirectoryStructure(structure, currentPath = '.') {
  Object.entries(structure).forEach(([key, value]) => {
    const newPath = path.join(currentPath, key);
    if (typeof value === 'object') {
      fs.mkdirSync(newPath, { recursive: true });
      createDirectoryStructure(value, newPath);
    } else {
      fs.writeFileSync(newPath, value);
    }
  });
}

createDirectoryStructure(projectStructure);
console.log('Project structure created successfully!');