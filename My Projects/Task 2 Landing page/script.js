// reload the page

window.onload = function () {
  document.getElementById("reload").onclick = function () {
    location.reload();
    document.getElementsByClassName(".main")[0].style.transform = "translateX(150)";
  };
};

//scroll view all products

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Toggle Navbar on Menu Click
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.add('active');
    closeIcon.classList.add('active');
    navLinks.style.right = "0";

    closeIcon.style.display = "block";
    menuIcon.style.display = "none";

    console.log("menuIcon")
});

closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navLinks.style.right = "-100%";

    menuIcon.style.display = "block";
    closeIcon.style.display = "none";

    console.log("closeIcon")
});

