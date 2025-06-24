/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.getElementById("nav");
window.addEventListener("scroll", () => {
  console.log(header.className);

  window.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
});

// ============= active link ===============
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

function updateActiveLink() {
  const scrollPos = window.scrollY + 100; // Adjust for navbar height

  sections.forEach((section) => {
    const id = section.id;
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (scrollPos >= top && scrollPos < bottom) {
      links.forEach((link) => {
        const icon = link.querySelector("i");
        const span = link.querySelector("span");
        const match = link.getAttribute("href") === `#${id}`;
        icon.classList.toggle("activeBtn", match);
        span.classList.toggle("activeLink", match);
      });
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

// =================== toggleAccordion ====================
function toggleAccordion(arrow) {
  const allContents = document.querySelectorAll(
    ".value .text-container .container .items .content"
  );
  const allArrows = document.querySelectorAll(
    ".value .text-container .container .items .arrow"
  );

  // Close all contents and reset all arrows
  allContents.forEach((content) => {
    content.style.maxHeight = "0px";
    content.classList.remove("open");
  });

  allArrows.forEach((a) => {
    a.classList.remove("rotate");
  });

  // Get the target content of the clicked arrow
  const content = arrow.closest(".items").querySelector(".content");

  // If it's not already open, open it and rotate the arrow

  content.style.maxHeight = content.scrollHeight + "px";
  content.classList.toggle("open");
  arrow.classList.toggle("rotate");
}

/*=============== DARK LIGHT THEME ===============*/ 
const darkTheme = 'dark-theme'
const moonIcon = document.getElementById('night')
const sunIcon = document.getElementById('light')

// Get saved theme from localStorage
const selectedTheme = localStorage.getItem('selected-theme')

// Apply saved theme on load
if (selectedTheme === 'dark') {
  document.body.classList.add(darkTheme)
  moonIcon.style.display = 'none'
  sunIcon.style.display = 'inline'
}

// Toggle theme on moon icon click (switch to dark)
moonIcon.addEventListener('click', () => {
  document.body.classList.add(darkTheme)
  moonIcon.style.display = 'none'
  sunIcon.style.display = 'inline'
  localStorage.setItem('selected-theme', 'dark')
})

// Toggle theme on sun icon click (switch to light)
sunIcon.addEventListener('click', () => {
  document.body.classList.remove(darkTheme)
  sunIcon.style.display = 'none'
  moonIcon.style.display = 'inline'
  localStorage.setItem('selected-theme', 'light')
})
