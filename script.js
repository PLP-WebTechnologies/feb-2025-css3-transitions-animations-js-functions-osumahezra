const dropdown = document.getElementById('dropdown');
const content = document.getElementById('dropdown-content');

dropdown.addEventListener('mouseenter', () => {
  content.classList.add('show');
});

dropdown.addEventListener('mouseleave', () => {
  content.classList.remove('show');
});
document.getElementById("login").addEventListener("click", () => {
  const mainDiv = document.getElementById("maindiv");
  mainDiv.classList.add("slide-in");
});