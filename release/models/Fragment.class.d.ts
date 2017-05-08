import { CtnId, CtnLocale } from '../interfaces';
import * as Types from '../types';
export declare class Fragment<T extends Types.ContentType> implements CtnId, CtnLocale {
    type: T;
    cuid: string;
    locale: string;
}
