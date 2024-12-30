
import { StatusBarStyle } from "react-native";
import { NGHIASTYLE } from "./componentStyleSheet";

export interface ColorTheme {
    barContent: StatusBarStyle;
    brandMain: string;
    brandSecond: string;
    text: string;
    textBrand: string;
    background: string;
    backgroundSecond: string;
    backgroundFade: string;
}

export const defaultColorTheme: { [key: string]: ColorTheme } = {
    light: {
        barContent: `dark-content`,
        text: `#000010`,
        brandMain: NGHIASTYLE.NghiaBrand700 as string,
        brandSecond: NGHIASTYLE.NghiaBrand500 as string,
        textBrand: NGHIASTYLE.NghiaBrand800 as string,
        background: `rgba(250, 250, 250, 1)`,
        backgroundSecond: `rgba(255, 255, 255, 1)`,
        backgroundFade: NGHIASTYLE.NghiaGray100 as string,
    },
    dark: {
        barContent: `light-content`,
        brandMain: NGHIASTYLE.NghiaBrand400 as string,
        brandSecond: NGHIASTYLE.NghiaBrand600 as string,
        text: `#FFFFFF`,
        textBrand: NGHIASTYLE.NghiaBrand200 as string,
        background: `rgba(20, 20, 20, 1)`,
        backgroundSecond: `rgba(30, 30, 30, 1)`,
        backgroundFade: NGHIASTYLE.NghiaTransparentWhite20 as string,
    },
}
