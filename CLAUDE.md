# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 travel blog application showcasing travel destinations with detailed information about activities, tips, and recommendations. The app uses TypeScript, Tailwind CSS, and shadcn/ui components.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Project Architecture

### Data Layer

The application uses a **local JSON file data strategy**:

- Data is read from local `/data` directory (gitignored)
- All destinations are stored as individual JSON files

Key implementation files:
- `lib/apis.ts` - Main API layer with functions like `getAllDestinationMeta()` and `getDestinationBySlug()`
- `lib/local.ts` - Local filesystem data fetching (gitignored)
- `lib/types.ts` - TypeScript type definitions for destinations, activities, tips, etc.
- `lib/constants.ts` - Design system constants (colors, letter spacing)
- `lib/utils.ts` - Utility functions (cn for className merging)

**Important**: The `/data` directory and `lib/local.ts` are gitignored. When working with data:
- Each destination has its own JSON file in `/data` (e.g., `sydney.json`, `singapore.json`)
- `destinations.json` contains an array of all destination metadata (slug, name, country, description)
- The API layer (`lib/apis.ts`) fetches from local files
- Images are not currently implemented in the application

### Routing Structure

Next.js App Router with:
- `/` - Home page displaying all destination cards (app/page.tsx)
- `/[slug]` - Dynamic destination detail pages (app/[slug]/page.tsx)

Static site generation is used via `generateStaticParams()` in the destination page.

### Component Organization

Components are organized by feature:

**Home components** (`components/home/`):
- `Header` - Sticky site header with title and subtitle
- `Footer` - Site footer with copyright text
- `DestinationCards` - Responsive grid layout (1-4 columns based on screen width)
- `DestinationCard` - Individual destination card with placeholder area, title, country (with map pin icon), and description

**Destination components** (`components/destination/`):
- `DestinationHeader` - Page title with back button (using lucide-react ChevronLeft icon)
- `TipsAccordion` - Collapsible tips section
- `RecommendationCards` - Grid of recommendation cards
- `ActivitiesAccordion` - Collapsible activities section
- `SuburbsAccordion` - Nested collapsible suburbs and locations

**UI components** (`components/ui/`):
- shadcn/ui components (button, card, accordion, separator)
- Configured via `components.json` with path alias `@/*`

**Icon Library**: Uses `lucide-react` for all icons (MapPin, ChevronLeft, Loader2)

### Type System

Core types in `lib/types.ts`:

```typescript
DestinationMeta - Basic info (slug, name, country, description)
Destination - Full destination with overview, tips, activities, suburbs
Tip - Travel tips with heading and details
Activity - Activities with highlights
Suburb - Locations with nested sub-locations
```

### Styling

- Tailwind CSS with custom theme in `tailwind.config.ts`
- CSS variables for theming (HSL color system)
- Dark mode support configured with `darkMode: ["class"]`
- Custom animations for accordions
- Global styles in `app/globals.css`
- Inter font family imported from Google Fonts

## Key Patterns

### Data Fetching
All data fetching happens server-side in async Server Components. Client components receive data as props.

### Error Handling
- Pages include try-catch with user-friendly error messages
- `notFound()` is used for missing destinations
- Null checks for optional destination fields (tips, activities, etc.)

### Static Generation
The `[slug]` route uses `generateStaticParams()` to pre-render all destination pages at build time for optimal performance.

### Optional Properties
Many destination fields are optional (tips, activities, suburbs, recommendations). Components should handle undefined values gracefully.
