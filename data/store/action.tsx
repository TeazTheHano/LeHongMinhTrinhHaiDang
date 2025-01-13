//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here

import { StorageItem, UserFormat } from "../interfaceFormat";

// export const EXAMPLE = `EXAMPLE`;
// export const examplefnc = (item: any) => {
//     return {
//         type: EXAMPLE,
//         payload: item
//     }
// }

export const SET_USER = `SET_USER`;
export const currentSetUser = (user: UserFormat) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const SET_COLOR_SCHEME = `SET_COLOR_SCHEME`;
export const currentSetColorScheme = (colorScheme: object) => {
    return {
        type: SET_COLOR_SCHEME,
        payload: colorScheme
    }
}

export const SET_IS_FORCE_DARK = `SET_IS_FORCE_DARK`;
export const currentSetIsForceDark = (isForceDark: boolean) => {
    return {
        type: SET_IS_FORCE_DARK,
        payload: isForceDark
    }
}