import os
import requests
from urllib.parse import urlparse
from PIL import Image
from io import BytesIO

# Create images directory if it doesn't exist
if not os.path.exists('images'):
    os.makedirs('images')

# Image URLs for different sections
image_urls = {
    # Hero images
    'hero.jpg': 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    'about-hero.jpg': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    'contact-hero.jpg': 'https://images.unsplash.com/photo-1488085061387-422e29b40080',
    
    # Trip images
    'trip1.jpg': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',  # Himalayan Trek
    'trip2.jpg': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',  # Beach Paradise
    'trip3.jpg': 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',  # Safari Adventure
    'trip4.jpg': 'https://images.unsplash.com/photo-1473445730015-841f29a9490b',  # Mountain Expedition
    'trip5.jpg': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',  # Island Hopping
    'trip6.jpg': 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8',  # Desert Safari
    
    # Gallery images
    'gallery1.jpg': 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    'gallery2.jpg': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    'gallery3.jpg': 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',
    'gallery4.jpg': 'https://images.unsplash.com/photo-1473445730015-841f29a9490b',
    'gallery5.jpg': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    'gallery6.jpg': 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8',
    
    # Team member images
    'team1.jpg': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    'team2.jpg': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    'team3.jpg': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    'team4.jpg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    
    # Testimonial images
    'testimonial1.jpg': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    'testimonial2.jpg': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    'testimonial3.jpg': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
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