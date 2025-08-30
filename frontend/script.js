// Create animated stars
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const numStars = 100;

            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = Math.random() * 3 + 1 + 'px';
                star.style.height = star.style.width;
                star.style.animationDelay = Math.random() * 3 + 's';
                starsContainer.appendChild(star);
            }
        }

        // Smooth scroll to chatbot
        function scrollToChatbot() {
            document.getElementById('chatbot').scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Intersection Observer for section animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, { threshold: 0.1 });

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            createStars();

            // Observe all sections for animation
            document.querySelectorAll('.section').forEach(section => {
                observer.observe(section);
            });
        });

        // Removed parallax effect for hero to fix overlap issue

        // Add hover sound effects (optional enhancement)
        document.querySelectorAll('.card, .cta-button').forEach(element => {
            element.addEventListener('mouseenter', () => {
                // Could add subtle hover sound here
            });
        });