import { View, Text, Animated, ScrollView, TouchableOpacity, Platform, Image, ImageStyle, FlatList, TextInput, useWindowDimensions, Dimensions, LayoutChangeEvent, Alert } from 'react-native';
import React, { useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { storageGetItem, storageGetList, storageSaveAndOverwrite } from '../data/storageFunc';
import { CardCateRenderWithColorScheme, LowBtn, RoundBtn, SelectorInput, SSBarWithSaveArea, SSBarWithSaveAreaWithColorScheme, TopBarWithThingInMiddleAllCustomable, TopBarWithThingInMiddleAllCustomableWithColorScheme, ViewCol, ViewColStartBetween, ViewRow, ViewRowBetweenCenter } from '../assets/Class';
import * as SVG from '../assets/svgXml';
import styles, { vh, vw } from '../assets/stylesheet';
import * as CTEXT from '../assets/CustomText';
import clrStyle, { componentStyleList, NGHIASTYLE } from '../assets/componentStyleSheet';
import { RootContext } from '../data/store';
import LinearGradient from 'react-native-linear-gradient';
import { MindMapDataFormat } from '../data/interfaceFormat';
import Svg, { Path, SvgXml } from 'react-native-svg';
import { marginBottomForScrollView } from '../assets/component';

export default function MindmapCreate() {
    const navigation = useNavigation();
    const [CurrentCache, dispatch] = useContext(RootContext);
    let COLORSCHEME = CurrentCache.colorScheme;

    const initialMindMapData: MindMapDataFormat = {
        id: (new Date().getTime()).toString(),
        label: {
            title: '',
            type: [],
            createTime: new Date(),
        },
        content: [''],
    };

    const mindMapReducer = (state: MindMapDataFormat, action: { type: string, payload: any }) => {
        switch (action.type) {
            case 'SET_TITLE':
                return { ...state, label: { ...state.label, title: action.payload } };
            case 'SET_CATEGORY':
                return { ...state, label: { ...state.label, type: action.payload } };
            case 'SET_CONTENT':
                return { ...state, content: action.payload };
            default:
                return state;
        }
    };

    const [mindMapData, dispatchMm] = useReducer(mindMapReducer, initialMindMapData);

    function saveMindMap() {
        let trimmedContent = mindMapData.content.map((item: string) => item.trim());
        trimmedContent = trimmedContent.filter((item: string) => item !== '');
        dispatchMm({ type: 'SET_CONTENT', payload: trimmedContent });

        storageSaveAndOverwrite('mindmap', mindMapData, mindMapData.id).then(() => {
            Alert.alert('Thêm Mindmap thành công', '', [{ text: 'OK', onPress: () => navigation.goBack() }])
        })
    }

    const [itemHeight, setItemHeight] = useState<number[]>([0]);
    const renderItem = useMemo(() => {
        return (index: number) => {
            const onLayout = (event: LayoutChangeEvent) => {
                const { height } = event.nativeEvent.layout;
                setItemHeight((prev) => {
                    const updatedArray = [...prev];
                    updatedArray[index] = height;
                    return updatedArray;
                })
            };

            return (
                <View
                    style={[styles.positionRelative, styles.flex1, styles.paddingTop4vw]}>
                    <View style={[styles.positionAbsolute, styles.alignSelfCenter, styles.padding1vw, { backgroundColor: COLORSCHEME.background, left: vw(8), top: vw(0.5), zIndex: 1 }]}>
                        <CTEXT.NGT_Inter_BodyLg_Med>Nhánh {(index || 0) + 1}</CTEXT.NGT_Inter_BodyLg_Med>
                    </View>
                    <TextInput
                        onLayout={onLayout}
                        placeholder="Type here"
                        value={mindMapData.content[index || 0]}
                        multiline
                        onChangeText={(value) => {
                            const updatedContent = [...mindMapData.content];
                            updatedContent[index || 0] = value;
                            dispatchMm({ type: 'SET_CONTENT', payload: updatedContent });
                        }}
                        style={[styles.flex1, styles.paddingH2vw, styles.paddingV4vw, styles.borderRadius2vw, styles.border1, { marginLeft: vw(4), color: COLORSCHEME.text, borderColor: COLORSCHEME.text }]}
                    />
                    {index < mindMapData.content.length - 1 && itemHeight[index] !== 0 && (
                        <View style={[styles.positionAbsolute, { top: vw(8) }]}>
                            <CurvedLine color={COLORSCHEME.text} height={itemHeight[index] + vw(4)} />
                        </View>
                    )}
                </View>
            );
        };
    }, [mindMapData.content, COLORSCHEME, itemHeight]);

    return (
        <SSBarWithSaveAreaWithColorScheme>
            <TopBarWithThingInMiddleAllCustomableWithColorScheme
                returnPreScreenFnc={() => { navigation.goBack() }}
                returnPreScreenIcon={SVG.sharpLeftArrow(vw(6), vw(6), COLORSCHEME.gray1)}
                rightItemFnc={() => { }}
                rightItemIcon={SVG.bunnybookmark(vw(6), vw(6), COLORSCHEME.gray1)}
                centerTitle='Tạo một Mindmap mới'
                TitleTextClass={CTEXT.NGT_Inter_DispMd_SemiBold}
                style={{
                    isAlignItemCenter: true,
                    container: [styles.marginBottom4vw],
                }}
            />
            <ScrollView style={[styles.flex1, styles.flexCol, styles.paddingH4vw]} contentContainerStyle={[styles.gap4vw]}>
                <CTEXT.NGT_Inter_HeaderMd_SemiBold children='Tiêu đề' />
                <TextInput
                    placeholder='Type here'
                    value={mindMapData.label.title}
                    onChangeText={(value) => dispatchMm({ type: 'SET_TITLE', payload: value })}
                    style={[styles.flex1, styles.padding2vw, styles.borderRadius2vw, styles.border1, { color: COLORSCHEME.text, borderColor: COLORSCHEME.text }]}
                />
                <CTEXT.NGT_Inter_HeaderMd_SemiBold children='Phần loại thẻ' />
                <FlatList
                    data={[0, 1, 2, 3]}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(_, index) => index.toString()}
                    contentContainerStyle={[styles.gap2vw]}
                    renderItem={({ item }) => {
                        return <TouchableOpacity onPress={() => {
                            if (mindMapData.label.type.includes(item)) {
                                dispatchMm({ type: 'SET_CATEGORY', payload: mindMapData.label.type.filter((i: number) => i !== item) });
                            } else {
                                dispatchMm({ type: 'SET_CATEGORY', payload: [...mindMapData.label.type, item] });
                            }
                        }}
                            children={<CardCateRenderWithColorScheme type={item} isSelected={mindMapData.label.type.includes(item)} />}
                        />
                    }}
                />
                <FlatList
                    data={mindMapData.content}
                    scrollEnabled={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return renderItem(index)
                    }}
                />
                <TouchableOpacity
                    style={[styles.flexRowBetweenCenter, styles.gap2vw, styles.alignSelfCenter, componentStyleList.roundFillBrand600 as any]}
                    onPress={() => {
                        dispatchMm({ type: 'SET_CONTENT', payload: [...mindMapData.content, ''] })
                    }}>
                    {SVG.mindMapIcon(vw(6), vw(6))}
                    <CTEXT.NGT_Inter_HeaderMd_SemiBold color='white'>Thêm nhánh</CTEXT.NGT_Inter_HeaderMd_SemiBold>
                </TouchableOpacity>
                {marginBottomForScrollView()}
            </ScrollView>
            <View style={[
                styles.w100,
                styles.paddingH4vw,
                styles.paddingV3vw,
                {
                    backgroundColor: COLORSCHEME.background,
                    shadowColor: COLORSCHEME.text,
                    shadowOffset: { width: vw(0), height: -vw(0.75) },
                    shadowOpacity: 0.125,
                    shadowRadius: vw(0.5),
                    elevation: vw(1),
                }]}>
                <RoundBtn title='Lưu Mindmap' icon={<SvgXml xml={`<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.95667 7.77998V17.51C2.95667 19.41 4.30667 20.19 5.94667 19.25L8.29667 17.91C8.80667 17.62 9.65667 17.59 10.1867 17.86L15.4367 20.49C15.9667 20.75 16.8167 20.73 17.3267 20.44L21.6567 17.96C22.2067 17.64 22.6667 16.86 22.6667 16.22V6.48998C22.6667 4.58998 21.3167 3.80998 19.6767 4.74998L17.3267 6.08998C16.8167 6.37998 15.9667 6.40998 15.4367 6.13998L10.1867 3.51998C9.65667 3.25998 8.80667 3.27998 8.29667 3.56998L3.96667 6.04998C3.40667 6.36998 2.95667 7.14998 2.95667 7.77998Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.22668 4V17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.3967 6.62012V20.0001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`} />} onPress={saveMindMap} bgColor={COLORSCHEME.brandMain} textColor='white' textClass={CTEXT.NGT_Inter_HeaderMd_SemiBold} customStyle={[styles.padding3vw, styles.justifyContentCenter,]} />
            </View>
        </SSBarWithSaveAreaWithColorScheme>
    );
}

const CurvedLine = ({ color, height }: any) => {
    return (
        <Svg
            width="12"
            height={height}
            viewBox={`0 0 12 ${height}`}
            fill="none"
        >
            <Path
                d={`
                    M12 0
                    H4
                    C1.79086 1 0 2.79086 0 5
                    V${height - 5}
                    C0 ${height - 2.79086} 1.79086 ${height} 4 ${height}
                    H12
                `}
                stroke={color}
                strokeWidth="3"
            />
        </Svg>
    );
};