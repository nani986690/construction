// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize all components
    initHeader();
    initServices();
    initFinishingServices();
    initPortfolio();
    initContact();
    initFooter();
    initSmoothScrolling();
});

// WhatsApp messaging function
function sendWhatsAppMessage(serviceTitle = '') {
    const whatsappNumber = '919581026463';
    const message = serviceTitle ? `Hi! I'm interested in your ${serviceTitle} service. Please provide more details.` : `Hi! I want to know more about your services.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

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
    
    // Main service categories with new offerings and contact numbers
    const mainServices = [
        {
            icon: 'hard-hat',
            title: 'Building & Civil Works',
            description: 'All kinds of construction and structural services.',
            image: 'https://uploads.onecompiler.io/42u9xvqj6/44eyfwg5r/hero.webp',
            features: [
                'Residential Building Construction',
                'Commercial Building Construction',
                'Structural Works',
                'Foundation Works',
                'Concrete & Masonry Works',
                'Price will be negotiated'
            ],
            contactPrimary: '9581026463',
            contactSecondary: '7893209610'
        },
        {
            icon: 'home',
            title: 'Interior Design & Planning',
            description: 'Creative and functional interior solutions.',
            image: 'https://uploads.onecompiler.io/42u9xvqj6/44ffkbmag/images%20(4).jpg',
            features: [
                'Space Planning',
                'Interior Design Concepts',
                'False Ceiling & Wall Designs',
                'Modular Furniture Planning',
                'Price will be negotiated'
            ],
            contactPrimary: '9581026463',
            contactSecondary: '7893209610'
        },
        {
            icon: 'tool',
            title: 'Renovation & Remodeling',
            description: 'Upgrade and refresh your existing spaces.',
            image: 'https://uploads.onecompiler.io/42u9xvqj6/44ffkbmag/13-Nov-24-Renovation-vs-remodeling1.webp',
            features: [
                'Home Renovation',
                'Building Remodeling',
                'Structural Repairs',
                'Interior Upgrades',
                'Price will be negotiated'
            ],
            contactPrimary: '9581026463',
            contactSecondary: '7893209610'
        },
        {
            icon: 'road',
            title: 'Infrastructure Works',
            description: 'Developing essential civil infrastructure.',
            image: 'https://uploads.onecompiler.io/42u9xvqj6/44ffkbmag/1754904793579.png',
            features: [
                'Roads & Drainage',
                'Compound Walls',
                'Site Development',
                'Utility Installations',
                'Price will be negotiated'
            ],
            contactPrimary: '9581026463',
            contactSecondary: '7893209610'
        },
        {
            icon: 'clipboard',
            title: 'Project Management',
            description: 'End‑to‑end planning and supervision.',
            image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
            features: [
                'Construction Planning',
                'Site Supervision',
                'Cost Estimation',
                'Quality Control',
                'price will be negotiated'
            ],
            contactPrimary: '9581026463',
            contactSecondary: '7893209610'
        }
    ];

    mainServices.forEach((service, index) => {
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
                ${service.contactPrimary || service.contactSecondary ? `
                <div class="service-contact">
                    <strong>Contact:</strong> ${service.contactPrimary ? service.contactPrimary : ''}${service.contactSecondary ? ' / ' + service.contactSecondary : ''}
                </div>
                ` : ''}
                <button class="service-button btn btn-primary" onclick="sendWhatsAppMessage('${service.title}')">Know More</button>
            </div>
        `;
        
        servicesGrid.appendChild(serviceCard);
    });
    
    lucide.createIcons();
}

// Additional Services functionality
function initFinishingServices() {
    const finishingServicesGrid = document.getElementById('finishing-services-grid');
    if (!finishingServicesGrid) return;
    
    const finishingServices = [
        {
            icon: 'droplet',
            title: 'Painting & Finishes',
            description: 'Comprehensive painting services including specialized smoke design, royal play and aqua silk finishes.',
            image: 'https://uploads.onecompiler.io/42u9xvqj6/44f9bu7pt/Painting-Contractors-FI-1.webp',
            features: ['Painting works', 'Smoke design', 'Royal play designs', 'Aqua silk paints', 'Price will be negotiated']
        },
        {
            icon: 'droplets',
            title: 'Plumbing Work',
            description: 'Complete house plumbing solutions including bathroom & kitchen pipeline installation, sanitary ware fitting, water tank installation, leak detection & repair.',
            image: 'https://uploads.onecompiler.io/42u9xvqj6/44f9bu7pt/0602030005-01-Plumbers.jpg',
            features: ['Complete house plumbing solutions', 'Bathroom & kitchen pipeline', 'Sanitary ware fitting', 'CPVC/UPVC/PVC piping', 'Price will be negotiated']
        },
        {
            icon: 'zap',
            title: 'Electrical Wiring & Lighting',
            description: 'Complete electrical wiring solutions with concealed & open systems, fire-resistant cables, modular switches, and energy-efficient LED lighting.',
            image: 'https://uploads.onecompiler.io/42u9xvqj6/44f9bu7pt/switchboards-electrician.jpg',
            features: ['Concealed & open wiring systems', 'FRLS fire-resistant cables', 'Modular switches & fittings', 'LED energy-efficient lighting', 'Price will be negotiated']
        }
    ];

    finishingServices.forEach((service, index) => {
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
                <button class="service-button btn btn-primary" onclick="sendWhatsAppMessage('${service.title}')">Know More</button>
            </div>
        `;
        
        finishingServicesGrid.appendChild(serviceCard);
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
            image: 'https://uploads.onecompiler.io/42u9xvqj6/44f9bu7pt/WhatsApp%20Image%202026-03-03%20at%2012.42.15.jpeg',
            description: 'Crafted with superior materials and engineered for lasting structural strength, this modern residential project offers quality living in a prime location.Malabar Gold Back Side, Beside Sri Kanya Theatre, Gajuwaka, Visakhapatnam',
            likes: 120,
            views: 850
        },
        {
            id: 2,
            title: 'Luxury apartment',
            category: 'residential',
            location: 'Visakhapatnam',
            image: 'https://uploads.onecompiler.io/42u9xvqj6/44fc9f7hf/WhatsApp%20Image%202026-03-03%20at%2022.45.32.jpeg',
            description: 'Luxury apartments featuring premium brands like Vizag Steel and Ramco Cement.Dath sai Nagar Mangalam Duvvada Kurmanpallem, Visakhapatnam',
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
            details: 'Primary: 9581026463 | Secondary: 7893209610',
            subtext: 'Mon-Sat 9AM-7PM'
        },
        {
            icon: 'mail',
            title: 'Email Us',
            details: 'cornerstoneit1794@gmail.com',
            subtext: 'We reply within 24 hours'
        },
        {
            icon: 'map-pin',
            title: 'Visit Us',
            details: 'Malabar Gold Back Side, Beside Sri Kanya Theatre',
            subtext: 'Gajuwaka, Visakhapatnam'
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
            main: 'Malabar Gold Back Side, Beside Sri Kanya Theatre',
            sub: 'Gajuwaka, Visakhapatnam, India'
        },
        {
            icon: 'phone',
            main: '+91 9581026463',
            sub: 'Mon-Sat 9AM-7PM'
        },
        {
            icon: 'mail',
            main: 'cornerstoneit1794@gmail.com',
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
