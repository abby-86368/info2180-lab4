document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const resultDiv = document.getElementById('result');
    const searchForm = document.getElementById('search-form');

    function performSearch() {
        // Sanitize user input to prevent malicious code injection
        const rawInput = searchInput.value;
        const sanitizedInput = rawInput.replace(/<[^>]*>?/gm, '').trim();

        // Pass the search query as a query param in the query string
        const url = `superheroes.php?query=${encodeURIComponent(sanitizedInput)}`;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then((data) => {
                // Show the result inside the div with id "result"
                resultDiv.innerHTML = data;
            })
            .catch((error) => {
                console.error('Error fetching superhero data:', error);
                resultDiv.innerHTML = '<p class="not-found">An error occurred while fetching data.</p>';
            });
    }

    // Trigger search when the Search button is clicked
    searchButton.addEventListener('click', (event) => {
        event.preventDefault();
        performSearch();
    });

    // Also trigger search when pressing Enter inside the input/form
    if (searchForm) {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            performSearch();
        });
    }
});
