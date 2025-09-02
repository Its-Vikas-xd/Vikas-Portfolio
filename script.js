     // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const scrollPosition = window.scrollY;
            
            if (scrollPosition > 100) {
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
                header.style.background = 'rgba(16, 0, 43, 0.98)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.boxShadow = 'none';
                header.style.background = 'rgba(16, 0, 43, 0.95)';
                header.style.backdropFilter = 'blur(0)';
            }
            
            // Highlight active nav link
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-links a').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
            
            // Scroll to top button visibility
            const scrollTopBtn = document.getElementById('scrollTop');
            if (scrollPosition > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        // Create snowfall effect
        function createSnowfall() {
            const snowfallContainer = document.getElementById('snowfall');
            const snowflakeCount = 150;
            
            for (let i = 0; i < snowflakeCount; i++) {
                const snowflake = document.createElement('div');
                snowflake.classList.add('snowflake');
                
                // Random properties
                const size = Math.random() * 5 + 2;
                const posX = Math.random() * 100;
                const delay = Math.random() * 10;
                const duration = Math.random() * 10 + 5;
                const opacity = Math.random() * 0.5 + 0.3;
                
                snowflake.style.width = `${size}px`;
                snowflake.style.height = `${size}px`;
                snowflake.style.left = `${posX}%`;
                snowflake.style.opacity = opacity;
                snowflake.style.animationDuration = `${duration}s`;
                snowflake.style.animationDelay = `${delay}s`;
                
                snowfallContainer.appendChild(snowflake);
            }
        }
        
        // Create background icons
        function createBackgroundIcons() {
            const iconsContainer = document.getElementById('bgIcons');
            const icons = ['fab fa-python', 'fas fa-database', 'fas fa-chart-bar', 'fas fa-code', 
                           'fas fa-calculator', 'fas fa-cloud', 'fas fa-server', 'fas fa-laptop-code'];
            const iconCount = 15;
            
            for (let i = 0; i < iconCount; i++) {
                const icon = document.createElement('i');
                const randomIcon = icons[Math.floor(Math.random() * icons.length)];
                
                icon.className = `bg-icon ${randomIcon}`;
                
                // Random properties
                const size = Math.random() * 3 + 1;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const duration = Math.random() * 30 + 20;
                const delay = Math.random() * 10;
                
                icon.style.fontSize = `${size}rem`;
                icon.style.left = `${posX}%`;
                icon.style.top = `${posY}%`;
                icon.style.animationDuration = `${duration}s`;
                icon.style.animationDelay = `${delay}s`;
                
                iconsContainer.appendChild(icon);
            }
        }
        
        // Initialize snowfall and icons
        createSnowfall();
        createBackgroundIcons();
        
        // Initialize animations on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                }
            });
        }, {
            threshold: 0.1
        });
        
        // Observe elements to animate
        document.querySelectorAll('.skill-card, .project-card, .skill-category, .contact-detail').forEach(el => {
            observer.observe(el);
        });
        
        // Scroll to top functionality
        const scrollTopBtn = document.getElementById('scrollTop');
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Form submission handling
        const contactForm = document.getElementById('contactForm');
        const formMessage = document.getElementById('formMessage');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !subject || !message) {
                showFormMessage('Please fill in all fields', 'error');
                return;
            }
            
            // Simulate form submission
            showFormMessage('Message sent successfully!', 'success');
            contactForm.reset();
        });
        
        function showFormMessage(text, type) {
            formMessage.textContent = text;
            formMessage.style.display = 'block';
            formMessage.style.color = type === 'success' ? 'var(--success)' : 'var(--primary)';
            
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 3000);
        }
        
        // Typewriter effect for hero title
        const typewriterElement = document.getElementById('typewriter');
        typewriterElement.textContent = '';
        
        const name = 'Vikas Sharma';
        let i = 0;
        
        function typeWriter() {
            if (i < name.length) {
                typewriterElement.textContent += name.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Add a blinking cursor after finishing
                const cursor = document.createElement('span');
                cursor.className = 'blinking-cursor';
                cursor.textContent = '|';
                typewriterElement.appendChild(cursor);
            }
        }
        
        // Start typewriter effect after a short delay
        setTimeout(typeWriter, 500);
        
        // Animate skill bars when in viewport
        const skillBars = document.querySelectorAll('.skill-progress-bar');
        const skillBarObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = `${width}%`;
                }
            });
        }, {
            threshold: 0.5
        });
        
        skillBars.forEach(bar => {
            skillBarObserver.observe(bar);
        });