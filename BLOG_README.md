# Blog System Documentation

## Overview

This project uses a file-based content management system for blog posts. Blog articles are written in Markdown format with YAML frontmatter for metadata.

## Directory Structure

```
content/
  blog/
    ├── tree-care-guide.md
    ├── baumschnitt-winter.md
    ├── sturmsichere-baeume.md
    └── ... (more articles)
```

## Adding a New Blog Post

### 1. Create a New Markdown File

Create a new `.md` file in the `content/blog/` directory with a descriptive filename (this becomes the URL slug):

```bash
touch content/blog/my-new-article.md
```

### 2. Add Frontmatter Metadata

Start your file with YAML frontmatter containing the article metadata:

```yaml
---
title: "Your Article Title"
excerpt: "A brief description of the article that appears in previews"
date: "2024-01-15"
author: "Der Baumchirurg Team"
category: "Tree Care" # Available: Tree Care, Baumpflege, Sicherheit, Baumgesundheit, etc.
slug: "my-new-article" # Should match filename without .md
image: "/images/blog/my-article-image.webp"
readTime: "5 min"
keywords: "tree care, pruning, berlin" # For SEO
featured: false # Set to true for featured articles
---
```

### 3. Write Your Content

Below the frontmatter, write your article content in Markdown:

```markdown
Your article introduction goes here.

## Main Heading

Your content with **bold text**, _italic text_, and [links](https://example.com).

### Subheading

- Bullet point 1
- Bullet point 2
- Bullet point 3

> This is a blockquote for important information.

## Conclusion

Final thoughts and call to action.
```

## Available Categories

- **Tree Care** - General tree care guides (English)
- **Baumpflege** - Tree maintenance and care (German)
- **Sicherheit** - Safety-related topics
- **Baumgesundheit** - Tree health and diseases
- **Gartengestaltung** - Garden design
- **Baumfällung** - Tree removal

## Markdown Features Supported

- **Headings** (`#`, `##`, `###`, `####`)
- **Bold** (`**text**`) and _italic_ (`*text*`)
- **Lists** (ordered and unordered)
- **Links** (`[text](url)`)
- **Images** (`![alt](src)`)
- **Blockquotes** (`> text`)
- **Code** (`` `code` `` and `code blocks`)
- **Tables**
- **Horizontal rules** (`---`)

## File Naming Convention

- Use lowercase letters
- Use hyphens instead of spaces
- Keep it descriptive but concise
- Example: `tree-pruning-winter-guide.md`

## Images

Place images in `public/images/blog/` and reference them in frontmatter:

```yaml
image: "/images/blog/your-image.webp"
```

## Development Workflow

1. **Add new post** - Create `.md` file in `content/blog/`
2. **Preview locally** - Run `npm run dev` and visit `http://localhost:3000/blog`
3. **Test article** - Visit `http://localhost:3000/blog/your-slug`
4. **Deploy** - Push to repository (articles are statically generated)

## Example Article Template

```yaml
---
title: "Your Article Title Here"
excerpt: "Brief description for article previews and SEO"
date: "2024-01-15"
author: "Der Baumchirurg Team"
category: "Tree Care"
slug: "your-article-slug"
image: "/images/blog/article-image.webp"
readTime: "X min"
keywords: "keyword1, keyword2, keyword3"
featured: false
---

# Your Article Title

Introduction paragraph that hooks the reader and explains what they'll learn.

## Main Section 1

Content for your first main point.

### Subsection

More detailed information.

## Main Section 2

Continue with your article structure.

### Tips and Best Practices

- Tip 1
- Tip 2
- Tip 3

> **Pro Tip:** Important advice or warnings can be highlighted in blockquotes.

## Conclusion

Summarize key points and include a call to action.
```

## Notes

- Articles are automatically sorted by date (newest first)
- Related articles are automatically suggested based on category
- All markdown is converted to HTML at build time
- SEO metadata is automatically generated from frontmatter
- The system supports German umlauts and special characters
- Images should be optimized (WebP format recommended)

## Troubleshooting

### Article Not Showing

- Check filename has `.md` extension
- Verify frontmatter YAML syntax
- Ensure `slug` matches filename

### Styling Issues

- Use the `.prose` CSS class for proper markdown styling
- Check that frontmatter contains all required fields

### Build Errors

- Validate YAML frontmatter syntax
- Ensure all referenced images exist
- Check for special characters in filenames
