
export type ContentTypeSrc = "src"
export type ContentTypeTxt = "txt"
export type ContentTypeFragment = "fragment"
export type ContentTypePublication = "pub"

export type NestedContentTypes = ContentTypeFragment | ContentTypePublication
export type PrimitiveContentTypes = ContentTypeSrc | ContentTypeTxt

export type ContentType = NestedContentTypes | PrimitiveContentTypes