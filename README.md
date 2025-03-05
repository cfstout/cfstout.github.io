# Personal Portfolio & Blog

Personal portfolio website built with Jekyll and hosted on GitHub Pages. Visit the live site at [cfstout.github.io](https://cfstout.github.io).

## Features

- Responsive design with modern CSS techniques
- Dark/light mode toggle with preferences saved to localStorage
- Project showcase with detailed case studies
- Technical blog with category filtering
- Contact form using Formspree
- SEO optimized with proper metadata and sitemap

---

## 🚀 Running Locally

### 1. Install Dependencies
Ensure you have the necessary dependencies installed:

- **Ruby** 
- **Bundler** 

If you haven’t set these up:

```bash
brew install rbenv ruby-build # (For macOS users using Homebrew)
rbenv install 3.4.2
rbenv global 3.4.2

gem install bundler
```

### 2. Install Jekyll & Dependencies
```bash
bundle install
```

### 3. Serve the Site Locally
```bash
bundle exec jekyll serve
```

The site should now be available at **http://localhost:4000/**.

---

## Adding Content

### Adding a New Project

Create a new markdown file in the `_projects` directory:

```markdown
---
layout: project
title: Project Title
description: Brief project description
thumbnail: /assets/images/projects/thumbnail.jpg
featured_image: /assets/images/projects/featured.jpg
categories: [category]
technologies: [tech1, tech2, tech3]
github_url: https://github.com/username/project
demo_url: https://demo-url.com
year: 2025
---

Project content goes here...
```

### Adding a New Blog Post

Create a new markdown file in the `_posts` directory with the filename format `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Post Title"
date: 2025-02-15
categories: [Category1, Category2]
excerpt: Brief excerpt that appears in listings.
---

Post content goes here...
```

---

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

---

## 🛠 Site Structure

```
├── _includes/         # Common partials (header, footer, head)
│   ├── head.html
│   ├── header.html
│   ├── footer.html
├── _layouts/         # Page layouts (default, home, post, etc.)
│   ├── default.html
│   ├── home.html
│   ├── post.html
├── _posts/           # Blog posts (YYYY-MM-DD-title.md)
├── _config.yml       # Jekyll site configuration
├── Gemfile           # Dependencies for Jekyll
├── Gemfile.lock      # Dependency lockfile
├── index.md          # Homepage content
├── about.md          # About Me page
└── README.md         # This file
```

---

## 🔧 Additional Notes

### Updating Dependencies
To keep things up to date, run:
```bash
bundle update
```

### Cleaning the Build Cache
If things aren’t updating correctly, clean and rebuild:
```bash
bundle exec jekyll clean
bundle exec jekyll serve
```

### Deploying Changes
If using GitHub Pages, just push changes to the `main` branch, and GitHub will rebuild and deploy automatically.
```bash
git push origin main
```
