export interface StorageItem {
    user: UserFormat,
}

export interface UserFormat {
    name: string;
}

export interface CardFormat {
    title: string;
    status: 'done' | 'new' | 'progress';

}