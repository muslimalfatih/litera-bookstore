# Litera Bookstore

A conversion-optimized Shopify theme built for independent bookstores and literary retailers. Litera combines simple design with performance-first architecture to create an exceptional book shopping experience.

[Live Demo](https://litera-3643.myshopify.com/) | [Documentation](#installation)

## Overview

Litera Bookstore is a custom Shopify theme developed to showcase best practices in e-commerce design and development. The theme emphasizes content curation, fast page loads, and an intuitive shopping experience tailored specifically for book retailers.

### Features

- **Curated Shopping Experience**: Purpose-built layouts for book discovery and browsing
- **Performance Optimized**: Fast load times with minimal JavaScript dependencies
- **Mobile-First Design**: Fully responsive across all devices and screen sizes
- **SEO Ready**: Semantic HTML and structured data for better search visibility
- **Accessibility Focused**: WCAG 2.1 AA compliant for inclusive user experience
- **Collection Filtering**: Automated collections by genre, format, and category
- **Product Metadata**: Custom fields for author, ISBN, publisher, and ratings
- **Multi-Currency Support**: Built-in support for Indonesian Rupiah (IDR)

## Project Structure

```
litera-bookstore/
├── assets/              # Static assets (CSS, JS, images, fonts)
├── config/              # Theme settings and configuration
├── layout/              # Base template structure
│   └── theme.liquid     # Master layout wrapper
├── locales/             # Translation files for internationalization
├── sections/            # Reusable page sections
│   ├── header.liquid
│   ├── footer.liquid
│   ├── product-grid.liquid
│   └── hero-banner.liquid
├── snippets/            # Reusable Liquid components
│   ├── product-card.liquid
│   ├── price.liquid
│   └── icon-*.liquid
├── templates/           # Page templates
│   ├── index.liquid     # Homepage
│   ├── product.liquid   # Product detail page
│   ├── collection.liquid
│   └── cart.liquid
└── README.md
```

## Technical Stack

- **Platform**: Shopify
- **Templating**: Liquid
- **Styling**: CSS3 with CSS Custom Properties
- **JavaScript**: Vanilla ES6+ (minimal dependencies)
- **Version Control**: Git
- **Theme Development**: Shopify CLI

## Installation

### Prerequisites

- Shopify Partner account or store owner access
- Node.js v18+ and npm v9+
- Shopify CLI v3.x
- Git

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/litera-bookstore.git
   cd litera-bookstore
   ```

2. Install Shopify CLI:
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

3. Authenticate with your Shopify store:
   ```bash
   shopify auth login
   ```

4. Connect to your development store:
   ```bash
   shopify theme dev --store=your-store.myshopify.com
   ```

5. Push theme to Shopify:
   ```bash
   shopify theme push
   ```

## Configuration

### Metafields Setup

The theme uses custom metafields for enhanced product information. Create these definitions in your Shopify admin:

**Admin > Settings > Custom data > Products**

| Namespace & Key | Type | Description |
|----------------|------|-------------|
| `custom.author` | Single line text | Book author name |
| `custom.isbn` | Single line text | ISBN-13 identifier |
| `custom.publisher` | Single line text | Publishing house |
| `custom.publication_year` | Number (integer) | Year published |
| `custom.pages` | Number (integer) | Page count |
| `custom.language` | Single line text | Book language |
| `custom.genre` | Single line text | Primary genre |
| `custom.rating` | Decimal | Average rating (1-5) |

### Collection Configuration

Create automated collections with these conditions:

- **Fiction**: `Product tag equals "fiction"`
- **Non-Fiction**: `Product tag equals "non-fiction"`
- **Bestsellers**: `Product tag equals "bestseller"`
- **New Releases**: `Product tag equals "new-release"`

### Currency Settings

Set your store currency to Indonesian Rupiah (IDR):

**Settings > Store details > Store currency > IDR**

## Theme Customization

### Theme Settings

Access theme customization via:

**Online Store > Themes > Customize**

Available settings:

- **Colors**: Primary, accent, background, and text colors
- **Typography**: Heading and body font selection
- **Layout**: Container width and spacing options
- **Navigation**: Menu structure and visibility
- **Homepage**: Hero banner, featured collections, content blocks

### Adding New Sections

1. Create a new file in `/sections/`:
   ```liquid
   {% comment %}
     Section: Custom Feature
     Description: Brief description of section purpose
   {% endcomment %}

   <div class="custom-feature">
     {{ section.settings.content }}
   </div>

   {% schema %}
   {
     "name": "Custom Feature",
     "settings": [
       {
         "type": "text",
         "id": "content",
         "label": "Content",
         "default": "Feature content"
       }
     ],
     "presets": [
       {
         "name": "Custom Feature"
       }
     ]
   }
   {% endschema %}
   ```

2. Add section to page templates via theme editor

## Development Workflow

### Local Development

Start local development server:

```bash
shopify theme dev
```

This creates a live preview URL that updates in real-time as you edit theme files.

### Theme Check (Linting)

Run theme validation:

```bash
shopify theme check
```

Fix issues before deployment to ensure compliance with Shopify standards.

### Deployment

Deploy to production:

```bash
shopify theme push --theme=THEME_ID
```

Or publish via theme editor:

**Online Store > Themes > [Theme Name] > Actions > Publish**

## Performance Optimization

### Implemented Optimizations

- **Lazy Loading**: Images load on scroll using native `loading="lazy"`
- **CSS Optimization**: Critical CSS inlined, non-critical deferred
- **JavaScript Splitting**: Code split by page/feature
- **Asset Compression**: Images optimized and served via Shopify CDN
- **Minimal Dependencies**: No jQuery or heavy frameworks

### Performance Metrics

Target Lighthouse scores:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Accessibility

Theme follows WCAG 2.1 Level AA guidelines:

- Semantic HTML5 structure
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast ratios meet standards
- Screen reader tested
- Focus indicators on interactive elements

## SEO Features

- Structured data (JSON-LD) for products
- Semantic HTML markup
- Optimized meta titles and descriptions
- Canonical URLs
- XML sitemap (Shopify generated)
- Open Graph tags for social sharing
- Alt text for all images

### Code Standards

- Follow Shopify Liquid style guide
- Use semantic HTML5 elements
- Write self-documenting code
- Add comments for complex logic
- Test across browsers before submitting

## Acknowledgments

- Built on Shopify's Dawn theme architecture
- Product images from Amazon Books
- Icons from Shopify Polaris
- Inspired by independent bookstore design principles

---

**Note**: This is a development/portfolio project. For production use, ensure all licensing requirements are met for any third-party assets or code.
