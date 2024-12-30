// system imports
import React, { Component, useEffect, useMemo, useRef, useState } from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Animated, Appearance, Platform, Text, TextStyle, TouchableOpacity, View } from 'react-native';

// style import
import styles, { vw, vh, vmax, vmin } from './stylesheet';
import { SvgXml } from 'react-native-svg';
import clrStyle, { NGHIASTYLE } from './componentStyleSheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { UserFormat } from '../data/interfaceFormat';
import * as SVG from './svgXml';
import * as STORAGEFNC from '../data/storageFunc'
import * as CLASS from './Class';
import * as CTEXT from './CustomText';
import * as CUSTOMCACHE from '../data/store';

// screen import
import Home from '../screens/Home';
import Test from '../screens/Test';
import { defaultColorTheme } from './ColorTheme';

// universe variable
const VH_VW = vw(100) > vh(100) ? true : false
const BOTTOM_TAB_ICON_SIZE = VH_VW ? vh(6) : vw(6)
const BOTTOM_TAB_ICON_PADDING = VH_VW ? vh(2) : vw(2)
const BOTTOM_TAB_ICON_HEIGHT = VH_VW ? vh(14) : vw(14)
const BOTTOM_TAB_HEIGHT = VH_VW ? vh(16) : vw(16)
const LABELTEXTCLASS = Text

// 
const GoToPageFail: string = 'NameCollect'

// icon generator
const iconData: { page: any, iconInActive: string, iconActive: string, title: string }[] = [
    {
        page: Home,
        iconInActive: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 18V15" stroke='<<COLOR>>' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.07 2.81985L3.14002 8.36985C2.36002 8.98985 1.86002 10.2998 2.03002 11.2798L3.36002 19.2398C3.60002 20.6598 4.96002 21.8098 6.40002 21.8098H17.6C19.03 21.8098 20.4 20.6498 20.64 19.2398L21.97 11.2798C22.13 10.2998 21.63 8.98985 20.86 8.36985L13.93 2.82985C12.86 1.96985 11.13 1.96985 10.07 2.81985Z" stroke='<<COLOR>>' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
        iconActive: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.04 6.82006L14.28 2.79006C12.71 1.69006 10.3 1.75006 8.78999 2.92006L3.77999 6.83006C2.77999 7.61006 1.98999 9.21006 1.98999 10.4701V17.3701C1.98999 19.9201 4.05999 22.0001 6.60999 22.0001H17.39C19.94 22.0001 22.01 19.9301 22.01 17.3801V10.6001C22.01 9.25006 21.14 7.59006 20.04 6.82006ZM12.75 18.0001C12.75 18.4101 12.41 18.7501 12 18.7501C11.59 18.7501 11.25 18.4101 11.25 18.0001V15.0001C11.25 14.5901 11.59 14.2501 12 14.2501C12.41 14.2501 12.75 14.5901 12.75 15.0001V18.0001Z" fill='<<COLOR>>'/></svg>`,
        title: 'Home'
    },
    {
        page: Test,
        iconInActive: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M12.7033 8.87988H17.9533" stroke='<<COLOR>>' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.71332 8.87988L7.46332 9.62988L9.71332 7.37988" stroke='<<COLOR>>' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.7033 15.8799H17.9533" stroke='<<COLOR>>' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.71332 15.8799L7.46332 16.6299L9.71332 14.3799" stroke='<<COLOR>>' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.33331 22H15.3333C20.3333 22 22.3333 20 22.3333 15V9C22.3333 4 20.3333 2 15.3333 2H9.33331C4.33331 2 2.33331 4 2.33331 9V15C2.33331 20 4.33331 22 9.33331 22Z" stroke='<<COLOR>>' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
        iconActive: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M8.88976 13.4864L7.51211 14.8641C7.02341 14.5097 6.33748 14.5417 5.89274 14.9835C5.39363 15.4692 5.3935 16.2703 5.89237 16.7562L6.63452 17.4983C6.88365 17.7607 7.2214 17.87 7.52331 17.87C7.83877 17.87 8.15816 17.7523 8.40687 17.5036L10.6569 15.2536C11.1421 14.7683 11.1421 13.9717 10.6569 13.4864L10.6569 13.4864L10.6508 13.4805C10.1604 13.0064 9.37826 12.9979 8.88976 13.4864ZM8.88976 6.48645L7.51211 7.8641C7.02342 7.50969 6.3375 7.54165 5.89277 7.98345C5.39362 8.46919 5.3935 9.27029 5.89239 9.75618L6.63452 10.4983C6.88365 10.7607 7.2214 10.87 7.52331 10.87C7.83877 10.87 8.15816 10.7523 8.40687 10.5036L10.6569 8.25355C11.1421 7.76829 11.1421 6.97171 10.6569 6.48645L10.6569 6.4864L10.6508 6.48051C10.1604 6.00641 9.37826 5.99794 8.88976 6.48645ZM8.14331 2.5H16.5233C18.2439 2.5 19.5571 3.01093 20.4398 3.89355C21.3224 4.77618 21.8333 6.08944 21.8333 7.81V16.19C21.8333 17.9106 21.3224 19.2238 20.4398 20.1064C19.5571 20.9891 18.2439 21.5 16.5233 21.5H8.14331C6.42275 21.5 5.10949 20.9891 4.22687 20.1064C3.34424 19.2238 2.83331 17.9106 2.83331 16.19V7.81C2.83331 6.08944 3.34424 4.77618 4.22687 3.89355C5.10949 3.01093 6.42275 2.5 8.14331 2.5ZM12.6433 17.12H17.8933C18.5938 17.12 19.1433 16.5518 19.1433 15.87C19.1433 15.1882 18.5938 14.62 17.8933 14.62H12.6433C11.9572 14.62 11.3933 15.1839 11.3933 15.87C11.3933 16.5561 11.9572 17.12 12.6433 17.12ZM12.6433 10.12H17.8933C18.5938 10.12 19.1433 9.55179 19.1433 8.87C19.1433 8.18821 18.5938 7.62 17.8933 7.62H12.6433C11.9572 7.62 11.3933 8.18386 11.3933 8.87C11.3933 9.55614 11.9572 10.12 12.6433 10.12Z" fill='<<COLOR>>' stroke='<<COLOR>>'/>
</svg>`,
        title: 'Test'
    },
    // {
    //     page: Community,
    //     iconActive: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.65 20.91C7.62 20.91 7.58 20.93 7.55 20.93C5.61 19.97 4.03 18.38 3.06 16.44C3.06 16.41 3.08 16.37 3.08 16.34C4.3 16.7 5.56 16.97 6.81 17.18C7.03 18.44 7.29 19.69 7.65 20.91Z" fill="#808797"/><path d="M20.94 16.45C19.95 18.44 18.3 20.05 16.29 21.02C16.67 19.75 16.99 18.47 17.2 17.18C18.46 16.97 19.7 16.7 20.92 16.34C20.91 16.38 20.94 16.42 20.94 16.45Z" fill="#808797"/><path d="M21.02 7.71C19.76 7.33 18.49 7.02 17.2 6.8C16.99 5.51 16.68 4.23 16.29 2.98C18.36 3.97 20.03 5.64 21.02 7.71Z" fill="#808797"/><path d="M7.65001 3.09C7.29001 4.31 7.03001 5.55 6.82001 6.81C5.53001 7.01 4.25001 7.33 2.98001 7.71C3.95001 5.7 5.56001 4.05 7.55001 3.06C7.58001 3.06 7.62001 3.09 7.65001 3.09Z" fill="#808797"/><path d="M15.49 6.59C13.17 6.33 10.83 6.33 8.51001 6.59C8.76001 5.22 9.08001 3.85 9.53001 2.53C9.55001 2.45 9.54001 2.39 9.55001 2.31C10.34 2.12 11.15 2 12 2C12.84 2 13.66 2.12 14.44 2.31C14.45 2.39 14.45 2.45 14.47 2.53C14.92 3.86 15.24 5.22 15.49 6.59Z" fill="#808797"/><path d="M6.59 15.49C5.21 15.24 3.85 14.92 2.53 14.47C2.45 14.45 2.39 14.46 2.31 14.45C2.12 13.66 2 12.85 2 12C2 11.16 2.12 10.34 2.31 9.55999C2.39 9.54999 2.45 9.54999 2.53 9.52999C3.86 9.08999 5.21 8.75999 6.59 8.50999C6.34 10.83 6.34 13.17 6.59 15.49Z" fill="#808797"/><path d="M22 12C22 12.85 21.88 13.66 21.69 14.45C21.61 14.46 21.55 14.45 21.47 14.47C20.14 14.91 18.78 15.24 17.41 15.49C17.67 13.17 17.67 10.83 17.41 8.50999C18.78 8.75999 20.15 9.07999 21.47 9.52999C21.55 9.54999 21.61 9.55999 21.69 9.55999C21.88 10.35 22 11.16 22 12Z" fill="#808797"/><path d="M15.49 17.41C15.24 18.79 14.92 20.15 14.47 21.47C14.45 21.55 14.45 21.61 14.44 21.69C13.66 21.88 12.84 22 12 22C11.15 22 10.34 21.88 9.55001 21.69C9.54001 21.61 9.55001 21.55 9.53001 21.47C9.09001 20.14 8.76001 18.79 8.51001 17.41C9.67001 17.54 10.83 17.63 12 17.63C13.17 17.63 14.34 17.54 15.49 17.41Z" fill="#808797"/><path d="M15.7633 15.7633C13.2622 16.0789 10.7378 16.0789 8.23667 15.7633C7.92111 13.2622 7.92111 10.7378 8.23667 8.23667C10.7378 7.92111 13.2622 7.92111 15.7633 8.23667C16.0789 10.7378 16.0789 13.2622 15.7633 15.7633Z" fill="#808797"/></svg>`,
    //     iconInActive: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.65006 20.9098C7.62006 20.9098 7.58006 20.9298 7.55006 20.9298C5.61006 19.9698 4.03006 18.3798 3.06006 16.4398C3.06006 16.4098 3.08006 16.3698 3.08006 16.3398C4.30006 16.6998 5.56006 16.9698 6.81006 17.1798C7.03006 18.4398 7.29006 19.6898 7.65006 20.9098Z" fill=${NGHIASTYLE.NghiaBrand700}/><path d="M20.94 16.4498C19.95 18.4398 18.3 20.0498 16.29 21.0198C16.67 19.7498 16.99 18.4698 17.2 17.1798C18.46 16.9698 19.7 16.6998 20.92 16.3398C20.91 16.3798 20.94 16.4198 20.94 16.4498Z" fill=${NGHIASTYLE.NghiaBrand700}/><path d="M21.02 7.70998C19.76 7.32998 18.49 7.01998 17.2 6.79998C16.99 5.50998 16.68 4.22998 16.29 2.97998C18.36 3.96998 20.03 5.63998 21.02 7.70998Z" fill=${NGHIASTYLE.NghiaBrand700}/><path d="M7.64998 3.09006C7.28998 4.31006 7.02998 5.55006 6.81998 6.81006C5.52998 7.01006 4.24998 7.33006 2.97998 7.71006C3.94998 5.70006 5.55998 4.05006 7.54998 3.06006C7.57998 3.06006 7.61998 3.09006 7.64998 3.09006Z" fill=${NGHIASTYLE.NghiaBrand700}/><path d="M15.49 6.59C13.17 6.33 10.83 6.33 8.51001 6.59C8.76001 5.22 9.08001 3.85 9.53001 2.53C9.55001 2.45 9.54001 2.39 9.55001 2.31C10.34 2.12 11.15 2 12 2C12.84 2 13.66 2.12 14.44 2.31C14.45 2.39 14.45 2.45 14.47 2.53C14.92 3.86 15.24 5.22 15.49 6.59Z" fill=${NGHIASTYLE.NghiaBrand700}/><path d="M6.59 15.4898C5.21 15.2398 3.85 14.9198 2.53 14.4698C2.45 14.4498 2.39 14.4598 2.31 14.4498C2.12 13.6598 2 12.8498 2 11.9998C2 11.1598 2.12 10.3398 2.31 9.55977C2.39 9.54977 2.45 9.54977 2.53 9.52977C3.86 9.08977 5.21 8.75977 6.59 8.50977C6.34 10.8298 6.34 13.1698 6.59 15.4898Z" fill=${NGHIASTYLE.NghiaBrand700}/><path d="M22 11.9998C22 12.8498 21.88 13.6598 21.69 14.4498C21.61 14.4598 21.55 14.4498 21.47 14.4698C20.14 14.9098 18.78 15.2398 17.41 15.4898C17.67 13.1698 17.67 10.8298 17.41 8.50977C18.78 8.75977 20.15 9.07977 21.47 9.52977C21.55 9.54977 21.61 9.55977 21.69 9.55977C21.88 10.3498 22 11.1598 22 11.9998Z" fill=${NGHIASTYLE.NghiaBrand700}/><path d="M15.49 17.4102C15.24 18.7902 14.92 20.1502 14.47 21.4702C14.45 21.5502 14.45 21.6102 14.44 21.6902C13.66 21.8802 12.84 22.0002 12 22.0002C11.15 22.0002 10.34 21.8802 9.55001 21.6902C9.54001 21.6102 9.55001 21.5502 9.53001 21.4702C9.09001 20.1402 8.76001 18.7902 8.51001 17.4102C9.67001 17.5402 10.83 17.6302 12 17.6302C13.17 17.6302 14.34 17.5402 15.49 17.4102Z" fill=${NGHIASTYLE.NghiaBrand700}/><path d="M15.7633 15.7633C13.2622 16.0789 10.7378 16.0789 8.23667 15.7633C7.92111 13.2622 7.92111 10.7378 8.23667 8.23667C10.7378 7.92111 13.2622 7.92111 15.7633 8.23667C16.0789 10.7378 16.0789 13.2622 15.7633 15.7633Z" fill=${NGHIASTYLE.NghiaBrand700}/></svg>`,
    //     title: 'Cộng đồng'
    // },
    // {
    //     page: User,
    //     iconActive: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#808797"/><path d="M12 14.5C6.99 14.5 2.91 17.86 2.91 22C2.91 22.28 3.13 22.5 3.41 22.5H20.59C20.87 22.5 21.09 22.28 21.09 22C21.09 17.86 17.01 14.5 12 14.5Z" fill="#808797"/></svg>`,
    //     iconInActive: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill=${NGHIASTYLE.NghiaBrand700}/><path d="M12 14.5C6.99003 14.5 2.91003 17.86 2.91003 22C2.91003 22.28 3.13003 22.5 3.41003 22.5H20.59C20.87 22.5 21.09 22.28 21.09 22C21.09 17.86 17.01 14.5 12 14.5Z" fill=${NGHIASTYLE.NghiaBrand700}/></svg>`,
    //     title: 'Cá nhân'
    // },
]

class RenderLabel extends Component<{ focused: boolean, title: string, colorFocus: string, colorNotFocus: string }, {}> {
    render(): React.ReactNode {
        return (
            //FIXME: CUSTOM THIS APP: only show label when focused
            <LABELTEXTCLASS style={{ color: this.props.focused ? this.props.colorFocus : this.props.colorNotFocus } as TextStyle}>{this.props.title}</LABELTEXTCLASS>
        );
    }
}

class RenderIcon extends Component<{ focused: boolean, icon: string, colorFocus: string, colorNotFocus: string }, {}> {
    render(): React.ReactNode {
        const color = this.props.focused ? this.props.colorFocus : this.props.colorNotFocus
        const icon = this.props.icon.replace(/<<COLOR>>/g, color)
        return (
            <SvgXml xml={icon} width={BOTTOM_TAB_ICON_SIZE} height={BOTTOM_TAB_ICON_SIZE} />
        );
    }
}

// // ____________________END OF IMPORT_______________________

const BottomTab = () => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const Tab = createBottomTabNavigator();
    const [CurrentCache, dispatch] = React.useContext(CUSTOMCACHE.RootContext);

    const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme: newColorScheme }) => {
            setColorScheme(newColorScheme);
        });
        return () => {
            subscription.remove();
        };
    }, []);

    useEffect(() => {
        const newColorTheme = colorScheme === 'dark' ? defaultColorTheme.dark : defaultColorTheme.light
        dispatch(CUSTOMCACHE.currentSetColorScheme(newColorTheme));
    }, [colorScheme]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            STORAGEFNC.storageGetUser().then((user) => {
                if (user && user.name) {
                    dispatch(CUSTOMCACHE.currentSetUser(user));
                } else {
                    navigation.navigate(GoToPageFail as never)
                }
            })
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <Tab.Navigator
            tabBar={props => <BottomTabBar {...props} />}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    height: BOTTOM_TAB_HEIGHT + insets.bottom + vw(2),
                    paddingHorizontal: vw(6),
                    paddingBottom: insets.bottom + vh(0.5),
                    paddingTop: vw(1.75),
                    backgroundColor: CurrentCache.colorScheme.backgroundSecond
                },
            }}
        >
            {iconData.map((item, index) => (
                <Tab.Screen
                    key={index}
                    name={item.title}
                    component={item.page}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <RenderIcon
                                focused={focused}
                                icon={focused ? item.iconActive : item.iconInActive}
                                colorFocus={CurrentCache.colorScheme.brandMain}
                                colorNotFocus={CurrentCache.colorScheme.brandSecond}
                            />
                        ),
                        tabBarLabel: ({ focused }) => (
                            <RenderLabel
                                focused={focused}
                                title={item.title}
                                colorFocus={CurrentCache.colorScheme.brandMain}
                                colorNotFocus={CurrentCache.colorScheme.brandSecond}
                            />
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default BottomTab;