---
title: Your blog post title
date: '2000-12-31'
draft: true
summary: Tweet size summary (~250 char)
Repository: provide link to your public repo you are blogging about.
Reviewer: Suggest one or more reviewers for your post. Their names will be linked to their profiles and will be publicly visible on the blog.
License: MIT or similar permissive license.
tags:
  - up
  - to
  - five
  - different
  - tags
image: top-post-image-name (include images in a `assets.zip` file or provide link to te public location)
image-folder-link: Provide a valid URL if you are not using a ZIP file.
authors: John Dow (names will link to the respective profile pages which can contain all the personal and community links), Johny Dowie
---

## Important
1. Reader needs to be able to run the codes in your linked repo. If the installation and setup is simple, include it in section [Installation](#Installation).
2. Prefer Markdown over `HTML` unless functionality requires it.
3. Use permissive license.
4. There is no limit for length.
5. Consider linking to other relevant AHI blog posts for help discoverability.

## Installation (this section needs to appear in the post)
1. This section should contain complete repository setup instructions.
2. If the setup is complex, you may link directly to the installation instructions in your repository’s `README.md`.
2. Statements like `install Node.js` are not sufficient. Provide installation links and clarify issues related to virtual environments and similar.
3. Repo should run on Windows and Linux at least. Otherwise provide explanation why one or the other is strongly recommended.

## Markdown
Lorem _Ipsum_ is simply *dummy* text of the **printing** and ***typesetting*** `industry`. ~Strike-out~ test is not universally supported.

other basic markup features can be found [here](https://www.markdownguide.org/basic-syntax/)

### Subsection-Links
- If you have few non-repetitive links, we recommend using inline [links](https://broken_link.com).
- In case of more references, consider defining them at the bottom of your post which can link to [anywhere]
- If you want to open link in new tab, the only way is to use `html` like <a href="https://tailwindcss.com" target="_blank">this</a>

1. 🚒 emojis [allowed](https://gist.github.com/rxaviers/7360908#file-gistfile1-md) in .md

### Subsection-Code
Always use triple backticks (```) to enclose code, even for one-liners. Use single backticks (\`) are used for `variables`, `package names`, etc.

You can define language markup by adding the language after ```

```bash
echo $PATH
import numpy
```
VS
```python
echo $PATH
import numpy
```


## Definition of links fo not show up, no worries

[anywhere]: https://github.com/palec87/ahi-blog