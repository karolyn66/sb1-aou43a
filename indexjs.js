document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map
    var map = L.map('map').setView([51.505, -0.09], 3);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Search functionality
    var searchBtn = document.getElementById('searchBtn');
    var searchOpen = false;
    var searchBar;

    searchBtn.addEventListener('click', function() {
        if (!searchOpen) {
            searchBar = document.createElement('input');
            searchBar.type = 'text';
            searchBar.placeholder = 'Suche...';
            searchBar.style.width = '100%';
            searchBar.style.padding = '0.5rem';
            searchBar.style.marginTop = '1rem';
            
            searchBtn.parentNode.insertBefore(searchBar, searchBtn.nextSibling);
            searchOpen = true;
        } else {
            searchBar.remove();
            searchOpen = false;
        }
    });

    // You can add more JavaScript functionality here as needed
});