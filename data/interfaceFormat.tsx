export interface StorageItem {
    user: UserFormat,
    mindmap: MindMapDataFormat,
    mindmapTitle: MindMapTitleFormat,
    cardTitle: CardTitleFormat,
    flashCard: FlashCardFormat,
    lastTouchItem: { id: string, type: string, },
    questTitle: QuestTitleFormat,
    chapterTitle: ChapterTitleFormat,
    darkMode: boolean,
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
    type: (0 | 1 | 2 | 3)[];
    grade: number;
}

export interface CardStatusTypeCodeFormat {
    code: CardTitleFormat['status'];
    name: { lang: string, value: string }[];
}

export interface CardCateTypeCodeFormat {
    code: number;
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
export interface InteractDataTitleFormat {
    id: number,
    chapterTitle: string,
    grade: number,
    type?: (0 | 1 | 2 | 3)[]
}

export interface QuizFormat {
    label: InteractDataTitleFormat,
    data: {
        ques: string[],
        ansA: string[],
        ansB: string[],
        ansC: string[],
        ansD: string[],
        rightAns: ('A' | 'B' | 'C' | 'D' | string)[]
    }
}

export interface FlashCardFormat {
    label: InteractDataTitleFormat,
    front: string[],
    back: string[],
}

export interface FillInTheBlankFormat {
    label: InteractDataTitleFormat,
    ques: string[],
    ans: string[],
}

export interface ChapterTitleFormat {
    id: number,
    grade: number,
    chapterTitle: string
    quizID?: number,
    fillInTheBlankID?: number
    quizStatus?: [number, number],
    fillInTheBlankStatus?: [number, number],
    type: number[],
    status: 0 | 1 | 2
}

export interface QuestTitleFormat {
    id: string,
    chapterTitle: string
    questID: number,
    length: number,
    process: number,
    status: number
    kind: 'quiz' | 'fillInTheBlank',
}