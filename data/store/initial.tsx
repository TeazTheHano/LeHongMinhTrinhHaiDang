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
import { defaultColorTheme } from "../../assets/componentStyleSheet";

export interface CurrentCache {
    user: UserFormat;
    colorScheme: any;
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