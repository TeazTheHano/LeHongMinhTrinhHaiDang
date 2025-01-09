export interface StorageItem {
    user: UserFormat,
    mindmap: MindMapDataFormat,
    mindmapTitle: MindMapTitleFormat,
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

export interface MindMapTitleFormat {
    title: string;
    type: (0 | 1 | 2 | 3)[];
    createTime: Date;
    id: string;
}

export interface MindMapDataFormat {
    id: string;
    // label: MindMapTitleFormat;
    content: string[] | [string, string[]];
    children?: MindMapDataFormat[];
}

export interface QuizFormat {
    id: number,
    chapterTitle: string,
    grade: number,
    data: {
        ques: string[],
        ansA: string[],
        ansB: string[],
        ansC: string[],
        ansD: string[],
        rightAns: ('A' | 'B' | 'C' | 'D')[]
    }
}

export interface FlashCardFormat {
    id: number,
    grade: number,
    chapterTitle: string,
    front: string[],
    back: string[],
}

export interface FillInTheBlank {
    id: number,
    grade: number,
    chapterTitle: string,
    ques: string[],
    ans: string[],
}