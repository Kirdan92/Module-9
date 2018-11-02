/* Show dropdown for wallet on click*/
function showDropdown() {
    document.getElementById("wallet-dropdown").classList.toggle("show");
    document.getElementById("wallet-arrow").classList.toggle("icon-arrow-up");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#wallet-nav') && !event.target.matches('#wallet-nav h1') && !event.target.matches('#wallet-nav i')) {
    var arrow = document.getElementById("wallet-arrow");
    var dropdowns = document.getElementsByClassName("dropdown-content");
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