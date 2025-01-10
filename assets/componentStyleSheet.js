import { Appearance, StyleSheet } from 'react-native';
import styles, { vw, vh } from './stylesheet';

const clrStyle = {
    white: '#FFFFFF',
    black: '#000000',
    white2: `#F6F6F6`,

    grey40: `#F3F4F6`,
    grey60: `#E1E1E1`,
    grey80: `#6E6E6E`,
    grey100: `#343434`,

    green: `#00A807`,
    blue: `#324EE8`,
    red: `#FD3C4A`,
    yellow: `#F7C45E`,

    liGreen: `#E6FDEE`,
    liBlue: `#C2D2FE`,
    liRed: `#F7EFEF`,
    liYellow: `#FBF9E9`

}
export default clrStyle;

export const NGHIASTYLE = StyleSheet.create({
    // Brand 
    NghiaBrand900: '#42307D',
    NghiaBrand800: '#53389E',
    NghiaBrand700: '#6941C6',
    NghiaBrand600: '#7F56D9',
    NghiaBrand500: '#9E77ED',
    NghiaBrand400: '#B692F6',
    NghiaBrand300: '#D6BBFB',
    NghiaBrand200: '#E9D7FE',
    NghiaBrand100: '#F4EBFF',
    NghiaBrand50: '#F9F5FF',
    NghiaBrand25: '#FCFAFF',

    // Error
    NghiaError900: '#7A271A',
    NghiaError800: '#912018',
    NghiaError700: '#B42318',
    NghiaError600: '#D92D20',
    NghiaError500: '#F04438',
    NghiaError400: '#F97066',
    NghiaError300: '#FDA29B',
    NghiaError200: '#FECDCA',
    NghiaError100: '#FEE4E2',
    NghiaError50: '#FEF3F2',
    NghiaError25: '#FFFBFA',

    // Gray
    NghiaGray900: '#101828',
    NghiaGray800: '#1D2939',
    NghiaGray700: '#344054',
    NghiaGray600: '#475467',
    NghiaGray500: '#667085',
    NghiaGray400: '#98A2B3',
    NghiaGray300: '#C5CAD1',
    NghiaGray200: '#E4E7EC',
    NghiaGray100: '#F2F4F7',
    NghiaGray50: '#F9FAFB',
    NghiaGray25: '#FCFCFD',

    // Warning
    NghiaWarning900: '#7A2E0E',
    NghiaWarning800: '#93370D',
    NghiaWarning700: '#B54708',
    NghiaWarning600: '#DC6803',
    NghiaWarning500: '#F79009',
    NghiaWarning400: '#FDB022',
    NghiaWarning300: '#FEC84B',
    NghiaWarning200: '#FEDF89',
    NghiaWarning100: '#FEF0C7',
    NghiaWarning50: '#FFFAEB',
    NghiaWarning25: '#FFFCF5',

    // Success
    NghiaSuccess900: '#054F31',
    NghiaSuccess800: '#05603A',
    NghiaSuccess700: '#027A48',
    NghiaSuccess600: '#039855',
    NghiaSuccess500: '#12B76A',
    NghiaSuccess400: '#32D583',
    NghiaSuccess300: '#6CE9A6',
    NghiaSuccess200: '#A6F4C5',
    NghiaSuccess100: '#D1FADF',
    NghiaSuccess50: '#ECFDF3',
    NghiaSuccess25: '#F6FEF9',

    // BlueGray
    NghiaBlueGray900: '#101323',
    NghiaBlueGray800: '#293056',
    NghiaBlueGray700: '#363F72',
    NghiaBlueGray600: '#3E4784',
    NghiaBlueGray500: '#4E5BA6',
    NghiaBlueGray400: '#717BBC',
    NghiaBlueGray300: '#AFB5D9',
    NghiaBlueGray200: '#D5D9EB',
    NghiaBlueGray100: '#EAECF5',
    NghiaBlueGray50: '#F8F9FC',
    NghiaBlueGray25: '#FCFCFD',

    // Indigo
    NghiaIndigo900: '#2D3282',
    NghiaIndigo800: '#2D31A6',
    NghiaIndigo700: '#3538CD',
    NghiaIndigo600: '#444CE7',
    NghiaIndigo500: '#6172F3',
    NghiaIndigo400: '#8098F9',
    NghiaIndigo300: '#A4BCFD',
    NghiaIndigo200: '#C7D7FE',
    NghiaIndigo100: '#E0EAFF',
    NghiaIndigo50: '#EEF4FF',
    NghiaIndigo25: '#F5F8FF',

    // Purple
    NghiaPurple900: '#3E1C96',
    NghiaPurple800: '#4A1FB8',
    NghiaPurple700: '#5925DC',
    NghiaPurple600: '#6938EF',
    NghiaPurple500: '#7A5AF8',
    NghiaPurple400: '#9B8AFB',
    NghiaPurple300: '#BDB4FE',
    NghiaPurple200: '#D9D6FE',
    NghiaPurple100: '#EBE9FE',
    NghiaPurple50: '#F4F3FF',
    NghiaPurple25: '#FAFAFF',

    // Transparent
    NghiaTransparentDark60: 'rgba(36,47,65,0.6)',
    NghiaTransparentDark50: 'rgba(36,47,65,0.5)',
    NghiaTransparentDark40: 'rgba(36,47,65,0.4)',
    NghiaTransparentDark30: 'rgba(36,47,65,0.3)',
    NghiaTransparentDark20: 'rgba(36,47,65,0.2)',
    NghiaTransparentDark10: 'rgba(36,47,65,0.1)',
    NghiaTransparentWhite60: 'rgba(255,255,255,0.6)',
    NghiaTransparentWhite50: 'rgba(255,255,255,0.5)',
    NghiaTransparentWhite40: 'rgba(255,255,255,0.4)',
    NghiaTransparentWhite30: 'rgba(255,255,255,0.3)',
    NghiaTransparentWhite20: 'rgba(255,255,255,0.2)',
    NghiaTransparentWhite10: 'rgba(255,255,255,0.1)',

    // FocusRing
    NghiaFocusRing4pxPrimary100: {
        shadowColor: '#F4EBFF',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: vw(1),
        elevation: vw(1),
    },
    NghiaFocusRing4pxGray100: {
        shadowColor: '#EAECF5',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: vw(1),
        elevation: vw(1),
    },
    NghiaFocusRing4pxError100: {
        shadowColor: '#FEE4E2',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: vw(1),
        elevation: vw(1),
    },
    NghiaFocusRing4pxPrimary600: {
        shadowColor: '#F4EBFF',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: vw(1),
        elevation: vw(1),
    }
});

export const componentStyleList = {
    roundBorderBrand: [
        styles.border1,
        styles.padding3vw,
        styles.borderRadius2vw,
        { borderColor: NGHIASTYLE.NghiaBrand200, backgroundColor: NGHIASTYLE.NghiaBrand25 }
    ],
    roundBorderGray500: [
        styles.border1,
        styles.padding3vw,
        styles.borderRadius2vw,
        { borderColor: NGHIASTYLE.NghiaGray500 }
    ],
    roundBorderGray200: [
        styles.border1,
        styles.padding3vw,
        styles.borderRadius2vw,
        { borderColor: NGHIASTYLE.NghiaGray200 }
    ],
    roundFillBrand600: [
        styles.padding3vw,
        styles.borderRadius2vw,
        { backgroundColor: NGHIASTYLE.NghiaBrand600 }
    ],
    roundFillBrand100: [
        styles.padding3vw,
        styles.borderRadius2vw,
        { backgroundColor: NGHIASTYLE.NghiaBrand100 }
    ],
};

export const componentStyleCardContainner = {
    newLight: {
        class: componentStyleList.roundFillBrand600,
        textBoldColor: 'white',
        textRegColor: 'white',
        titleColor: 'white',
        progressBorder: false,
    },
    progressLight: {
        class: componentStyleList.roundFillBrand100,
        textBoldColor: NGHIASTYLE.NghiaBrand600,
        textRegColor: NGHIASTYLE.NghiaGray500,
        titleColor: 'black',
        progressBorder: false,
    },
    doneLight: {
        class: componentStyleList.roundBorderGray200,
        textBoldColor: 'white',
        textRegColor: 'white',
        titleColor: 'black',
        progressBorder: true,
    },
    newDark: {
        class: componentStyleList.roundFillBrand600,
        textBoldColor: 'white',
        textRegColor: 'white',
        titleColor: 'white',
        progressBorder: false,
    },
    progressDark: {
        class: componentStyleList.roundFillBrand100,
        textBoldColor: NGHIASTYLE.NghiaBrand600,
        textRegColor: NGHIASTYLE.NghiaGray500,
        titleColor: 'black',
        progressBorder: false,
    },
    doneDark: {
        class: componentStyleList.roundBorderGray200,
        textBoldColor: 'white',
        textRegColor: 'white',
        titleColor: 'white',
        progressBorder: true,
    }
}