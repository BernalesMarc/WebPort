  
/* */


// Disable right-click context menu
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  // Disable specific keyboard shortcuts
  document.onkeydown = function (e) {
    // Disable F12 (Inspect Element)
    if (e.keyCode == 123) {
      return false;
    }
    // Disable Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
      return false;
    }
    // Disable Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
      return false;
    }
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode == 85) {
      return false;
    }
  };

  // Disable text selection
  document.addEventListener("selectstart", function (e) {
    e.preventDefault();
  });

  // Disable copy action (Ctrl+C)
  document.addEventListener("copy", function (e) {
    e.preventDefault();
  });

  // Disable text highlighting with CSS
  document.body.style.userSelect = "none";
  document.body.style.webkitUserSelect = "none";
  document.body.style.mozUserSelect = "none";
  document.body.style.msUserSelect = "none";
   