var header = document.querySelector('header');
var sidebar = document.getElementById("sidebar");
var sidebarGrid = document.getElementById("sidebar-grid");
var arrow = document.getElementById("wallet-arrow");
var dropdowns = document.getElementsByClassName("dropdown-content");


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#wallet-nav') && !event.target.matches('#wallet-nav h1') && !event.target.matches('#wallet-nav i')) {
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        arrow.classList.remove('icon-arrow-up');
      }
    }
  }
}

/*Switch sidebar - click on Hamburger*/
function switchSidebar() {
    sidebar.classList.toggle("sidebar-big");
    sidebarGrid.classList.toggle("sidebar-big");
    sidebar.classList.toggle("sidebar-small");
    sidebarGrid.classList.toggle("sidebar-small");
}
/*Show-Hide Header - click on Hamburger*/
function toggleHeader(visible) {
  header.classList.toggle('show', visible);
}

document.querySelector('#hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  switchSidebar();
});
/*Show-Hide Header - click on icon - arrow up*/
document.querySelector('.hide-nav i').addEventListener('click', function(e) {
  e.preventDefault();
  toggleHeader();
  switchSidebar();
});

document.querySelector('#wallet-nav').addEventListener('click', function(e) {
  e.preventDefault();
  showDropdown();
});

/* Show dropdown for wallet on click*/
function showDropdown() {
    document.getElementById("wallet-dropdown").classList.toggle("show");
    document.getElementById("wallet-arrow").classList.toggle("icon-arrow-up");
}