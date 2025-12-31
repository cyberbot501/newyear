# Yoruba Landing Page - Happy New Year 2026

A beautiful landing page for Akinrinde Joel (Dev-cyberbot501 / Oni Imo Ero Cyberbot501) built with Next.js, featuring traditional Yoruba design elements.

## Features

- 🎨 Traditional Yoruba aesthetic design with geometric patterns and crazy animations
- 🌍 All text in Yoruba language
- 📸 Hero section with profile image
- 🎥 Videos/Episodes section
- 📧 Contact form with validation and social media links
- 🧭 Sticky navigation bar with smooth scrolling
- ✨ Modern, responsive design with animated background elements

## Getting Started

### Installation

```bash
npm install
```

### Add Your Profile Image

1. Add your profile picture to the `public` folder as `profile.jpg`
2. The image will be automatically displayed in the hero section

### Update Contact Links and Form

1. **Social Media Links**: Edit `app/page.tsx` and update the following links in the Contact section:
   - LinkedIn: Replace `https://linkedin.com/in/your-profile` with your LinkedIn profile
   - TikTok: Replace `https://tiktok.com/@your-profile` with your TikTok profile
   - Email: Replace `your.email@example.com` with your email address

2. **Contact Form API**: Edit `components/ContactForm.tsx` to connect the form to your backend API:
   - Uncomment the fetch call in the `handleSubmit` function
   - Update the API endpoint URL (`/api/contact`) to match your backend
   - Or use a service like Formspree, EmailJS, or similar

### Update Video/Episode Links

Edit the Videos section in `app/page.tsx` to add links to your actual videos/episodes.

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Traditional Yoruba design patterns

## Yoruba Translations Used

- **Odun Tuntun O!** - Happy New Year!
- **Kaabo si Odun 2026** - Welcome to 2026
- **Mo ni Akinrinde Joel** - I am Akinrinde Joel
- **Oni Imo Ero Cyberbot501** - Knowledge Seeker Cyberbot501
- **Ki ni mo n se?** - What do I do?
- **Awon Aworan mi** - My Videos/Episodes
- **Ba mi sọrọ** - Contact me
- **Ile** - Home
- **Nipa mi** - About me
- **Orukọ rẹ** - Your name
- **Imeeli rẹ** - Your email
- **Irọrùn rẹ** - Your message
- **Fi ran** - Send
- **Pade mi lori Awon Ẹrọ Ayelujara** - Find me on Social Media

# newyear
