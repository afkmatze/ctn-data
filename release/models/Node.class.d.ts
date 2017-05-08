import { CtnId, CtnLocale } from '../interfaces';
import * as Types from '../types';
export declare abstract class Node<T extends Types.ContentType> implements CtnId, CtnLocale {
    type: T;
    cuid: string;
    locale: string;
}
