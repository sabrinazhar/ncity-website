# NCiTy – Interactive Multi-Page Fan Website

- An interactive, multi-page website built with HTML, CSS, and JavaScript as part of a web development coursework.  
- The site showcases NCT and its sub-units (NCT U, NCT 127, NCT Dream, WayV) with dedicated pages, imagery, discography, and interactive features.

---

## Features

- 🎵 **Multi-page layout**
  - `home.html` – Landing page with group intro, members, discography, and bias poll
  - `nct127.html` – NCT 127 page with distance calculator
  - `nctdream.html` – NCT Dream page
  - `nctu.html` – NCT U page
  - `wayv.html` – WayV page

- 📊 **NCT Bias Poll (Home Page)**
  - Users can select their favourite members using checkboxes.
  - Votes are counted and stored in the browser using **localStorage**.
  - Results are shown dynamically on the page and **persist across page reloads / sessions**.

- 🌍 **Distance to NCT 127 (NCT 127 Page)**
  - Uses the **Geolocation API** to get the user’s current location (with permission).
  - Calculates the distance to Seoul, South Korea, using the **Haversine formula**.
  - Displays a message: _“You are X kilometers away from NCT 127!”_

- 🎨 **Styling & Layout**
  - Page-specific CSS files (`home.css`, `nct127.css`, etc.) for custom themes.
  - Google Fonts for consistent typography.
  - Tables, figures, and galleries for members and discography.

- 📱 **Front-End Focus**
  - Entirely **client-side** (no backend, no database).
  - Demonstrates how to build interactive experiences using only HTML, CSS, and JavaScript.

---

## Tools & Technologies

- **Languages:** HTML5, CSS3, JavaScript (ES6)
- **Web APIs:** DOM API, Web Storage API (`localStorage`), Geolocation API
- **Styling & Layout:** Custom CSS, basic responsive design, Google Fonts
- **Development:** Browser DevTools (Chrome/Edge), static site hosting / local server

---

## Project Structure

```text
code/
├── home.html
├── home.css
├── home.js
├── nct127.html
├── nct127.css
├── nct127.js
├── nctdream.html
├── nctdream.css
├── nctu.html
├── nctu.css
├── wayv.html
├── wayv.css
└── [image assets: .jpg, .png, .webp]
````

* `home.js` – Handles the NCT Bias Poll (vote counting, localStorage, displaying results).
* `nct127.js` – Handles geolocation and distance calculation to Seoul.

---

## How to Run the Project

This is a **static website**, but because it uses the **Geolocation API** and `localStorage`, it’s best to run it from a local server rather than directly opening the files.

### Option 1 – Simple local server with Python (recommended)

1. Make sure you have **Python 3** installed.

2. Open a terminal / command prompt in the project directory (where `home.html` is).

   ```bash
   # Python 3
   python -m http.server 8000
   ```

3. Open your browser and go to:

   ```text
   http://localhost:8000/home.html
   ```

4. Use the navigation menu to visit:

   * `NCT U`, `NCT 127`, `NCT DREAM`, `WAYV` pages
   * Try the **NCT Bias Poll** (home page) and **distance calculator** (NCT 127 page).

5. If prompted by the browser, **allow location access** so the NCT 127 distance feature can work.

To stop the server, return to the terminal and press `Ctrl + C`.

---

### Option 2 – Open `home.html` directly (limited)

You can also double-click `home.html` to open it in a browser, but:

* Some browsers may **block Geolocation** for `file://` URLs.
* The bias poll and `localStorage` should still work, but the distance feature may not.
