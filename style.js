document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.querySelector('.menu__checkbox');
    var list = document.querySelector('.menu__list');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            list.classList.add('show');
        } else {
            list.classList.remove('show');
        }
    });

    // Get the current page URL
    var currentURL = window.location.pathname;

    // Remove the 'active' class from all menu items
    var menuLinks = document.querySelectorAll('.menu__link');
    menuLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    // Find the corresponding menu item and add the 'active' class
    menuLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentURL) {
            link.classList.add('active');
        }
    });
});