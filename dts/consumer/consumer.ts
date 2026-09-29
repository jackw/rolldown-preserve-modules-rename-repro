import type { AnnotationSupport } from '../dist/index.js';

// A deliberate type error, so TypeScript prints the types it resolved.
export const support: AnnotationSupport = { prepareAnnotation: (annotation: number) => annotation };
