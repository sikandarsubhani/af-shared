# Unified Footer Solution

This solution provides a unified footer component that works consistently across both af_website and af-tools repositories using the shared af-shared-sub submodule.

## Architecture

### Shared Components (`af-shared-sub`)
- **`utils/base-components.ts`**: Provides abstraction for Next.js components (Image, Link, NoPrefetchLink)
- **`components/navigation/Footer.tsx`**: The main shared footer component that accepts props for different URLs
- **`components/Icons.tsx`**: Shared icon components
- **`types/types.ts`**: Shared TypeScript types

### Repository-Specific Components
Each repository has its own wrapper Footer component that:
1. Imports the initialization file to set up shared utilities
2. Provides repository-specific URLs using their own pageUrl functions
3. Wraps the shared Footer component with appropriate props

## Usage

### In af_website
```tsx
// src/af-shared/components/navigation/Footer.tsx
import '../init';
import SharedFooter, { FooterProps } from '../../../../../af-shared-sub/components/navigation/Footer';
import { pageUrl } from '@/utils/utils';
import { PAGE } from '@/utils/constants';

function Footer() {
  const footerProps: FooterProps = {
    signupUrl: pageUrl(PAGE.Signup),
    docsUrls: {
      documentation: pageUrl(PAGE.APIFreaks),
      swagger: pageUrl(PAGE.Swagger),
      // ... other URLs
    },
  };

  return <SharedFooter {...footerProps} />;
}
```

### In af-tools
```tsx
// src/af-shared/components/navigation/Footer.tsx
import '../init';
import SharedFooter, { FooterProps } from '../../../../../af-shared-sub/components/navigation/Footer';
import { websiteAbsoluteURL } from '@/utils/utils';
import { WebsitePagePath } from '@/utils/constants';

function Footer() {
  const footerProps: FooterProps = {
    signupUrl: websiteAbsoluteURL(WebsitePagePath.SignUp),
    docsUrls: {
      documentation: websiteAbsoluteURL(WebsitePagePath.Docs),
      // ... other URLs
    },
  };

  return <SharedFooter {...footerProps} />;
}
```

## Key Benefits

1. **No Duplication**: Single footer implementation in af-shared-sub
2. **Repository Independence**: Each repository provides its own URL generation logic
3. **Type Safety**: Full TypeScript support with proper prop types
4. **Flexibility**: Easy to customize URLs per repository while maintaining consistent UI
5. **Maintainability**: Changes to footer structure only need to be made in one place

## How It Works

1. **Initialization**: Each repository calls its `init.ts` file which sets up base components (Image, Link, NoPrefetchLink) from Next.js
2. **Abstraction**: The shared Footer component uses these base components instead of importing Next.js directly
3. **URL Injection**: Repository-specific wrapper components generate URLs using their own constants and utility functions
4. **Rendering**: The shared Footer receives all necessary URLs as props and renders consistently

## Setup for New Repositories

To use this footer in a new repository:

1. Create an `init.ts` file that sets up base components
2. Create a wrapper Footer component that imports the shared Footer
3. Map your repository's page constants to the FooterProps interface
4. Import the init file before using the Footer

This approach eliminates conflicts while providing a truly unified footer experience across all repositories.
