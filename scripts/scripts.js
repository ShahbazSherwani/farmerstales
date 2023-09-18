window.onload = function () {
  // Query the document for the first element with the class 'scroll-to-top-button' and store it in the variable scrollTopButton
  const scrollTopButton = document.querySelector('.scroll-to-top-button');

  // Add a click event listener to the 'scroll-to-top-button'
  scrollTopButton.addEventListener('click', () => {
    // On clicking the button, smoothly scroll the window to the top-left corner (0, 0)
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth', // Enable smooth scrolling
    });
  });

  // Add a scroll event listener to the entire document
  document.addEventListener('scroll', (event) => {
    // Check the vertical scroll position using window.pageYOffset
    if (window.pageYOffset < 400) {
      // If the vertical scroll position is less than 400px, hide the 'scroll-to-top-button'
      scrollTopButton.style.display = 'none';
    } else {
      // If the vertical scroll position is 400px or more, display the 'scroll-to-top-button'
      scrollTopButton.style.display = 'block';
    }
  });

  /*Enable a dark theme */

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

  /*Allow the wheelchair icon to toggle dropdown menu to provide accessibility features using the jQuery library----*/

  $(document).ready(function () {
    // displaying the dropdown menu
    $('.accessibility-toggle-bar').click(function () {
      // open and close dropdown menu
      $(this).next('.accessibility-options').slideToggle(300);
    });
  });

  // Define a function called setTheme that takes a parameter called 'theme'
  function setTheme(theme) {
    // Check if the 'theme' parameter is set to 'dark'
    if (theme === 'dark') {
      // If it is, add the class 'dark-theme' to the <body> element using jQuery
      $('body').addClass('dark-theme');
    } else {
      // Otherwise, remove the class 'dark-theme' from the <body> element using jQuery
      $('body').removeClass('dark-theme');
    }

    // Store the theme value ('dark' or something else) in the browser's local storage with the key 'theme'
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

  // Apply the readable text
  $('.dropdown-item')
    .eq(0)
    .click(function () {
      // Change the font to normal Arial font)
      $('body').toggleClass('normal-text-feature');
    });

  // Initial setting: no underline
  $('body').addClass('no-underline');

  // Toggle underline for all text on the entire website
  $('.dropdown-item')
    .eq(1)
    .click(function () {
      if ($('body').hasClass('no-underline')) {
        // Add underline to all text
        $('body').removeClass('no-underline');
        $('body').addClass('underline-all');
      } else {
        // Remove underline from all text
        $('body').removeClass('underline-all');
        $('body').addClass('no-underline');
      }
    });

  let isSpeaking = false; // Variable to keep track of the speech state
  let speech = new SpeechSynthesisUtterance(); // Create a new SpeechSynthesisUtterance instance

  // Text-to-speech feature
  $('#readTextButton').click(function () {
    isSpeaking = !isSpeaking; // Toggle speech state
    if (isSpeaking) {
      // Start listening to mouse movements
      $(document).on('mousemove', function (e) {
        // Stop any ongoing speech before starting a new one
        window.speechSynthesis.cancel();

        // Get text under the mouse pointer
        let textElement = document.elementFromPoint(e.clientX, e.clientY);
        if (textElement && textElement.textContent) {
          // Prepare the text you want to read
          let textToRead = textElement.textContent.trim(); // Change this as per the text you want to read
          speech.text = textToRead;
          // Speak the text
          window.speechSynthesis.speak(speech);
        }
      });
    } else {
      // Stop speaking and listening to mouse movements
      window.speechSynthesis.cancel();
      $(document).off('mousemove');
    }
  });

  // Set other parameters for speech
  speech.rate = 1;
  speech.volume = 1;

  // Applying gray scale parameters
  $('.dropdown-item')
    .eq(2)
    .click(function () {
      // Applying gray scale parameters to body
      $('body').toggleClass('grayscale-theme');
      // Applying gray scale parameters to images
      $('img').toggleClass('gray-feature');
      // Applying gray scale parameters to sections
      $('section').toggleClass('gray-feature');
    });

  // Customer feedback

  $(document).ready(function () {
    $('.carousel').slick({
      dots: true, // Display dots navigation
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
    });
  });

  // Retrieve menu items from the DOM
  const accessibilityIcons = document.querySelectorAll('.dropdown-item');

  // Remove the default behaviour
  accessibilityIcons.forEach((icon) => {
    // disabling scroll back to top
    icon.addEventListener('click', (event) => {
      event.preventDefault();
    });
  });

  /* hambuer menu navigation*/
  // Query the DOM to find the element with the class 'mobile-menu-toggle' and store it in the variable 'button'
  const button = document.querySelector('.mobile-menu-toggle');

  // Query the DOM to find the element with the class 'nav-links' and store it in the variable 'navBarLinks'
  const navBarLinks = document.querySelector('.nav-links');

  // Add a click event listener to the 'button' element
  button.addEventListener('click', () => {
    // Toggle the 'active' class on the 'navBarLinks' element when the button is clicked
    navBarLinks.classList.toggle('active');
  });

  // Add a scroll event listener to the window object
  window.addEventListener('scroll', () => {
    // Find the element with class 'main-navigation' and store it in the variable 'navBar'
    const navBar = document.querySelector('.main-navigation');

    // Get the top offset position of the 'navBar' element from the top of the viewport
    let offsetTop = navBar.offsetTop;

    // Toggle the 'fixed' class on 'navBar' based on the scroll position
    // If the vertical scroll position is greater than the top offset of 'navBar', the class 'fixed' will be added
    // Otherwise, the class 'fixed' will be removed
    navBar.classList.toggle('fixed', window.scrollY > navBar.offsetTop);
  });

  /*Preventing hamburger to redirect the user to the top of the page*/

  // Find the first element with the class 'mobile-menu-toggle' and store it in the constant variable 'hamburgerButton'
  const hamburgerButton =
    document.getElementsByClassName('mobile-menu-toggle')[0];

  // Add a click event listener to the 'hamburgerButton'
  hamburgerButton.addEventListener('click', (event) => {
    // Prevent the default behavior of the click event (useful if the button is part of a form or a link)
    event.preventDefault();
  });
};

/* Enables to play video as soon the Dom Content loads completely */

document.addEventListener('DOMContentLoaded', function () {
  let video = document.getElementById('video');
  video.play();
});

// Define a function called 'toggleExpand' that takes a 'button' element as an argument.
function toggleExpand(button) {
  // Find the parent element of the button, e.g., a div that contains both the button and the content to show/hide.
  const parent = button.parentElement;

  // Within that parent element, find the first element with the class 'hidden-content'.
  const hiddenContent = parent.querySelector('.hidden-content');

  // Check if the hidden content is currently invisible (display set to 'none') or not set (display is an empty string).
  if (
    hiddenContent.style.display === 'none' ||
    hiddenContent.style.display === ''
  ) {
    // If so, change its display property to 'block' to make it visible.
    hiddenContent.style.display = 'block';

    // Change the text of the button to indicate that clicking it will now hide the content.
    button.textContent = 'Show Less';
  } else {
    // If the hidden content is already visible, set its display property to 'none' to hide it.
    hiddenContent.style.display = 'none';

    // Change the text of the button to indicate that clicking it will now show the content.
    button.textContent = 'Learn More';
  }
}

/*---------------------------------------------------------------------------------------------------*/
/*Display a welcome modal dialog
  /*---------------------------------------------------------------------------------------------------*/
// Run this only if the modal element exists on the page
let modal = document.getElementById('welcomeModal');

if (modal) {
  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName('close')[0];

  // Show the modal on page load
  modal.style.display = 'block';

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';

    // Play footer audio when modal is closed
    let footerAudio = document.getElementById('foobar');
    if (footerAudio) {
      footerAudio.play();
    }
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}
