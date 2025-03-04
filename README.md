# Personal Portfolio & Blog

This is the source code for my personal portfolio and blog, built with **Jekyll** and hosted on **GitHub Pages**.

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

## 📝 Adding a New Blog Post

### 1. Create a New Markdown File in `_posts/`
Each blog post follows the naming convention:
```
_posts/YYYY-MM-DD-title.md
```
Example:
```bash
touch _posts/2025-03-03-my-new-blog-post.md
```

### 2. Add Front Matter
Inside the new Markdown file, include front matter at the top:
```yaml
---
layout: post
title: "My New Blog Post"
date: 2025-03-03
tags: [jekyll, blog]
---
```

### 3. Write Your Content
After the front matter, add your post content in Markdown.

Example:
```markdown
## This is My Blog Post

This is a paragraph of text about my blog post. I can include code snippets like this:

```ruby
def hello_world
  puts "Hello, world!"
end
```
```

### 4. Test Locally
Before pushing your changes, preview them:
```bash
bundle exec jekyll serve
```

### 5. Push to GitHub
Your blog post should be live on GitHub Pages shortly after.

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
