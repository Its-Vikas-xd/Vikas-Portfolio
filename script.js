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
                header.style.background = 'rgba(18, 18, 18, 0.98)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.boxShadow = 'none';
                header.style.background = 'rgba(18, 18, 18, 0.95)';
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
        
        // Create animated particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random properties
                const size = Math.random() * 10 + 5;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const duration = Math.random() * 20 + 10;
                const delay = Math.random() * 5;
                const color = `hsl(${Math.random() * 360}, 70%, 60%)`;
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.background = color;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.animationDuration = `${duration}s`;
                particle.style.animationDelay = `${delay}s`;
                
                particlesContainer.appendChild(particle);
            }
        }
        
        // Initialize particles
        createParticles();
        
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
        const heroTitle = document.querySelector('.hero-title span');
        heroTitle.textContent = '';
        
        const name = 'Vikas Sharma';
        let i = 0;
        
        function typeWriter() {
            if (i < name.length) {
                heroTitle.textContent += name.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
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
        
        // Custom cursor effect
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            
            setTimeout(() => {
                cursorFollower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }, 100);
        });
        
        document.addEventListener('mousedown', () => {
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(0.7)`;
            cursorFollower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(1.3)`;
        });
        
        document.addEventListener('mouseup', () => {
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(1)`;
            cursorFollower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(1)`;
        });
        
        // Make elements interactive with cursor
        const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-card, .contact-detail');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform += ' scale(1.5)';
                cursorFollower.style.transform += ' scale(1.8)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
                cursorFollower.style.transform = cursorFollower.style.transform.replace(' scale(1.8)', '');
            });
        });