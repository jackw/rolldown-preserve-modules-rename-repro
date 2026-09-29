import type { AnnotationQuery as SchemaAnnotationQuery } from 'ext-schema';

export interface AnnotationQuery extends SchemaAnnotationQuery {
  extra: string;
}

export interface AnnotationSupport<TAnno = AnnotationQuery> {
  prepareAnnotation(annotation: TAnno): TAnno;
}
