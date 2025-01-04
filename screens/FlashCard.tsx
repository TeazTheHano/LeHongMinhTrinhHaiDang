import { View, Text, Animated, ScrollView, TouchableOpacity, Platform, Image, ImageStyle, FlatList } from 'react-native'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { storageGetItem, storageGetList } from '../data/storageFunc'
import { RoundBtn, SelectorInput, SSBarWithSaveArea, TopBarWithThingInMiddleAllCustomable, ViewCol, ViewColCenter, ViewColStartBetween, ViewRow, ViewRowBetweenCenter } from '../assets/Class'
import * as SVG from '../assets/svgXml'
import styles, { vh, vw } from '../assets/stylesheet'
import * as CTEXT from '../assets/CustomText'
import { DATAmonthList } from '../data/factoryData'
import clrStyle, { componentStyleList, NGHIASTYLE } from '../assets/componentStyleSheet'
import { RootContext } from '../data/store'
import * as Progress from 'react-native-progress'

export default function FlashCard() {
    const navigation = useNavigation()
    const [CurrentCache, dispatch] = useContext(RootContext)

    let COLORSCHEME = CurrentCache.colorScheme

    let subTitle = `Tam giác vuông và tính chất góc`

    return (
        <SSBarWithSaveArea COLORTHEME={COLORSCHEME}>
            <TopBarWithThingInMiddleAllCustomable
                COLORTHEME={COLORSCHEME}
                returnPreScreenFnc={() => { navigation.goBack() }}
                returnPreScreenIcon={SVG.sharpLeftArrow(vw(6), vw(6), COLORSCHEME.gray1)}
                rightItemFnc={() => { }}
                rightItemIcon={SVG.bunnybookmark(vw(6), vw(6), COLORSCHEME.gray1)}
                centerChildren={
                    <ViewColCenter>
                        <CTEXT.NGT_Inter_DispMd_SemiBold children={`FlashCard`} />
                        <CTEXT.NGT_Inter_BodyLg_SemiBold children={subTitle} color={COLORSCHEME.gray1} />
                    </ViewColCenter>
                }
                style={{
                    container: [styles.marginBottom4vw]
                }}
            />
            <ScrollView style={[styles.flex1, styles.flexCol, styles.paddingH4vw]} contentContainerStyle={[styles.gap4vw]}>
            </ScrollView>
        </SSBarWithSaveArea>
    )
}