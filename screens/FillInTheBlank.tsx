import { View, Text, Animated, ScrollView, TouchableOpacity, Platform, Image, ImageStyle, FlatList, ImageSourcePropType, TextInput, Alert } from 'react-native'
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
import { FillInTheBlankFormat, QuestTitleFormat, QuizFormat } from '../data/interfaceFormat'
import { getInitialCardTitleList, marginBottomForScrollView } from '../assets/component'
import { fillInTheBlankList } from '../data/factoryData'
import { useInitializeQuizData, useSaveQuizDataBeforeLeave } from '../assets/reUseHook'

export default function FillInTheBlank({ route }: any) {
    // Sentinal variable <<<<<<<<<<<<<<
    const navigation = useNavigation()
    const [CurrentCache, dispatch] = useContext(RootContext)
    let COLORSCHEME = CurrentCache.colorScheme

    // State variable <<<<<<<<<<<<<<
    const routeParamsItem = route.params.item as { id: string, title: string } | undefined

    const [subTitle, setSubTitle] = useState<string>(routeParamsItem?.title || '')
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [quizData, setQuizData] = useState<FillInTheBlankFormat>()
    const [currentChoice, setCurrentChoice] = useState<string[]>()
    const [point, setPoint] = useState<number[]>()
    const [isDone, setIsDone] = useState<boolean>(false)

    // Effect <<<<<<<<<<<<<<

    useInitializeQuizData(routeParamsItem, setSubTitle, setQuizData, fillInTheBlankList, setCurrentIndex, setCurrentChoice, setPoint, setIsDone, 'fillInTheBlank');
    useSaveQuizDataBeforeLeave(navigation, quizData, isDone ? (quizData as FillInTheBlankFormat).ques.length : currentIndex, point, 'fillInTheBlank', route.params.chapterID);

    return (
        <CLASS.SSBarWithSaveAreaWithColorScheme>
            <CLASS.TopBarWithThingInMiddleAllCustomableWithColorScheme
                returnPreScreenFnc={() => { navigation.goBack() }}
                returnPreScreenIcon={SVG.sharpLeftArrow(vw(6), vw(6), COLORSCHEME.gray1)}
                rightItemFnc={() => { }}
                rightItemIcon={SVG.bunnybookmark(vw(6), vw(6), COLORSCHEME.gray1)}
                centerChildren={
                    <CLASS.ViewColCenter>
                        <CTEXT.NGT_Inter_DispMd_SemiBold children={`Điền vào chỗ trống`} />
                        <CTEXT.NGT_Inter_BodyLg_SemiBold children={quizData?.label.chapterTitle || subTitle} color={COLORSCHEME.gray1} />
                    </CLASS.ViewColCenter>
                }
            />
            <View style={[styles.paddingH4vw, styles.paddingBottom4vw]}>
                {point && isDone ?
                    <CLASS.ViewColCenter style={[styles.gap2vw]}>
                        <CLASS.ProgressRowWithColorScheme length={quizData?.ques.length || 1} currentIndex={currentIndex} activeValue={point} activeColor={NGHIASTYLE.NghiaSuccess800 as string} inactiveColor={NGHIASTYLE.NghiaError700 as string} />
                        <CTEXT.NGT_Inter_HeaderLg_Bld children={`Kết quả của bạn: ${point.reduce((a, b) => a + b, 0)} / ${quizData?.ques.length}`} color={COLORSCHEME.brandMain} />
                    </CLASS.ViewColCenter>
                    : <CLASS.ProgressRowWithColorScheme length={quizData?.ques.length || 1} currentIndex={currentIndex} />
                }
            </View>
            <ScrollView style={[styles.flex1, styles.flexCol, styles.paddingH4vw]} contentContainerStyle={[styles.gap4vw]}>
                <CTEXT.NGT_Inter_HeaderLg_Bld children={`Câu ${currentIndex + 1}`} color={COLORSCHEME.gray1} />
                <View style={[componentStyleList.roundFillBrand100 as any, { borderColor: NGHIASTYLE.NghiaBrand800, borderWidth: 4 }]}>
                    {
                        typeof quizData?.ques[currentIndex] === 'string' && !quizData?.ques[currentIndex].includes('asset') ?
                            <CTEXT.NGT_Inter_HeaderMd_Med style={[styles.textCenter]} color='black' children={quizData?.ques[currentIndex] || ''} />
                            :
                            <Image source={quizData?.ques[currentIndex] as any} resizeMethod='resize' resizeMode='contain' style={[styles.w100, styles.h60vw] as ImageStyle} />
                    }
                </View>
                <TextInput
                    value={currentChoice?.[currentIndex] || ''}
                    editable={!isDone}
                    onChangeText={(text) => {
                        setCurrentChoice(prevChoice => {
                            const updatedChoices = [...(prevChoice || [])];
                            updatedChoices[currentIndex] = text;
                            return updatedChoices;
                        });
                    }}
                    style={[componentStyleList.roundBorderGray200 as any, styles.textCenter, { color: COLORSCHEME.text }, isDone ? { borderWidth: 3, borderColor: currentChoice?.[currentIndex] === quizData?.ans[currentIndex] ? NGHIASTYLE.NghiaSuccess500 : NGHIASTYLE.NghiaError500 } : { borderColor: NGHIASTYLE.NghiaWarning500, borderWidth: 2 }]}
                    placeholder={`Đáp án của bạn`}
                    autoFocus
                />
                {
                    isDone && (
                        <>
                            <CTEXT.NGT_Inter_HeaderLg_Bld children={`Đáp án`} color={COLORSCHEME.gray1} />
                            {
                                typeof quizData?.ques[currentIndex] === 'string' && !quizData?.ques[currentIndex].includes('asset') ?
                                    <CTEXT.NGT_Inter_HeaderMd_Med style={[styles.textCenter]} children={quizData?.ans[currentIndex] || ''} />
                                    :
                                    <Image source={quizData?.ans[currentIndex] as any} resizeMethod='resize' resizeMode='contain' style={[styles.w100, styles.h60vw] as ImageStyle} />
                            }
                        </>
                    )
                }
                {marginBottomForScrollView(4)}
            </ScrollView>
            <View style={[styles.marginBottom2vw]}>
                {isDone ?
                    <CLASS.LowBtn title='Trở về' onPress={() => { navigation.goBack() }} bgColor={NGHIASTYLE.NghiaBrand800 as string} fontColor='white' FontElement={CTEXT.NGT_Inter_HeaderLg_Bld} CustomStyle={[styles.marginVertical2vw, styles.paddingV2vw]} /> :
                    null
                }
                <CLASS.NavigationButtonRowWithColorScheme
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    navigation={navigation}
                    LENGTH={quizData?.ques?.length || 1}
                    displayType='Thẻ'
                    onSubmit={() => {
                        if (isDone === true) {
                            Alert.alert('Bạn có muốn thực hiện lại bài kiểm tra không?', '', [
                                {
                                    text: 'Trở về',
                                    onPress: () => { navigation.goBack() },
                                    style: 'destructive',
                                },
                                {
                                    text: 'Có',
                                    onPress: () => {
                                        setIsDone(false)
                                        setCurrentIndex(0)
                                        setCurrentChoice(undefined)
                                        setPoint(undefined)
                                    },
                                },
                            ])
                            return
                        }

                        setIsDone(true)
                        setCurrentIndex(0)

                        quizData?.ans.forEach((item, index) => {
                            if (item === currentChoice?.[index]) {
                                console.log('right');
                                setPoint(prevPoint => prevPoint ? [...prevPoint, 1] : [1]);
                            } else {
                                console.log('wrong');
                                setPoint(prevPoint => prevPoint ? [...prevPoint, 0] : [0]);
                            }
                        });
                    }}
                />
            </View>
        </CLASS.SSBarWithSaveAreaWithColorScheme>
    )
}