
import { StatusBarStyle } from "react-native";
import { NGHIASTYLE } from "./componentStyleSheet";

export interface ColorTheme {
    type: 'light' | 'dark';
    barContent: StatusBarStyle;
    brandMain: string;
    brandSecond: string;
    brandThird: string;
    text: string;
    textBrand: string;
    background: string;
    backgroundSecond: string;
    backgroundFade: string;
    gray1: string;
    gray2: string;
    correct: string;
    wrong: string;
}

export const defaultColorTheme: { [key: string]: ColorTheme } = {
    light: {
        type: 'light',
        barContent: `dark-content`,
        text: `#000010`,
        brandMain: NGHIASTYLE.NghiaBrand700 as string,
        brandSecond: NGHIASTYLE.NghiaBrand500 as string,
        brandThird: NGHIASTYLE.NghiaBrand100 as string,
        textBrand: NGHIASTYLE.NghiaBrand800 as string,
        background: `rgba(250, 250, 250, 1)`,
        backgroundSecond: `rgba(255, 255, 255, 1)`,
        backgroundFade: NGHIASTYLE.NghiaGray100 as string,
        gray1: NGHIASTYLE.NghiaGray600 as string,
        gray2: NGHIASTYLE.NghiaGray200 as string,
        correct: NGHIASTYLE.NghiaSuccess200 as string,
        wrong: NGHIASTYLE.NghiaError100 as string
    },
    dark: {
        type: 'dark',
        barContent: `light-content`,
        brandMain: NGHIASTYLE.NghiaBrand400 as string,
        brandSecond: NGHIASTYLE.NghiaBrand600 as string,
        brandThird: NGHIASTYLE.NghiaBrand900 as string,
        text: `#FFFFFF`,
        textBrand: NGHIASTYLE.NghiaBrand200 as string,
        background: `rgba(20, 20, 20, 1)`,
        backgroundSecond: `rgba(30, 30, 30, 1)`,
        backgroundFade: NGHIASTYLE.NghiaTransparentWhite20 as string,
        gray1: NGHIASTYLE.NghiaGray200 as string,
        gray2: NGHIASTYLE.NghiaGray500 as string,
        correct: NGHIASTYLE.NghiaSuccess900 as string,
        wrong: NGHIASTYLE.NghiaError800 as string
    },
}
