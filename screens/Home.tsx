import { View, Text, Animated, ScrollView, TouchableOpacity, Platform, Image, ImageStyle, FlatList } from 'react-native'
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { storageGetItem, storageGetList } from '../data/storageFunc'
import styles, { vh, vw } from '../assets/stylesheet'
import clrStyle, { componentStyleList, NGHIASTYLE } from '../assets/componentStyleSheet'
import { RootContext } from '../data/store'
import * as CLASS from '../assets/Class'
import * as SVG from '../assets/svgXml'
import * as CTEXT from '../assets/CustomText'
import * as Progress from 'react-native-progress'
import { demoCardTitleData } from '../data/factoryData'
import { CardTitleFormat } from '../data/interfaceFormat'

export default function Home() {
  // Sentinal variable <<<<<<<<<<<<<<
  const navigation = useNavigation()
  const [CurrentCache, dispatch] = useContext(RootContext)
  let COLORSCHEME = CurrentCache.colorScheme

  // State variable <<<<<<<<<<<<<<
  const [libGradeSelected, setLibGradeSelected] = useState<number>(9)

  // Local variable <<<<<<<<<<<<<<
  const CATEGORY_LIST = ['Tất cả', 'Mới', 'Chưa hoàn thành', 'Đã hoàn thành']

  // Render section <<<<<<<<<<<<<<
  const RenderHeaderSection = useMemo(() => {
    return (
      <CLASS.ViewRowBetweenCenter style={[componentStyleList.roundBorderBrand as any, styles.gap4vw, COLORSCHEME.type === 'dark' ? { backgroundColor: NGHIASTYLE.NghiaBrand900 } : null]}>
        <CLASS.ViewCol style={[styles.justifyContentSpaceBetween, { minHeight: vw(30) }, styles.gap2vw, styles.flex1,]}>
          <CLASS.ViewRow style={[styles.gap2vw]}>
            <Progress.Circle
              progress={0.5}
              size={vw(11)}
              borderWidth={0}
              thickness={vw(1.2)}
              strokeCap='round'
              unfilledColor={NGHIASTYLE.NghiaBrand200 as string}
              color={NGHIASTYLE.NghiaBrand600 as string}
            />
            <CLASS.ViewCol style={[styles.flex1,]}>
              <CTEXT.NGT_Inter_BodyMd_Reg >7/10 đã hoàn thành</CTEXT.NGT_Inter_BodyMd_Reg>
              <CTEXT.NGT_Inter_BodyLg_SemiBold>Phương trình bậc nhất một ẩn</CTEXT.NGT_Inter_BodyLg_SemiBold>
            </CLASS.ViewCol>
          </CLASS.ViewRow>
          <CLASS.RoundBtn
            title='Hoàn thành ngay'
            onPress={() => { }}
            textClass={CTEXT.NGT_Inter_BodyMd_SemiBold}
            textColor={COLORSCHEME.background as string}
            bgColor={COLORSCHEME.brandMain}
            customStyle={[styles.wfit, { paddingHorizontal: vw(4), paddingVertical: vw(1.5), borderRadius: vw(1.5) }]}
          />
        </CLASS.ViewCol>
        <Image source={require('../assets/photos/home1.png')} resizeMethod='resize' resizeMode='contain' style={[styles.w30vw, styles.h30vw] as ImageStyle} />
      </CLASS.ViewRowBetweenCenter>
    )
  }, [COLORSCHEME])

  const RenderLibChooseSection = useMemo(() => {
    return (
      <CLASS.ViewCol style={[styles.positionSticky, styles.top0, styles.gap4vw,]}>
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
      </CLASS.ViewCol>
    )
  }, [libGradeSelected, COLORSCHEME])

  return (
    <CLASS.SSBarWithSaveAreaWithColorScheme>
      <CLASS.TopBarWithThingInMiddleAllCustomableWithColorScheme
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

        <CLASS.SelectListAndCardRender
          selectCateList={CATEGORY_LIST}
          sourceData={demoCardTitleData}
          filterFnc={async (item: string, sourceData: any): Promise<any[] | false> => {
            function filfnc(status: number) {
              const res = sourceData.filter((item: any) => item.status === status);
              return res.length > 0 ? res : null;
            }
            switch (item) {
              case 'Mới':
                return filfnc(0);
              case 'Chưa hoàn thành':
                return filfnc(1);
              case 'Đã hoàn thành':
                return filfnc(2);
              case 'Tất cả':
                return sourceData;
              default:
                return [];
            }
          }}
          selfRunFilterFnc
          renderFnc={(item: CardTitleFormat[]) => {
            return <CLASS.CardTitleRenderWithColorScheme data={item} onPressFnc={() => { }} />
          }}
        />
      </ScrollView>
    </CLASS.SSBarWithSaveAreaWithColorScheme>
  )
}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
