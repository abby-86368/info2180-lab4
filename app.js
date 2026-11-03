document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-btn');

    searchButton.addEventListener('click', (event) => {
        event.preventDefault();

        fetch('superheroes.php')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then((data) => {
                alert(data);
            })
            .catch((error) => {
                console.error('Error fetching superheroes:', error);
            });
    });
});
