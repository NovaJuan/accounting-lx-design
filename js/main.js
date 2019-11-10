window.onload = function () {
  let mainNav = document.getElementById('main-nav');
  let navLinks = document.querySelector('.main-nav-links');
  let toggleNav = document.getElementById('toggle-nav');
  let header = document.querySelector('.header');
  let navIsOpen = false;

  document.addEventListener('scroll', scrolling);

  function scrolling(e) {
    header.style.backgroundPosition = 'center ' + window.scrollY / 1.5 + 'px';
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;

    // NavBar background
    if (scroll > 10) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  }
  scrolling();

  toggleNav.addEventListener('click', function (e) {
    if (!navIsOpen) {
      navIsOpen = true;
      navLinks.style.display = 'block';
    } else {
      navIsOpen = false;
      navLinks.style.display = 'none';
    }
  });
}