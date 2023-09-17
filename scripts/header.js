window.onload = function () {
  document.addEventListener('DOMContentLoaded', function () {
    let video = document.getElementById('video');
    video.play();
  });
  /*---------------------------------------------------------------------------------------------------*/
  /*Display a welcome modal dialog
  /*---------------------------------------------------------------------------------------------------*/
  // Get the modal
  let modal = document.getElementById('welcomeModal');

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName('close')[0];

  // Show the modal on page load

  modal.style.display = 'block';

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';
    let footerAudio = document.getElementById('foobar');
    footerAudio.play();
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  /*---------------------------------------------------------------------------------------------------*/
  /*Enable a smooth scroll for the back to top button to reduce manual vertical scrolling--------------*/
  /*---------------------------------------------------------------------------------------------------*/

  // Retrieve the back to top button from the DOM
  const scrollTopButton = document.querySelector('.scroll-to-top-button');
  // Scroll the page back to top when the button is clicked
  scrollTopButton.addEventListener('click', () => {
    window.scroll({
      top: 0,
      left: 0,
      // Makes the user's scroll movement less jittery
      behavior: 'smooth',
    });
  });

  // Display the scroll button only when the page has been scrolled down past a fixed threshold
  document.addEventListener('scroll', (event) => {
    // Display the scroll button only when the manual scrolling is considered less efficient
    if (window.pageYOffset < 400) {
      scrollTopButton.style.display = 'none';
    } else {
      // The button becomes visible when scrolled down past a fixed threshold relative to the top of the page
      scrollTopButton.style.display = 'block';
    }
  });

  /*---------------------------------------------------------------------------------------------------*/
  /*Enable a dark theme
  /*---------------------------------------------------------------------------------------------------*/

  document.addEventListener('DOMContentLoaded', function () {
    // Get theme toggle button element
    const themeToggleButton = document.getElementById('theme-toggle');

    // Check if the user has previously set a theme preference
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
      document.body.classList.toggle('dark-theme', currentTheme === 'dark');
    }

    // Toggle theme on button click
    themeToggleButton.addEventListener('click', function () {
      // Toggle the dark theme class
      document.body.classList.toggle('dark-theme');

      // Save the current theme to localStorage
      const isDarkTheme = document.body.classList.contains('dark-theme');
      localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    });
  });

  /*----------------------------------------------------------------------------------------------------------------*/
  /*Allow the wheelchair icon to toggle dropdown menu to provide accessibility features using the jQuery library----*/
  /*----------------------------------------------------------------------------------------------------------------*/

  // Executes when the DOM is registered by the browser
  $(document).ready(function () {
    // Enable the dropdown menu to appear
    $('.accessibility-toggle-bar').click(function () {
      // Smoothly open and close dropdown menu when the wheelchair icon is toggled
      $(this).next('.accessibility-options').slideToggle(300);
    });
  });

  function setTheme(theme) {
    if (theme === 'dark') {
      $('body').addClass('dark-theme');
    } else {
      $('body').removeClass('dark-theme');
    }
    localStorage.setItem('theme', theme);
  }

  // Check local storage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  }

  // Theme toggle button event
  $('#theme-toggle').click(function () {
    const isDarkTheme = $('body').hasClass('dark-theme');
    const newTheme = isDarkTheme ? 'light' : 'dark';
    setTheme(newTheme);
  });

  // Apply text readibility improvements to the current page
  $('.dropdown-item')
    .eq(0)
    .click(function () {
      // Change the body section font to a legible font (Arial)
      $('body').toggleClass('readability-mode');
    });

  /* This prevents the first user click from removing all underlines
Without this, the user would have to click the dropdown menu item twice to underline links*/
  $('a').css('text-decoration', 'none');

  // Add underlines to all hyperlinks on the current page
  $('.dropdown-item')
    .eq(1)
    .click(function () {
      if ($('a').css('text-decoration-line') != 'underline') {
        $('a').css('text-decoration', 'underline');
      }
      // Revert to default state by removing underlines to all links on the current page
      else {
        $('a').css('text-decoration', 'none');
      }
    });

  // Make all colors shades of grey
  $('.dropdown-item')
    .eq(2)
    .click(function () {
      // Change the current web page's body to a grayscale color scheme
      $('body').toggleClass('grayscale');
      // Apply a grayscale filter to every image within the current web page
      $('img').toggleClass('gray');
      /* Apply a grayscale filter to the background images for the containers with overlapping columns on the
    'Contact Us' page */
      $('section').toggleClass('gray');
      // Apply a grayscale filter to the embedded Google Maps at the bottom of the 'Contact Us' page
      $('iframe').toggleClass('gray');
      // Apply a grayscale filter to the main banner above the fold of the 'Contact Us' page
      $('.contact-header').toggleClass('gray');
      /* Apply a grayscale filter on the two background images for the grid layout with white text and icon overlay on
    the 'About Us' Page*/
      $('.single-background').toggleClass('gray');
    });

  /* The above code is preventing accessibility buttons from scrolling back to the top of the page when
clicked by removing the default behavior. It retrieves all the dropdown menu items with the class
"dropdown-item" from the DOM and adds an event listener to each item. When an item is clicked, the
event's default behavior is prevented using `event.preventDefault()`. Additionally, it toggles the
background color of the clicked dropdown menu item by adding or removing the class "changeOpacity". */

  /*----------------------------------------------------------------------------------------------------------*/
  /*Prevent accessibility buttons from scrolling back to top on user click by removing default behaviour------*/
  /*----------------------------------------------------------------------------------------------------------*/

  // Retrieve all the dropdown menu items from the DOM
  const accessibilityIcons = document.querySelectorAll('.dropdown-item');

  // Remove the default behaviour for each dropdown menu item
  accessibilityIcons.forEach((icon) => {
    // Click events will no longer scroll back to the top of the page
    icon.addEventListener('click', (event) => {
      event.preventDefault();
      /* Toggle the background color of the dropdown menu icon to indicate a whether an accessibility feature
        is currently selected or not*/
      icon.classList.toggle('changeOpacity');
    });
  });

  /*--------------------------------------------------------------------------------------------------*/
  /*Toggle Navigation Menu visibility via the hamburger icon in mobile and tablet devices-------------*/
  /*--------------------------------------------------------------------------------------------------*/

  // Retrieve hamburger toggle button and navigation bar from the DOM
  const button = document.querySelector('.mobile-menu-toggle');
  const navBarLinks = document.querySelector('.nav-links');

  // Navigation bar will appear when hamburger menu is toggled by the user
  button.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
  });

  /*--------------------------------------------------------------------*/
  /*Create a sticky navigation bar for accessible navigation------------*/
  /*--------------------------------------------------------------------*/

  // Sticky navigation bar allows accessible page navigation without the user having to scroll to the top
  window.addEventListener('scroll', () => {
    // Retrieve the Navigation Menu from the DOM
    const navBar = document.querySelector('.main-navigation');

    // Compute the distance from the top of the page
    let offsetTop = navBar.offsetTop;
    // Make Navigation Menu fixed to the top of the screen when a certain vertical scroll threshold is reached
    navBar.classList.toggle('sticky', window.scrollY > navBar.offsetTop);
    /* Position the 'Contrast Toggle' button relative to the dimensions of the fixed Navigation Menu when the
    the vertical scroll bar passes a threshold */
    contrastToggle.classList.toggle(
      'sticky-adjust',
      window.scrollY > navBar.offsetTop
    );
    /* Display the company logo in a white box in the top left corner of the fixed Navigation Menu when a
    vertical scroll threshold is reached */
  });

  /*----------------------------------------------------------------------------------------------------------*/
  /*Prevent hamburger button and 'Contrast Toggle' button from redirecting the user to the top of the page----*/
  /*----------------------------------------------------------------------------------------------------------*/

  // Retrieve toggle button from the DOM
  const hamburgerButton =
    document.getElementsByClassName('mobile-menu-toggle')[0];
  // Prevent the default behavior that returns the user to the top of the page whenever the hamburger button is clicked
  hamburgerButton.addEventListener('click', (event) => {
    event.preventDefault();
  });
};

// Creating a new custom class for delclaring custom Header components.
class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      
<header aria-label="Navigation Menu">
            <!-- Main navigation area: includes the company logo, a mobile menu toggle, and links to web pages -->

        <section class="main-navigation">
            <!-- Logo with Tractor and the site's name -->
            <div class="company-logo"><i class="fa-solid fa-tractor"></i> | Farming Tales</div>
            <!-- Hamburger menu icon for mobile and tablet devices (hidden on desktop) -->
            <a href="#" class="mobile-menu-toggle" aria-label="mobile-menu-toggle">
                <span class="menu-bar" id="bar1"></span>
                <span class="menu-bar" id="bar2"></span>
                <span class="menu-bar" id="bar3"></span>
            </a>
            
            <!-- Main Navigation Menu with links to other pages -->
            <nav class="nav-links">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="news.html">News</a></li>
                    <li><a href="aboutus.html">About Us</a></li>
                    <li><a href="contactus.html">Contact Us</a></li>
                    <li><a href="farmers.html">Farmer's Wisdom</a></li>
                </ul>
                            <!-- Accessibility dropdown button -->
            <aside class="accessibility-dropdown-content">
                <section class="dropdown-content">
                    <div class="accessibility-menu-bar tooltip-right accessibility-toggle-bar"
                        title="Accessibility Menu">
                        <a><i class="fa fa-wheelchair"></i></a>
                    </div>
                    <!-- Dropdown menu with accessibility options -->
                    <aside class="accessibility-options">
                        <!-- Readable Font -->
                        <div class="accessibility-menu-bar tooltip-right" title="Readable Font">
                            <a href="#" class="dropdown-item"><i class="fa fa-font"></i></a>
                        </div>
                        <!-- Underline Links -->
                        <div class="accessibility-menu-bar tooltip-right" title="Underline Links">
                            <a href="#" class="dropdown-item"><i class="fa fa-link"></i></a>
                        </div>
             
                        <!-- Grayscale Mode -->
                        <div class="accessibility-menu-bar tooltip-right" title="Grayscale Mode">
                            <a href="#" class="dropdown-item"><i class="fas fa-palette"></i></a>
                        </div>

                                   <!-- Light Theme -->
                        <div id="theme-toggle" class="accessibility-menu-bar tooltip-right" title="Light Theme">
                            <a href="#" class="dropdown-item"><i class="fa-solid fa-brush"></i></a>
                        </div>
                    </aside>
                </section>
            </aside>
            </nav>
            <!-- Button to scroll back to the top of the page -->
            <nav>
                <button class="scroll-to-top-button">
                    <i class="fa-solid fa-arrow-up-from-bracket fa-bounce fa-lg"></i>
                </button>
            </nav>

        </section>
    </header>
    `;
  }
}

//registering custom element to DOM.

customElements.define('header-component', Header);

class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      
<footer>
    <div class="footer">
        <div class="footer-row">
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
        </div>

        <div class="footer-row">
            <ul>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Career</a></li>
            </ul>
        </div>

                <div class="audio-player footer-row">
            <audio controls loop id="foobar">
                <source src="assets/audio/farming-tales-audio.mp3" type="audio/mp3" preload="auto" >
                Your browser does not support the audio element.
            </audio>
        </div>

        <div class="footer-row">
            Copyright © 2023 Farming Tales - All rights reserved
        </div>
    </div>
</footer>
    `;
  }
}

//registering custom element to DOM.

customElements.define('footer-component', Footer);

/* Enables to play video as soon the Dom Content loads completely */

document.addEventListener('DOMContentLoaded', function () {
  let video = document.getElementById('video');
  video.play();
});

/*function for learn more about news */

// function toggleExpand() {
//   let learnMore = document.querySelector('.learn-more');
//   learnMore.classList.toggle('expanded');
// }

function toggleExpand(button) {
  const parent = button.parentElement;
  const hiddenContent = parent.querySelector('.hidden-content');

  if (
    hiddenContent.style.display === 'none' ||
    hiddenContent.style.display === ''
  ) {
    hiddenContent.style.display = 'block';
    button.textContent = 'Show Less';
  } else {
    hiddenContent.style.display = 'none';
    button.textContent = 'Learn More';
  }
}

// Customer feedback

$(document).ready(function () {
  $('.carousel').slick({
    dots: true, // Display dots navigation
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
  });
});
