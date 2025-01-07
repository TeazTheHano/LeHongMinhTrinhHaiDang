export interface StorageItem {
    user: UserFormat,
}

export interface UserFormat {
    lang: string;
    name: string;
}

export interface CardTitleFormat {
    title: string;
    status: 0 | 1 | 2;
    length: number;
    process: number;
    dataID: string;
    type: 0 | 1 | 2 | 3;
}

export interface CardStatusTypeCodeFormat {
    code: CardTitleFormat['status'];
    name: { lang: string, value: string }[];
}

export interface CardCateTypeCodeFormat {
    code: CardTitleFormat['type'];
    name: { lang: string, value: string }[];
}