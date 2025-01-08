import { View, Text, Animated, ScrollView, TouchableOpacity, Platform, Image, ImageStyle, FlatList } from 'react-native'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { storageGetItem, storageGetList } from '../data/storageFunc'
import { RoundBtn, SelectorInput, SSBarWithSaveArea, SSBarWithSaveAreaWithColorScheme, TopBarWithThingInMiddleAllCustomable, TopBarWithThingInMiddleAllCustomableWithColorScheme, ViewCol, ViewColStartBetween, ViewRow, ViewRowBetweenCenter } from '../assets/Class'
import * as SVG from '../assets/svgXml'
import styles, { vh, vw } from '../assets/stylesheet'
import * as CTEXT from '../assets/CustomText'
import clrStyle, { componentStyleList, NGHIASTYLE } from '../assets/componentStyleSheet'
import { RootContext } from '../data/store'
import LinearGradient from 'react-native-linear-gradient';

export default function Mindmap() {
  const navigation = useNavigation()
  const [CurrentCache, dispatch] = useContext(RootContext)

  let COLORSCHEME = CurrentCache.colorScheme

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
        <Animated.View>
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

        </Animated.View>
      </ScrollView>
    </SSBarWithSaveAreaWithColorScheme>
  )
}