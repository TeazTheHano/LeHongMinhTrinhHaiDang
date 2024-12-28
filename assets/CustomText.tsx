import React, { useContext } from 'react';
import { Text, TextStyle } from 'react-native';
import { vw } from './stylesheet';
import { RootContext } from '../data/store';

const GetColor = () => {
    const [CurrentCache] = useContext(RootContext);
    return CurrentCache.colorScheme.text;
};

const createTextComponent = (fontFamily: string, fontSize: number, lineHeight: number) => ({
    children,
    style,
    lineNumber,
    color,
}: {
    children: React.ReactNode;
    style?: TextStyle | TextStyle[] | undefined;
    lineNumber?: number;
    color?: string;
}) => {
    return (
        <Text
            numberOfLines={lineNumber}
            style={[
                { fontFamily, color: color || GetColor(), fontSize: vw(fontSize), lineHeight: vw(lineHeight) },
                style,
            ]}
        >
            {children}
        </Text>
    );
};

export const NGT_Inter_DispLg_Reg = createTextComponent('Inter-Regular', 6, 8);
export const NGT_Inter_DispLg_Med = createTextComponent('Inter-Medium', 6, 8);
export const NGT_Inter_DispLg_SemiBold = createTextComponent('Inter-SemiBold', 6, 8);
export const NGT_Inter_DispLg_Bld = createTextComponent('Inter-Bold', 6, 8);
export const NGT_Inter_DispLg_ExtraBold = createTextComponent('Inter-ExtraBold', 6, 8);

export const NGT_Inter_DispMd_Reg = createTextComponent('Inter-Regular', 5, 7.5);
export const NGT_Inter_DispMd_Med = createTextComponent('Inter-Medium', 5, 7.5);
export const NGT_Inter_DispMd_SemiBold = createTextComponent('Inter-SemiBold', 5, 7.5);
export const NGT_Inter_DispMd_Bld = createTextComponent('Inter-Bold', 5, 7.5);
export const NGT_Inter_DispMd_ExtraBold = createTextComponent('Inter-ExtraBold', 5, 7.5);

export const NGT_Inter_HeaderLg_Reg = createTextComponent('Inter-Regular', 4.5, 7);
export const NGT_Inter_HeaderLg_Med = createTextComponent('Inter-Medium', 4.5, 7);
export const NGT_Inter_HeaderLg_SemiBold = createTextComponent('Inter-SemiBold', 4.5, 7);
export const NGT_Inter_HeaderLg_Bld = createTextComponent('Inter-Bold', 4.5, 7);
export const NGT_Inter_HeaderLg_ExtraBold = createTextComponent('Inter-ExtraBold', 4.5, 7);

export const NGT_Inter_HeaderMd_Reg = createTextComponent('Inter-Regular', 4, 6);
export const NGT_Inter_HeaderMd_Med = createTextComponent('Inter-Medium', 4, 6);
export const NGT_Inter_HeaderMd_SemiBold = createTextComponent('Inter-SemiBold', 4, 6);
export const NGT_Inter_HeaderMd_Bld = createTextComponent('Inter-Bold', 4, 6);
export const NGT_Inter_HeaderMd_ExtraBold = createTextComponent('Inter-ExtraBold', 4, 6);

export const NGT_Inter_BodyLg_Reg = createTextComponent('Inter-Regular', 3.5, 5.5);
export const NGT_Inter_BodyLg_Med = createTextComponent('Inter-Medium', 3.5, 5.5);
export const NGT_Inter_BodyLg_SemiBold = createTextComponent('Inter-SemiBold', 3.5, 5.5);
export const NGT_Inter_BodyLg_Bld = createTextComponent('Inter-Bold', 3.5, 5.5);
export const NGT_Inter_BodyLg_ExtraBold = createTextComponent('Inter-ExtraBold', 3.5, 5.5);

export const NGT_Inter_BodyMd_Reg = createTextComponent('Inter-Regular', 3, 4.5);
export const NGT_Inter_BodyMd_Med = createTextComponent('Inter-Medium', 3, 4.5);
export const NGT_Inter_BodyMd_SemiBold = createTextComponent('Inter-SemiBold', 3, 4.5);
export const NGT_Inter_BodyMd_Bld = createTextComponent('Inter-Bold', 3, 4.5);
export const NGT_Inter_BodyMd_ExtraBold = createTextComponent('Inter-ExtraBold', 3, 4.5);

export const RobotoMonoReg12 = createTextComponent('RobotoMono-Regular', 3, 4.5);
export const RobotoMonoReg14 = createTextComponent('RobotoMono-Regular', 3.5, 4.5);