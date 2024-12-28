import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { SSBarWithSaveArea, TopBarWithThingInMiddleAllCustomable, TopNav } from '../assets/Class'
import { useNavigation } from '@react-navigation/native'
import { vw } from '../assets/stylesheet'
import * as SVG from '../assets/svgXml'
import { NGHIASTYLE } from '../assets/componentStyleSheet'
import { RootContext } from '../data/store'
import { NGT_Inter_HeaderMd_Reg } from '../assets/CustomText'

export default function NameCollect() {
    const navigation = useNavigation()
    const [CurrentCache, dispatch] = useContext(RootContext)
    return (
        <SSBarWithSaveArea bgColor={CurrentCache.colorScheme.background} barColor={CurrentCache.colorScheme.background} barContentStyle={CurrentCache.colorScheme.barContent}>
            <TopBarWithThingInMiddleAllCustomable
                returnPreScreenFnc={() => { navigation.goBack() }}
                returnPreScreenIcon={SVG.sharpLeftArrow(vw(6), vw(6), NGHIASTYLE.NghiaBrand700)}
            />

            <NGT_Inter_HeaderMd_Reg>heheheh</NGT_Inter_HeaderMd_Reg>

        </SSBarWithSaveArea>
    )
}