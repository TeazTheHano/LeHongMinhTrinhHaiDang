import React, { useContext } from 'react';
import { Text, TextStyle } from 'react-native';
import { vw } from './stylesheet';
import { RootContext } from '../data/store';

const GetColor = () => {
    const [CurrentCache] = useContext(RootContext);
    return CurrentCache.colorScheme.text;
};

const createTextComponent = (
    fontFamily: string,
    weight: TextStyle['fontWeight'],
    fontSize: number,
    lineHeight: number

) => ({
    children,
    style,
    numberOfLines,
    color,
}: {
    children: React.ReactNode;
    style?: TextStyle | TextStyle[];
    numberOfLines?: number;
    color?: string;
}) => {
        const textStyle: TextStyle = {
            fontFamily,
            color: color || GetColor(),
            fontSize: vw(fontSize),
            lineHeight: vw(lineHeight),
            fontWeight: weight,
        };

        return (
            <Text numberOfLines={numberOfLines} style={[textStyle, style]}>
                {children}
            </Text>
        );
    };

export const NGT_Inter_DispLg_Reg = createTextComponent('Inter-Regular', 400, 6, 8);
export const NGT_Inter_DispLg_Med = createTextComponent('Inter-Medium', 500, 6, 8);
export const NGT_Inter_DispLg_SemiBold = createTextComponent('Inter-SemiBold', 600, 6, 8);
export const NGT_Inter_DispLg_Bld = createTextComponent('Inter-Bold', 700, 6, 8);
export const NGT_Inter_DispLg_ExtraBold = createTextComponent('Inter-ExtraBold', 800, 6, 8);

export const NGT_Inter_DispMd_Reg = createTextComponent('Inter-Regular', 400, 5, 7.5);
export const NGT_Inter_DispMd_Med = createTextComponent('Inter-Medium', 500, 5, 7.5);
export const NGT_Inter_DispMd_SemiBold = createTextComponent('Inter-SemiBold', 600, 5, 7.5);
export const NGT_Inter_DispMd_Bld = createTextComponent('Inter-Bold', 700, 5, 7.5);
export const NGT_Inter_DispMd_ExtraBold = createTextComponent('Inter-ExtraBold', 800, 5, 7.5);

export const NGT_Inter_HeaderLg_Reg = createTextComponent('Inter-Regular', 400, 4.5, 7);
export const NGT_Inter_HeaderLg_Med = createTextComponent('Inter-Medium', 500, 4.5, 7);
export const NGT_Inter_HeaderLg_SemiBold = createTextComponent('Inter-SemiBold', 600, 4.5, 7);
export const NGT_Inter_HeaderLg_Bld = createTextComponent('Inter-Bold', 700, 4.5, 7);
export const NGT_Inter_HeaderLg_ExtraBold = createTextComponent('Inter-ExtraBold', 800, 4.5, 7);

export const NGT_Inter_HeaderMd_Reg = createTextComponent('Inter-Regular', 400, 4, 6);
export const NGT_Inter_HeaderMd_Med = createTextComponent('Inter-Medium', 500, 4, 6);
export const NGT_Inter_HeaderMd_SemiBold = createTextComponent('Inter-SemiBold', 600, 4, 6);
export const NGT_Inter_HeaderMd_Bld = createTextComponent('Inter-Bold', 700, 4, 6);
export const NGT_Inter_HeaderMd_ExtraBold = createTextComponent('Inter-ExtraBold', 800, 4, 6);

export const NGT_Inter_BodyLg_Reg = createTextComponent('Inter-Regular', 400, 3.5, 5.5);
export const NGT_Inter_BodyLg_Med = createTextComponent('Inter-Medium', 500, 3.5, 5.5);
export const NGT_Inter_BodyLg_SemiBold = createTextComponent('Inter-SemiBold', 600, 3.5, 5.5);
export const NGT_Inter_BodyLg_Bld = createTextComponent('Inter-Bold', 700, 3.5, 5.5);
export const NGT_Inter_BodyLg_ExtraBold = createTextComponent('Inter-ExtraBold', 800, 3.5, 5.5);

export const NGT_Inter_BodyMd_Reg = createTextComponent('Inter-Regular', 400, 3, 4.5);
export const NGT_Inter_BodyMd_Med = createTextComponent('Inter-Medium', 500, 3, 4.5);
export const NGT_Inter_BodyMd_SemiBold = createTextComponent('Inter-SemiBold', 600, 3, 4.5);
export const NGT_Inter_BodyMd_Bld = createTextComponent('Inter-Bold', 700, 3, 4.5);
export const NGT_Inter_BodyMd_ExtraBold = createTextComponent('Inter-ExtraBold', 800, 3, 4.5);

export const RobotoMonoReg12 = createTextComponent('RobotoMono-Regular', 400, 3, 4.5);
export const RobotoMonoReg14 = createTextComponent('RobotoMono-Regular', 400, 3.5, 4.5);
