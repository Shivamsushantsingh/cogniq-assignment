# Cogniq AI - Next.js Home Page

Building Intelligent, scalable AI solutions for the Next Generation.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the home page.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## Project Structure

```
cogniq-ai/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Home page
│   ├── globals.css        # Global styles
├── components/
│   ├── Header.js          # Header component
│   ├── Header.module.css  # Header styles
│   ├── Hero.js            # Hero section component
│   ├── Hero.module.css    # Hero section styles
├── Images/                # Image assets folder
├── package.json
├── next.config.js
├── jsconfig.json
└── .gitignore
```

## Features

- **Modern Next.js 14** with App Router
- **React 18** for component-based UI
- **CSS Modules** for scoped styling
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Smooth Animations** - Floating decorative elements
- **Sticky Navigation** - Header stays visible while scrolling
- **Accessibility** - Semantic HTML and proper ARIA labels

## Customization

### Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary-color: #4F3DFF;
  --secondary-color: #6B5BFF;
  --text-dark: #1F2937;
  --text-light: #6B7280;
  --bg-light: #F9FAFB;
  --border-color: #E5E7EB;
  --white: #FFFFFF;
}
```

### Content

Edit the components in the `components/` folder to customize:
- Header navigation links
- Hero title and subtitle
- Call-to-action buttons

### Images

Add images to the `Images/` folder and import them using Next.js Image component for optimization.

## Deployment

The project is ready to be deployed to Vercel or other hosting platforms:

```bash
npm run build
npm start
```

## License

MIT
