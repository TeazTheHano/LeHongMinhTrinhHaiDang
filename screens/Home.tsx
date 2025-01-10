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
import { CardTitleFormat, QuestTitleFormat } from '../data/interfaceFormat'
import { getInitialCardTitleList, marginBottomForScrollView } from '../assets/component'

export default function Home() {
  // Sentinal variable <<<<<<<<<<<<<<
  const navigation = useNavigation()
  const [CurrentCache, dispatch] = useContext(RootContext)
  let COLORSCHEME = CurrentCache.colorScheme

  // State variable <<<<<<<<<<<<<<
  const [libGradeSelected, setLibGradeSelected] = useState<number>(9)
  const [cardTitleData, setCardTitleData] = useState<CardTitleFormat[]>([])
  const [cardTitleDataFiltered, setCardTitleDataFiltered] = useState<CardTitleFormat[]>([])
  const [lastTouchItem, setLastTouchItem] = useState<{ id: string, type: string }>({ id: '', type: '' })
  const [lastTouchData, setLastTouchData] = useState<{ id: string, navigateTo: string, process: number, length: number, title: string, data: CardTitleFormat | any }>()

  // Local variable <<<<<<<<<<<<<<
  const CATEGORY_LIST = ['Tất cả', 'Mới', 'Chưa hoàn thành', 'Đã hoàn thành']

  // Effect <<<<<<<<<<<<<<
  useEffect(() => {
    const unsub = navigation.addListener('focus', () => {
      const fetchInitialCardTitles = async () => {
        const initialCardTitles = await getInitialCardTitleList()
        setCardTitleData(initialCardTitles || [])

        const lastTouch = await storageGetItem('lastTouchItem')
        lastTouch && setLastTouchItem(lastTouch)
      }
      fetchInitialCardTitles()
    })
    return unsub
  }, [navigation])

  useEffect(() => {
    let cardTitleDataWithGrade = cardTitleData.filter((cardTitle) => cardTitle.grade === libGradeSelected)
    setCardTitleDataFiltered(cardTitleDataWithGrade)
  }, [cardTitleData, libGradeSelected, navigation])

  useEffect(() => {
    const fetchLastTouch = async () => {
      if (lastTouchItem.type === 'cardTitle') {
        const initLastTouchData = await storageGetItem('cardTitle', lastTouchItem.id)
        initLastTouchData && setLastTouchData({
          id: initLastTouchData.dataID,
          navigateTo: 'FlashCard',
          process: initLastTouchData.process,
          length: initLastTouchData.length,
          title: initLastTouchData.title,
          data: initLastTouchData
        })
      } else if (lastTouchItem.type === 'quiz') {
        console.log(lastTouchItem);

        const initLastTouchData = await storageGetItem('questTitle', lastTouchItem.id)
        initLastTouchData && setLastTouchData({
          id: initLastTouchData.id,
          navigateTo: 'Quiz',
          process: initLastTouchData.process,
          length: initLastTouchData.length,
          title: initLastTouchData.chapterTitle,
          data: { id: initLastTouchData.questID, title: initLastTouchData.chapterTitle }
        })
      }
    }

    const unsub = navigation.addListener('focus', fetchLastTouch)
    fetchLastTouch()

    return () => unsub()
  }, [lastTouchItem.id, navigation])

  // Render section <<<<<<<<<<<<<<
  const RenderHeaderSection = useMemo(() => {
    return (
      <CLASS.ViewRowBetweenCenter style={[componentStyleList.roundBorderBrand as any, styles.gap4vw, COLORSCHEME.type === 'dark' ? { backgroundColor: NGHIASTYLE.NghiaBrand900 } : null]}>
        <CLASS.ViewCol style={[styles.justifyContentSpaceBetween, { minHeight: vw(30) }, styles.gap2vw, styles.flex1,]}>
          <CLASS.ViewRow style={[styles.gap2vw]}>
            <Progress.Circle
              progress={((lastTouchData?.process || 0) / (lastTouchData?.length || 1))}
              size={vw(11)}
              borderWidth={0}
              thickness={vw(1.2)}
              strokeCap='round'
              unfilledColor={NGHIASTYLE.NghiaBrand200 as string}
              color={NGHIASTYLE.NghiaBrand600 as string}
            />
            <CLASS.ViewCol style={[styles.flex1,]}>
              <CTEXT.NGT_Inter_BodyMd_Reg>{(lastTouchData?.process || 0)}/{(lastTouchData?.length || 1)} Hoàn thành</CTEXT.NGT_Inter_BodyMd_Reg>
              <CTEXT.NGT_Inter_BodyLg_SemiBold>{lastTouchData?.title}</CTEXT.NGT_Inter_BodyLg_SemiBold>
            </CLASS.ViewCol>
          </CLASS.ViewRow>
          <CLASS.RoundBtn
            title='Hoàn thành ngay'
            onPress={() => {
              navigation.navigate(lastTouchData?.navigateTo, { item: lastTouchData?.data, current: lastTouchData?.process - 1 })
            }}
            textClass={CTEXT.NGT_Inter_BodyMd_SemiBold}
            textColor={COLORSCHEME.background as string}
            bgColor={COLORSCHEME.brandMain}
            customStyle={[styles.wfit, { paddingHorizontal: vw(4), paddingVertical: vw(1.5), borderRadius: vw(1.5) }]}
          />
        </CLASS.ViewCol>
        <Image source={require('../assets/photos/home1.png')} resizeMethod='resize' resizeMode='contain' style={[styles.w30vw, styles.h30vw] as ImageStyle} />
      </CLASS.ViewRowBetweenCenter>
    )
  }, [COLORSCHEME, lastTouchData, navigation])

  const RenderLibChooseSection = useMemo(() => {
    return (
      <CLASS.ViewCol style={[styles.positionSticky, styles.top0, styles.gap4vw,]}>
        <CTEXT.NGT_Inter_DispMd_SemiBold children={'Flash card của bạn'} />
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

        {
          cardTitleDataFiltered.length > 0 ?
            <CLASS.SelectListAndCardRender
              selectCateList={CATEGORY_LIST}
              sourceData={cardTitleDataFiltered}
              filterFnc={async (item: string, sourceData: CardTitleFormat[]): Promise<any[] | false> => {
                const filterByStatus = (status: number) =>
                  sourceData.filter((card) => card.status === status);
                switch (item) {
                  case 'Mới':
                    return filterByStatus(0);
                  case 'Chưa hoàn thành':
                    return filterByStatus(1);
                  case 'Đã hoàn thành':
                    return filterByStatus(2);
                  case 'Tất cả':
                    return sourceData;
                  default:
                    return [];
                }
              }}
              selfRunFilterFnc
              renderFnc={(item: CardTitleFormat[]) => {
                if (item.length > 0) {
                  return <CLASS.CardTitleRenderWithColorScheme data={item} onPressFnc={(par: CardTitleFormat) => { navigation.navigate('FlashCard' as never, { item: par }) }} />
                } else {
                  return <CTEXT.NGT_Inter_HeaderMd_SemiBold children='Không có thẻ nào phù hợp' />
                }
              }}
            /> :
            <CTEXT.NGT_Inter_HeaderMd_SemiBold children='Tải dữ liệu lỗi hoặc không có dữ liệu' />
        }


        {marginBottomForScrollView()}
      </ScrollView>
    </CLASS.SSBarWithSaveAreaWithColorScheme>
  )
}