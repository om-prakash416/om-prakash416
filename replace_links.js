const fs = require('fs');

let content = fs.readFileSync('README.md', 'utf-8');

// Replace GitHub links
content = content.replace(/🔗 \*\*GitHub:\*\* (https:\/\/github\.com\/[^\s]+) */g, 
  '<a href="$1"><img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github"/></a>'
);

// Replace Live links
content = content.replace(/🌐 \*\*Live:\*\* (https:\/\/[^\s]+) */g, 
  '<a href="$1"><img src="https://img.shields.io/badge/Live-Demo-0e75b6?style=for-the-badge&logo=vercel"/></a>'
);

// Replace Live Space links
content = content.replace(/🌐 \*\*Live Space:\*\* (https:\/\/[^\s]+) */g, 
  '<a href="$1"><img src="https://img.shields.io/badge/Live-Space-0e75b6?style=for-the-badge&logo=huggingface"/></a>'
);

// Replace Production Website links
content = content.replace(/🌐 \*\*Production Website:\*\* (https:\/\/[^\s]+) */g, 
  '<a href="$1"><img src="https://img.shields.io/badge/Live-Production-2ea44f?style=for-the-badge"/></a>'
);

fs.writeFileSync('README.md', content, 'utf-8');
console.log('Done!');
