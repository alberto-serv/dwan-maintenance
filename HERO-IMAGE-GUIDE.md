# Adding a Hero Image

## Quick Start

1. **Get your hero image ready**
   - Recommended size: **1920x1080px** (or larger)
   - Aspect ratio: **16:9** works best
   - Format: JPG, PNG, or WebP
   - Subject: Elevator machinery, technician at work, or commercial building

2. **Add the image to your project**
   - Place your image in: `/public/images/`
   - Name it: `hero-background.jpg` (or `.png`, `.webp`)

3. **Update the code**
   - Open: `app/page.tsx`
   - Find line ~51: `src="/images/placeholder-hero.svg"`
   - Change to: `src="/images/hero-background.jpg"`

## Example

```tsx
<Image
  src="/images/hero-background.jpg"  // ← Change this line
  alt="Dwan Elevator Service"
  fill
  className="object-cover opacity-40"
  priority
/>
```

## Image Guidelines

### What Makes a Good Hero Image?

✅ **Good Options:**
- Elevator technician in Dwan uniform working on equipment
- Clean, modern elevator machine room
- Commercial building exterior (implies elevator service)
- Close-up of elevator mechanical components
- Team of technicians with professional appearance

❌ **Avoid:**
- Residential stairlifts
- Blurry or low-quality images
- Images with too much text overlay
- Stock photos that look generic
- Dark images (they'll get even darker with overlay)

### Technical Requirements

- **Minimum Resolution:** 1920x1080px
- **Recommended Resolution:** 2560x1440px (for Retina displays)
- **File Size:** Keep under 500KB for fast loading
- **Format Priority:**
  1. WebP (best performance)
  2. JPG (good compression)
  3. PNG (if transparency needed)

## Adjusting Image Opacity

The hero image has an overlay to ensure text remains readable. If your image is:

- **Too dark:** Reduce overlay opacity in `app/page.tsx` line ~55
  ```tsx
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
  ```

- **Too light:** Increase overlay opacity
  ```tsx
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90"></div>
  ```

- **Too visible/distracting:** Reduce image opacity in `app/page.tsx` line ~52
  ```tsx
  className="object-cover opacity-30"  // Lower number = more subtle
  ```

## Alternative: Use a Solid Background

If you prefer no image, just a solid black background:

1. Remove or comment out the `<Image>` component
2. Keep the section's `bg-black` class

```tsx
<section className="relative bg-black text-white overflow-hidden min-h-[600px] md:min-h-[700px]">
  {/* <Image ... /> commented out or removed */}

  {/* Keep just the dot pattern */}
  <div className="absolute inset-0 opacity-5 z-10">
    ...
  </div>
</section>
```

## Where to Find Good Images

- **Your own photos:** Best option - authentic Dwan Elevator work
- **Unsplash:** Search "elevator technician" or "industrial maintenance"
- **Pexels:** Search "commercial building" or "elevator shaft"
- **Professional photographer:** Hire for a photoshoot at a job site

## Need Help?

If you need help optimizing or placing your hero image, reach out to your development team.
