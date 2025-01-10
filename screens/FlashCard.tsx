import { View, Text, Animated, ScrollView, TouchableOpacity, Platform, Image, ImageStyle, FlatList } from 'react-native'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { storageGetItem, storageGetList, storageSaveAndOverwrite } from '../data/storageFunc'
import { NavigationButtonRowWithColorScheme, ProgressRowWithColorScheme, RoundBtn, SelectorInput, SSBarWithSaveArea, SSBarWithSaveAreaWithColorScheme, TopBarWithThingInMiddleAllCustomable, TopBarWithThingInMiddleAllCustomableWithColorScheme, ViewCol, ViewColBetweenCenter, ViewColCenter, ViewColStartBetween, ViewRow, ViewRowBetweenCenter } from '../assets/Class'
import * as SVG from '../assets/svgXml'
import styles, { vh, vw } from '../assets/stylesheet'
import * as CTEXT from '../assets/CustomText'
import clrStyle, { componentStyleList, NGHIASTYLE } from '../assets/componentStyleSheet'
import { RootContext } from '../data/store'
import * as Progress from 'react-native-progress'
import { CardTitleFormat, FlashCardFormat } from '../data/interfaceFormat'
import { flashCardList } from '../data/factoryData'

export default function FlashCard({ route }: any) {
    // Sentinal variable <<<<<<<<<<<<<<
    const navigation = useNavigation()
    const [CurrentCache, dispatch] = useContext(RootContext)
    let COLORSCHEME = CurrentCache.colorScheme

    // State variable <<<<<<<<<<<<<<
    const routeParamsItem = route.params?.item as CardTitleFormat | undefined

    const [subTitle, setSubTitle] = useState<string>(routeParamsItem?.title || '')
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [flashCardData, setFlashCardData] = useState<FlashCardFormat>()
    const [isFront, setIsFront] = useState<boolean>(true)

    // Effect <<<<<<<<<<<<<<
    useEffect(() => {
        if (routeParamsItem) {
            setSubTitle(routeParamsItem.title)
            setFlashCardData(flashCardList.find((item) => item.label.chapterTitle === routeParamsItem.title))
            storageSaveAndOverwrite('lastTouchItem', { id: routeParamsItem.dataID, type: 'cardTitle' })
        }
    }, [routeParamsItem])

    useEffect(() => {
        const unsub = navigation.addListener('beforeRemove', () => {
            if (routeParamsItem && flashCardData) {
                let saveCartTitleData: CardTitleFormat = { ...routeParamsItem }
                saveCartTitleData.process = Number(currentIndex) + 1

                if (saveCartTitleData.process === saveCartTitleData.length) {
                    saveCartTitleData.status = 2
                } else if (saveCartTitleData.process === 0) {
                    saveCartTitleData.status = 0
                } else {
                    saveCartTitleData.status = 1
                }

                storageSaveAndOverwrite('cardTitle', saveCartTitleData, saveCartTitleData.dataID)
            }
        })
        return unsub
    }, [navigation, currentIndex, flashCardData, routeParamsItem])

    return (
        <SSBarWithSaveAreaWithColorScheme>
            <TopBarWithThingInMiddleAllCustomableWithColorScheme
                returnPreScreenFnc={() => { navigation.goBack() }}
                returnPreScreenIcon={SVG.sharpLeftArrow(vw(6), vw(6), COLORSCHEME.gray1)}
                rightItemFnc={() => { }}
                rightItemIcon={SVG.bunnybookmark(vw(6), vw(6), COLORSCHEME.gray1)}
                centerChildren={
                    <ViewColCenter>
                        <CTEXT.NGT_Inter_DispMd_SemiBold children={`Flash Card`} />
                        <CTEXT.NGT_Inter_BodyLg_SemiBold children={subTitle} color={COLORSCHEME.gray1} />
                    </ViewColCenter>
                }
                style={{
                    container: [styles.marginBottom4vw]
                }}
            />
            <ViewColBetweenCenter style={[styles.flex1, styles.flexCol, styles.paddingH4vw, styles.gap4vw]}>
                <ProgressRowWithColorScheme length={routeParamsItem?.length || 1} currentIndex={currentIndex} />

                <TouchableOpacity
                    onPress={() => { setIsFront(!isFront) }}
                    style={[styles.flex1, styles.w100, { borderWidth: vw(2), borderColor: COLORSCHEME.brandMain, borderRadius: vw(5), backgroundColor: COLORSCHEME.backgroundFade }]}>
                    <View style={[styles.alignSelfCenter, styles.paddingH3vw, styles.paddingBottom2vw, { backgroundColor: COLORSCHEME.brandMain, borderBottomRightRadius: vw(2), borderBottomLeftRadius: vw(2) }]}>
                        <CTEXT.NGT_Inter_HeaderLg_SemiBold color={COLORSCHEME.background} children={isFront ? 'Mặt trước' : 'Mặt sau'} />
                    </View>
                    <ViewColCenter style={[styles.flex1]}>
                        {
                            typeof flashCardData?.front[currentIndex] === 'string' && !flashCardData?.front[currentIndex].includes('assets') ? (
                                <CTEXT.NGT_Inter_DispLg_Bld
                                    style={[styles.paddingH4vw, styles.paddingV4vw, styles.textCenter, styles.alignItemsCenter]}
                                    color={COLORSCHEME.text}
                                    children={(!isFront ? flashCardData?.back[currentIndex] : flashCardData?.front[currentIndex]) as string}
                                />
                            ) : (
                                <Image
                                    source={(!isFront ? flashCardData?.back[currentIndex] : flashCardData?.front[currentIndex]) as any}
                                    resizeMethod='scale'
                                    resizeMode='contain'
                                    style={[styles.flex1, styles.w100] as ImageStyle}
                                />
                            )
                        }
                    </ViewColCenter>
                </TouchableOpacity>

                <NavigationButtonRowWithColorScheme
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    setIsFront={setIsFront}
                    navigation={navigation}
                    LENGTH={routeParamsItem?.length || 1}
                    displayType='Thẻ'
                />
            </ViewColBetweenCenter>
        </SSBarWithSaveAreaWithColorScheme>
    )
}