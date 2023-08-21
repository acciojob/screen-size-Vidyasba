//your JS code here. If required.
function updateSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const sizeInfoElement = document.querySelector('#sizeInfo h1');
  sizeInfoElement.textContent = `Width: ${width} and Height: ${height}`;
}

// Initial call to set the initial size
updateSize();

// Add a resize event listener to update the size on window resize
window.addEventListener('resize', updateSize);