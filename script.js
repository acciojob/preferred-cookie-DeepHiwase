//your JS code here. If required.
// Helper function to get cookie value by name
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

// Apply saved preferences on page load
window.addEventListener("load", () => {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty(
      "--fontsize",
      savedFontSize + "px"
    );
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty(
      "--fontcolor",
      savedFontColor
    );
    document.getElementById("fontcolor").value = savedFontColor;
  }
});

// Handle form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  // Save cookies
  document.cookie = `fontsize=${fontSize}; path=/`;
  document.cookie = `fontcolor=${fontColor}; path=/`;

  // Apply styles immediately
  document.documentElement.style.setProperty(
    "--fontsize",
    fontSize + "px"
  );
  document.documentElement.style.setProperty(
    "--fontcolor",
    fontColor
  );
});
