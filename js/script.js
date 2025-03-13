document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            // Toggle menu
            navLinks.classList.toggle('active');
            
            // Animate hamburger icon
            const bars = document.querySelectorAll('.bar');
            bars[0].classList.toggle('active');
            bars[1].classList.toggle('active');
            bars[2].classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Welcome message personalization
    const namePrompt = prompt("Please enter your name:");
    if (namePrompt && namePrompt.trim() !== '') {
        document.getElementById('user-name').textContent = namePrompt;
    }
    
    // Form validation and submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const tanggal = document.getElementById('tanggal').value;
            const gender = document.querySelector('input[name="gender"]:checked')?.value;
            const pesan = document.getElementById('pesan').value;
            
            // Validate form
            if (!name || !tanggal || !gender || !pesan) {
                alert('Please fill in all fields');
                return;
            }
            
            // Format date
            const date = new Date(tanggal);
            const formattedDate = date.toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
            
            // Display results
            const formResults = document.getElementById('form-results');
            const resultContent = formResults.querySelector('.result-content');
            
            resultContent.innerHTML = `
                <p><strong>Current time:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Tanggal Lahir:</strong> ${formattedDate}</p>
                <p><strong>Jenis Kelamin:</strong> ${gender}</p>
                <p><strong>Pesan:</strong> ${pesan}</p>
            `;
            
            formResults.classList.remove('hidden');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for nav height
                    behavior: 'smooth'
                });
            }
        });
    });
});