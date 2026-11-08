# Static Project Structure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure M&T into a conventional multi-page static site with root `index.html`, secondary pages in `pages/`, and centralized CSS, JavaScript, images, and data.

**Architecture:** Keep `index.html` as the root entry point. Move the other four HTML documents under `pages/`; collect stylesheets and scripts in `assets/css/` and `assets/js/`, and group page imagery under `assets/images/<page>/`. Preserve the existing no-build static workflow and update every local reference affected by the moves.

**Tech Stack:** HTML5, CSS3, browser JavaScript, static file hosting; no package manager or build tooling.

**Spec:** [2026-11-08-static-project-structure-design.md](../specs/2026-11-08-static-project-structure-design.md)

## Global Constraints

- The site must remain runnable as static files without a build process.
- Do not change page appearance, content, or behavior.
- Do not introduce a framework, bundler, required server, or new dependency.
- Do not commit the changes.

## Review Focus

- **Nested page routes:** each page and its navigation links resolve correctly from `pages/`; verify by visiting all four page URLs and following navigation.
- **Root entry paths:** `index.html` continues loading its CSS, JavaScript, images, and page links; verify the home route in the browser.
- **CSS image paths:** `url(...)` resources resolve from the new stylesheet location, including paths containing spaces; inspect browser requests on every page.
- **Case-sensitive paths:** renamed/grouped paths use exact on-disk capitalization; verify no failed local requests on a case-sensitive-compatible path audit.
- **SVG schema reference:** the moved Subscribe SVG points to the moved schema; open/validate the XML asset reference after relocation.

---

### Task 1: Move Secondary Pages and Assets

**Files:**
- Move: `About/about.html`, `Clothes/clothes.html`, `Locations/locations.html`, `Subscribe/subscribe.html` to `pages/` with lowercase filenames.
- Move: page stylesheets and scripts to `assets/css/` and `assets/js/`.
- Move: each page's existing `img/` tree to `assets/images/<page>/`, preserving its internal folders and filenames.
- Move: `Subscribe/xml` and `Subscribe/xml.xsd` to `data/subscribe/subscribe.svg` and `data/subscribe/subscribe.xsd`.
- Modify: `index.html` navigation paths to the new page URLs.
- Modify: moved HTML, CSS, JS, and SVG references affected by the new locations.

**Interfaces:**
- Consumes: the approved target structure in the design doc.
- Produces: working routes `/pages/about.html`, `/pages/clothes.html`, `/pages/locations.html`, `/pages/subscribe.html` with local page assets under `assets/`.

- [ ] **Step 1: Move the four HTML files, their stylesheets/scripts, image trees, and Subscribe data to the exact destinations above.** Preserve image subfolder names and page asset filenames.
- [ ] **Step 2: Update local references in the moved documents and stylesheets.** Update page navigation to the new routes, resource paths to `../assets/...`, CSS image URLs to `../images/<page>/...`, and the SVG schema reference to `subscribe.xsd`.
- [ ] **Step 3: Update the root navigation links in `index.html` to the new page URLs.** Leave its current home stylesheet and script references unchanged for this task.
- [ ] **Step 4: Run a browser smoke test for all four new page URLs.** Start a local static server with `python -m http.server 8000`; verify each page loads and its local image, stylesheet, and script requests succeed, including CSS URLs containing spaces.

### Task 2: Move Home Assets

**Files:**
- Move: `home.css` to `assets/css/home.css`.
- Move: `home.js` to `assets/js/home.js`.
- Move: `Home/img/` to `assets/images/home/`, preserving the existing subfolder structure and filenames.
- Modify: `index.html` and `assets/css/home.css` local references.

**Interfaces:**
- Consumes: page URLs and `assets/images/<page>/` layout from Task 1.
- Produces: a fully working root home page using the centralized asset structure.

- [ ] **Step 1: Move the home stylesheet, script, and image tree to the exact destinations above.**
- [ ] **Step 2: Update home stylesheet/script references and all home image paths in `index.html` and `assets/css/home.css`.** Use `assets/...` paths from `index.html` and `../images/home/...` paths from `assets/css/home.css`.
- [ ] **Step 3: Open `/` in the browser and verify the home page's local image, stylesheet, and script requests succeed.**

### Task 3: Document and Verify the Final Structure

**Files:**
- Modify: `README.md`.
- Verify: all HTML, CSS, JavaScript, image, and data paths across the site.

**Interfaces:**
- Consumes: final layout from Tasks 1 and 2.
- Produces: README instructions consistent with the final paths and a smoke-tested static site.

- [ ] **Step 1: Update `README.md` with the directory layout, page URLs, and static usage instructions.** Make no claims that a build step or backend exists.
- [ ] **Step 2: Visit `/`, `/pages/about.html`, `/pages/clothes.html`, `/pages/locations.html`, and `/pages/subscribe.html` in the browser.** Verify navigation works and no local resources return 404.
- [ ] **Step 3: Run `git diff --check` and inspect the final diff.** Confirm there are no stale references to the old `Home/`, `About/`, `Clothes/`, `Locations/`, or `Subscribe/` asset paths, and no unrelated content changes.

---

## Self-Review

- Spec coverage: page moves, centralized assets/data, updated local paths, README, and static workflow are covered by Tasks 1-3.
- Path failure modes: nested routes, root routes, CSS-relative images with spaces, capitalization, and SVG schema reference are called out in Review Focus and tested during the corresponding tasks.
- Proportion: three migration stages align with the distinct route groups and allow each stage to be smoke-tested before continuing.
