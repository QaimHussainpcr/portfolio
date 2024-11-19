// Navigation links and sections
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo'); // Select single logo
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon'); // Single menu icon
const navbar = document.querySelector('header nav'); // Single navbar

// Toggle mobile menu
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// Function to reset active states
const activePage = () => {
  const header = document.querySelector('header');
  const barsBox = document.querySelector('.bars-box');

  header.classList.remove('active');
  setTimeout(() => {
    header.classList.add('active');
  }, 1100);

  navLinks.forEach((link) => {
    link.classList.remove('active');
  });

  barsBox.classList.remove('active');
  setTimeout(() => {
    barsBox.classList.add('active');
  }, 1100);

  sections.forEach((section) => {
    section.classList.remove('active');
  });

  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Activate clicked navigation link
navLinks.forEach((link, idx) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active')) {
      activePage();
      link.classList.add('active');

      setTimeout(() => {
        sections[idx].classList.add('active');
      }, 1100);
    }
  });
});

// Logo click redirects to the first section
logoLink.addEventListener('click', () => {
  if (!navLinks[0].classList.contains('active')) {
    activePage();
    navLinks[0].classList.add('active');

    setTimeout(() => {
      sections[0].classList.add('active');
    }, 1100);
  }
});

// Resume buttons functionality
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach((btn, id) => {
  btn.addEventListener('click', () => {
    resumeBtns.forEach((btn) => btn.classList.remove('active'));
    btn.classList.add('active');

    resumeDetails.forEach((detail) => detail.classList.remove('active'));
    resumeDetails[id].classList.add('active');
  });
});

// Portfolio carousel functionality
const arrowRight = document.querySelector('.portfolio-box .navgation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navgation .arrow-left');
const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
const portfolioDetails = document.querySelectorAll('.portfolio-detail');

let index = 0; // Portfolio index

const activePortfolio = () => {
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
  portfolioDetails.forEach((detail) => detail.classList.remove('active'));
  portfolioDetails[index].classList.add('active');
};

arrowRight.addEventListener('click', () => {
  if (index < portfolioDetails.length - 1) {
    index++;
    arrowLeft.classList.remove('disable');
  }
  if (index === portfolioDetails.length - 1) {
    arrowRight.classList.add('disable');
  }
  activePortfolio();
});

arrowLeft.addEventListener('click', () => {
  if (index > 0) {
    index--;
    arrowRight.classList.remove('disable');
  }
  if (index === 0) {
    arrowLeft.classList.add('disable');
  }
  activePortfolio();
});


