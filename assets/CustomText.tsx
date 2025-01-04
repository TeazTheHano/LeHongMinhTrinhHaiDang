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
        const getFontWeight = (font: string): TextStyle['fontWeight'] => {
            if (font.includes('Black')) return '900';
            if (font.includes('ExtraBold')) return '800';
            if (font.includes('Bold')) return '700';
            if (font.includes('SemiBold')) return '600';
            if (font.includes('Medium')) return '500';
            if (font.includes('Regular')) return '400';
            if (font.includes('Light')) return '300';
            if (font.includes('ExtraLight')) return '200';
            if (font.includes('Thin')) return '100';
            return 'normal';
        };

        const textStyle: TextStyle = {
            fontFamily,
            color: color || GetColor(),
            fontSize: vw(fontSize),
            lineHeight: vw(lineHeight),
            fontWeight: getFontWeight(fontFamily),
        };

        return (
            <Text numberOfLines={numberOfLines} style={[textStyle, style]}>
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