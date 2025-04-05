// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Testimonial slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        testimonialSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            testimonialSlider.classList.add('active');
            startX = e.pageX - testimonialSlider.offsetLeft;
            scrollLeft = testimonialSlider.scrollLeft;
        });
        
        testimonialSlider.addEventListener('mouseleave', () => {
            isDown = false;
            testimonialSlider.classList.remove('active');
        });
        
        testimonialSlider.addEventListener('mouseup', () => {
            isDown = false;
            testimonialSlider.classList.remove('active');
        });
        
        testimonialSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - testimonialSlider.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialSlider.scrollLeft = scrollLeft - walk;
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // Here you would typically send the email to your server
                // For now, we'll just show a success message
                const formContainer = this.parentElement;
                formContainer.innerHTML = `
                    <h2>Thank You!</h2>
                    <p>You've been successfully subscribed to our newsletter.</p>
                `;
            }
        });
    }
    
    // Trip card hover effect
    const tripCards = document.querySelectorAll('.trip-card');
    tripCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature, .trip-card, .testimonial');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});

// Add animation classes to CSS
const style = document.createElement('style');
style.textContent = `
    .feature, .trip-card, .testimonial {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .feature.animate, .trip-card.animate, .testimonial.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .testimonial-slider.active {
        cursor: grabbing;
    }
`;
document.head.appendChild(style);

// Trip data
const trips = [
    {
        id: 1,
        title: "Himalayan Trek",
        location: "Uttarakhand, India",
        duration: "7 Days",
        groupSize: "Max 15 people",
        difficulty: "Moderate",
        price: 15999,
        description: "Experience the majestic Himalayas with our guided trek through Uttarakhand. Visit ancient temples, stay in mountain villages, and witness breathtaking views of snow-capped peaks.",
        highlights: [
            "Trek through beautiful mountain trails",
            "Visit ancient temples and monasteries",
            "Stay in traditional mountain villages",
            "Experience local culture and cuisine",
            "Professional guides and support team"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Dehradun",
                description: "Arrive in Dehradun, meet your guide, and prepare for the trek."
            },
            {
                day: 2,
                title: "Trek to Base Camp",
                description: "Start the trek to base camp, passing through beautiful forests."
            },
            {
                day: 3,
                title: "Acclimatization Day",
                description: "Rest day for acclimatization and short hikes around the camp."
            },
            {
                day: 4,
                title: "Summit Day",
                description: "Early morning trek to the summit, witness sunrise from the top."
            },
            {
                day: 5,
                title: "Return Journey",
                description: "Trek back to base camp, celebrate the successful expedition."
            },
            {
                day: 6,
                title: "Cultural Experience",
                description: "Visit local villages, interact with locals, and experience their culture."
            },
            {
                day: 7,
                title: "Departure",
                description: "Return to Dehradun and depart with unforgettable memories."
            }
        ],
        heroImage: "images/trip1.jpg"
    },
    {
        id: 2,
        title: "Kerala Backwaters",
        location: "Kerala, India",
        duration: "5 Days",
        groupSize: "Max 10 people",
        difficulty: "Easy",
        price: 12999,
        description: "Explore the serene backwaters of Kerala in a traditional houseboat. Experience the unique culture, cuisine, and natural beauty of God's own country.",
        highlights: [
            "Houseboat cruise through backwaters",
            "Visit to spice plantations",
            "Traditional Kerala massage",
            "Local village visits",
            "Traditional dance performances"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Kochi",
                description: "Arrive in Kochi, explore Fort Kochi and Chinese fishing nets."
            },
            {
                day: 2,
                title: "Backwater Cruise",
                description: "Board houseboat and cruise through the backwaters."
            },
            {
                day: 3,
                title: "Cultural Experience",
                description: "Visit local villages and spice plantations."
            },
            {
                day: 4,
                title: "Relaxation Day",
                description: "Enjoy traditional massage and local cuisine."
            },
            {
                day: 5,
                title: "Departure",
                description: "Return to Kochi and depart."
            }
        ],
        heroImage: "images/trip2.jpg"
    },
    {
        id: 3,
        title: "Rajasthan Heritage",
        location: "Rajasthan, India",
        duration: "8 Days",
        groupSize: "Max 12 people",
        difficulty: "Easy",
        price: 18999,
        description: "Journey through the royal state of Rajasthan. Visit magnificent forts, palaces, and experience the rich cultural heritage of the land of kings.",
        highlights: [
            "Visit to majestic forts and palaces",
            "Desert safari in Jaisalmer",
            "Traditional folk performances",
            "Local village visits",
            "Camel ride in the desert"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Jaipur",
                description: "Arrive in Jaipur, visit Amber Fort and City Palace."
            },
            {
                day: 2,
                title: "Jaipur Exploration",
                description: "Visit Hawa Mahal, Jantar Mantar, and local markets."
            },
            {
                day: 3,
                title: "Journey to Jodhpur",
                description: "Travel to Jodhpur, visit Mehrangarh Fort."
            },
            {
                day: 4,
                title: "Jodhpur to Jaisalmer",
                description: "Travel to Jaisalmer, evening desert safari."
            },
            {
                day: 5,
                title: "Jaisalmer Fort",
                description: "Explore Jaisalmer Fort and local markets."
            },
            {
                day: 6,
                title: "Desert Camp",
                description: "Stay in desert camp, enjoy folk performances."
            },
            {
                day: 7,
                title: "Return Journey",
                description: "Travel back to Jaipur, evening cultural show."
            },
            {
                day: 8,
                title: "Departure",
                description: "Depart from Jaipur with unforgettable memories."
            }
        ],
        heroImage: "images/trip3.jpg"
    },
    {
        id: 4,
        title: "North East Explorer",
        location: "Assam & Meghalaya, India",
        duration: "6 Days",
        groupSize: "Max 8 people",
        difficulty: "Moderate",
        price: 16999,
        description: "Discover the unexplored beauty of North East India. Visit living root bridges, tea gardens, and experience the unique culture of the region.",
        highlights: [
            "Visit to living root bridges",
            "Tea garden experience",
            "Waterfall exploration",
            "Local tribal village visits",
            "Traditional cuisine experience"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Guwahati",
                description: "Arrive in Guwahati, visit Kamakhya Temple."
            },
            {
                day: 2,
                title: "Journey to Shillong",
                description: "Travel to Shillong, visit local markets."
            },
            {
                day: 3,
                title: "Living Root Bridges",
                description: "Trek to living root bridges in Cherrapunji."
            },
            {
                day: 4,
                title: "Waterfall Exploration",
                description: "Visit various waterfalls and caves."
            },
            {
                day: 5,
                title: "Tea Garden Visit",
                description: "Visit tea gardens and learn about tea processing."
            },
            {
                day: 6,
                title: "Departure",
                description: "Return to Guwahati and depart."
            }
        ],
        heroImage: "images/trip4.jpg"
    },
    {
        id: 5,
        title: "Goa Beach Adventure",
        location: "Goa, India",
        duration: "5 Days",
        groupSize: "Max 10 people",
        difficulty: "Easy",
        price: 11999,
        description: "Experience the perfect blend of beaches, culture, and adventure in Goa. From water sports to heritage walks, discover the best of Goa.",
        highlights: [
            "Water sports activities",
            "Heritage walk in Old Goa",
            "Spice plantation visit",
            "Sunset cruise",
            "Local market exploration"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Goa",
                description: "Arrive in Goa, evening beach relaxation."
            },
            {
                day: 2,
                title: "Water Sports",
                description: "Enjoy various water sports activities."
            },
            {
                day: 3,
                title: "Heritage Tour",
                description: "Visit Old Goa churches and spice plantation."
            },
            {
                day: 4,
                title: "Island Cruise",
                description: "Sunset cruise and dolphin watching."
            },
            {
                day: 5,
                title: "Departure",
                description: "Last minute shopping and departure."
            }
        ],
        heroImage: "images/trip5.jpg"
    },
    {
        id: 6,
        title: "Karnataka Heritage",
        location: "Karnataka, India",
        duration: "7 Days",
        groupSize: "Max 12 people",
        difficulty: "Easy",
        price: 14999,
        description: "Explore the rich heritage of Karnataka. Visit ancient temples, historical monuments, and experience the diverse culture of South India.",
        highlights: [
            "Visit to ancient temples",
            "Historical monument exploration",
            "Local village visits",
            "Traditional dance performances",
            "Local cuisine experience"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Bangalore",
                description: "Arrive in Bangalore, city tour."
            },
            {
                day: 2,
                title: "Mysore Palace",
                description: "Visit Mysore Palace and local markets."
            },
            {
                day: 3,
                title: "Hampi Exploration",
                description: "Explore the ruins of Hampi."
            },
            {
                day: 4,
                title: "Temple Tour",
                description: "Visit ancient temples and learn about their history."
            },
            {
                day: 5,
                title: "Cultural Experience",
                description: "Traditional dance performance and local cuisine."
            },
            {
                day: 6,
                title: "Local Village Visit",
                description: "Visit local villages and interact with locals."
            },
            {
                day: 7,
                title: "Departure",
                description: "Return to Bangalore and depart."
            }
        ],
        heroImage: "images/trip6.jpg"
    }
]; 