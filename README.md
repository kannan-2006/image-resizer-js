# image-resizer-js
# 🖼️ Sizing an Image

This web app puts you in charge of how big or small an image appears. Change the width, see the results instantly—no page reloads, no fuss. It’s a quick demo of using JavaScript to handle numbers and update the page on the fly.

## ✨ Features

* **Easy Scaling:** Click "+" or "–" to bump the image width up or down by 5 pixels.
* **Built-in Limits:** The image never shrinks below 100px or grows past 300px.
* **Instant Feedback:** If you hit the edge, you’ll see a warning—like “Too big” or “Can’t visible”—right away.
* **Live Size Display:** Watch the current width update in real time so you always know the exact size.

## 🛠️ Tech Stack

* **HTML5:** Uses Bootstrap’s grid for a neat, side-by-side layout on desktops.
* **CSS3:** Custom button styles, drop shadows, and tidy typography.
* **Bootstrap 4:** Handles the flexible layout and text alignment.
* **Vanilla JavaScript:** Tracks the width and updates the image style directly.

## 🚀 How It Works

There are two main functions behind the scenes:

1. **increment()**
* Adds 5 pixels to the current width.
* If you try to go above 300px, it caps it at 300 and flashes a “Too big” warning.

2. **decrement()**
* Takes away 5 pixels from the width.
* If you dip below 100px, it sticks at 100 and shows a “Can’t visible” message.

