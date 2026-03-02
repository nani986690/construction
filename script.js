// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize all components
    initHeader();
    initServices();
    initPortfolio();
    initContact();
    initFooter();
    initSmoothScrolling();
});

// Header functionality
function initHeader() {
    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = document.getElementById('menu-icon');

    // Handle scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Handle mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Toggle menu icon
        if (navMenu.classList.contains('active')) {
            menuIcon.setAttribute('data-lucide', 'x');
        } else {
            menuIcon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });

    // Close mobile menu when clicking on links
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuIcon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });
}

// Services functionality
function initServices() {
    const servicesGrid = document.getElementById('services-grid');
    
    const services = [
        {
            icon: 'home',
            title: 'Basic Package',
            description: 'Essential construction services for budget-friendly homes without compromising structural integrity.',
            image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-structure-159306.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
            features: ['1700/- per sft', 'Ramco/Nagarjuna Cement', 'Vizag/Mangalam Steel', 'Red Brick Construction']
        },
        {
            icon: 'building-2',
            title: 'Standard Package',
            description: 'Our most popular choice, offering a perfect balance of quality materials and modern aesthetics.',
            image: 'https://images.pexels.com/photos/584399/pexels-photo-584399.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
            features: ['2000/- per sft', 'Premium Cement Brands', 'Standard Steel Quality', 'Sudhakar Plumbing']
        },
        {
            icon: 'castle',
            title: 'Premium Package',
            description: 'Luxury construction with high-end finishes, premium brands, and superior architectural design.',
            image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
            features: ['2500/- per sft', 'Legrand/Gold Medal Electrical', 'Birla Nu Plumbing', 'Custom Architecture']
        },
        {
            icon: 'droplet',
            title: 'Painting & Finishes',
            description: 'Comprehensive painting services including specialized smoke design, royal play and aqua silk finishes.',
            image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-structure-159306.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
            features: ['Painting works', 'Smoke design', 'Royal play designs', 'Aqua silk paints', 'All types of paints']
        },
        {
            icon: 'tool',
            title: 'Plumbing & Electrical',
            description: 'All types of plumbing, electrical, interior, remodeling, demonstration and reconstruction works.',
            image: 'https://images.pexels.com/photos/584399/pexels-photo-584399.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
            features: ['Plumbing', 'Electrical', 'Interior work', 'Remodeling works', 'Demonstration and reconstruction']
        }
    ];

    services.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.style.animationDelay = `${index * 100}ms`;
        
        serviceCard.innerHTML = `
            <div class="service-image-container">
                <img src="${service.image}" alt="${service.title}" class="service-image">
                <div class="service-overlay"></div>
                <div class="service-icon">
                    <i data-lucide="${service.icon}"></i>
                </div>
            </div>
            <div class="service-content">
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.description}</p>
                <div class="service-features">
                    ${service.features.map(feature => `
                        <div class="service-feature">
                            <div class="service-feature-dot"></div>
                            <span class="service-feature-text">${feature}</span>
                        </div>
                    `).join('')}
                </div>
                <button class="service-button">Learn More</button>
            </div>
        `;
        
        servicesGrid.appendChild(serviceCard);
    });
    
    lucide.createIcons();
}

// Portfolio functionality
function initPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    const projects = [
        {
            id: 1,
            title: 'Gajuwaka Residency',
            category: 'residential',
            location: 'Gajuwaka',
            image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-structure-159306.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            description: 'A modern residential project completed with the highest quality materials and structural integrity.',
            likes: 120,
            views: 850
        },
        {
            id: 2,
            title: 'Vizag Heights',
            category: 'residential',
            location: 'Visakhapatnam',
            image: 'https://images.pexels.com/photos/584399/pexels-photo-584399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            description: 'Luxury apartments featuring premium brands like Vizag Steel and Ramco Cement.',
            likes: 95,
            views: 640
        },
        {
            id: 3,
            title: 'Modern Villa',
            category: 'residential',
            location: 'Steel Plant Area',
            image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            description: 'Custom-built villa with Sudhakar plumbing and Legrand electrical fittings.',
            likes: 150,
            views: 1200
        }
    ];

    function renderProjects(projectsToRender) {
        portfolioGrid.innerHTML = '';
        
        projectsToRender.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'portfolio-item';
            projectCard.style.animationDelay = `${index * 100}ms`;
            
            projectCard.innerHTML = `
                <div class="portfolio-image-container">
                    <img src="${project.image}" alt="${project.title}" class="portfolio-image">
                    <div class="portfolio-overlay">
                        <div class="portfolio-overlay-content">
                            <span class="portfolio-location">${project.location}</span>
                            <a href="#" class="portfolio-link">
                                <i data-lucide="external-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-content">
                    <h3 class="portfolio-title">${project.title}</h3>
                    <p class="portfolio-description">${project.description}</p>
                    <div class="portfolio-meta">
                        <div class="portfolio-stats">
                            <div class="portfolio-stat">
                                <i data-lucide="heart"></i>
                                <span>${project.likes}</span>
                            </div>
                            <div class="portfolio-stat">
                                <i data-lucide="eye"></i>
                                <span>${project.views}</span>
                            </div>
                        </div>
                        <span class="portfolio-category ${project.category}">${project.category}</span>
                    </div>
                </div>
            `;
            
            portfolioGrid.appendChild(projectCard);
        });
        
        lucide.createIcons();
    }

    // Initial render
    renderProjects(projects);

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            const filteredProjects = filter === 'all' 
                ? projects 
                : projects.filter(project => project.category === filter);
            
            renderProjects(filteredProjects);
        });
    });
}


// Contact functionality
function initContact() {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const contactInfoList = document.getElementById('contact-info-list');
    
    const contactInfo = [
        {
            icon: 'phone',
            title: 'Call Us',
            details: '+91 98765 43210',
            subtext: 'Mon-Sat 9AM-7PM'
        },
        {
            icon: 'mail',
            title: 'Email Us',
            details: 'hello@cornerstoneinfratech.com',
            subtext: 'We reply within 24 hours'
        },
        {
            icon: 'map-pin',
            title: 'Visit Us',
            details: 'Gajuwaka, Visakhapatnam',
            subtext: 'Design & Construction Office'
        },
        {
            icon: 'clock',
            title: 'Working Hours',
            details: 'Mon-Sat: 9AM-7PM',
            subtext: 'Sunday: Closed'
        }
    ];

    // Render contact info
    contactInfo.forEach(info => {
        const infoItem = document.createElement('div');
        infoItem.className = 'contact-info-item';
        infoItem.innerHTML = `
            <div class="contact-info-icon">
                <i data-lucide="${info.icon}"></i>
            </div>
            <div class="contact-info-content">
                <h4>${info.title}</h4>
                <p class="contact-detail">${info.details}</p>
                <p class="contact-subtext">${info.subtext}</p>
            </div>
        `;
        contactInfoList.appendChild(infoItem);
    });

    // Handle form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success message
        successMessage.classList.remove('hidden');
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 3 seconds
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 3000);
    });
    
    lucide.createIcons();
}

// Footer functionality
function initFooter() {
    const footerSocial = document.getElementById('footer-social');
    const footerQuickLinks = document.getElementById('footer-quick-links');
    const footerServices = document.getElementById('footer-services');
    const footerContact = document.getElementById('footer-contact');
    
    const socialLinks = [
        { icon: 'facebook', href: '#', label: 'Facebook' },
        { icon: 'instagram', href: '#', label: 'Instagram' },
        { icon: 'linkedin', href: '#', label: 'LinkedIn' },
        { icon: 'twitter', href: '#', label: 'Twitter' }
    ];

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Packages', href: '#services' },
        { name: 'Projects', href: '#portfolio' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ];

    const services = [
        'Residential Construction',
        'Villa Construction',
        'Commercial Projects',
        'Industrial Infrastructure',
        'Building Consultation',
        'Renovation Works'
    ];

    const contactDetails = [
        {
            icon: 'map-pin',
            main: 'Corner Stone Office',
            sub: 'Gajuwaka, Visakhapatnam, India'
        },
        {
            icon: 'phone',
            main: '+91 98765 43210',
            sub: 'Mon-Sat 9AM-7PM'
        },
        {
            icon: 'mail',
            main: 'hello@cornerstoneinfratech.com',
            sub: 'We reply within 24 hours'
        }
    ];

    // Render social links
    socialLinks.forEach(social => {
        const link = document.createElement('a');
        link.href = social.href;
        link.className = 'footer-social-link';
        link.setAttribute('aria-label', social.label);
        link.innerHTML = `<i data-lucide="${social.icon}"></i>`;
        footerSocial.appendChild(link);
    });

    // Render quick links
    quickLinks.forEach(link => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${link.href}" class="footer-link">${link.name}</a>`;
        footerQuickLinks.appendChild(li);
    });

    // Render services
    services.forEach(service => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="footer-link">${service}</span>`;
        footerServices.appendChild(li);
    });

    // Render contact details
    contactDetails.forEach(contact => {
        const item = document.createElement('div');
        item.className = 'footer-contact-item';
        item.innerHTML = `
            <i data-lucide="${contact.icon}" class="footer-contact-icon"></i>
            <div class="footer-contact-content">
                <p class="contact-main">${contact.main}</p>
                <p class="contact-sub">${contact.sub}</p>
            </div>
        `;
        footerContact.appendChild(item);
    });
    
    lucide.createIcons();
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}