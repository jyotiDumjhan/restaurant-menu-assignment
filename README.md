# Restaurant Menu & Greeting Assignment

This repository contains solutions for a two-part web assignment:

1. **Part A** – A responsive restaurant menu page using **only custom CSS**.  
2. **Part B** – The same menu page enhanced with **Bootstrap** for navigation and layout.  
3. **Question 2** – A simple JS program that loops through an array of names and prints “Hello” or “Goodbye” in 10 languages depending on whether a name starts with “JS”.

---
## 📁 Directory Structure

<pre> ```
   p1_solution/ 
      ├── partA/ 
         ├── index.html
         └── styles.css 
      ├── partB/
         ├── index.html
         └── styles.css 
      ├── partC_js/ 
         ├── index.html 
         ├── SpeakHello.js 
         ├── SpeakGoodBye.js 
         └── script.js
      ├── screenshot_solution/
         ├── Part A solution.png 
         ├── Part B Responsive.mp4 
         ├── Part B solution.png
         └── Question 2 solution.png
   ``` </pre>
---

## 🚀 Getting Started

### Part A (Custom CSS)

1. Open `partA/index.html` in your browser.  
2. Resize the window to see the layout adapt:
   - **Desktop (≥992px)**: 3 cards side-by-side  
   - **Tablet (768–991px)**: 2 on top row, 1 below  
   - **Mobile (<768px)**: stacked in one column  

### Part B (Bootstrap)

1. Open `partB/index.html` in your browser (or serve via Live Server).  
2. Verify:
   - A **scroll-away navbar** with “UC Foodmandu” on the left.  
   - **Desktop/tablet**: brand only, no toggle button.  
   - **Mobile**: ☰ toggle appears, dropping down a full-width menu linking to each section.  
   - Centered “Our Menu” heading, 700px-tall sections, and “Back to Top” buttons.

### Question 2 (JavaScript)

1. Open `partC_js/index.html`.  
2. Open your DevTools **Console** tab.  
3. You should see each name greeted or farewelled in 10 different languages:
   - Names starting with “JS” (case-insensitive) get **Goodbye** messages.  
   - All others get **Hello** messages.  

---

## 🛠️ Tech & Concepts

- **HTML5 & CSS3** (Grid, Flexbox, Media Queries)  
- **Bootstrap 3.4** for Part B  
- **JavaScript IIFEs** to encapsulate modules  
- **DOM Console Output** for greeting scripts
---

## 📋 Notes

- **No inline styles** anywhere.  
- All custom styling lives in `styles.css`; Bootstrap classes power the Part B layout.  
- The JS files (`SpeakHello.js`, `SpeakGoodBye.js`, `script.js`) demonstrate Immediately Invoked Function Expressions (IIFEs) and modular design.

---

## 📜 Assignment

Assignments of HTML and JAVASCRIPT 
