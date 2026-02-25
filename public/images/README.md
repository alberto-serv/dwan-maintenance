# Images Directory

Place your images here to use them in the landing page.

## Hero Image

Add your hero image as:
- `hero-background.jpg` or `hero-background.png` - Main hero background image
- Recommended size: 1920x1080px minimum
- Format: JPG or WebP for best performance

## Logo

- `dwan-logo.png` or `dwan-logo.svg` - Company logo
- Recommended: SVG for crisp scaling, or PNG with transparent background

## Other Images

You can add any other images needed for the landing page:
- Testimonial photos
- Team photos
- Elevator service photos
- Certification badges

## Usage

Images in this directory can be referenced in the code as:
```jsx
import Image from 'next/image'

<Image
  src="/images/hero-background.jpg"
  alt="Description"
  width={1920}
  height={1080}
/>
```

Or as background images:
```jsx
style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}
```
