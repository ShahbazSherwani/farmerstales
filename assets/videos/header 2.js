window.onload = function () {
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
    // Retrieve the 'Toggle Contrast' button from the DOM
    const contrastToggle = document.querySelector('.toggle-contrast');

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
  // Retrieve low contrast button from the DOM
  const searchButton = document.getElementsByClassName('toggle-contrast')[0];
  // Prevent the default behavior that returns the user to the top of the page whenever the hamburger button is clicked
  hamburgerButton.addEventListener('click', (event) => {
    event.preventDefault();
  });
  /* Prevent the default behavior that returns the user to the top of the page whenever the 'Contrast Toggle' button
is clicked*/
  searchButton.addEventListener('click', (event) => {
    event.preventDefault();
  });

  /*-----------------------------------------------------------------------------------------------------*/
  /*Prevent the social media icons aside on the 'Current News' page from colliding with the footer-------*/
  /*-----------------------------------------------------------------------------------------------------*/

  /*  Record the starting vertical scroll position (position of 0 is not used or else unexpected behaviour occurs when the
    page is scrolled to the top */
  let pastScrollPosition = -1;
  // Show or hide the aside based on changes in the user's scroll position for the 'Current News' page only
  if (fixedSocialMediaAside != null) {
    document.addEventListener('scroll', (event) => {
      let currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // Hide the social media icons aside to prevent collision with the footer
      if (
        currentScrollPosition > pastScrollPosition &&
        window.pageYOffset > 5200
      ) {
        fixedSocialMediaAside.style.display = 'none';
      } else {
        // Make the aside visible once collision with the footer will not occur
        fixedSocialMediaAside.style.display = 'block';
      }
    });
  }
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
                    <li><a href="News.html">News</a></li>
                    <li><a href="aboutus.html">About Us</a></li>
                    <li><a href="contactus.html">Contact Us</a></li>
                    <li><a href="farmers.html">Farmer's Wisdom</a></li>
                </ul>
            </nav>
            <!-- Button to scroll back to the top of the page -->
            <nav>
                <button class="scroll-to-top-button">
                    <i class="fa-solid fa-arrow-up-from-bracket fa-bounce fa-lg"></i>
                </button>
            </nav>
            <!-- Toggle button for high/low contrast -->
            <button class="toggle-contrast" id="toggle-contrast">Toggle Contrast</button>
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
                    </aside>
                </section>
            </aside>
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
