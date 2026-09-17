# dnh35.github.io

Personal portfolio site for Duy Nguyen — research in generative time-series modeling and
quantitative signal research.

Static site, no build step. `index.html` + `style.css` + `main.js`, served by GitHub Pages
from the `main` branch root.

## Local preview

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Editing

- Content lives in `index.html`.
- Colors/typography are CSS custom properties at the top of `style.css` (light + dark).
- `duy-nguyen-resume.pdf` is the downloadable resume; replace the file to update it.
