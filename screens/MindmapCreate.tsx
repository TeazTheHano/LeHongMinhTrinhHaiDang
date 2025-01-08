import { View, Text, Animated, ScrollView, TouchableOpacity, Platform, Image, ImageStyle, FlatList, TextInput } from 'react-native';
import React, { useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { storageGetItem, storageGetList } from '../data/storageFunc';
import { CardCateRenderWithColorScheme, RoundBtn, SelectorInput, SSBarWithSaveArea, SSBarWithSaveAreaWithColorScheme, TopBarWithThingInMiddleAllCustomable, TopBarWithThingInMiddleAllCustomableWithColorScheme, ViewCol, ViewColStartBetween, ViewRow, ViewRowBetweenCenter } from '../assets/Class';
import * as SVG from '../assets/svgXml';
import styles, { vh, vw } from '../assets/stylesheet';
import * as CTEXT from '../assets/CustomText';
import clrStyle, { componentStyleList, NGHIASTYLE } from '../assets/componentStyleSheet';
import { RootContext } from '../data/store';
import LinearGradient from 'react-native-linear-gradient';
import { MindMapDataFormat } from '../data/interfaceFormat';

export default function MindmapCreate() {
    const navigation = useNavigation();
    const [CurrentCache, dispatch] = useContext(RootContext);

    let COLORSCHEME = CurrentCache.colorScheme;

    const initialMindMapData: MindMapDataFormat = {
        id: 0,
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

    const renderItem = useMemo(() => {
        return (index: number) => {
            console.log('render', index);

            return (
                <View style={[styles.positionRelative, styles.flex1, styles.paddingTop4vw]}>
                    <View style={[styles.positionAbsolute, styles.alignSelfCenter, styles.padding1vw, { backgroundColor: COLORSCHEME.background, left: vw(4), top: vw(0.5), zIndex: 1 }]}>
                        <CTEXT.NGT_Inter_BodyLg_Med>Nhánh {(index || 0) + 1}</CTEXT.NGT_Inter_BodyLg_Med>
                    </View>
                    <TextInput
                        placeholder='Type here'
                        value={mindMapData.content[index || 0]}
                        multiline
                        onChangeText={(value) => {
                            let arr = mindMapData.content
                            arr[index || 0] = value
                            dispatchMm({ type: 'SET_CONTENT', payload: arr })
                        }}
                        style={[styles.flex1, styles.paddingH2vw, styles.paddingV4vw, styles.borderRadius2vw, styles.border1, { color: COLORSCHEME.text, borderColor: COLORSCHEME.text }]}
                    />
                </View>
            )
        }
    }, [mindMapData.content])

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
                <Text>{JSON.stringify(mindMapData.content)}</Text>
            </ScrollView>
            
        </SSBarWithSaveAreaWithColorScheme>
    );
} ``