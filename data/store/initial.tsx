//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here
// export interface ExampleInitInter {
//     example: string;
// }
// export interface Action {
//     type: string;
//     payload?: any;
// }
// export const initialState: ExampleInit = {
//     example: 'example'
// };

import { useColorScheme } from "react-native";
import { StorageItem, UserFormat } from "../interfaceFormat";
import { ColorTheme, defaultColorTheme } from "../../assets/ColorTheme";

export interface CurrentCache {
    user: UserFormat;
    colorScheme: ColorTheme;
}

export interface Action {
    type: string;
    payload?: any;
}

export const initialState: CurrentCache = {
    user: {
        name: '',
    },
    colorScheme: defaultColorTheme.light
};