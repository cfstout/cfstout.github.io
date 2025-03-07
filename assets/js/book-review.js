// Book Review and Spoiler Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Handle spoiler reveals
    setupSpoilers();
});

function setupSpoilers() {
    // Find all spoiler elements
    const spoilers = document.querySelectorAll('.spoiler');

    // Add click event to each spoiler
    spoilers.forEach(spoiler => {
        spoiler.addEventListener('click', function() {
            this.classList.toggle('revealed');
        });
    });
}
