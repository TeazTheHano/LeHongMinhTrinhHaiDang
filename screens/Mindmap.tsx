import { View, Text, Animated, ScrollView, TouchableOpacity, Platform, Image, ImageStyle, FlatList } from 'react-native'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { storageGetItem, storageGetList } from '../data/storageFunc'
import { CardCateRenderWithColorScheme, RoundBtn, SelectorInput, SSBarWithSaveArea, SSBarWithSaveAreaWithColorScheme, TopBarWithThingInMiddleAllCustomable, TopBarWithThingInMiddleAllCustomableWithColorScheme, ViewCol, ViewColStartBetween, ViewRow, ViewRowBetweenCenter } from '../assets/Class'
import * as SVG from '../assets/svgXml'
import styles, { vh, vw } from '../assets/stylesheet'
import * as CTEXT from '../assets/CustomText'
import clrStyle, { componentStyleList, NGHIASTYLE } from '../assets/componentStyleSheet'
import { RootContext } from '../data/store'
import LinearGradient from 'react-native-linear-gradient';
import { MindMapDataFormat, MindMapTitleFormat } from '../data/interfaceFormat'
import { marginBottomForScrollView } from '../assets/component'

export default function Mindmap() {
  const navigation = useNavigation()
  const [CurrentCache, dispatch] = useContext(RootContext)

  let COLORSCHEME = CurrentCache.colorScheme

  const [mindMapTitle, setMindMapTitle] = useState<MindMapTitleFormat[]>([])

  useEffect(() => {
    const unsub = navigation.addListener('focus', () => {
      storageGetList('mindmapTitle').then((data) => {
        if (data) {
          setMindMapTitle(data)
        }
      })
    })
    return unsub
  }, [])

  const CreateMindmapBtn = useMemo(() => {
    return (
      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={['rgba(255,255,255,0)', COLORSCHEME.brandThird as string, 'rgba(255,255,255,0)']}
        locations={[0.2, 0.5, 0.8]}
        style={[styles.flex1, styles.flexRowCenter]}
      >
        <RoundBtn title='Tạo Mindmap mới'
          onPress={() => { navigation.navigate('MindmapCreate' as never) }}
          textClass={CTEXT.NGT_Inter_HeaderLg_Med}
          border
          borderColor={COLORSCHEME.brandMain as string}
          textColor={COLORSCHEME.brandMain}
          icon={<View style={[styles.borderRadius100, { padding: vw(1.5), backgroundColor: COLORSCHEME.type === 'dark' ? COLORSCHEME.brandThird : NGHIASTYLE.NghiaBrand100 as string }]}>{SVG.addIcon(vw(6), vw(6), COLORSCHEME.brandMain)}</View>}
          bgColor={COLORSCHEME.background}
          customStyle={[styles.marginVertical8vw, styles.borderRadius100, styles.padding2vw, styles.paddingRight4vw]}
        />
      </LinearGradient>
    )
  }, [COLORSCHEME])

  const RenderMindmapItem = useMemo(() => {
    return ({ item }: { item: MindMapTitleFormat }) => {
      const dayAgo = Math.floor((new Date().getTime() - new Date(item.createTime).getTime()) / (1000 * 60 * 60 * 24))
      const dayAgoStr = dayAgo < 1 ? 'Hôm nay' : dayAgo <= 7 ? `${dayAgo} ngày trước` : new Date(item.createTime).toLocaleDateString('vi-VN')
      return (
        <TouchableOpacity
          onPress={() => { navigation.navigate('MindmapCreate', { type: 'view', id: item.id }) }}
          style={[componentStyleList.roundBorderGray200 as any]}>
          <ViewRowBetweenCenter>
            <CTEXT.NGT_Inter_BodyMd_Med children={dayAgoStr} color={COLORSCHEME.gray1} />
            <ViewRow style={[styles.gap1vw]}>
              {item.type.map((type, index) => (
                <CardCateRenderWithColorScheme type={type} key={index} />
              ))}
            </ViewRow>
          </ViewRowBetweenCenter>
          <ViewRow style={[styles.gap3vw, styles.paddingTop2vw]}>
            {SVG.mindMapIcon(vw(6), vw(6), COLORSCHEME.brandMain)}
            <CTEXT.NGT_Inter_BodyLg_SemiBold children={item.title} color={COLORSCHEME.text} />
          </ViewRow>
        </TouchableOpacity>
      )
    }
  }, [COLORSCHEME])

  return (
    <SSBarWithSaveAreaWithColorScheme>
      <TopBarWithThingInMiddleAllCustomableWithColorScheme
        leftItem={<CTEXT.NGT_Inter_DispMd_SemiBold children={`Mindmap`} />}
        rightItemFnc={() => { }}
        rightItemIcon={SVG.optionIcon(vw(6), vw(6), COLORSCHEME.text)}
        style={{
          isAlignItemCenter: true,
          container: [styles.marginBottom4vw]
        }}
      />
      <ScrollView style={[styles.flex1, styles.flexCol, styles.paddingH4vw]} contentContainerStyle={[styles.gap4vw]}>
        {CreateMindmapBtn}
        <FlatList
          data={mindMapTitle.sort((a, b) => new Date(b.createTime).getTime() - new Date(a.createTime).getTime())}
          scrollEnabled={false}
          contentContainerStyle={[styles.gap4vw]}
          renderItem={RenderMindmapItem}
          keyExtractor={(item, index) => index.toString()}
        />
        {marginBottomForScrollView()}
      </ScrollView>
    </SSBarWithSaveAreaWithColorScheme>
  )
}