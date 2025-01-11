import { View, Text, Animated, ScrollView, TouchableOpacity, Platform, Image, ImageStyle, FlatList } from 'react-native';
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { storageGetItem, storageGetList } from '../data/storageFunc';
import styles, { vh, vw } from '../assets/stylesheet';
import clrStyle, { componentStyleCardContainner, componentStyleList, NGHIASTYLE } from '../assets/componentStyleSheet';
import { RootContext } from '../data/store';
import * as CLASS from '../assets/Class';
import * as SVG from '../assets/svgXml';
import * as CTEXT from '../assets/CustomText';
import * as Progress from 'react-native-progress';
import { CardTitleFormat, ChapterTitleFormat, FillInTheBlankFormat, QuestTitleFormat, QuizFormat } from '../data/interfaceFormat';
import { fetchInitialData, fetchLastTouchData, getInitialCardTitleList, getInitialChapterTitleList, marginBottomForScrollView } from '../assets/component';
import { chapterTitleList, fillInTheBlankList, quizDataList } from '../data/factoryData';

export default function Test() {
  const navigation = useNavigation();
  const [CurrentCache, dispatch] = useContext(RootContext);
  const COLORSCHEME = CurrentCache.colorScheme;

  const [libGradeSelected, setLibGradeSelected] = useState<number>(9);
  const [cardTitleData, setCardTitleData] = useState<Array<ChapterTitleFormat | QuizFormat | FillInTheBlankFormat>>([]);
  const [cardTitleDataFiltered, setCardTitleDataFiltered] = useState<Array<ChapterTitleFormat | QuizFormat | FillInTheBlankFormat>>([]);
  const [lastTouchItem, setLastTouchItem] = useState<{ id: string, type: string }>({ id: '', type: '' });
  const [lastTouchData, setLastTouchData] = useState<{ id: string; navigateTo: string; process: number; length: number; title: string; data: any }>();

  const CATEGORY_LIST = ['Tất cả', 'Mới', 'Chưa hoàn thành', 'Đã hoàn thành'];

  useEffect(() => {
    const unsub = navigation.addListener('focus', () => { fetchInitialData(setCardTitleData, setLastTouchItem) });
    return unsub;
  }, [navigation]);

  useEffect(() => {
    const filteredData = cardTitleData.filter(
      (card) =>
        ('label' in card ? card.label.grade : card.grade) === libGradeSelected
    );
    setCardTitleDataFiltered(filteredData);
  }, [cardTitleData, libGradeSelected]);

  useEffect(() => {
    const unsub = navigation.addListener('focus', () => fetchLastTouchData(lastTouchItem, setLastTouchData, navigation));
    fetchLastTouchData(lastTouchItem, setLastTouchData, navigation);

    return () => unsub();
  }, [lastTouchItem.id, navigation]);

  const RenderHeaderSection = useMemo(() => (
    <CLASS.ViewRowBetweenCenter style={[componentStyleList.roundBorderBrand as any, styles.gap4vw, COLORSCHEME.type === 'dark' ? { backgroundColor: NGHIASTYLE.NghiaBrand900 } : null]}>
      <CLASS.ViewCol style={[styles.justifyContentSpaceBetween, { minHeight: vw(30) }, styles.gap2vw, styles.flex1]}>
        <CLASS.ViewRow style={[styles.gap2vw]}>
          <View style={[componentStyleList.roundBorderGray200 as any, styles.padding1vw]}>
            <CTEXT.NGT_Inter_BodyMd_Reg>{(lastTouchData?.process || 0)}/{(lastTouchData?.length || 1)} Hoàn thành</CTEXT.NGT_Inter_BodyMd_Reg>
          </View>
        </CLASS.ViewRow>
        <CTEXT.NGT_Inter_BodyLg_SemiBold>{lastTouchData?.title}</CTEXT.NGT_Inter_BodyLg_SemiBold>
        <CLASS.RoundBtn
          title='Hoàn thành ngay'
          onPress={() => navigation.navigate(lastTouchData?.navigateTo, { item: lastTouchData?.data, current: lastTouchData?.process - 1 })}
          textClass={CTEXT.NGT_Inter_BodyMd_SemiBold}
          textColor={COLORSCHEME.background as string}
          bgColor={COLORSCHEME.brandMain}
          customStyle={[styles.wfit, { paddingHorizontal: vw(4), paddingVertical: vw(1.5), borderRadius: vw(1.5) }]}
        />
      </CLASS.ViewCol>
      <Image source={require('../assets/photos/test1.png')} resizeMethod='resize' resizeMode='contain' style={[styles.w30vw, styles.h30vw] as ImageStyle} />
    </CLASS.ViewRowBetweenCenter>
  ), [COLORSCHEME, lastTouchData, navigation]);

  const RenderLibChooseSection = useMemo(() => (
    <CLASS.ViewCol style={[styles.positionSticky, styles.top0, styles.gap4vw]}>
      <CTEXT.NGT_Inter_DispMd_SemiBold>Quỹ câu hỏi</CTEXT.NGT_Inter_DispMd_SemiBold>
      <FlatList
        scrollEnabled={false}
        style={[styles.w100, componentStyleList.roundBorderGray200 as any, styles.padding1vw]}
        contentContainerStyle={[styles.flexRowBetweenCenter]}
        data={[9, 8, 7, 6]}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setLibGradeSelected(item)}
            style={[styles.paddingV2vw, styles.paddingH4vw, styles.flex1, styles.borderRadius2vw, { backgroundColor: item === libGradeSelected ? COLORSCHEME.brandMain : COLORSCHEME.background }]}
          >
            {item === libGradeSelected ?
              <CTEXT.NGT_Inter_HeaderMd_SemiBold color={COLORSCHEME.background as string}>Lớp {item}</CTEXT.NGT_Inter_HeaderMd_SemiBold>
              : <CTEXT.NGT_Inter_HeaderMd_Reg color={NGHIASTYLE.NghiaGray500 as string}>Lớp {item}</CTEXT.NGT_Inter_HeaderMd_Reg>
            }
          </TouchableOpacity>
        )}
      />
    </CLASS.ViewCol>
  ), [libGradeSelected, COLORSCHEME]);

  return (
    <CLASS.SSBarWithSaveAreaWithColorScheme>
      <CLASS.TopBarWithThingInMiddleAllCustomableWithColorScheme
        leftItem={<CTEXT.NGT_Inter_DispMd_SemiBold>Kiểm tra</CTEXT.NGT_Inter_DispMd_SemiBold>}
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

        {cardTitleDataFiltered.length > 0 ? (
          <CLASS.SelectListAndCardRender
            selectCateList={CATEGORY_LIST}
            sourceData={cardTitleDataFiltered}
            filterFnc={async (item: string, sourceData: CardTitleFormat[]): Promise<any[] | false> => {
              const filterByStatus = (status: number) => sourceData.filter(card => card.status === status);
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
            renderFnc={(item: Array<ChapterTitleFormat | QuizFormat | FillInTheBlankFormat>) => (
              item.length > 0 ? <CLASS.ChapterCartRenderWithColorScheme data={item} navigation={navigation} />
                : <CTEXT.NGT_Inter_HeaderMd_SemiBold>Không có thẻ nào phù hợp</CTEXT.NGT_Inter_HeaderMd_SemiBold>
            )}
          />
        ) : (
          <CTEXT.NGT_Inter_HeaderMd_SemiBold>Tải dữ liệu lỗi hoặc không có dữ liệu</CTEXT.NGT_Inter_HeaderMd_SemiBold>
        )}
        {marginBottomForScrollView()}
      </ScrollView>
    </CLASS.SSBarWithSaveAreaWithColorScheme>
  );
}