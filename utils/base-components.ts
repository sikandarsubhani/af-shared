// Base components that repositories need to implement
export type ImageProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
};

export type LinkProps = {
  href: string;
  children: any; // ReactNode equivalent
  className?: string;
  prefetch?: boolean;
};

export type BaseComponents = {
  Image: any; // React.ComponentType<ImageProps>
  Link: any; // React.ComponentType<LinkProps>
  NoPrefetchLink: any; // React.ComponentType<LinkProps>
};

// Global variable to store the component implementations
let baseComponents: BaseComponents | null = null;

export function setBaseComponents(components: BaseComponents): void {
  baseComponents = components;
}

export function getBaseComponents(): BaseComponents {
  if (!baseComponents) {
    throw new Error('Base components not set. Call setBaseComponents() first.');
  }
  return baseComponents;
}
