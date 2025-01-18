import * as FORMATDATA from "./interfaceFormat";

export const CARD_STATUS_TYPE_CODE: FORMATDATA.CardStatusTypeCodeFormat[] = [
    {
        code: 0,
        name: [
            { lang: 'vi-VN', value: "Mới" },
            { lang: "en-US", value: "New" },
        ],
    },
    {
        code: 1,
        name: [
            { lang: 'vi-VN', value: "Chưa hoàn thành" },
            { lang: "en-US", value: "In progress" },
        ],
    },
    {
        code: 2,
        name: [
            { lang: 'vi-VN', value: "Đã Hoàn thành" },
            { lang: "en-US", value: "Done" },
        ],
    },
]

export const CARD_CATE_TYPE_CODE: FORMATDATA.CardCateTypeCodeFormat[] = [
    {
        code: 0,
        name: [
            { lang: 'vi-VN', value: "Đại số" },
            { lang: "en-US", value: "Algebra" },
        ],
    },
    {
        code: 1,
        name: [
            { lang: 'vi-VN', value: "Hình học" },
            { lang: "en-US", value: "Geometry" },
        ]
    },
    {
        code: 2,
        name: [
            { lang: 'vi-VN', value: "Lý thuyết" },
            { lang: "en-US", value: "Theory" },
        ]
    },
    {
        code: 3,
        name: [
            { lang: 'vi-VN', value: "Công thức" },
            { lang: "en-US", value: "Equation" },
        ]
    }
]

export const quizDataList: FORMATDATA.QuizFormat[] = [
    {
        label: {
            id: 1,
            grade: 6,
            type: [0],
            chapterTitle: 'Chương 1',
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_1/ansD/3.png`),
            ],
            rightAns: [
                'D',
                'D',
                'B',
            ]
        }
    },
    {
        label: {
            id: 2,
            grade: 6,
            type: [0],
            chapterTitle: 'Chương 2',
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_2/ansD/3.png`),
            ],
            rightAns: [
                'C',
                'D',
                'A',
            ]
        }
    },
    {
        label: {
            id: 3,
            grade: 6,
            type: [0],
            chapterTitle: 'Chương 3',
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_3/ansD/3.png`),
            ],
            rightAns: [
                'D',
                'A',
                'C',
            ]
        }
    },
    {
        label: {
            id: 4,
            grade: 6,
            type: [1],
            chapterTitle: 'Chương 4',
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_4/ansD/3.png`),
            ],
            rightAns: [
                'D',
                'A',
                'C',
            ]
        }
    },
    {
        label: {
            id: 5,
            grade: 6,
            type: [1],
            chapterTitle: 'Chương 5',
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_5/ansD/3.png`),
            ],
            rightAns: [
                'D',
                'A',
                'D',
            ]
        }
    },
    {
        label: {
            id: 6,
            grade: 6,
            type: [0],
            chapterTitle: 'Chương 6',
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_6/ansD/3.png`),
            ],
            rightAns: [
                'B',
                'A',
                'D',
            ]
        }
    },
    {
        label: {
            id: 7,
            grade: 6,
            type: [0],
            chapterTitle: 'Chương 7',
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_7/ansD/3.png`),
            ],
            rightAns: [
                'C',
                'B',
                'C',
            ]
        }
    },
    {
        label: {
            id: 8,
            grade: 6,
            type: [1],
            chapterTitle: 'Chương 8',
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_6/Chuong_8/ansD/3.png`),
            ],
            rightAns: [
                'A',
                'B',
                'A',
            ]
        }
    },
    {
        label: { id: 9, grade: 7, chapterTitle: "Số hữu tỉ" },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_1/ansD/3.png`),
            ],
            rightAns: ["D", "A", "B"],
        },
    }, {
        label: { id: 10, grade: 7, chapterTitle: "Số thực" },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_2/ansD/3.png`),
            ],
            rightAns: ["C", "B", "C"],
        },
    }, {
        label: { id: 11, grade: 7, chapterTitle: "Góc và đường thẳng song song" },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_3/ansD/3.png`),
            ],
            rightAns: ["D", "D", "D"],
        },
    }, {
        label: { id: 12, grade: 7, chapterTitle: "Tam giác bằng nhau" },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_4/ansD/3.png`),
            ],
            rightAns: ["D", "D", "D"],
        },
    }, {
        label: { id: 13, grade: 7, chapterTitle: "Thu thập và biểu diễn dữ liệu" },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_5/ansD/3.png`),
            ],
            rightAns: ["B", "D", "A"],
        },
    }, {
        label: { id: 14, grade: 7, chapterTitle: "Tỉ lệ thức và đại lượng tỉ lệ" },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_6/ansD/3.png`),
            ],
            rightAns: ["A", "C", "A"],
        },
    }, {
        label: {
            id: 15,
            grade: 7,
            chapterTitle: "Biểu thức đại số và đa thức một biến",
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_7/ansD/3.png`),
            ],
            rightAns: ["A", "C", "B"],
        },
    }, {
        label: {
            id: 16,
            grade: 7,
            chapterTitle: "Làm quen với biến cố và xác suất của biến cố",
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_8/ansD/3.png`),
            ],
            rightAns: ["C", "B", "B"],
        },
    }, {
        label: {
            id: 17,
            grade: 7,
            chapterTitle: "Quan hệ giữa các yếu tố trong một tam giác",
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_9/ansD/3.png`),
            ],
            rightAns: ["A", "A", "C"],
        },
    }, {
        label: { id: 18, grade: 7, chapterTitle: "Một số hình khối trong thực tiễn" },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_7/Chuong_10/ansD/3.png`),
            ],
            rightAns: ["D", "C", "B"],
        },
    }, {
        label: { id: 19, grade: 8, chapterTitle: "Đa thức" },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_1/ansD/3.png`),
            ],
            rightAns: ["B", "A", "C"],
        },
    }, {
        label: {
            id: 20,
            grade: 8,
            chapterTitle: "Hằng đẳng thức đáng nhớ và ứng dụng",
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_2/ansD/3.png`),
            ],
            rightAns: ["A", "C", "B"],
        },
    }, {
        label: { id: 21, grade: 8, chapterTitle: "Tứ giác" },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_3/ansD/3.png`),
            ],
            rightAns: ["B", "D", "A"],
        },
    }, {
        label: { id: 22, grade: 8, chapterTitle: "Định lí Thalès" },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_4/ansD/3.png`),
            ],
            rightAns: ["B", "D", "A"],
        },
    }, {
        label: { id: 23, grade: 8, chapterTitle: "Dữ liệu và biểu đồ" },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_5/ansD/3.png`),
            ],
            rightAns: ["C", "B", "D"],
        },
    }, {
        label: { id: 24, grade: 8, chapterTitle: "Phân thức đại số" },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_6/ansD/3.png`),
            ],
            rightAns: ["A", "D", "B"],
        },
    }, {
        label: {
            id: 25,
            grade: 8,
            chapterTitle: "Phương trình bậc nhất và hàm số bậc nhất",
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_7/ansD/3.png`),
            ],
            rightAns: ["A", "D", "C"],
        },
    }, {
        label: {
            id: 26,
            grade: 8,
            chapterTitle: "Mở đầu về tính xác suất của biến cố",
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_8/ansD/3.png`),
            ],
            rightAns: ["A", "C", "B", ""],
        },
    }, {
        label: { id: 27, grade: 8, chapterTitle: "Tam giác đồng dạng" },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_9/ansD/3.png`),
            ],
            rightAns: ["C", "A", "B"],
        },
    }, {
        label: { id: 28, grade: 8, chapterTitle: "Một số hình khối trong thực tiễn" },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_8/Chuong_10/ansD/3.png`),
            ],
            rightAns: ["C", "A", "D"],
        },
    }, {
        label: {
            id: 29,
            grade: 9,
            chapterTitle: "Phương trình và hệ hai phương trình bậc nhất hai ẩn",
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_1/ansD/3.png`),
            ],
            rightAns: ["C", "A", "D"],
        },
    }, {
        label: {
            id: 30,
            grade: 9,
            chapterTitle: "Phương trình và bất phương trình bậc nhất một ẩn",
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_2/ansD/3.png`),
            ],
            rightAns: ["B", "D", "A"],
        },
    }, {
        label: { id: 31, grade: 9, chapterTitle: "Căn bậc hai và căn bậc ba" },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_3/ansD/3.png`),
            ],
            rightAns: ["B", "B", "C"],
        },
    }, {
        label: {
            id: 32,
            grade: 9,
            chapterTitle: "Hệ thức lượng trong tam giác vuông",
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_4/ansD/3.png`),
            ],
            rightAns: ["A", "A", "A"],
        },
    }, {
        label: { id: 33, grade: 9, chapterTitle: "Đường tròn" },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_5/ansD/3.png`),
            ],
            rightAns: ["C", "A", "D"],
        },
    }, {
        label: {
            id: 34,
            grade: 9,
            chapterTitle: "Hàm số y = ax^2 (a ≠ 0). Phương trình bậc hai một ẩn",
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_6/ansD/3.png`),
            ],
            rightAns: ["D", "D", "A"],
        },
    }, {
        label: { id: 35, grade: 9, chapterTitle: "Tần số và tần số tương đối" },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_7/ansD/3.png`),
            ],
            rightAns: ["B", "B", "A"],
        },
    }, {
        label: {
            id: 36,
            grade: 9,
            chapterTitle: "Xác suất của biến cố trong một số mô hình xác suất đơn giản",
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_8/ansD/3.png`),
            ],
            rightAns: ["D", "C", "C"],
        },
    }, {
        label: {
            id: 37,
            grade: 9,
            chapterTitle: "Đường tròn ngoại tiếp và đường tròn nội tiếp",
        },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_9/ansD/3.png`),
            ],
            rightAns: ["D", "C", "B"],
        },
    }, {
        label: { id: 38, grade: 9, chapterTitle: "Một số hình khối trong thực tiễn" },
        data: {
            ques: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ques/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ques/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ques/3.png`),
            ],
            ansA: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansA/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansA/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansA/3.png`),
            ],
            ansB: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansB/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansB/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansB/3.png`),
            ],
            ansC: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansC/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansC/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansC/3.png`),
            ],
            ansD: [
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansD/1.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansD/2.png`),
                require(`../assets/photos/Multiple_Choice/Lop_9/Chuong_10/ansD/3.png`),
            ],
            rightAns: ["A", "D", "B"],
        },
    }
]

export const flashCardList: FORMATDATA.FlashCardFormat[] = [
    // {
    //     label: {
    //         id: 1,
    //         grade: 7,
    //         type: [2],
    //         chapterTitle: 'Chương 1',
    //     },
    //     front: [
    //         `Số hữu tỉ là gì`,
    //         `Tập hợp số hữu tỉ được kí hiệu là`,
    //         `Lũy thừa bậc n của một số hữu tỉ x được kí hiệu là`,
    //         `Số hữu tỉ được viết dưới dạng`,
    //         `Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải`,
    //     ],
    //     back: [
    //         `Số hữu tỉ là số viết được dưới dạng phân số a/b`,
    //         `ℚ`,
    //         `xn`,
    //         `"a/b`,
    //         `với a, b ∈ ℕ"`,
    //         `đổi dấu số hạng đó: dấu “+” đổi thành dấu “–” và dấu “–” đổi thành dấu “+”`,
    //     ]
    // },
    // {
    //     label: {
    //         id: 2,
    //         grade: 7,
    //         type: [2],
    //         chapterTitle: 'Chương 2',
    //     },
    //     front: [
    //         `Số vô tỉ là gì?`,
    //         `Thập phân vô hạn tuần hoàn là gì?`,
    //         `Thập phân hữu hạn là gì `,
    //         `Số thực là gì `,
    //     ],
    //     back: [
    //         `Là số thập phân vô hạn không tuần hoàn`,
    //         `Là của một số có phần thập phân lặp lại (lặp lại giá trị của nó ở các khoảng đều đặn) và phần lặp lại vô hạn không phải là số không`,
    //         `Nếu một phân số tối giản với mẫu dương mà mẫu không có ước nguyên tố khác 2 và 5 thì phân số đó viết được dưới dạng số thập phân hữu hạn`,
    //         `Số thực là tập hợp bao gồm các dạng số dương, số âm, số hữu tỉ, số vô tỉ và số 0`,
    //     ]
    // },
    // {
    //     label: {
    //         id: 3,
    //         grade: 7,
    //         type: [2],
    //         chapterTitle: 'Chương 3',
    //     },
    //     front: [
    //         `Tính chất của hai góc kề bù là`,
    //         `Hai góc đối đỉnh là`,
    //         `Nếu đường thẳng z cắt hai đường thẳng x, y và x // y thì ta có`,
    //         `Thế nào là tia phân giác của một góc?`,
    //         `Ta có a, b phân biệt; nếu a // c và b // c thì`,
    //     ],
    //     back: [
    //         `Hai góc kề bù có tổng số đo bằng 180°`,
    //         `Hai góc có tổng số đo bằng 180°`,
    //         `Hai góc đồng vị bằng nhau`,
    //         `Tia phân giác của một góc là tia nằm trong góc và tạo với hai cạnh của góc đó hai góc bằng nhau`,
    //         `a // b`,
    //     ]
    // },
    // {
    //     label: {
    //         id: 4,
    //         grade: 7,
    //         type: [2],
    //         chapterTitle: 'Chương 4',
    //     },
    //     front: [
    //         `Tổng ba góc trong một tam giác bằng`,
    //         `Đường trung trực của một đoạn thẳng là`,
    //         `Cho tam giác ABC, khi đó ˆA+ˆB+ˆC bằng`,
    //         `Cho tam giác ABC cân tại A. Khẳng định đúng là`,
    //         `Đường trung trực của một đoạn thẳng là`,
    //     ],
    //     back: [
    //         `180°`,
    //         `đường thẳng vuông góc với đoạn thẳng đó tại trung điểm`,
    //         `180°`,
    //         `AB = AC`,
    //         `đường thẳng vuông góc với đoạn thẳng đó tại trung điểm`,
    //     ]
    // },
    // {
    //     label: {
    //         id: 5,
    //         grade: 8,
    //         type: [0, 2],
    //         chapterTitle: 'Tổng hợp kiến thức Đại số lớp 8',
    //     },
    //     front: [
    //         require(`../assets/photos/Flashcard/8/Dai_So/1.1.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/2.1.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/3.1.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/4.1.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/5.1.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/6.1.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/7.1.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/8.1.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/9.1.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/10.1.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/11.1.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/12.1.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/13.1.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/14.1.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/15.1.png`),
    //     ],
    //     back: [
    //         require(`../assets/photos/Flashcard/8/Dai_So/1.2.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/2.2.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/3.2.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/4.2.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/5.2.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/6.2.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/7.2.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/8.2.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/9.2.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/10.2.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/11.2.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/12.2.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/13.2.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/14.2.png`),
    //         require(`../assets/photos/Flashcard/8/Dai_So/15.2.png`),
    //     ]
    // },
    // {
    //     label: {
    //         id: 6,
    //         grade: 8,
    //         type: [1, 2],
    //         chapterTitle: 'Tổng hợp kiến thức Hình học lớp 8',
    //     },
    //     front: [
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/1.1.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/2.1.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/3.1.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/4.1.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/5.1.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/6.1.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/7.1.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/8.1.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/9.1.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/10.1.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/11.1.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/12.1.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/13.1.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/14.1.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/15.1.png`),
    //     ],
    //     back: [
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/1.2.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/2.2.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/3.2.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/4.2.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/5.2.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/6.2.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/7.2.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/8.2.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/9.2.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/10.2.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/11.2.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/12.2.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/13.2.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/14.2.png`),
    //         require(`../assets/photos/Flashcard/8/Hinh_Hoc/15.2.png`),
    //     ]
    // },
    // {
    //     label: {
    //         id: 7,
    //         grade: 9,
    //         type: [0, 2],
    //         chapterTitle: 'Tổng hợp kiến thức Đại số lớp 9',
    //     },
    //     front: [
    //         require(`../assets/photos/Flashcard/9/Dai_So/1.1.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/2.1.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/3.1.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/4.1.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/5.1.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/6.1.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/7.1.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/8.1.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/9.1.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/10.1.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/11.1.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/12.1.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/13.1.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/14.1.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/15.1.png`),
    //     ],
    //     back: [
    //         require(`../assets/photos/Flashcard/9/Dai_So/1.2.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/2.2.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/3.2.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/4.2.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/5.2.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/6.2.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/7.2.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/8.2.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/9.2.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/10.2.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/11.2.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/12.2.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/13.2.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/14.2.png`),
    //         require(`../assets/photos/Flashcard/9/Dai_So/15.2.png`),
    //     ]
    // },
    // {
    //     label: {
    //         id: 8,
    //         grade: 9,
    //         type: [1, 2],
    //         chapterTitle: 'Tổng hợp kiến thức Hình học lớp 9',
    //     },
    //     front: [
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/1.1.png`),
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/2.1.png`),
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/3.1.png`),
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/4.1.png`),
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/5.1.png`),
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/6.1.png`),
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/7.1.png`),
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/8.1.png`),
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/9.1.png`),
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/10.1.png`),
    //     ],
    //     back: [
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/1.2.png`),
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/2.2.png`),
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/3.2.png`),
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/4.2.png`),
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/5.2.png`),
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/6.2.png`),
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/7.2.png`),
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/8.2.png`),
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/9.2.png`),
    //         require(`../assets/photos/Flashcard/9/Hinh_Hoc/10.2.png`),
    //     ]
    // },
    {
        label: {
            id: 9,
            grade: 6,
            type: [0, 2],
            chapterTitle: 'Chương 1',
        },
        front: [
            require(`../assets/photos/Flashcard/K6_1/1.png`),
            require(`../assets/photos/Flashcard/K6_1/3.png`),
            require(`../assets/photos/Flashcard/K6_1/5.png`),
            require(`../assets/photos/Flashcard/K6_1/7.png`),
            require(`../assets/photos/Flashcard/K6_1/9.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K6_1/2.png`),
            require(`../assets/photos/Flashcard/K6_1/4.png`),
            require(`../assets/photos/Flashcard/K6_1/6.png`),
            require(`../assets/photos/Flashcard/K6_1/8.png`),
            require(`../assets/photos/Flashcard/K6_1/10.png`),
        ]
    },
    {
        label: {
            id: 10,
            grade: 6,
            type: [0, 2],
            chapterTitle: 'Chương 2',
        },
        front: [
            require(`../assets/photos/Flashcard/K6_2/1.png`),
            require(`../assets/photos/Flashcard/K6_2/3.png`),
            require(`../assets/photos/Flashcard/K6_2/5.png`),
            require(`../assets/photos/Flashcard/K6_2/7.png`),
            require(`../assets/photos/Flashcard/K6_2/9.png`),
            require(`../assets/photos/Flashcard/K6_2/11.png`),
            require(`../assets/photos/Flashcard/K6_2/13.png`),
            require(`../assets/photos/Flashcard/K6_2/15.png`),
            require(`../assets/photos/Flashcard/K6_2/17.png`),
            require(`../assets/photos/Flashcard/K6_2/19.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K6_2/2.png`),
            require(`../assets/photos/Flashcard/K6_2/4.png`),
            require(`../assets/photos/Flashcard/K6_2/6.png`),
            require(`../assets/photos/Flashcard/K6_2/8.png`),
            require(`../assets/photos/Flashcard/K6_2/10.png`),
            require(`../assets/photos/Flashcard/K6_2/12.png`),
            require(`../assets/photos/Flashcard/K6_2/14.png`),
            require(`../assets/photos/Flashcard/K6_2/16.png`),
            require(`../assets/photos/Flashcard/K6_2/18.png`),
            require(`../assets/photos/Flashcard/K6_2/20.png`),
        ]
    },
    {
        label: {
            id: 11,
            grade: 6,
            type: [0, 2],
            chapterTitle: 'Chương 3',
        },
        front: [
            require(`../assets/photos/Flashcard/K6_3/1.png`),
            require(`../assets/photos/Flashcard/K6_3/3.png`),
            require(`../assets/photos/Flashcard/K6_3/5.png`),
            require(`../assets/photos/Flashcard/K6_3/7.png`),
            require(`../assets/photos/Flashcard/K6_3/9.png`),
            require(`../assets/photos/Flashcard/K6_3/11.png`),
            require(`../assets/photos/Flashcard/K6_3/13.png`),
            require(`../assets/photos/Flashcard/K6_3/15.png`),
            require(`../assets/photos/Flashcard/K6_3/17.png`),
            require(`../assets/photos/Flashcard/K6_3/19.png`),
            require(`../assets/photos/Flashcard/K6_3/21.png`),
            require(`../assets/photos/Flashcard/K6_3/23.png`),
            require(`../assets/photos/Flashcard/K6_3/25.png`),
            require(`../assets/photos/Flashcard/K6_3/27.png`),
            require(`../assets/photos/Flashcard/K6_3/29.png`),
            require(`../assets/photos/Flashcard/K6_3/31.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K6_3/2.png`),
            require(`../assets/photos/Flashcard/K6_3/4.png`),
            require(`../assets/photos/Flashcard/K6_3/6.png`),
            require(`../assets/photos/Flashcard/K6_3/8.png`),
            require(`../assets/photos/Flashcard/K6_3/10.png`),
            require(`../assets/photos/Flashcard/K6_3/12.png`),
            require(`../assets/photos/Flashcard/K6_3/14.png`),
            require(`../assets/photos/Flashcard/K6_3/16.png`),
            require(`../assets/photos/Flashcard/K6_3/18.png`),
            require(`../assets/photos/Flashcard/K6_3/20.png`),
            require(`../assets/photos/Flashcard/K6_3/22.png`),
            require(`../assets/photos/Flashcard/K6_3/24.png`),
            require(`../assets/photos/Flashcard/K6_3/26.png`),
            require(`../assets/photos/Flashcard/K6_3/28.png`),
            require(`../assets/photos/Flashcard/K6_3/30.png`),
            require(`../assets/photos/Flashcard/K6_3/32.png`),
        ]
    },
    {
        label: {
            id: 12,
            grade: 6,
            type: [1, 2],
            chapterTitle: 'Chương 4',
        },
        front: [
            require(`../assets/photos/Flashcard/K6_4/1.png`),
            require(`../assets/photos/Flashcard/K6_4/3.png`),
            require(`../assets/photos/Flashcard/K6_4/5.png`),
            require(`../assets/photos/Flashcard/K6_4/7.png`),
            require(`../assets/photos/Flashcard/K6_4/9.png`),
            require(`../assets/photos/Flashcard/K6_4/11.png`),
            require(`../assets/photos/Flashcard/K6_4/13.png`),
            require(`../assets/photos/Flashcard/K6_4/15.png`),
            require(`../assets/photos/Flashcard/K6_4/17.png`),
            require(`../assets/photos/Flashcard/K6_4/19.png`),
            require(`../assets/photos/Flashcard/K6_4/21.png`),
            require(`../assets/photos/Flashcard/K6_4/23.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K6_4/2.png`),
            require(`../assets/photos/Flashcard/K6_4/4.png`),
            require(`../assets/photos/Flashcard/K6_4/6.png`),
            require(`../assets/photos/Flashcard/K6_4/8.png`),
            require(`../assets/photos/Flashcard/K6_4/10.png`),
            require(`../assets/photos/Flashcard/K6_4/12.png`),
            require(`../assets/photos/Flashcard/K6_4/14.png`),
            require(`../assets/photos/Flashcard/K6_4/16.png`),
            require(`../assets/photos/Flashcard/K6_4/18.png`),
            require(`../assets/photos/Flashcard/K6_4/20.png`),
            require(`../assets/photos/Flashcard/K6_4/22.png`),
            require(`../assets/photos/Flashcard/K6_4/24.png`),
        ]
    },
    {
        label: {
            id: 13,
            grade: 6,
            type: [0, 2],
            chapterTitle: 'Chương 6',
        },
        front: [
            require(`../assets/photos/Flashcard/K6_6/1.png`),
            require(`../assets/photos/Flashcard/K6_6/3.png`),
            require(`../assets/photos/Flashcard/K6_6/5.png`),
            require(`../assets/photos/Flashcard/K6_6/7.png`),
            require(`../assets/photos/Flashcard/K6_6/9.png`),
            require(`../assets/photos/Flashcard/K6_6/11.png`),
            require(`../assets/photos/Flashcard/K6_6/13.png`),
            require(`../assets/photos/Flashcard/K6_6/15.png`),
            require(`../assets/photos/Flashcard/K6_6/17.png`),
            require(`../assets/photos/Flashcard/K6_6/19.png`),
            require(`../assets/photos/Flashcard/K6_6/21.png`),
            require(`../assets/photos/Flashcard/K6_6/23.png`),
            require(`../assets/photos/Flashcard/K6_6/25.png`),
            require(`../assets/photos/Flashcard/K6_6/27.png`),
            require(`../assets/photos/Flashcard/K6_6/29.png`),
            require(`../assets/photos/Flashcard/K6_6/31.png`),
            require(`../assets/photos/Flashcard/K6_6/33.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K6_6/2.png`),
            require(`../assets/photos/Flashcard/K6_6/4.png`),
            require(`../assets/photos/Flashcard/K6_6/6.png`),
            require(`../assets/photos/Flashcard/K6_6/8.png`),
            require(`../assets/photos/Flashcard/K6_6/10.png`),
            require(`../assets/photos/Flashcard/K6_6/12.png`),
            require(`../assets/photos/Flashcard/K6_6/14.png`),
            require(`../assets/photos/Flashcard/K6_6/16.png`),
            require(`../assets/photos/Flashcard/K6_6/18.png`),
            require(`../assets/photos/Flashcard/K6_6/20.png`),
            require(`../assets/photos/Flashcard/K6_6/22.png`),
            require(`../assets/photos/Flashcard/K6_6/24.png`),
            require(`../assets/photos/Flashcard/K6_6/26.png`),
            require(`../assets/photos/Flashcard/K6_6/28.png`),
            require(`../assets/photos/Flashcard/K6_6/30.png`),
            require(`../assets/photos/Flashcard/K6_6/32.png`),
            require(`../assets/photos/Flashcard/K6_6/34.png`),
        ]
    },
    {
        label: {
            id: 14,
            grade: 6,
            type: [1, 2],
            chapterTitle: 'Chương 7',
        },
        front: [
            require(`../assets/photos/Flashcard/K6_7/1.png`),
            require(`../assets/photos/Flashcard/K6_7/3.png`),
            require(`../assets/photos/Flashcard/K6_7/5.png`),
            require(`../assets/photos/Flashcard/K6_7/7.png`),
            require(`../assets/photos/Flashcard/K6_7/9.png`),
            require(`../assets/photos/Flashcard/K6_7/11.png`),
            require(`../assets/photos/Flashcard/K6_7/13.png`),
            require(`../assets/photos/Flashcard/K6_7/15.png`),
            require(`../assets/photos/Flashcard/K6_7/17.png`),
            require(`../assets/photos/Flashcard/K6_7/19.png`),
            require(`../assets/photos/Flashcard/K6_7/21.png`),
            require(`../assets/photos/Flashcard/K6_7/23.png`),
            require(`../assets/photos/Flashcard/K6_7/25.png`),
            require(`../assets/photos/Flashcard/K6_7/27.png`),
            require(`../assets/photos/Flashcard/K6_7/29.png`),
            require(`../assets/photos/Flashcard/K6_7/31.png`),
            require(`../assets/photos/Flashcard/K6_7/33.png`),
            require(`../assets/photos/Flashcard/K6_7/35.png`),
            require(`../assets/photos/Flashcard/K6_7/37.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K6_7/2.png`),
            require(`../assets/photos/Flashcard/K6_7/4.png`),
            require(`../assets/photos/Flashcard/K6_7/6.png`),
            require(`../assets/photos/Flashcard/K6_7/8.png`),
            require(`../assets/photos/Flashcard/K6_7/10.png`),
            require(`../assets/photos/Flashcard/K6_7/12.png`),
            require(`../assets/photos/Flashcard/K6_7/14.png`),
            require(`../assets/photos/Flashcard/K6_7/16.png`),
            require(`../assets/photos/Flashcard/K6_7/18.png`),
            require(`../assets/photos/Flashcard/K6_7/20.png`),
            require(`../assets/photos/Flashcard/K6_7/22.png`),
            require(`../assets/photos/Flashcard/K6_7/24.png`),
            require(`../assets/photos/Flashcard/K6_7/26.png`),
            require(`../assets/photos/Flashcard/K6_7/28.png`),
            require(`../assets/photos/Flashcard/K6_7/30.png`),
            require(`../assets/photos/Flashcard/K6_7/32.png`),
            require(`../assets/photos/Flashcard/K6_7/34.png`),
            require(`../assets/photos/Flashcard/K6_7/36.png`),
            require(`../assets/photos/Flashcard/K6_7/38.png`),
        ]
    },
    {
        label: {
            id: 15,
            grade: 7,
            type: [0, 2],
            chapterTitle: 'Chương 1',
        },
        front: [
            require(`../assets/photos/Flashcard/K7_1/1.png`),
            require(`../assets/photos/Flashcard/K7_1/3.png`),
            require(`../assets/photos/Flashcard/K7_1/5.png`),
            require(`../assets/photos/Flashcard/K7_1/7.png`),
            require(`../assets/photos/Flashcard/K7_1/9.png`),
            require(`../assets/photos/Flashcard/K7_1/11.png`),
            require(`../assets/photos/Flashcard/K7_1/13.png`),
            require(`../assets/photos/Flashcard/K7_1/15.png`),
            require(`../assets/photos/Flashcard/K7_1/17.png`),
            require(`../assets/photos/Flashcard/K7_1/19.png`),
            require(`../assets/photos/Flashcard/K7_1/21.png`),
            require(`../assets/photos/Flashcard/K7_1/23.png`),
            require(`../assets/photos/Flashcard/K7_1/25.png`),
            require(`../assets/photos/Flashcard/K7_1/27.png`),
            require(`../assets/photos/Flashcard/K7_1/29.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K7_1/2.png`),
            require(`../assets/photos/Flashcard/K7_1/4.png`),
            require(`../assets/photos/Flashcard/K7_1/6.png`),
            require(`../assets/photos/Flashcard/K7_1/8.png`),
            require(`../assets/photos/Flashcard/K7_1/10.png`),
            require(`../assets/photos/Flashcard/K7_1/12.png`),
            require(`../assets/photos/Flashcard/K7_1/14.png`),
            require(`../assets/photos/Flashcard/K7_1/16.png`),
            require(`../assets/photos/Flashcard/K7_1/18.png`),
            require(`../assets/photos/Flashcard/K7_1/20.png`),
            require(`../assets/photos/Flashcard/K7_1/22.png`),
            require(`../assets/photos/Flashcard/K7_1/24.png`),
            require(`../assets/photos/Flashcard/K7_1/26.png`),
            require(`../assets/photos/Flashcard/K7_1/28.png`),
            require(`../assets/photos/Flashcard/K7_1/30.png`),
        ]
    },
    {
        label: {
            id: 16,
            grade: 7,
            type: [0, 2],
            chapterTitle: 'Chương 2',
        },
        front: [
            require(`../assets/photos/Flashcard/K7_2/1.png`),
            require(`../assets/photos/Flashcard/K7_2/3.png`),
            require(`../assets/photos/Flashcard/K7_2/5.png`),
            require(`../assets/photos/Flashcard/K7_2/7.png`),
            require(`../assets/photos/Flashcard/K7_2/9.png`),
            require(`../assets/photos/Flashcard/K7_2/11.png`),
            require(`../assets/photos/Flashcard/K7_2/13.png`),
            require(`../assets/photos/Flashcard/K7_2/15.png`),
            require(`../assets/photos/Flashcard/K7_2/17.png`),
            require(`../assets/photos/Flashcard/K7_2/19.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K7_2/2.png`),
            require(`../assets/photos/Flashcard/K7_2/4.png`),
            require(`../assets/photos/Flashcard/K7_2/6.png`),
            require(`../assets/photos/Flashcard/K7_2/8.png`),
            require(`../assets/photos/Flashcard/K7_2/10.png`),
            require(`../assets/photos/Flashcard/K7_2/12.png`),
            require(`../assets/photos/Flashcard/K7_2/14.png`),
            require(`../assets/photos/Flashcard/K7_2/16.png`),
            require(`../assets/photos/Flashcard/K7_2/18.png`),
            require(`../assets/photos/Flashcard/K7_2/20.png`),
        ]
    },
    {
        label: {
            id: 17,
            grade: 7,
            type: [1, 2],
            chapterTitle: 'Chương 3',
        },
        front: [
            require(`../assets/photos/Flashcard/K7_3/1.png`),
            require(`../assets/photos/Flashcard/K7_3/3.png`),
            require(`../assets/photos/Flashcard/K7_3/5.png`),
            require(`../assets/photos/Flashcard/K7_3/7.png`),
            require(`../assets/photos/Flashcard/K7_3/9.png`),
            require(`../assets/photos/Flashcard/K7_3/11.png`),
            require(`../assets/photos/Flashcard/K7_3/13.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K7_3/2.png`),
            require(`../assets/photos/Flashcard/K7_3/4.png`),
            require(`../assets/photos/Flashcard/K7_3/6.png`),
            require(`../assets/photos/Flashcard/K7_3/8.png`),
            require(`../assets/photos/Flashcard/K7_3/10.png`),
            require(`../assets/photos/Flashcard/K7_3/12.png`),
        ]
    },
    {
        label: {
            id: 18,
            grade: 7,
            type: [1, 2],
            chapterTitle: 'Chương 4',
        },
        front: [
            require(`../assets/photos/Flashcard/K7_4/1.png`),
            require(`../assets/photos/Flashcard/K7_4/3.png`),
            require(`../assets/photos/Flashcard/K7_4/5.png`),
            require(`../assets/photos/Flashcard/K7_4/7.png`),
            require(`../assets/photos/Flashcard/K7_4/9.png`),
            require(`../assets/photos/Flashcard/K7_4/11.png`),
            require(`../assets/photos/Flashcard/K7_4/13.png`),
            require(`../assets/photos/Flashcard/K7_4/15.png`),
            require(`../assets/photos/Flashcard/K7_4/17.png`),
            require(`../assets/photos/Flashcard/K7_4/19.png`),
            require(`../assets/photos/Flashcard/K7_4/21.png`),
            require(`../assets/photos/Flashcard/K7_4/23.png`),
            require(`../assets/photos/Flashcard/K7_4/25.png`),
            require(`../assets/photos/Flashcard/K7_4/27.png`),
            require(`../assets/photos/Flashcard/K7_4/29.png`),
            require(`../assets/photos/Flashcard/K7_4/31.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K7_4/2.png`),
            require(`../assets/photos/Flashcard/K7_4/4.png`),
            require(`../assets/photos/Flashcard/K7_4/6.png`),
            require(`../assets/photos/Flashcard/K7_4/8.png`),
            require(`../assets/photos/Flashcard/K7_4/10.png`),
            require(`../assets/photos/Flashcard/K7_4/12.png`),
            require(`../assets/photos/Flashcard/K7_4/14.png`),
            require(`../assets/photos/Flashcard/K7_4/16.png`),
            require(`../assets/photos/Flashcard/K7_4/18.png`),
            require(`../assets/photos/Flashcard/K7_4/20.png`),
            require(`../assets/photos/Flashcard/K7_4/22.png`),
            require(`../assets/photos/Flashcard/K7_4/24.png`),
            require(`../assets/photos/Flashcard/K7_4/26.png`),
            require(`../assets/photos/Flashcard/K7_4/28.png`),
            require(`../assets/photos/Flashcard/K7_4/30.png`),
            require(`../assets/photos/Flashcard/K7_4/32.png`),
        ]
    },
    {
        label: {
            id: 19,
            grade: 7,
            type: [0, 2],
            chapterTitle: 'Chương 5',
        },
        front: [
            require(`../assets/photos/Flashcard/K7_5/1.png`),
            require(`../assets/photos/Flashcard/K7_5/3.png`),
            require(`../assets/photos/Flashcard/K7_5/5.png`),
            require(`../assets/photos/Flashcard/K7_5/7.png`),
            require(`../assets/photos/Flashcard/K7_5/9.png`),
            require(`../assets/photos/Flashcard/K7_5/11.png`),
            require(`../assets/photos/Flashcard/K7_5/13.png`),
            require(`../assets/photos/Flashcard/K7_5/15.png`),
            require(`../assets/photos/Flashcard/K7_5/17.png`),
            require(`../assets/photos/Flashcard/K7_5/19.png`),
            require(`../assets/photos/Flashcard/K7_5/21.png`),
            require(`../assets/photos/Flashcard/K7_5/23.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K7_5/2.png`),
            require(`../assets/photos/Flashcard/K7_5/4.png`),
            require(`../assets/photos/Flashcard/K7_5/6.png`),
            require(`../assets/photos/Flashcard/K7_5/8.png`),
            require(`../assets/photos/Flashcard/K7_5/10.png`),
            require(`../assets/photos/Flashcard/K7_5/12.png`),
            require(`../assets/photos/Flashcard/K7_5/14.png`),
            require(`../assets/photos/Flashcard/K7_5/16.png`),
            require(`../assets/photos/Flashcard/K7_5/18.png`),
            require(`../assets/photos/Flashcard/K7_5/20.png`),
            require(`../assets/photos/Flashcard/K7_5/22.png`),
            require(`../assets/photos/Flashcard/K7_5/24.png`),
        ]
    },
    {
        label: {
            id: 20,
            grade: 8,
            type: [0, 2],
            chapterTitle: 'Chương 1',
        },
        front: [
            require(`../assets/photos/Flashcard/K8_1/1.png`),
            require(`../assets/photos/Flashcard/K8_1/3.png`),
            require(`../assets/photos/Flashcard/K8_1/5.png`),
            require(`../assets/photos/Flashcard/K8_1/7.png`),
            require(`../assets/photos/Flashcard/K8_1/9.png`),
            require(`../assets/photos/Flashcard/K8_1/11.png`),
            require(`../assets/photos/Flashcard/K8_1/13.png`),
            require(`../assets/photos/Flashcard/K8_1/15.png`),
            require(`../assets/photos/Flashcard/K8_1/17.png`),
            require(`../assets/photos/Flashcard/K8_1/19.png`),
            require(`../assets/photos/Flashcard/K8_1/21.png`),
            require(`../assets/photos/Flashcard/K8_1/23.png`),
            require(`../assets/photos/Flashcard/K8_1/25.png`),
            require(`../assets/photos/Flashcard/K8_1/27.png`),
            require(`../assets/photos/Flashcard/K8_1/29.png`),
            require(`../assets/photos/Flashcard/K8_1/31.png`),
            require(`../assets/photos/Flashcard/K8_1/33.png`),
            require(`../assets/photos/Flashcard/K8_1/35.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K8_1/2.png`),
            require(`../assets/photos/Flashcard/K8_1/4.png`),
            require(`../assets/photos/Flashcard/K8_1/6.png`),
            require(`../assets/photos/Flashcard/K8_1/8.png`),
            require(`../assets/photos/Flashcard/K8_1/10.png`),
            require(`../assets/photos/Flashcard/K8_1/12.png`),
            require(`../assets/photos/Flashcard/K8_1/14.png`),
            require(`../assets/photos/Flashcard/K8_1/16.png`),
            require(`../assets/photos/Flashcard/K8_1/18.png`),
            require(`../assets/photos/Flashcard/K8_1/20.png`),
            require(`../assets/photos/Flashcard/K8_1/22.png`),
            require(`../assets/photos/Flashcard/K8_1/24.png`),
            require(`../assets/photos/Flashcard/K8_1/26.png`),
            require(`../assets/photos/Flashcard/K8_1/28.png`),
            require(`../assets/photos/Flashcard/K8_1/30.png`),
            require(`../assets/photos/Flashcard/K8_1/32.png`),
            require(`../assets/photos/Flashcard/K8_1/34.png`),
            require(`../assets/photos/Flashcard/K8_1/36.png`),
        ]
    },
    {
        label: {
            id: 21,
            grade: 8,
            type: [0, 2],
            chapterTitle: 'Chương 2',
        },
        front: [
            require(`../assets/photos/Flashcard/K8_2/1.png`),
            require(`../assets/photos/Flashcard/K8_2/3.png`),
            require(`../assets/photos/Flashcard/K8_2/5.png`),
            require(`../assets/photos/Flashcard/K8_2/7.png`),
            require(`../assets/photos/Flashcard/K8_2/9.png`),
            require(`../assets/photos/Flashcard/K8_2/11.png`),
            require(`../assets/photos/Flashcard/K8_2/13.png`),
            require(`../assets/photos/Flashcard/K8_2/15.png`),
            require(`../assets/photos/Flashcard/K8_2/17.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K8_2/2.png`),
            require(`../assets/photos/Flashcard/K8_2/4.png`),
            require(`../assets/photos/Flashcard/K8_2/6.png`),
            require(`../assets/photos/Flashcard/K8_2/8.png`),
            require(`../assets/photos/Flashcard/K8_2/10.png`),
            require(`../assets/photos/Flashcard/K8_2/12.png`),
            require(`../assets/photos/Flashcard/K8_2/14.png`),
            require(`../assets/photos/Flashcard/K8_2/16.png`),
            require(`../assets/photos/Flashcard/K8_2/18.png`),
        ]
    },
    {
        label: {
            id: 22,
            grade: 8,
            type: [0, 2],
            chapterTitle: 'Chương 3',
        },
        front: [
            require(`../assets/photos/Flashcard/K8_3/1.png`),
            require(`../assets/photos/Flashcard/K8_3/3.png`),
            require(`../assets/photos/Flashcard/K8_3/5.png`),
            require(`../assets/photos/Flashcard/K8_3/7.png`),
            require(`../assets/photos/Flashcard/K8_3/9.png`),
            require(`../assets/photos/Flashcard/K8_3/11.png`),
            require(`../assets/photos/Flashcard/K8_3/13.png`),
            require(`../assets/photos/Flashcard/K8_3/15.png`),
            require(`../assets/photos/Flashcard/K8_3/17.png`),
            require(`../assets/photos/Flashcard/K8_3/19.png`),
            require(`../assets/photos/Flashcard/K8_3/21.png`),
            require(`../assets/photos/Flashcard/K8_3/23.png`),
            require(`../assets/photos/Flashcard/K8_3/25.png`),
            require(`../assets/photos/Flashcard/K8_3/27.png`),
            require(`../assets/photos/Flashcard/K8_3/29.png`),
            require(`../assets/photos/Flashcard/K8_3/31.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K8_3/2.png`),
            require(`../assets/photos/Flashcard/K8_3/4.png`),
            require(`../assets/photos/Flashcard/K8_3/6.png`),
            require(`../assets/photos/Flashcard/K8_3/8.png`),
            require(`../assets/photos/Flashcard/K8_3/10.png`),
            require(`../assets/photos/Flashcard/K8_3/12.png`),
            require(`../assets/photos/Flashcard/K8_3/14.png`),
            require(`../assets/photos/Flashcard/K8_3/16.png`),
            require(`../assets/photos/Flashcard/K8_3/18.png`),
            require(`../assets/photos/Flashcard/K8_3/20.png`),
            require(`../assets/photos/Flashcard/K8_3/22.png`),
            require(`../assets/photos/Flashcard/K8_3/24.png`),
            require(`../assets/photos/Flashcard/K8_3/26.png`),
            require(`../assets/photos/Flashcard/K8_3/28.png`),
            require(`../assets/photos/Flashcard/K8_3/30.png`),
            require(`../assets/photos/Flashcard/K8_3/32.png`),
        ]
    },
    {
        label: {
            id: 23,
            grade: 8,
            type: [1, 2],
            chapterTitle: 'Chương 4',
        },
        front: [
            require(`../assets/photos/Flashcard/K8_4/1.png`),
            require(`../assets/photos/Flashcard/K8_4/3.png`),
            require(`../assets/photos/Flashcard/K8_4/5.png`),
            require(`../assets/photos/Flashcard/K8_4/7.png`),
            require(`../assets/photos/Flashcard/K8_4/9.png`),
            require(`../assets/photos/Flashcard/K8_4/11.png`),
            require(`../assets/photos/Flashcard/K8_4/13.png`),
            require(`../assets/photos/Flashcard/K8_4/15.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K8_4/2.png`),
            require(`../assets/photos/Flashcard/K8_4/4.png`),
            require(`../assets/photos/Flashcard/K8_4/6.png`),
            require(`../assets/photos/Flashcard/K8_4/8.png`),
            require(`../assets/photos/Flashcard/K8_4/10.png`),
            require(`../assets/photos/Flashcard/K8_4/12.png`),
            require(`../assets/photos/Flashcard/K8_4/14.png`),
        ]
    },
    {
        label: {
            id: 24,
            grade: 8,
            type: [1, 2],
            chapterTitle: 'Chương 5',
        },
        front: [
            require(`../assets/photos/Flashcard/K8_5/1.png`),
            require(`../assets/photos/Flashcard/K8_5/3.png`),
            require(`../assets/photos/Flashcard/K8_5/5.png`),
            require(`../assets/photos/Flashcard/K8_5/7.png`),
            require(`../assets/photos/Flashcard/K8_5/9.png`),
            require(`../assets/photos/Flashcard/K8_5/11.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K8_5/2.png`),
            require(`../assets/photos/Flashcard/K8_5/4.png`),
            require(`../assets/photos/Flashcard/K8_5/6.png`),
            require(`../assets/photos/Flashcard/K8_5/8.png`),
            require(`../assets/photos/Flashcard/K8_5/10.png`),
            require(`../assets/photos/Flashcard/K8_5/12.png`),
        ]
    },
    {
        label: {
            id: 25,
            grade: 9,
            type: [0, 2],
            chapterTitle: 'Chương 1',
        },
        front: [
            require(`../assets/photos/Flashcard/K9_1/1.png`),
            require(`../assets/photos/Flashcard/K9_1/3.png`),
            require(`../assets/photos/Flashcard/K9_1/5.png`),
            require(`../assets/photos/Flashcard/K9_1/7.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K9_1/2.png`),
            require(`../assets/photos/Flashcard/K9_1/4.png`),
            require(`../assets/photos/Flashcard/K9_1/6.png`),
            require(`../assets/photos/Flashcard/K9_1/8.png`),
        ]
    },
    {
        label: {
            id: 26,
            grade: 9,
            type: [0, 2],
            chapterTitle: 'Chương 2',
        },
        front: [
            require(`../assets/photos/Flashcard/K9_2/1.png`),
            require(`../assets/photos/Flashcard/K9_2/3.png`),
            require(`../assets/photos/Flashcard/K9_2/5.png`),
            require(`../assets/photos/Flashcard/K9_2/7.png`),
            require(`../assets/photos/Flashcard/K9_2/9.png`),
            require(`../assets/photos/Flashcard/K9_2/11.png`),
            require(`../assets/photos/Flashcard/K9_2/13.png`),
            require(`../assets/photos/Flashcard/K9_2/15.png`),
            require(`../assets/photos/Flashcard/K9_2/17.png`),
            require(`../assets/photos/Flashcard/K9_2/19.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K9_2/2.png`),
            require(`../assets/photos/Flashcard/K9_2/4.png`),
            require(`../assets/photos/Flashcard/K9_2/6.png`),
            require(`../assets/photos/Flashcard/K9_2/8.png`),
            require(`../assets/photos/Flashcard/K9_2/10.png`),
            require(`../assets/photos/Flashcard/K9_2/12.png`),
            require(`../assets/photos/Flashcard/K9_2/14.png`),
            require(`../assets/photos/Flashcard/K9_2/16.png`),
            require(`../assets/photos/Flashcard/K9_2/18.png`),
            require(`../assets/photos/Flashcard/K9_2/20.png`),
        ]
    },
    {
        label: {
            id: 27,
            grade: 9,
            type: [0, 2],
            chapterTitle: 'Chương 3',
        },
        front: [
            require(`../assets/photos/Flashcard/K9_3/1.png`),
            require(`../assets/photos/Flashcard/K9_3/3.png`),
            require(`../assets/photos/Flashcard/K9_3/5.png`),
            require(`../assets/photos/Flashcard/K9_3/7.png`),
            require(`../assets/photos/Flashcard/K9_3/9.png`),
            require(`../assets/photos/Flashcard/K9_3/11.png`),
            require(`../assets/photos/Flashcard/K9_3/13.png`),
            require(`../assets/photos/Flashcard/K9_3/15.png`),
            require(`../assets/photos/Flashcard/K9_3/17.png`),
            require(`../assets/photos/Flashcard/K9_3/19.png`),
            require(`../assets/photos/Flashcard/K9_3/21.png`),
            require(`../assets/photos/Flashcard/K9_3/23.png`),
            require(`../assets/photos/Flashcard/K9_3/25.png`),
            require(`../assets/photos/Flashcard/K9_3/27.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K9_3/2.png`),
            require(`../assets/photos/Flashcard/K9_3/4.png`),
            require(`../assets/photos/Flashcard/K9_3/6.png`),
            require(`../assets/photos/Flashcard/K9_3/8.png`),
            require(`../assets/photos/Flashcard/K9_3/10.png`),
            require(`../assets/photos/Flashcard/K9_3/12.png`),
            require(`../assets/photos/Flashcard/K9_3/14.png`),
            require(`../assets/photos/Flashcard/K9_3/16.png`),
            require(`../assets/photos/Flashcard/K9_3/18.png`),
            require(`../assets/photos/Flashcard/K9_3/20.png`),
            require(`../assets/photos/Flashcard/K9_3/22.png`),
            require(`../assets/photos/Flashcard/K9_3/24.png`),
            require(`../assets/photos/Flashcard/K9_3/26.png`),
            require(`../assets/photos/Flashcard/K9_3/28.png`),
        ]
    },
    {
        label: {
            id: 28,
            grade: 9,
            type: [0, 2],
            chapterTitle: 'Chương 4',
        },
        front: [
            require(`../assets/photos/Flashcard/K9_4/1.png`),
            require(`../assets/photos/Flashcard/K9_4/3.png`),
            require(`../assets/photos/Flashcard/K9_4/5.png`),
            require(`../assets/photos/Flashcard/K9_4/7.png`),
            require(`../assets/photos/Flashcard/K9_4/9.png`),
            require(`../assets/photos/Flashcard/K9_4/11.png`),
            require(`../assets/photos/Flashcard/K9_4/13.png`),
            require(`../assets/photos/Flashcard/K9_4/15.png`),
            require(`../assets/photos/Flashcard/K9_4/17.png`),
            require(`../assets/photos/Flashcard/K9_4/19.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K9_4/2.png`),
            require(`../assets/photos/Flashcard/K9_4/4.png`),
            require(`../assets/photos/Flashcard/K9_4/6.png`),
            require(`../assets/photos/Flashcard/K9_4/8.png`),
            require(`../assets/photos/Flashcard/K9_4/10.png`),
            require(`../assets/photos/Flashcard/K9_4/12.png`),
            require(`../assets/photos/Flashcard/K9_4/14.png`),
            require(`../assets/photos/Flashcard/K9_4/16.png`),
            require(`../assets/photos/Flashcard/K9_4/18.png`),
            require(`../assets/photos/Flashcard/K9_4/20.png`),
        ]
    },
    {
        label: {
            id: 29,
            grade: 9,
            type: [0, 2],
            chapterTitle: 'Chương 5',
        },
        front: [
            require(`../assets/photos/Flashcard/K9_5/1.png`),
            require(`../assets/photos/Flashcard/K9_5/3.png`),
            require(`../assets/photos/Flashcard/K9_5/5.png`),
            require(`../assets/photos/Flashcard/K9_5/7.png`),
            require(`../assets/photos/Flashcard/K9_5/9.png`),
            require(`../assets/photos/Flashcard/K9_5/11.png`),
            require(`../assets/photos/Flashcard/K9_5/13.png`),
            require(`../assets/photos/Flashcard/K9_5/15.png`),
            require(`../assets/photos/Flashcard/K9_5/17.png`),
            require(`../assets/photos/Flashcard/K9_5/19.png`),
            require(`../assets/photos/Flashcard/K9_5/21.png`),
            require(`../assets/photos/Flashcard/K9_5/23.png`),
            require(`../assets/photos/Flashcard/K9_5/25.png`),
            require(`../assets/photos/Flashcard/K9_5/27.png`),
            require(`../assets/photos/Flashcard/K9_5/29.png`),
            require(`../assets/photos/Flashcard/K9_5/31.png`),
            require(`../assets/photos/Flashcard/K9_5/33.png`),
            require(`../assets/photos/Flashcard/K9_5/35.png`),
            require(`../assets/photos/Flashcard/K9_5/37.png`),
        ],
        back: [
            require(`../assets/photos/Flashcard/K9_5/2.png`),
            require(`../assets/photos/Flashcard/K9_5/4.png`),
            require(`../assets/photos/Flashcard/K9_5/6.png`),
            require(`../assets/photos/Flashcard/K9_5/8.png`),
            require(`../assets/photos/Flashcard/K9_5/10.png`),
            require(`../assets/photos/Flashcard/K9_5/12.png`),
            require(`../assets/photos/Flashcard/K9_5/14.png`),
            require(`../assets/photos/Flashcard/K9_5/16.png`),
            require(`../assets/photos/Flashcard/K9_5/18.png`),
            require(`../assets/photos/Flashcard/K9_5/20.png`),
            require(`../assets/photos/Flashcard/K9_5/22.png`),
            require(`../assets/photos/Flashcard/K9_5/24.png`),
            require(`../assets/photos/Flashcard/K9_5/26.png`),
            require(`../assets/photos/Flashcard/K9_5/28.png`),
            require(`../assets/photos/Flashcard/K9_5/30.png`),
            require(`../assets/photos/Flashcard/K9_5/32.png`),
            require(`../assets/photos/Flashcard/K9_5/34.png`),
            require(`../assets/photos/Flashcard/K9_5/36.png`),
            require(`../assets/photos/Flashcard/K9_5/38.png`),
        ]
    },
]

export const fillInTheBlankList: FORMATDATA.FillInTheBlankFormat[] = [
    {
        label: { id: 1, grade: 6, chapterTitle: "Tập hợp các số tự nhiên" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_1/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_1/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_1/ques/3.png`),
        ],
        ans: ["3", "XXIX", "trăm"],
    }, {
        label: {
            id: 2,
            grade: 6,
            chapterTitle: "Tính chia hết trong tập hợp các số tự nhiên",
        },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_2/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_2/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_2/ques/3.png`),
        ],
        ans: ["3", "nhỏ nhất", "2"],
    }, {
        label: { id: 3, grade: 6, chapterTitle: "Số nguyên" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_3/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_3/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_3/ques/3.png`),
        ],
        ans: ["-99", "35", "nguyên dương"],
    }, {
        label: { id: 4, grade: 6, chapterTitle: "Một số hình phẳng trong thực tiễn" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_4/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_4/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_4/ques/3.png`),
        ],
        ans: ["120", "10", "30"],
    }, {
        label: {
            id: 5,
            grade: 6,
            chapterTitle: "Tính đối xứng của hình phẳng trong tự nhiên",
        },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_5/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_5/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_5/ques/3.png`),
        ],
        ans: ["5", "2", "6"],
    }, {
        label: { id: 6, grade: 6, chapterTitle: "Phân số" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_6/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_6/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_6/ques/3.png`),
        ],
        ans: ["36", "-0,2", "39"],
    }, {
        label: { id: 7, grade: 6, chapterTitle: "Số thập phân" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_7/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_7/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_7/ques/3.png`),
        ],
        ans: ["15090000", "75", "20"],
    }, {
        label: { id: 8, grade: 6, chapterTitle: "Những hình học cơ bản" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_8/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_8/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_6/Chuong_8/ques/3.png`),
        ],
        ans: ["5", "7", "10"],
    }, {
        label: { id: 9, grade: 7, chapterTitle: "Số hữu tỉ" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_1/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_1/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_1/ques/3.png`),
        ],
        ans: ["1", "256", "43,75"],
    }, {
        label: { id: 10, grade: 7, chapterTitle: "Số thực" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_2/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_2/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_2/ques/3.png`),
        ],
        ans: ["32", "-1,4", "3,(6)"],
    }, {
        label: { id: 11, grade: 7, chapterTitle: "Góc và đường thẳng song song" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_3/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_3/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_3/ques/3.png`),
        ],
        ans: ["152", "2", "50"],
    }, {
        label: { id: 12, grade: 7, chapterTitle: "Tam giác bằng nhau" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_4/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_4/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_4/ques/3.png`),
        ],
        ans: ["360", "75", "4"],
    }, {
        label: { id: 13, grade: 7, chapterTitle: "Thu thập và biểu diễn dữ liệu" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_5/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_5/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_5/ques/3.png`),
        ],
        ans: ["7", "17", "2,5"],
    }, {
        label: { id: 14, grade: 7, chapterTitle: "Tỉ lệ thức và đại lượng tỉ lệ" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_6/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_6/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_6/ques/3.png`),
        ],
        ans: ["4", "36", "12"],
    }, {
        label: {
            id: 15,
            grade: 7,
            chapterTitle: "Biểu thức đại số và đa thức một biến",
        },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_7/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_7/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_7/ques/3.png`),
        ],
        ans: ["54000", "6", "2"],
    }, {
        label: {
            id: 16,
            grade: 7,
            chapterTitle: "Làm quen với biến cố và xác suất của biến cố",
        },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_8/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_8/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_8/ques/3.png`),
        ],
        ans: ["lớn hơn", "1", "5"],
    }, {
        label: {
            id: 17,
            grade: 7,
            chapterTitle: "Quan hệ giữa các yếu tố trong một tam giác",
        },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_9/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_9/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_9/ques/3.png`),
        ],
        ans: ["nhỏ hơn", "ba đỉnh", "4"],
    }, {
        label: { id: 18, grade: 7, chapterTitle: "Một số hình khối trong thực tiễn" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_10/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_10/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_7/Chuong_10/ques/3.png`),
        ],
        ans: ["chữ nhật", "15", "28"],
    }, {
        label: { id: 19, grade: 8, chapterTitle: "Đa thức" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_1/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_1/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_1/ques/3.png`),
        ],
        ans: ["384", "999", "1"],
    }, {
        label: {
            id: 20,
            grade: 8,
            chapterTitle: "Hằng đẳng thức đáng nhớ và ứng dụng",
        },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_2/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_2/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_2/ques/3.png`),
        ],
        ans: ["-9", "0", "8x"],
    }, {
        label: { id: 21, grade: 8, chapterTitle: "Tứ giác" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_3/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_3/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_3/ques/3.png`),
        ],
        ans: ["167", "220", "210"],
    }, {
        label: { id: 22, grade: 8, chapterTitle: "Định lí Thalès" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_4/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_4/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_4/ques/3.png`),
        ],
        ans: ["3", "5", "16"],
    }, {
        label: { id: 23, grade: 8, chapterTitle: "Dữ liệu và biểu đồ" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_5/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_5/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_5/ques/3.png`),
        ],
        ans: ["hình quạt tròn", "đoạn thẳng", "cột kép"],
    }, {
        label: { id: 24, grade: 8, chapterTitle: "Phân thức đại số" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_6/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_6/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_6/ques/3.png`),
        ],
        ans: ["8", "x - y", "6"],
    }, {
        label: {
            id: 25,
            grade: 8,
            chapterTitle: "Phương trình bậc nhất và hàm số bậc nhất",
        },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_7/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_7/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_7/ques/3.png`),
        ],
        ans: ["-1", "1", "1"],
    }, {
        label: {
            id: 26,
            grade: 8,
            chapterTitle: "Mở đầu về tính xác suất của biến cố",
        },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_8/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_8/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_8/ques/3.png`),
        ],
        ans: ["2", "96", "0,15"],
    }, {
        label: { id: 27, grade: 8, chapterTitle: "Tam giác đồng dạng" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_9/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_9/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_9/ques/3.png`),
        ],
        ans: ["12", "12", "2"],
    }, {
        label: { id: 28, grade: 8, chapterTitle: "Một số hình khối trong thực tiễn" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_10/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_10/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_8/Chuong_10/ques/3.png`),
        ],
        ans: ["60", "4", "5"],
    }, {
        label: {
            id: 29,
            grade: 9,
            chapterTitle: "Phương trình và hệ hai phương trình bậc nhất hai ẩn",
        },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_1/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_1/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_1/ques/3.png`),
        ],
        ans: ["7", "7", "-1"],
    }, {
        label: {
            id: 30,
            grade: 9,
            chapterTitle: "Phương trình và bất phương trình bậc nhất một ẩn",
        },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_2/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_2/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_2/ques/3.png`),
        ],
        ans: ["2", "2", "1"],
    }, {
        label: { id: 31, grade: 9, chapterTitle: "Căn bậc hai và căn bậc ba" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_3/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_3/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_3/ques/3.png`),
        ],
        ans: ["18", "60,4", "9"],
    }, {
        label: {
            id: 32,
            grade: 9,
            chapterTitle: "Hệ thức lượng trong tam giác vuông",
        },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_4/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_4/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_4/ques/3.png`),
        ],
        ans: ["10,4", "7,71", "3,97"],
    }, {
        label: { id: 33, grade: 9, chapterTitle: "Đường tròn" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_5/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_5/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_5/ques/3.png`),
        ],
        ans: ["lớn nhất", "tiếp xúc trong", "8,5"],
    }, {
        label: {
            id: 34,
            grade: 9,
            chapterTitle: "Hàm số y = ax^2 (a ≠ 0). Phương trình bậc hai một ẩn",
        },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_6/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_6/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_6/ques/3.png`),
        ],
        ans: ["16", "1", "5"],
    }, {
        label: { id: 35, grade: 9, chapterTitle: "Tần số và tần số tương đối" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_7/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_7/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_7/ques/3.png`),
        ],
        ans: ["biểu đồ tần số", "72", "cột"],
    }, {
        label: {
            id: 36,
            grade: 9,
            chapterTitle: "Xác suất của biến cố trong một số mô hình xác suất đơn giản",
        },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_8/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_8/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_8/ques/3.png`),
        ],
        ans: ["18", "105", "20"],
    }, {
        label: {
            id: 37,
            grade: 9,
            chapterTitle: "Đường tròn ngoại tiếp và đường tròn nội tiếp",
        },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_9/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_9/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_9/ques/3.png`),
        ],
        ans: ["d", "1", "120"],
    }, {
        label: { id: 38, grade: 9, chapterTitle: "Một số hình khối trong thực tiễn" },
        ques: [
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_10/ques/1.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_10/ques/2.png`),
            require(`../assets/photos/Fill_in_the_blank/Lop_9/Chuong_10/ques/3.png`),
        ],
        ans: ["nón", "40", "4"],
    }
];

export const chapterTitleList: FORMATDATA.ChapterTitleFormat[] = [{
    id: 1,
    grade: 6,
    chapterTitle: "Tập hợp các số tự nhiên",
    quizID: 1,
    fillInTheBlankID: 1,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 1)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 1)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 2,
    grade: 6,
    chapterTitle: "Tính chia hết trong tập hợp các số tự nhiên",
    quizID: 2,
    fillInTheBlankID: 2,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 2)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 2)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 3,
    grade: 6,
    chapterTitle: "Số nguyên",
    quizID: 3,
    fillInTheBlankID: 3,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 3)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 3)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 4,
    grade: 6,
    chapterTitle: "Một số hình phẳng trong thực tiễn",
    quizID: 4,
    fillInTheBlankID: 4,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 4)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 4)[0].ans.length,
    ],
    type: [1, 2],
    status: 0,
}, {
    id: 5,
    grade: 6,
    chapterTitle: "Tính đối xứng của hình phẳng trong tự nhiên",
    quizID: 5,
    fillInTheBlankID: 5,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 5)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 5)[0].ans.length,
    ],
    type: [1, 2],
    status: 0,
}, {
    id: 6,
    grade: 6,
    chapterTitle: "Phân số",
    quizID: 6,
    fillInTheBlankID: 6,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 6)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 6)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 7,
    grade: 6,
    chapterTitle: "Số thập phân",
    quizID: 7,
    fillInTheBlankID: 7,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 7)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 7)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 8,
    grade: 6,
    chapterTitle: "Những hình học cơ bản",
    quizID: 8,
    fillInTheBlankID: 8,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 8)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 8)[0].ans.length,
    ],
    type: [1, 2],
    status: 0,
}, {
    id: 9,
    grade: 7,
    chapterTitle: "Số hữu tỉ",
    quizID: 9,
    fillInTheBlankID: 9,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 9)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 9)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 10,
    grade: 7,
    chapterTitle: "Số thực",
    quizID: 10,
    fillInTheBlankID: 10,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 10)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 10)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 11,
    grade: 7,
    chapterTitle: "Góc và đường thẳng song song",
    quizID: 11,
    fillInTheBlankID: 11,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 11)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 11)[0].ans.length,
    ],
    type: [1, 2],
    status: 0,
}, {
    id: 12,
    grade: 7,
    chapterTitle: "Tam giác bằng nhau",
    quizID: 12,
    fillInTheBlankID: 12,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 12)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 12)[0].ans.length,
    ],
    type: [1, 2],
    status: 0,
}, {
    id: 13,
    grade: 7,
    chapterTitle: "Thu thập và biểu diễn dữ liệu",
    quizID: 13,
    fillInTheBlankID: 13,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 13)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 13)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 14,
    grade: 7,
    chapterTitle: "Tỉ lệ thức và đại lượng tỉ lệ",
    quizID: 14,
    fillInTheBlankID: 14,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 14)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 14)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 15,
    grade: 7,
    chapterTitle: "Biểu thức đại số và đa thức một biến",
    quizID: 15,
    fillInTheBlankID: 15,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 15)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 15)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 16,
    grade: 7,
    chapterTitle: "Làm quen với biến cố và xác suất của biến cố",
    quizID: 16,
    fillInTheBlankID: 16,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 16)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 16)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 17,
    grade: 7,
    chapterTitle: "Quan hệ giữa các yếu tố trong một tam giác",
    quizID: 17,
    fillInTheBlankID: 17,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 17)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 17)[0].ans.length,
    ],
    type: [1, 2],
    status: 0,
}, {
    id: 18,
    grade: 7,
    chapterTitle: "Một số hình khối trong thực tiễn",
    quizID: 18,
    fillInTheBlankID: 18,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 18)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 18)[0].ans.length,
    ],
    type: [1, 2],
    status: 0,
}, {
    id: 19,
    grade: 8,
    chapterTitle: "Đa thức",
    quizID: 19,
    fillInTheBlankID: 19,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 19)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 19)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 20,
    grade: 8,
    chapterTitle: "Hằng đẳng thức đáng nhớ và ứng dụng",
    quizID: 20,
    fillInTheBlankID: 20,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 20)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 20)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 21,
    grade: 8,
    chapterTitle: "Tứ giác",
    quizID: 21,
    fillInTheBlankID: 21,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 21)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 21)[0].ans.length,
    ],
    type: [1, 2],
    status: 0,
}, {
    id: 22,
    grade: 8,
    chapterTitle: "Định lí Thalès",
    quizID: 22,
    fillInTheBlankID: 22,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 22)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 22)[0].ans.length,
    ],
    type: [1, 2],
    status: 0,
}, {
    id: 23,
    grade: 8,
    chapterTitle: "Dữ liệu và biểu đồ",
    quizID: 23,
    fillInTheBlankID: 23,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 23)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 23)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 24,
    grade: 8,
    chapterTitle: "Phân thức đại số",
    quizID: 24,
    fillInTheBlankID: 24,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 24)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 24)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 25,
    grade: 8,
    chapterTitle: "Phương trình bậc nhất và hàm số bậc nhất",
    quizID: 25,
    fillInTheBlankID: 25,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 25)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 25)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 26,
    grade: 8,
    chapterTitle: "Mở đầu về tính xác suất của biến cố",
    quizID: 26,
    fillInTheBlankID: 26,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 26)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 26)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 27,
    grade: 8,
    chapterTitle: "Tam giác đồng dạng",
    quizID: 27,
    fillInTheBlankID: 27,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 27)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 27)[0].ans.length,
    ],
    type: [1, 2],
    status: 0,
}, {
    id: 28,
    grade: 8,
    chapterTitle: "Một số hình khối trong thực tiễn",
    quizID: 28,
    fillInTheBlankID: 28,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 28)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 28)[0].ans.length,
    ],
    type: [1, 2],
    status: 0,
}, {
    id: 29,
    grade: 9,
    chapterTitle: "Phương trình và hệ hai phương trình bậc nhất hai ẩn",
    quizID: 29,
    fillInTheBlankID: 29,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 29)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 29)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 30,
    grade: 9,
    chapterTitle: "Phương trình và bất phương trình bậc nhất một ẩn",
    quizID: 30,
    fillInTheBlankID: 30,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 30)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 30)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 31,
    grade: 9,
    chapterTitle: "Căn bậc hai và căn bậc ba",
    quizID: 31,
    fillInTheBlankID: 31,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 31)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 31)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 32,
    grade: 9,
    chapterTitle: "Hệ thức lượng trong tam giác vuông",
    quizID: 32,
    fillInTheBlankID: 32,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 32)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 32)[0].ans.length,
    ],
    type: [1, 2],
    status: 0,
}, {
    id: 33,
    grade: 9,
    chapterTitle: "Đường tròn",
    quizID: 33,
    fillInTheBlankID: 33,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 33)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 33)[0].ans.length,
    ],
    type: [1, 2],
    status: 0,
}, {
    id: 34,
    grade: 9,
    chapterTitle: "Hàm số y = ax^2 (a ≠ 0). Phương trình bậc hai một ẩn",
    quizID: 34,
    fillInTheBlankID: 34,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 34)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 34)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 35,
    grade: 9,
    chapterTitle: "Tần số và tần số tương đối",
    quizID: 35,
    fillInTheBlankID: 35,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 35)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 35)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 36,
    grade: 9,
    chapterTitle: "Xác suất của biến cố trong một số mô hình xác suất đơn giản",
    quizID: 36,
    fillInTheBlankID: 36,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 36)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 36)[0].ans.length,
    ],
    type: [0, 2],
    status: 0,
}, {
    id: 37,
    grade: 9,
    chapterTitle: "Đường tròn ngoại tiếp và đường tròn nội tiếp",
    quizID: 37,
    fillInTheBlankID: 37,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 37)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 37)[0].ans.length,
    ],
    type: [1, 2],
    status: 0,
}, {
    id: 38,
    grade: 9,
    chapterTitle: "Một số hình khối trong thực tiễn",
    quizID: 38,
    fillInTheBlankID: 38,
    quizStatus: [
        0,
        quizDataList.filter((item) => item.label.id == 38)[0].data.rightAns.length,
    ],
    fillInTheBlankStatus: [
        0,
        fillInTheBlankList.filter((item) => item.label.id == 38)[0].ans.length,
    ],
    type: [1, 2],
    status: 0,
}];