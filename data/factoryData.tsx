import * as FORMATDATA from "./interfaceFormat";

export const demoCardTitleData: FORMATDATA.CardTitleFormat[] = [
    {
        title: "Card Title",
        status: 2,
        length: 10,
        process: 10,
        dataID: "123456789",
        type: 0,
    },
    {
        title: "Card Title 2",
        status: 0,
        length: 20,
        process: 0,
        dataID: "123456780",
        type: 2,
    },
    {
        title: "Card Title 3",
        status: 1,
        length: 30,
        process: 20,
        dataID: "123456781",
        type: 1,
    },
    {
        title: "Card Title 4",
        status: 2,
        length: 30,
        process: 20,
        dataID: "123456781",
        type: 1,
    }
]

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