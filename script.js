/* script.js */
function toggleSearch() {
  const searchContainer = document.getElementById('search-container');
  searchContainer.classList.toggle('hidden');
}

function performSearch() {
  const query = document.getElementById('search-bar').value;
  alert('Searching for: ' + query);
  // Aqui você pode adicionar a lógica para realizar a pesquisa
}
