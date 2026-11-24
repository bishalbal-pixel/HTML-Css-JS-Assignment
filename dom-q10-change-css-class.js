// DOM Q10: Apply styles to the heading and paragraph

function applyStyling() {
  let heading = document.getElementById("heading");
  let paragraph = document.getElementById("info");

  // Method 1: using the style property
  heading.style.color = "blue";
  paragraph.style.backgroundColor = "lightgray";
  paragraph.style.fontSize = "20px";
  paragraph.style.fontWeight = "bold";

  // Method 2 (alternative): adding CSS classes defined in style.css
  heading.classList.add("blue-text");
  paragraph.classList.add("styled-paragraph");
}
