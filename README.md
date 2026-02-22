# Shakti Jyothi Foundation - NGO Website

A modern, production-quality single-page website for Shakti Jyothi Foundation, built with React, Vite, and Tailwind CSS.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### 4. Preview Production Build

```bash
npm run preview
```

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Functional Components** - Modern React patterns

## Features

- ✅ Fully responsive (mobile-first design)
- ✅ Smooth scrolling navigation
- ✅ Animated impact counters
- ✅ Donation modal with form validation
- ✅ Modern UI with orange color theme (#f97316)
- ✅ Clean component architecture
- ✅ Accessible and SEO-friendly

## Project Structure

```
src/
  components/
    Navbar.jsx       - Sticky navigation bar
    Hero.jsx         - Hero section with CTA
    About.jsx        - About section with mission/vision
    Programs.jsx     - Program cards
    Impact.jsx       - Animated impact statistics
    Gallery.jsx      - Image gallery
    Testimonials.jsx - Testimonial cards
    CTA.jsx          - Call-to-action section
    Footer.jsx       - Footer with links and contact
    DonationModal.jsx - Donation form modal
  App.jsx            - Main app component
  main.jsx           - Entry point
  index.css          - Tailwind imports
```

## Color Theme

- Primary: `#f97316` (Orange)
- Configured in `tailwind.config.js`
