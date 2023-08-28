// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// 5s pop-up start
    // Function to display the pop-up after 5 seconds
    function showPopup() {
      document.getElementById('popup').classList.add('active');
    }

    // Function to close the pop-up
    function closePopup() {
      document.getElementById('popup').classList.remove('active');
    }

    // Call the showPopup function after 5 seconds
    setTimeout(showPopup, 5000); // 5000 milliseconds (5 seconds)
// 5s pop-up bend

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}