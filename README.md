
# Binit Datta Career Portfolio

A multi-page Bootstrap 5 professional career website with a light-blue executive visual system.

## Pages
- `index.html` — Home / executive positioning
- `career.html` — Career journey
- `business-verticals.html` — 18+ business domains
- `technology.html` — Technical portfolio
- `books.html` — Books and publishing
- `articles.html` — Selected LinkedIn writing
- `videos.html` — Secure AI Learning Lab / YouTube
- `contact.html` — Professional links

## Run locally
Open `index.html` directly, or from this folder run a simple web server:

    python3 -m http.server 8000

Then open http://localhost:8000

Bootstrap 5 and Bootstrap Icons are loaded via CDN.


## Profile photo
The landing-page headshot is stored at `assets/images/binit-datta-headshot.jpg` and is presented in the right side of the hero section.

## Architecture portfolio

`architecture.html` is a new top-level page and is linked from the navigation on every page. It contains:
- Bootstrap nav-pills for Featured Projects / Architecture Principles / 1995-Present Archive Map
- project cards with badges, accordions, alerts and external LinkedIn source links
- architecture-image placeholders with suggested filenames
- a business-vertical/project archive structure for future additions

Add architecture images under `assets/images/architecture/` and replace the relevant placeholder block in `architecture.html`.
