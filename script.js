// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Script.js loaded!');
  
  // Direct mobile menu toggle implementation
  const menuButton = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav');
  const overlay = document.querySelector('.menu-overlay');
  
  console.log('Menu elements found in script.js:', 
    menuButton ? 'Menu button ✓' : 'Menu button ✗', 
    navMenu ? 'Navigation ✓' : 'Navigation ✗', 
    overlay ? 'Overlay ✓' : 'Overlay ✗'
  );
  
  // Force attach click handler to menu button
  if (menuButton) {
    console.log('Adding click handler to menu button');
    
    // Remove any existing listeners
    const newMenuButton = menuButton.cloneNode(true);
    menuButton.parentNode.replaceChild(newMenuButton, menuButton);
    
    // Add new listener
    newMenuButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Menu button clicked in script.js!');
      
      // Toggle menu
      if (navMenu) navMenu.classList.toggle('active');
      if (overlay) overlay.classList.toggle('active');
      this.classList.toggle('active');
      
      // Toggle icon
      const icon = this.querySelector('i');
      if (icon) {
        if (icon.classList.contains('fa-bars')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
          document.body.style.overflow = 'hidden';
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
          document.body.style.overflow = '';
        }
      }
      
      return false;
    });
  }
  
  // Add a fallback global click handler
  document.body.addEventListener('click', function(e) {
    if (e.target.matches('.menu-toggle') || e.target.closest('.menu-toggle')) {
      console.log('Menu button clicked via body listener');
      if (navMenu) navMenu.classList.toggle('active');
      if (overlay) overlay.classList.toggle('active');
      
      const button = e.target.matches('.menu-toggle') ? e.target : e.target.closest('.menu-toggle');
      button.classList.toggle('active');
      
      // Toggle icon
      const icon = button.querySelector('i');
      if (icon) {
        if (icon.classList.contains('fa-bars')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
          document.body.style.overflow = 'hidden';
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
          document.body.style.overflow = '';
        }
      }
    }
  });
});
