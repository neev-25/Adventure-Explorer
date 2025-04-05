# Adventure Explorer

A responsive website for an adventure travel company, showcasing various trips, trip details, company information, and contact forms.

## Project Structure

```
adventure-explorer/
├── index.html              # Homepage
├── trips.html              # Trips listing page
├── trip-details.html       # Individual trip details page
├── about.html              # About us page
├── contact.html            # Contact page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # Main JavaScript file
└── images/                 # Image assets
    ├── hero.jpg
    ├── about-hero.jpg
    ├── contact-hero.jpg
    ├── trip1.jpg
    ├── trip2.jpg
    ├── trip3.jpg
    ├── trip4.jpg
    ├── trip5.jpg
    ├── trip6.jpg
    ├── gallery1.jpg
    ├── gallery2.jpg
    ├── gallery3.jpg
    ├── gallery4.jpg
    ├── gallery5.jpg
    ├── gallery6.jpg
    ├── team1.jpg
    ├── team2.jpg
    ├── team3.jpg
    ├── team4.jpg
    ├── testimonial1.jpg
    ├── testimonial2.jpg
    └── testimonial3.jpg
```

## Features

- Responsive design that works on all devices
- Modern and clean user interface
- Interactive trip booking system
- Detailed trip information pages
- Contact form with validation
- Newsletter subscription
- FAQ section
- Google Maps integration
- Social media links
- Mobile-friendly navigation

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome for icons
- Google Fonts
- Google Maps API

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/adventure-explorer.git
   ```

2. Navigate to the project directory:
   ```
   cd adventure-explorer
   ```

3. Open the website in your browser:
   - For local development, you can use a simple HTTP server:
     ```
     python -m http.server
     ```
   - Then open `http://localhost:8000` in your browser

## Customization

### Changing Colors

The website uses CSS variables for colors, which can be modified in the `styles.css` file:

```css
:root {
    --primary-color: #ff6b6b;
    --secondary-color: #4ecdc4;
    --text-color: #333;
    --light-background: #f8f9fa;
    --border-color: #e9ecef;
}
```

### Adding New Trips

To add a new trip, update the trips array in the JavaScript section of `trips.html` and `trip-details.html`:

```javascript
const trips = [
    {
        id: 1,
        title: "Himalayan Trek",
        location: "Nepal",
        duration: "10 Days",
        groupSize: "Max 12 people",
        difficulty: "Moderate",
        price: 899,
        description: "The Himalayan Trek is a once-in-a-lifetime adventure...",
        heroImage: "images/trip1.jpg"
    },
    // Add more trips here
];
```

### Modifying Content

- Update the HTML files to change text content, images, and structure
- Modify the CSS in `styles.css` to change the appearance
- Update the JavaScript in `main.js` to change functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Font Awesome for the icons
- Google Fonts for the typography
- Unsplash for the stock images
- Google Maps for the map integration 