// --- Footer Loader ---
document.addEventListener('DOMContentLoaded', function() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                footerPlaceholder.innerHTML = '<p style="text-align:center; padding: 20px;">Footer could not be loaded.</p>';
            });
    }
});
