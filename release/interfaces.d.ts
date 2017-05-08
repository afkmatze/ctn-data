export interface CtnId {
    cuid: string;
}
export interface CtnLocale {
    locale: string;
}
export interface CtnRevised extends CtnId {
    Rev: string;
    timestamp: number;
}
export interface CtnNested {
    children: (CtnId)[];
}
