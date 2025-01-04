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
import Mindmap from '../screens/Mindmap';
import Setting from '../screens/Setting';
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
        iconInActive: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 18V15" stroke='<<COLOR>>' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.07 2.81985L3.14002 8.36985C2.36002 8.98985 1.86002 10.2998 2.03002 11.2798L3.36002 19.2398C3.60002 20.6598 4.96002 21.8098 6.40002 21.8098H17.6C19.03 21.8098 20.4 20.6498 20.64 19.2398L21.97 11.2798C22.13 10.2998 21.63 8.98985 20.86 8.36985L13.93 2.82985C12.86 1.96985 11.13 1.96985 10.07 2.81985Z" stroke='<<COLOR>>' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        iconActive: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.04 6.82006L14.28 2.79006C12.71 1.69006 10.3 1.75006 8.78999 2.92006L3.77999 6.83006C2.77999 7.61006 1.98999 9.21006 1.98999 10.4701V17.3701C1.98999 19.9201 4.05999 22.0001 6.60999 22.0001H17.39C19.94 22.0001 22.01 19.9301 22.01 17.3801V10.6001C22.01 9.25006 21.14 7.59006 20.04 6.82006ZM12.75 18.0001C12.75 18.4101 12.41 18.7501 12 18.7501C11.59 18.7501 11.25 18.4101 11.25 18.0001V15.0001C11.25 14.5901 11.59 14.2501 12 14.2501C12.41 14.2501 12.75 14.5901 12.75 15.0001V18.0001Z" fill='<<COLOR>>'/></svg>`,
        title: 'Trang chủ'
    },
    {
        page: Test,
        iconInActive: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M12.7033 8.87988H17.9533" stroke='<<COLOR>>' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.71332 8.87988L7.46332 9.62988L9.71332 7.37988" stroke='<<COLOR>>' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.7033 15.8799H17.9533" stroke='<<COLOR>>' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.71332 15.8799L7.46332 16.6299L9.71332 14.3799" stroke='<<COLOR>>' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.33331 22H15.3333C20.3333 22 22.3333 20 22.3333 15V9C22.3333 4 20.3333 2 15.3333 2H9.33331C4.33331 2 2.33331 4 2.33331 9V15C2.33331 20 4.33331 22 9.33331 22Z" stroke='<<COLOR>>' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        iconActive: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M8.88976 13.4864L7.51211 14.8641C7.02341 14.5097 6.33748 14.5417 5.89274 14.9835C5.39363 15.4692 5.3935 16.2703 5.89237 16.7562L6.63452 17.4983C6.88365 17.7607 7.2214 17.87 7.52331 17.87C7.83877 17.87 8.15816 17.7523 8.40687 17.5036L10.6569 15.2536C11.1421 14.7683 11.1421 13.9717 10.6569 13.4864L10.6569 13.4864L10.6508 13.4805C10.1604 13.0064 9.37826 12.9979 8.88976 13.4864ZM8.88976 6.48645L7.51211 7.8641C7.02342 7.50969 6.3375 7.54165 5.89277 7.98345C5.39362 8.46919 5.3935 9.27029 5.89239 9.75618L6.63452 10.4983C6.88365 10.7607 7.2214 10.87 7.52331 10.87C7.83877 10.87 8.15816 10.7523 8.40687 10.5036L10.6569 8.25355C11.1421 7.76829 11.1421 6.97171 10.6569 6.48645L10.6569 6.4864L10.6508 6.48051C10.1604 6.00641 9.37826 5.99794 8.88976 6.48645ZM8.14331 2.5H16.5233C18.2439 2.5 19.5571 3.01093 20.4398 3.89355C21.3224 4.77618 21.8333 6.08944 21.8333 7.81V16.19C21.8333 17.9106 21.3224 19.2238 20.4398 20.1064C19.5571 20.9891 18.2439 21.5 16.5233 21.5H8.14331C6.42275 21.5 5.10949 20.9891 4.22687 20.1064C3.34424 19.2238 2.83331 17.9106 2.83331 16.19V7.81C2.83331 6.08944 3.34424 4.77618 4.22687 3.89355C5.10949 3.01093 6.42275 2.5 8.14331 2.5ZM12.6433 17.12H17.8933C18.5938 17.12 19.1433 16.5518 19.1433 15.87C19.1433 15.1882 18.5938 14.62 17.8933 14.62H12.6433C11.9572 14.62 11.3933 15.1839 11.3933 15.87C11.3933 16.5561 11.9572 17.12 12.6433 17.12ZM12.6433 10.12H17.8933C18.5938 10.12 19.1433 9.55179 19.1433 8.87C19.1433 8.18821 18.5938 7.62 17.8933 7.62H12.6433C11.9572 7.62 11.3933 8.18386 11.3933 8.87C11.3933 9.55614 11.9572 10.12 12.6433 10.12Z" fill='<<COLOR>>' stroke='<<COLOR>>'/></svg>`,
        title: 'Kiểm tra'
    },
    {
        page: Mindmap,
        iconInActive: `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.95667 7.77998V17.51C2.95667 19.41 4.30667 20.19 5.94667 19.25L8.29667 17.91C8.80667 17.62 9.65667 17.59 10.1867 17.86L15.4367 20.49C15.9667 20.75 16.8167 20.73 17.3267 20.44L21.6567 17.96C22.2067 17.64 22.6667 16.86 22.6667 16.22V6.48998C22.6667 4.58998 21.3167 3.80998 19.6767 4.74998L17.3267 6.08998C16.8167 6.37998 15.9667 6.40998 15.4367 6.13998L10.1867 3.51998C9.65667 3.25998 8.80667 3.27998 8.29667 3.56998L3.96667 6.04998C3.40667 6.36998 2.95667 7.14998 2.95667 7.77998Z" stroke="<<COLOR>>" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.22668 4V17" stroke="<<COLOR>>" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.3967 6.62012V20.0001" stroke="<<COLOR>>" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        iconActive: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M8.05734 17.4712L8.0573 17.4712L8.04912 17.4758L5.69912 18.8158L5.69815 18.8164C4.97226 19.2324 4.42372 19.2078 4.08785 19.0128C3.75185 18.8177 3.45679 18.3523 3.45679 17.5102V7.78018C3.45679 7.57494 3.5337 7.3087 3.68399 7.05033C3.83405 6.79234 4.02932 6.59032 4.21486 6.4843L4.21529 6.48405L8.16679 4.22084V17.3814C8.16606 17.3836 8.16397 17.3882 8.15865 17.3957C8.14612 17.4133 8.12119 17.4373 8.08341 17.4572L8.31699 17.8993L8.0834 17.4572L8.05734 17.4712Z" fill="<<COLOR>>" stroke="<<COLOR>>"/><path d="M15.1667 6.55047V19.7036L10.9167 17.656L10.9167 4.44571L15.1667 6.55047Z" fill="<<COLOR>>" stroke="<<COLOR>>"/><path d="M22.6667 6.49006V16.2201C22.6667 16.8501 22.2167 17.6301 21.6567 17.9501L18.1654 19.951C17.832 20.1421 17.4167 19.9014 17.4167 19.5172V6.33038C17.4167 6.15087 17.513 5.98513 17.6689 5.89615L19.6767 4.75006C21.3167 3.81006 22.6667 4.59006 22.6667 6.49006Z" fill="<<COLOR>>"/></svg>`,
        title: 'Mindmap'
    },
    {
        page: Setting,
        iconInActive: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.45 10.79 7.56 8.84 7.56 6.44C7.56 3.99 9.54 2 12 2C14.45 2 16.44 3.99 16.44 6.44C16.43 8.84 14.54 10.79 12.16 10.87Z" stroke="<<COLOR>>" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke="<<COLOR>>" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        iconActive: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7.75 6.75C7.75 4.40614 9.65614 2.5 12 2.5C14.3435 2.5 16.2495 4.40562 16.25 6.74903C16.2405 9.04858 14.4468 10.9052 12.161 10.99H12.161H12.1609H12.1609H12.1609H12.1609H12.1608H12.1608H12.1608H12.1607H12.1607H12.1607H12.1606H12.1606H12.1606H12.1606H12.1605H12.1605H12.1605H12.1604H12.1604H12.1604H12.1604H12.1603H12.1603H12.1603H12.1602H12.1602H12.1602H12.1601H12.1601H12.1601H12.1601H12.16H12.16H12.16H12.1599H12.1599H12.1599H12.1599H12.1598H12.1598H12.1598H12.1597H12.1597H12.1597H12.1596H12.1596H12.1596H12.1596H12.1595H12.1595H12.1595H12.1594H12.1594H12.1594H12.1594H12.1593H12.1593H12.1593H12.1592H12.1592H12.1592H12.1591H12.1591H12.1591H12.1591H12.159H12.159H12.159H12.1589H12.1589H12.1589H12.1588H12.1588H12.1588H12.1588H12.1587H12.1587H12.1587H12.1586H12.1586H12.1586H12.1585H12.1585H12.1585H12.1585H12.1584H12.1584H12.1584H12.1583H12.1583H12.1583H12.1582H12.1582H12.1582H12.1581H12.1581H12.1581H12.1581H12.158H12.158H12.158H12.1579H12.1579H12.1579H12.1578H12.1578H12.1578H12.1577H12.1577H12.1577H12.1576H12.1576H12.1576H12.1575H12.1575H12.1575H12.1575H12.1574H12.1574H12.1574H12.1573H12.1573H12.1573H12.1572H12.1572H12.1572H12.1571H12.1571H12.1571H12.157H12.157H12.157H12.1569H12.1569H12.1569H12.1568H12.1568H12.1568H12.1567H12.1567H12.1566H12.1566H12.1566H12.1565H12.1565H12.1565H12.1564H12.1564H12.1564H12.1563H12.1563H12.1563H12.1562H12.1562H12.1562H12.1561H12.1561H12.156H12.156H12.156H12.1559H12.1559H12.1559H12.1558H12.1558H12.1558H12.1557H12.1557H12.1556H12.1556H12.1556H12.1555H12.1555H12.1555H12.1554H12.1554H12.1553H12.1553H12.1553H12.1552H12.1552H12.1551H12.1551H12.1551H12.155H12.155H12.1549H12.1549H12.1549H12.1548H12.1548H12.1547H12.1547H12.1547H12.1546H12.1546H12.1545H12.1545H12.1545H12.1544H12.1544H12.1543H12.1543H12.1542H12.1542H12.1542H12.1541H12.1541H12.154H12.154H12.1539H12.1539H12.1539H12.1538H12.1538H12.1537H12.1537H12.1536H12.1536H12.1535H12.1535H12.1535H12.1534H12.1534H12.1533H12.1533H12.1532H12.1532H12.1531H12.1531H12.153H12.153H12.1529H12.1529H12.1529H12.1528H12.1528H12.1527H12.1527H12.1526H12.1526H12.1525H12.1525H12.1524H12.1524H12.1523H12.1523H12.1522H12.1522H12.1521H12.1521H12.152H12.152H12.1519H12.1519H12.1518H12.1518H12.1517H12.1517H12.1516H12.1516H12.1515H12.1514H12.1514H12.1513H12.1513H12.1512H12.1512H12.1511H12.1511H12.151H12.151H12.1509H12.1509H12.1508H12.1507H12.1507H12.1506H12.1506H12.1505H12.1505H12.1504H12.1503H12.1503H12.1502H12.1502H12.1501H12.1501H12.15H12.1499H12.1498H12.1496H12.1495H12.1494H12.1493H12.1492H12.1491H12.149H12.1488H12.1487H12.1486H12.1485H12.1484H12.1483H12.1482H12.148H12.1479H12.1478H12.1477H12.1476H12.1475H12.1474H12.1473H12.1471H12.147H12.1469H12.1468H12.1467H12.1466H12.1465H12.1464H12.1463H12.1461H12.146H12.1459H12.1458H12.1457H12.1456H12.1455H12.1454H12.1453H12.1452H12.1451H12.1449H12.1448H12.1447H12.1446H12.1445H12.1444H12.1443H12.1442H12.1441H12.144H12.1439H12.1438H12.1437H12.1436H12.1435H12.1433H12.1432H12.1431H12.143H12.1429H12.1428H12.1427H12.1426H12.1425H12.1424H12.1423H12.1422H12.1421H12.142H12.1419H12.1418H12.1417H12.1416H12.1415H12.1414H12.1413H12.1412H12.1411H12.141H12.1409H12.1408H12.1407H12.1406H12.1405H12.1404H12.1403H12.1402H12.1401H12.14H12.1399H12.1398H12.1397H12.1396H12.1395H12.1394H12.1393H12.1392H12.1391H12.139H12.1389H12.1388H12.1387H12.1386H12.1385H12.1384H12.1383H12.1382H12.1381H12.138H12.1379H12.1378H12.1377H12.1376H12.1375H12.1374H12.1373H12.1372H12.1371H12.137H12.1369H12.1368H12.1368H12.1367H12.1366H12.1365H12.1364H12.1363H12.1362H12.1361H12.136H12.1359H12.1358H12.1357H12.1356H12.1355H12.1354H12.1353H12.1352H12.1351H12.1351H12.135H12.1349H12.1348H12.1347H12.1346H12.1345H12.1344H12.1343H12.1342H12.1341H12.134H12.1339H12.1338H12.1338C12.0433 10.9796 11.9492 10.9808 11.8625 10.989C9.52538 10.8911 7.75 9.03575 7.75 6.75Z" fill="<<COLOR>>" stroke="<<COLOR>>"/><path d="M7.19874 20.1748L7.19737 20.1739C6.03842 19.4012 5.46002 18.4016 5.46002 17.3799C5.46002 16.3578 6.03878 15.3484 7.20706 14.5661C8.51362 13.7017 10.2518 13.2549 12.0125 13.2549C13.7738 13.2549 15.5067 13.702 16.8027 14.5659C17.958 15.3362 18.5309 16.3355 18.54 17.3619C18.5393 18.3934 17.9604 19.3927 16.8009 20.1751C15.5 21.0483 13.7628 21.4999 12 21.4999C10.2371 21.4999 8.49963 21.0482 7.19874 20.1748Z" fill="<<COLOR>>" stroke="<<COLOR>>"/></svg>`,
        title: 'Cài đặt'
    },
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