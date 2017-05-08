export declare type ContentTypeSrc = "src";
export declare type ContentTypeTxt = "txt";
export declare type ContentTypeFragment = "fragment";
export declare type ContentTypePublication = "pub";
export declare type NestedContentTypes = ContentTypeFragment | ContentTypePublication;
export declare type PrimitiveContentTypes = ContentTypeSrc | ContentTypeTxt;
export declare type ContentType = NestedContentTypes | PrimitiveContentTypes;
