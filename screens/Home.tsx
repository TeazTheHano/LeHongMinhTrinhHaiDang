import { View, Text, Animated, ScrollView, TouchableOpacity, Platform, Image, ImageStyle, FlatList } from 'react-native'
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { storageGetItem, storageGetList } from '../data/storageFunc'
import { CardCateRender, RoundBtn, SelectorInput, SSBarWithSaveArea, TopBarWithThingInMiddleAllCustomable, ViewCol, ViewColStartBetween, ViewRow, ViewRowBetweenCenter } from '../assets/Class'
import * as SVG from '../assets/svgXml'
import styles, { vh, vw } from '../assets/stylesheet'
import * as CTEXT from '../assets/CustomText'
import { DATAmonthList } from '../data/factoryData'
import clrStyle, { componentStyleList, NGHIASTYLE } from '../assets/componentStyleSheet'
import { RootContext } from '../data/store'
import * as Progress from 'react-native-progress'

export default function Home() {
  // Sentinal variable <<<<<<<<<<<<<<
  const navigation = useNavigation()
  const [CurrentCache, dispatch] = useContext(RootContext)
  let COLORSCHEME = CurrentCache.colorScheme

  // State variable <<<<<<<<<<<<<<
  const [libGradeSelected, setLibGradeSelected] = useState<number>(9)

  const [isShowCategorySelection, setIsShowCategorySelection] = useState<boolean>(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả')
  const [selectedCategoryData, setSelectedCategoryData] = useState<any[]>([])

  // Local variable <<<<<<<<<<<<<<
  const CATEGORY_LIST = ['Tất cả', 'Mới', 'Chưa hoàn thành', 'Đã hoàn thành']

  // Render section <<<<<<<<<<<<<<
  const RenderHeaderSection = useMemo(() => {
    return (
      <ViewRowBetweenCenter style={[componentStyleList.roundBorderBrand as any, styles.gap4vw, COLORSCHEME.type === 'dark' ? { backgroundColor: NGHIASTYLE.NghiaBrand900 } : null]}>
        <ViewCol style={[styles.justifyContentSpaceBetween, { minHeight: vw(30) }, styles.gap2vw, styles.flex1,]}>
          <ViewRow style={[styles.gap2vw]}>
            <Progress.Circle
              progress={0.5}
              size={vw(11)}
              borderWidth={0}
              thickness={vw(1.2)}
              strokeCap='round'
              unfilledColor={NGHIASTYLE.NghiaBrand200 as string}
              color={NGHIASTYLE.NghiaBrand600 as string}
            />
            <ViewCol style={[styles.flex1,]}>
              <CTEXT.NGT_Inter_BodyMd_Reg >7/10 đã hoàn thành</CTEXT.NGT_Inter_BodyMd_Reg>
              <CTEXT.NGT_Inter_BodyLg_SemiBold>Phương trình bậc nhất một ẩn</CTEXT.NGT_Inter_BodyLg_SemiBold>
            </ViewCol>
          </ViewRow>
          <RoundBtn
            title='Hoàn thành ngay'
            onPress={() => { }}
            textClass={CTEXT.NGT_Inter_BodyMd_SemiBold}
            textColor={COLORSCHEME.background as string}
            bgColor={COLORSCHEME.brandMain}
            customStyle={[styles.wfit, { paddingHorizontal: vw(4), paddingVertical: vw(1.5), borderRadius: vw(1.5) }]}
          />
        </ViewCol>
        <Image source={require('../assets/photos/home1.png')} resizeMethod='resize' resizeMode='contain' style={[styles.w30vw, styles.h30vw] as ImageStyle} />
      </ViewRowBetweenCenter>
    )
  }, [COLORSCHEME])

  const RenderLibChooseSection = useMemo(() => {
    return (
      <ViewCol style={[styles.positionSticky, styles.top0, styles.gap4vw,]}>
        <CTEXT.NGT_Inter_DispMd_SemiBold children={'Thư viện'} />
        <FlatList
          scrollEnabled={false}
          style={[styles.w100, componentStyleList.roundBorderGray200 as any, styles.padding1vw,]}
          contentContainerStyle={[styles.flexRowBetweenCenter]}
          data={[9, 8, 7, 6]}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => { setLibGradeSelected(item) }}
                style={[styles.paddingV2vw, styles.paddingH4vw, styles.flex1, styles.borderRadius2vw, { backgroundColor: item === libGradeSelected ? COLORSCHEME.brandMain : COLORSCHEME.background }]}
              >
                {item === libGradeSelected ?
                  <CTEXT.NGT_Inter_HeaderMd_SemiBold color={(COLORSCHEME.background) as string}>Lớp {item}</CTEXT.NGT_Inter_HeaderMd_SemiBold>
                  : <CTEXT.NGT_Inter_HeaderMd_Reg color={(NGHIASTYLE.NghiaGray500) as string}>Lớp {item}</CTEXT.NGT_Inter_HeaderMd_Reg>
                }
              </TouchableOpacity>
            )
          }}
        />
      </ViewCol>
    )
  }, [libGradeSelected, COLORSCHEME])

  const toggleCategorySelection = useCallback(() => {
    setIsShowCategorySelection(prev => !prev)
  }, [])
  const RenderCategorySelectionHeader = useMemo(() => {
    return (
      <ViewCol>
        <TouchableOpacity
          onPress={toggleCategorySelection}
          style={[styles.flexRowCenter, styles.gap1vw, styles.alignSelfStart, styles.paddingV1vw]}
        >
          <CTEXT.NGT_Inter_HeaderMd_SemiBold children={selectedCategory} color={COLORSCHEME.brandSecond} />
          {SVG.roundFillDownTriangle(vw(6), vw(6), COLORSCHEME.gray1)}
        </TouchableOpacity>
        {isShowCategorySelection && CATEGORY_LIST.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelectedCategory(item)
                toggleCategorySelection()
                // TODO: add data change fnc
              }}
              style={[styles.flexRowCenter, styles.gap1vw, styles.alignSelfStart, styles.paddingV1vw]}
            >
              <CTEXT.NGT_Inter_HeaderMd_Reg children={item} color={COLORSCHEME.gray1} />
            </TouchableOpacity>
          )
        })}
      </ViewCol>
    )
  }, [selectedCategory, isShowCategorySelection])
  const RenderCategorySelection = useMemo(() => {
    return (
      <FlatList
        scrollEnabled={false}
        data={selectedCategoryData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => { }}
            style={[styles.flexRowCenter, styles.gap1vw, styles.alignSelfStart, styles.paddingV1vw]}
          >
            <CTEXT.NGT_Inter_HeaderMd_Reg children={item.name} color={COLORSCHEME.gray1} />
          </TouchableOpacity>
        )}
      />
    )
  }, [selectedCategory])


  return (
    <SSBarWithSaveArea COLORTHEME={COLORSCHEME}>
      <TopBarWithThingInMiddleAllCustomable
        COLORTHEME={COLORSCHEME}
        leftItem={<CTEXT.NGT_Inter_DispMd_SemiBold children={`Numbunnies`} />}
        rightItemFnc={() => { }}
        rightItemIcon={SVG.optionIcon(vw(6), vw(6), COLORSCHEME.text)}
        style={{
          isAlignItemCenter: true,
          container: [styles.marginBottom4vw]
        }}
      />
      <ScrollView style={[styles.flex1, styles.flexCol, styles.paddingH4vw]} contentContainerStyle={[styles.gap4vw]}>

        {RenderHeaderSection}
        {RenderLibChooseSection}
        {RenderCategorySelectionHeader}
        {RenderCategorySelection}


        <ViewCol style={[componentStyleList.roundFillBrand600 as any, styles.gap2vw]}>
          <ViewRowBetweenCenter>
            <CTEXT.NGT_Inter_BodyMd_SemiBold color='white'>10 <CTEXT.NGT_Inter_BodyMd_Reg color='white' children='thẻ | Tiến độ: ' />0/10</CTEXT.NGT_Inter_BodyMd_SemiBold>
            <CardCateRender type={0} />
          </ViewRowBetweenCenter>
          <CTEXT.NGT_Inter_BodyLg_SemiBold color='white' children={'Phương trình bậc nhất một ẩn'} />
        </ViewCol>
      </ScrollView>
    </SSBarWithSaveArea>
  )
}