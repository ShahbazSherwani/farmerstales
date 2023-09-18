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
                        <a><i class="fa-solid fa-universal-access fa-beat"></i></a>
                    </div>
                    <!-- Dropdown menu with accessibility options -->
                    <aside class="accessibility-options">
                        <!-- Readable Font -->
                        <div class="accessibility-menu-bar tooltip-right" title="Readable Font">
                            <a href="#" class="dropdown-item"><i class="fa-solid fa-text-slash"></i></a>
                        </div>
                        <!-- Text to Speech -->
                              <!-- Text to Speech -->
                        <!-- Text to Speech -->
                        <div class="accessibility-menu-bar tooltip-right" title="Text to Speech">
                        <a href="#" class="dropdown-item" id="readTextButton"><i class="fa-solid fa-volume-up"></i></a>
                        </div>
                                
                        <!-- Grayscale Mode -->
                        <div class="accessibility-menu-bar tooltip-right" title="Grayscale Mode">
                            <a href="#" class="dropdown-item"><i class="fas fa-palette"></i></a>
                        </div>
                        <!-- Dark Theme -->
                        <div id="theme-toggle" class="accessibility-menu-bar tooltip-right" title="Dark Theme">
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
