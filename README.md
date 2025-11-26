# NCiTy – Responsive Multi-Page K-Pop Fan Website

- A static, multi-page website built with HTML and CSS as part of a web development coursework.  
- The site showcases different NCT units (NCT 127, NCT Dream, NCT U, WayV) with dedicated pages, images, and themed styling.

---

## Features

- 🎵 **Multi-page layout**:
  - `home.html` – Landing page for NCiTy
  - `nct127.html` – NCT 127 member & content page
  - `nctdream.html` – NCT Dream member & content page
  - `nctu.html` – NCT U content page
  - `wayv.html` – WayV member & content page
- 🎨 **Custom styling with CSS** for layout, typography, colours, and hover effects
- 📱 **Responsive design basics** using flexible containers and viewport meta tags
- 🖼️ **Rich imagery** with multiple artist photos and album covers
- 🧭 **Navigation bar & internal links** for smooth movement between pages
- 🧾 Built with a focus on **clean structure**, **readability**, and **design consistency**

---

## Tools & Technologies

- **Languages:** HTML5, CSS3  
- **Design & Layout:** Flexbox, basic responsive design principles  
- **Fonts:** Google Fonts (`Fjalla One`, etc.)  
- **Other:** Browser DevTools for testing & debugging

---

## Project Structure

```text
ncity-website/
├── home.html
├── nct127.html
├── nctdream.html
├── nctu.html
├── wayv.html
├── home.css
├── nct127.css
├── nctdream.css
├── nctu.css
├── wayv.css
└── [image assets: .jpg, .png, .webp]
````

Each HTML file is paired with its own CSS file to style that specific page.

---

## How to Run the Project

This is a **static website**, so no backend or database is required.

### Option 1 – Open directly in your browser (simplest)

1. Download or clone the project folder to your machine.
2. Open the folder.
3. Double-click **`home.html`** to open it in your browser.
4. Use the navigation bar on the page to move between sections (NCT 127, NCT Dream, NCT U, WayV).

> Recommended browsers: Chrome, Edge, Firefox, or Safari.

---

### Option 2 – Run with a simple local server (Python)

If you want to run it via a local HTTP server (useful for future enhancements):

1. Open a terminal / command prompt in the project directory (where the HTML files are).

2. If you have **Python 3**, run:

   ```bash
   # Python 3
   python -m http.server 8000
   ```

3. Open your browser and go to:

   ```text
   http://localhost:8000/home.html
   ```

4. Navigate the site using the links in the navbar.

To stop the server, go back to the terminal and press `Ctrl + C`.
