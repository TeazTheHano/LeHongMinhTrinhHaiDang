import { View, Text, Animated, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { storageGetItem, storageGetList } from '../data/storageFunc'
import { SelectorInput, SSBarWithSaveArea, TopBarWithThingInMiddleAllCustomable, ViewRow, ViewRowBetweenCenter } from '../assets/Class'
import * as SVG from '../assets/svgXml'
import styles, { vh, vw } from '../assets/stylesheet'
import * as CTEXT from '../assets/CustomText'
import { DATAmonthList } from '../data/factoryData'
import clrStyle from '../assets/componentStyleSheet'
import { RootContext } from '../data/store'

export default function Home() {
  const navigation = useNavigation()
  const [CurrentCache, dispatch] = useContext(RootContext)



  return (
    <SSBarWithSaveArea>
      <TopBarWithThingInMiddleAllCustomable
        leftItem={<View style={[styles.border1, styles.borderRadius100, styles.marginTop1vw, { width: vw(6), height: vw(6), }]} />}
        rightItemFnc={() => { }}
        rightItemIcon={SVG.bellIcon(vw(6), vw(6), 'black')}
        style={{
          // container: [styles.border1],
          iconLeftStyle: [styles.paddingTop1vw]
        }}
        title={'Home'}
      />
      <ScrollView style={[styles.flex1, styles.flexCol, styles.gap6vw]}>
        
      </ScrollView>
    </SSBarWithSaveArea>
  )
}