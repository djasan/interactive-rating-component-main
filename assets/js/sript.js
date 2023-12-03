document.addEventListener('DOMContentLoaded', function () {
    const ratingContainer = document.querySelector('.rating-container');
    const ratingStars = document.querySelectorAll('.rating-star');
    const submitButton = document.querySelector('.submit-button');
    const thankYouCard = document.querySelector('.thank-you-card');
    const selectedRatingElement = document.querySelector('.selected-rating');

    ratingStars.forEach(star => {
        star.addEventListener('click', handleStarClick);
    });

    submitButton.addEventListener('click', handleSubmit);

    function handleStarClick(event) {
        const selectedRating = event.target.dataset.rating;
        showThankYouCard(selectedRating);
    }

    function showThankYouCard(rating) {
        ratingContainer.style.display = 'none';
        thankYouCard.classList.remove('hidden'); // Afficher l'élément de remerciement
        selectedRatingElement.textContent = rating;
    }

    function handleSubmit() {
        // Vous pouvez ajouter une logique de soumission ici si nécessaire
    }
});



