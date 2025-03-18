
// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    // Add a search bar dynamically
    const searchBar = document.createElement('input');
    searchBar.setAttribute('type', 'text');
    searchBar.setAttribute('id', 'searchBar');
    searchBar.setAttribute('placeholder', 'Search topics...');
    document.querySelector('header').appendChild(searchBar);

    // Search functionality
    searchBar.addEventListener('input', function () {
        const query = searchBar.value.toLowerCase();
        const sections = document.querySelectorAll('.subject-section');

        sections.forEach(section => {
            const topics = section.querySelectorAll('.topic-card');
            let hasMatch = false;

            topics.forEach(topic => {
                if (topic.textContent.toLowerCase().includes(query)) {
                    topic.style.display = 'block';
                    hasMatch = true;
                } else {
                    topic.style.display = 'none';
                }
            });

            if (hasMatch) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });

    // Add animation to topic cards on hover
    const topicCards = document.querySelectorAll('.topic-card');
    topicCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});