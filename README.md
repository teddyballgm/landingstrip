# landingstrip

Personal homepage for [tefleming.com](https://tefleming.com). Plain HTML/CSS with a
few lines of JS — no build step, no dependencies. Open `index.html` in a browser or
serve the directory with any static host.

## Adding a nav link

Add one line to the `NAV_LINKS` array in `nav.js`:

```js
{ label: "Writing", href: "https://writing.tefleming.com" },
```

The nav is a flex row that wraps, so new links work on mobile without any extra CSS.

## Files

- `index.html` — page markup
- `style.css` — styling (light/dark, responsive)
- `nav.js` — nav links array + renderer, footer year
