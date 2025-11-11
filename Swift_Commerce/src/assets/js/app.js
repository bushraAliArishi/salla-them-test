// Swift Commerce Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Swift Commerce Theme is running!');

    // Example: Quick Add to Cart functionality
    document.querySelectorAll('.quick-add-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Product added to cart quickly! (Simulated)');
            // In a real Salla theme, this would call a Salla API function
        });
    });
});


