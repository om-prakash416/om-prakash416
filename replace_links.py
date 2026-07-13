import re

with open('README.md', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(
    r'🔗\s*\*\*GitHub:\*\*\s*(https://github\.com/[^\s]+)',
    r'<a href="\1"><img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github"/></a>',
    content
)

content = re.sub(
    r'🌐\s*\*\*Live:\*\*\s*(https://[^\s]+)',
    r'<a href="\1"><img src="https://img.shields.io/badge/Live-Demo-0e75b6?style=for-the-badge&logo=vercel"/></a>',
    content
)

content = re.sub(
    r'🌐\s*\*\*Live Space:\*\*\s*(https://[^\s]+)',
    r'<a href="\1"><img src="https://img.shields.io/badge/Live-Demo-0e75b6?style=for-the-badge&logo=huggingface"/></a>',
    content
)

content = re.sub(
    r'🌐\s*\*\*Production Website:\*\*\s*(https://[^\s]+)',
    r'<a href="\1"><img src="https://img.shields.io/badge/Live-Production-2ea44f?style=for-the-badge"/></a>',
    content
)

with open('README.md', 'w', encoding='utf-8') as f:
    f.write(content)

print('Replacement done.')
