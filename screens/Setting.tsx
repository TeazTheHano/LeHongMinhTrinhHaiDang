import { View, Text, Animated, ScrollView, TouchableOpacity, Platform, Image, ImageStyle, FlatList, Switch, useColorScheme, Alert } from 'react-native'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { storageClearList, storageGetItem, storageGetList, storageRemove, storageRemoveUser, storageSaveAndOverwrite } from '../data/storageFunc'
import { RoundBtn, SelectorInput, SSBarWithSaveArea, SSBarWithSaveAreaWithColorScheme, TopBarWithThingInMiddleAllCustomable, TopBarWithThingInMiddleAllCustomableWithColorScheme, ViewCol, ViewColStartBetween, ViewRow, ViewRowBetweenCenter } from '../assets/Class'
import * as SVG from '../assets/svgXml'
import styles, { vh, vw } from '../assets/stylesheet'
import * as CTEXT from '../assets/CustomText'
import clrStyle, { componentStyleList, NGHIASTYLE } from '../assets/componentStyleSheet'
import { currentSetIsForceDark, RootContext } from '../data/store'
import * as Progress from 'react-native-progress'

export default function Setting() {
  const navigation = useNavigation()
  const [CurrentCache, dispatch] = useContext(RootContext)
  let COLORSCHEME = CurrentCache.colorScheme

  const [isForceDark, setIsForceDark] = useState<boolean>(false)
  useEffect(() => {
    async function getIsFD() {
      let isFD = await storageGetItem('darkMode')
      setIsForceDark(isFD)
    }
    getIsFD()
  }, [])

  return (
    <SSBarWithSaveAreaWithColorScheme>
      <TopBarWithThingInMiddleAllCustomableWithColorScheme
        leftItem={<CTEXT.NGT_Inter_DispMd_SemiBold children={`Cài đặt`} />}
        rightItemFnc={() => { }}
        rightItemIcon={SVG.optionIcon(vw(6), vw(6), COLORSCHEME.text)}
        style={{
          isAlignItemCenter: true,
          container: [styles.marginBottom4vw]
        }}
      />
      <ScrollView style={[styles.flex1, styles.flexCol, styles.paddingH4vw]} contentContainerStyle={[styles.gap4vw]}>
        <CTEXT.NGT_Inter_HeaderLg_Bld children={`Xin chào ${CurrentCache.user.name}`} />
        <CTEXT.NGT_Inter_HeaderMd_SemiBold children={`Cài đặt ứng dụng`} />
        <ViewRowBetweenCenter>
          <ViewRow style={[styles.gap2vw, styles.paddingH2vw]}>
            {SVG.darkMode(vw(6), vw(6), COLORSCHEME.gray1)}
            <CTEXT.NGT_Inter_BodyLg_Reg children='Luôn bật chế độ nền tối' />
          </ViewRow>
          <Switch
            value={isForceDark}
            onValueChange={(value) => {
              setIsForceDark(value)
              storageSaveAndOverwrite('darkMode', value)
              dispatch(currentSetIsForceDark(value))
            }}
          />
        </ViewRowBetweenCenter>
        <TouchableOpacity onPress={() => {
          Alert.alert('Đặt lại ứng dụng', 'Hành động này không thể hoàn tác. Dữ liệu của ứng dụng sẽ bị xoá. Bạn có chắc muốn đặt lại ứng dụng?', [
            {
              text: 'Huỷ',
              style: 'cancel'
            },
            {
              text: 'Đặt lại',
              style: 'destructive',
              onPress: async () => {
                storageRemoveUser()
                storageRemove('darkMode')
                storageRemove('flashCard')
                storageClearList('cardTitle')
                storageClearList('mindmap')
                storageClearList('mindmapTitle')
                storageClearList('questTitle')
                storageClearList('flashCard')
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'NameCollect' as never }]
                })
              }
            }
          ])
        }}>
          <ViewRowBetweenCenter>
            <ViewRow style={[styles.gap2vw, styles.paddingH2vw]}>
              {SVG.xIcon(vw(6), vw(6), 'red')}
              <CTEXT.NGT_Inter_BodyLg_Reg children='Đặt lại ứng dụng' />
            </ViewRow>
          </ViewRowBetweenCenter>
        </TouchableOpacity>
      </ScrollView>
    </SSBarWithSaveAreaWithColorScheme>
  )
}