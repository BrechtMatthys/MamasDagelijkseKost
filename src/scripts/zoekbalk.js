// Zoekbalk
function myFunction() {
  // Declare variables
  const input = document.getElementById('myInput');
  const filter = input.value.toUpperCase();
  const ul = document.getElementById("inhoudstafel");
  const li = ul.getElementsByTagName('a');

  // Loop through all list items and hide those who don't match the search query
  Array.from(li).forEach((element, index) => {
    const txtValue = element.textContent || element.innerText;
    const parentElement = element.parentElement;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      parentElement.style.display = "";
    } else {
      parentElement.style.display = "none";
    }
  });
}

// control f
$(document).ready(function() {
  window.addEventListener("keydown", function(e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
      const myInput = document.getElementById('myInput');
      if (!myInput.matches(":focus")) {
        e.preventDefault();
        myInput.focus();
      }
    }
  });
});