/* script.js */
function toggleSearch() {
  const searchContainer = document.getElementById('search-container');
  if (searchContainer.classList.contains('hidden')) {
    searchContainer.classList.remove('hidden');
  } else {
    searchContainer.classList.add('hidden');
  }
}

function performSearch() {
  const query = document.getElementById('search-bar').value;
  alert('Searching for: ' + query);
  // Aqui você pode adicionar a lógica para realizar a pesquisa
}
