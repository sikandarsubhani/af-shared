// Shared utilities for af-shared submodule
// This file provides a bridge between different repository implementations

// Type definition for pageUrl function from both repositories
export type PageUrlFunction = (page: any, data?: Record<string, string | number>) => string;

// This will be injected by the consuming repositories
let pageUrlImpl: PageUrlFunction | null = null;

/**
 * Sets the pageUrl implementation to be used by the shared components
 * This should be called by each repository during initialization
 */
export function setPageUrlImplementation(impl: PageUrlFunction): void {
  pageUrlImpl = impl;
}

/**
 * Shared pageUrl function that delegates to the repository-specific implementation
 */
export function pageUrl(page: any, data?: Record<string, string | number>): string {
  if (!pageUrlImpl) {
    throw new Error('pageUrl implementation not set. Call setPageUrlImplementation() first.');
  }
  return pageUrlImpl(page, data);
}

/**
 * Default pageUrl implementation that can be used as fallback
 * This creates basic URL patterns based on page enum values
 */
export function createDefaultPageUrl(page: any): string {
  // Convert PAGE enum to kebab-case URL
  const pageStr = page.toString();
  const kebabCase = pageStr
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
  
  return `/${kebabCase}`;
}
