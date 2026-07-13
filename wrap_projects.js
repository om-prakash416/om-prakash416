const fs = require('fs');

let content = fs.readFileSync('README.md', 'utf-8');

const splitToken1 = "### 🌦️ Weather-Based Outfit Suggestion Application";
const splitToken2 = "\n---\n\n## 🎨 UI/UX Portfolio";

let startIndex = content.indexOf(splitToken1);
let endIndex = content.indexOf(splitToken2, startIndex);

if(startIndex !== -1 && endIndex !== -1) {
    let before = content.substring(0, startIndex);
    let middle = content.substring(startIndex, endIndex);
    let after = content.substring(endIndex);
    
    let newMiddle = `<details>\n<summary><strong> 📂 Click to View More Projects </strong></summary>\n\n` + middle.trim() + `\n\n</details>\n`;
    
    fs.writeFileSync('README.md', before + newMiddle + after, 'utf-8');
    console.log("Success");
} else {
    console.log("Failed to find tokens");
}
