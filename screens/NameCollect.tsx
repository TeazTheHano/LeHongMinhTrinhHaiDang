import { View, Text, Alert } from 'react-native'
import React, { useContext } from 'react'
import { BoardingInput, RoundBtn, SSBarWithSaveArea, SSBarWithSaveAreaWithColorScheme, TopBarWithThingInMiddleAllCustomable, TopBarWithThingInMiddleAllCustomableWithColorScheme, ViewCol, ViewColBetweenCenter } from '../assets/Class'
import { useNavigation } from '@react-navigation/native'
import styles, { vw } from '../assets/stylesheet'
import * as SVG from '../assets/svgXml'
import { NGHIASTYLE } from '../assets/componentStyleSheet'
import { currentSetUser, RootContext } from '../data/store'
import { NGT_Inter_BodyLg_ExtraBold, NGT_Inter_DispLg_Bld, NGT_Inter_DispLg_Reg, NGT_Inter_DispLg_SemiBold, NGT_Inter_DispMd_SemiBold, NGT_Inter_HeaderLg_Bld, NGT_Inter_HeaderLg_ExtraBold, NGT_Inter_HeaderLg_SemiBold, NGT_Inter_HeaderMd_Reg, RobotoMonoReg14 } from '../assets/CustomText'
import { storageSaveUser } from '../data/storageFunc'

export default function NameCollect() {
    const navigation = useNavigation()
    const [CurrentCache, dispatch] = useContext(RootContext)
    const [name, setName] = React.useState<string>('')

    let COLOR = CurrentCache.colorScheme

    return (
        <SSBarWithSaveAreaWithColorScheme>
            <TopBarWithThingInMiddleAllCustomableWithColorScheme
                returnPreScreenFnc={() => { navigation.goBack() }}
                bgColor='transparent'
                returnPreScreenIcon={SVG.sharpLeftArrow(vw(6), vw(6), COLOR.textBrand)}
            />

            <ViewCol style={[styles.padding6vw, styles.justifyContentSpaceBetween, styles.flex1]}>
                <View>
                    <NGT_Inter_DispLg_Reg color={COLOR.textBrand} children='Trước khi bắt đầu,' />
                    <NGT_Inter_DispLg_Reg color={COLOR.textBrand} children='hãy giới thiệu bản thân bạn' />
                </View>
                <BoardingInput
                    title='Tên bạn là gì'
                    placeholder='Tên của bạn'
                    value={name}
                    onChgText={(value) => { setName(value as string) }}
                    textClass={NGT_Inter_DispLg_SemiBold}
                    CustomStyleText={[{ color: COLOR.text }]}
                    CustomStyleInput={[{ backgroundColor: COLOR.backgroundFade }]}
                    activeColor={COLOR.textBrand}
                    passiveColor={COLOR.text}
                />
                <RoundBtn
                    title='Tiếp tục'
                    onPress={() => {
                        storageSaveUser({
                            name: name,
                            lang: 'vi-VN',
                        }).then((res) => {
                            if (res) {
                                dispatch(currentSetUser({ name: name, lang: 'vi-VN' }))
                                navigation.navigate('BottomTab' as never)
                            } else {
                                Alert.alert('Có lỗi xảy ra', 'Vui lòng thử lại')
                            }
                        })
                    }}
                    bgColor={COLOR.brandMain}
                    textColor={COLOR.background}
                    textClass={NGT_Inter_HeaderLg_SemiBold}
                    customStyle={[styles.justifyContentCenter]}
                />
            </ViewCol>

        </SSBarWithSaveAreaWithColorScheme>
    )
}