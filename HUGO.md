Hugo conversion notes
=====================

Preview locally with Hugo (install Hugo first):

```bash
hugo server -D
```

Build the static site:

```bash
hugo
```

Notes:
- `config.toml` was added; update `baseURL` before publishing.
- Data from Jekyll `_data/` was copied to `data/` and is available as `.Site.Data` in templates.
- The homepage template is `layouts/index.html` and uses `.Site.Data` for content rendering.
