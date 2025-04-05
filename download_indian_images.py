import os
import requests
from PIL import Image
from io import BytesIO

# Create images directory if it doesn't exist
if not os.path.exists('images'):
    os.makedirs('images')

# Image URLs for different sections
image_urls = {
    # Hero images
    'hero.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',  # Indian landscape
    'about-hero.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',  # Indian culture
    'contact-hero.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',  # Indian architecture
    
    # Trip images
    'trip1.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',  # Himalayan Trek
    'trip2.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',  # Kerala Backwaters
    'trip3.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',  # Rajasthan Heritage
    'trip4.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',  # North East Explorer
    'trip5.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',  # Goa Beach Adventure
    'trip6.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',  # Karnataka Heritage
    
    # Gallery images
    'gallery1.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    'gallery2.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    'gallery3.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    'gallery4.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    'gallery5.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    'gallery6.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    
    # Team member images
    'team1.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    'team2.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    'team3.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    'team4.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    
    # Testimonial images
    'testimonial1.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    'testimonial2.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    'testimonial3.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1'
}

def download_image(url, filename):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            # Open the image using PIL
            img = Image.open(BytesIO(response.content))
            
            # Resize image to appropriate dimensions
            if 'hero' in filename:
                img = img.resize((1920, 1080))
            elif 'trip' in filename or 'gallery' in filename:
                img = img.resize((800, 600))
            elif 'team' in filename or 'testimonial' in filename:
                img = img.resize((400, 400))
            
            # Save the image
            img.save(f'images/{filename}', 'JPEG', quality=85)
            print(f'Successfully downloaded {filename}')
        else:
            print(f'Failed to download {filename}: Status code {response.status_code}')
    except Exception as e:
        print(f'Error downloading {filename}: {str(e)}')

def main():
    print('Starting image downloads...')
    for filename, url in image_urls.items():
        download_image(url, filename)
    print('All downloads completed!')

if __name__ == '__main__':
    main() 