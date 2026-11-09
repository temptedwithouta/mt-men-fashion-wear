# M&T Men Fashion Wear

A static multi-page website showcasing men's fashion collections, brand information, store locations, and a subscription form.

## Overview

The site is built with HTML, CSS, and vanilla JavaScript. It has no package manager, installation, or build step.

## Pages and Features

- **Home** (`index.html`): collection highlights, product previews, and image sliders.
- **Clothes** (`pages/clothes.html`): tops and bottoms categories with product details.
- **About Us** (`pages/about.html`): brand story, history, vision, and team.
- **Locations** (`pages/locations.html`): store details with maps and photos.
- **Subscribe** (`pages/subscribe.html`): a subscription form with client-side validation.

## Technology

- HTML5, CSS3, and vanilla JavaScript (ES6)
- Google Fonts and Font Awesome for typography and icons
- Google Maps embeds for store locations

An internet connection is needed to load these external services.

## Project Structure

```text
.
|-- index.html
|-- pages/
|   |-- about.html
|   |-- clothes.html
|   |-- locations.html
|   `-- subscribe.html
|-- assets/
|   |-- css/
|   |   |-- about.css
|   |   |-- clothes.css
|   |   |-- home.css
|   |   |-- locations.css
|   |   |-- singleproduct.css
|   |   `-- subscribe.css
|   |-- js/
|   |   |-- about.js
|   |   |-- clothes.js
|   |   |-- home.js
|   |   |-- locations.js
|   |   `-- subscribe.js
|   `-- images/ (about/, clothes/, home/, locations/, preview/, subscribe/)
`-- data/
    `-- subscribe/
        |-- subscribe.svg
        `-- subscribe.xsd
```

## Run Locally

Open `index.html` in a browser. Alternatively, start a static server from the project root:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`. No build step is required.

## Screenshots

| Page | Preview |
| --- | --- |
| Home | ![Home page](assets/images/preview/home.png) |
| Clothes | ![Clothes page](assets/images/preview/clothes.png) |
| About Us | ![About Us page](assets/images/preview/about.png) |
| Locations | ![Locations page](assets/images/preview/locations.png) |
| Subscribe | ![Subscribe page](assets/images/preview/subscribe.png) |

## Limitations

Search, registration, and cart actions are not connected to a backend. The subscription form performs client-side validation only; it does not send or store submissions.

