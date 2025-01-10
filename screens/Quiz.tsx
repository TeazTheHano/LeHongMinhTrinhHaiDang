import { View, Text, Animated, ScrollView, TouchableOpacity, Platform, Image, ImageStyle, FlatList } from 'react-native'
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { storageGetItem, storageGetList, storageSaveAndOverwrite } from '../data/storageFunc'
import styles, { vh, vw } from '../assets/stylesheet'
import clrStyle, { componentStyleList, NGHIASTYLE } from '../assets/componentStyleSheet'
import { RootContext } from '../data/store'
import * as CLASS from '../assets/Class'
import * as SVG from '../assets/svgXml'
import * as CTEXT from '../assets/CustomText'
import * as Progress from 'react-native-progress'
import { QuizFormat } from '../data/interfaceFormat'
import { getInitialCardTitleList, marginBottomForScrollView } from '../assets/component'
import { quizDataList } from '../data/factoryData'

export default function Quiz({ route }: any) {
    // Sentinal variable <<<<<<<<<<<<<<
    const navigation = useNavigation()
    const [CurrentCache, dispatch] = useContext(RootContext)
    let COLORSCHEME = CurrentCache.colorScheme

    // State variable <<<<<<<<<<<<<<
    const routeParamsItem = route.params as { id: string, title: string } | undefined

    const [subTitle, setSubTitle] = useState<string>(routeParamsItem?.title || '')
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [quizData, setQuizData] = useState<QuizFormat>()
    const [currentChoice, setCurrentChoice] = useState<string>('')


    // Effect <<<<<<<<<<<<<<
    useEffect(() => {
        if (routeParamsItem) {
            setSubTitle(routeParamsItem.title)
            setQuizData(quizDataList.find((item) => item.label.id.toString() === routeParamsItem.id.toString()))
            storageSaveAndOverwrite('lastTouchItem', { id: routeParamsItem.id, type: 'quiz' })
        }
    }, [routeParamsItem])

    return (
        <CLASS.SSBarWithSaveAreaWithColorScheme>
            <CLASS.TopBarWithThingInMiddleAllCustomableWithColorScheme
                returnPreScreenFnc={() => { navigation.goBack() }}
                returnPreScreenIcon={SVG.sharpLeftArrow(vw(6), vw(6), COLORSCHEME.gray1)}
                rightItemFnc={() => { }}
                rightItemIcon={SVG.bunnybookmark(vw(6), vw(6), COLORSCHEME.gray1)}
                centerChildren={
                    <CLASS.ViewColCenter>
                        <CTEXT.NGT_Inter_DispMd_SemiBold children={`Chọn câu trả lời đúng`} />
                        <CTEXT.NGT_Inter_BodyLg_SemiBold children={quizData?.label.chapterTitle || subTitle} color={COLORSCHEME.gray1} />
                    </CLASS.ViewColCenter>
                }
                style={{
                    container: [styles.marginBottom4vw]
                }}
            />
            <ScrollView style={[styles.flex1, styles.flexCol, styles.paddingH4vw]} contentContainerStyle={[styles.gap4vw]}>
                <CLASS.ProgressRowWithColorScheme length={quizData?.data.ques.length || 1} currentIndex={currentIndex} />
                <View style={[componentStyleList.roundBorderGray500 as any]}>
                    {
                        quizData?.data.ques[currentIndex].includes('asset') ?
                            <Image source={quizData?.data.ques[currentIndex] as any} resizeMethod='resize' resizeMode='contain' style={[styles.w100, styles.h100] as ImageStyle} />
                            :
                            <CTEXT.NGT_Inter_HeaderMd_Med style={[styles.textCenter]} children={quizData?.data.ques[currentIndex] || ''} />
                    }
                </View>
                {['A', 'B', 'C', 'D'].map((item, index) => {
                    const ans = quizData?.data[`ans${item}` as keyof typeof quizData.data][currentIndex]
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {

                            }}
                            style={[componentStyleList.roundBorderGray500 as any]}>
                            {
                                ans?.includes('asset') ?
                                    <Image source={ans as any} resizeMethod='resize' resizeMode='contain' style={[styles.w100, styles.h100] as ImageStyle} />
                                    :
                                    <CTEXT.NGT_Inter_HeaderMd_Med style={[styles.textCenter]} children={ans || ''} />
                            }
                        </TouchableOpacity>
                    )
                })}

                
            </ScrollView>
        </CLASS.SSBarWithSaveAreaWithColorScheme>
    )
}