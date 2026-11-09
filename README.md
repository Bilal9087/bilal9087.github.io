# UtilityNest v1.0

A lightweight, responsive multi-tool website built with HTML, CSS and vanilla JavaScript. Image processing, text utilities and calculations happen in the visitor's browser. QR generation uses the free QRCode.js library from a CDN.

## Project structure

```text
UtilityNest/
├── index.html
├── privacy.html
├── terms.html
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/style.css
    └── js/
        ├── app.js
        └── tools.js
```

## Run locally

You can open `index.html` directly in a modern browser. For a local web server, open the folder in VS Code, install the free Live Server extension, then right click `index.html` and choose **Open with Live Server**.

## Included tools

1. Image Compressor — exports a compressed image using browser Canvas.
2. JPG to PNG — converts a selected image to PNG.
3. PNG to JPG — converts a selected image to JPG.
4. Image Resizer — resizes an image with optional aspect ratio preservation.
5. Word Counter — counts words, characters, characters without spaces and sentences.
6. Character Counter — displays the same live text statistics.
7. Case Converter — uppercase, lowercase, title and sentence case.
8. Percentage Calculator — calculates a percentage of a number.
9. Age Calculator — calculates years, months and days from a birth date.
10. QR Code Generator — creates a QR code from text or a URL.

## Before publishing

- Replace every `utilitynest.example` URL with the real domain in `index.html`, `robots.txt` and `sitemap.xml`.
- Replace `hello@utilitynest.example` in the policy pages with a monitored contact address.
- Review the privacy and terms pages against your actual hosting, analytics, advertising and applicable legal requirements. They are starter text, not legal advice.
- The QR code library and Google Fonts are loaded from external CDNs. QR generation requires an internet connection. Consider self-hosting these assets if desired.
- This first release uses a single homepage with tools in dialogs. Add dedicated tool pages and their URLs to the sitemap before pursuing search traffic at scale.

## Free static hosting

This project can be deployed as a static site to GitHub Pages or Cloudflare Pages. Upload the contents of this folder to a repository and connect that repository to your hosting provider. No build step is required.
