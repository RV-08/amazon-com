document.addEventListener('DOMContentLoaded', function () {

    // 1. Search Bar Functionality - Log the search term as the user types
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value;
        console.log("User is searching for: " + searchTerm); // Log the search term to console
    });
    
    // 2. Cart Counter - Increment the number of items in the cart on click
    let cartCount = 0;
    const cartElement = document.querySelector('.nav-cart');
    const cartIcon = cartElement.querySelector('i');
    
    cartElement.addEventListener('click', function () {
        cartCount++;
        cartElement.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
    });
    
    // 3. Toggle Hero Message - Hide or show the hero message
    const heroMessage = document.querySelector('.hero-msg');
    
    heroMessage.addEventListener('click', function () {
        // Toggle visibility
        if (heroMessage.style.display === 'none') {
            heroMessage.style.display = 'flex';
        } else {
            heroMessage.style.display = 'none';
        }
    });
    
    // 4. Toggle Mobile Menu - Show or hide the menu items when "All" is clicked
    const menuToggleButton = document.querySelector('.panel-all');
    const panelOps = document.querySelector('.panel-ops');
    
    menuToggleButton.addEventListener('click', function () {
        if (panelOps.style.display === 'none' || panelOps.style.display === '') {
            panelOps.style.display = 'block';
        } else {
            panelOps.style.display = 'none';
        }
    });
    
    // 5. Back to Top - Scroll to the top of the page when clicked
    const backToTopButton = document.querySelector('.foot-panel1');
    
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    });
    
    