// system import
import React, { Component, ComponentType, useContext, useMemo, useRef, useState } from 'react';
import { ImageBackground, Platform, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View, Image, ImageStyle, StatusBarStyle, ReturnKeyType, KeyboardType, FlatList, TextInputProps, Animated, Easing, TouchableOpacityProps, ViewProps, ViewStyle, TextStyle, FlexStyle, Keyboard, LayoutChangeEvent } from 'react-native';

// style import
import styles from './stylesheet';
import { vw, vh } from './stylesheet';

// component import
import { marginBottomForScrollView } from './component';

// svg import
import * as SVG from './svgXml';
import clrStyle, { componentStyleCardContainner, componentStyleList, NGHIASTYLE } from './componentStyleSheet';
import { useNavigation } from '@react-navigation/native';
import { Action, CurrentCache, initialState, RootContext } from '../data/store';
import * as FormatData from '../data/interfaceFormat';
import * as CTEXT from './CustomText';
import { SvgXml } from 'react-native-svg';
import { ColorTheme } from './ColorTheme';
import * as FactoryData from '../data/factoryData';
import { storageGetItem } from '../data/storageFunc';

// other import


// ____________________END OF IMPORT_______________________

// ____________________START OF UNIVERSAL CLASS_______________________


/**
 * Component that renders a view with a colored status bar.
 *
 * @component
 * @example
 * // Usage:
 * <SSBarWithColor
 *   StatusBarColor="#FF0000"
 *   StatusBarLightContent={true}
 *   SameColorBottom={true}
 *   StatusBarMargin={true}
 *   bgColor="#FFFFFF"
 *   StatusBarTranslucent={false}
 * >
 *   // Content goes here
 * </SSBarWithColor>
 *
 * @param {React.ReactNode} children - The content to be rendered inside the component.
 * @param {string} StatusBarColor - The color of the status bar.
 * @param {boolean} StatusBarLightContent - Determines if the status bar content should be light or dark.
 * @param {boolean} SameColorBottom - Determines if the bottom of the view should have the same color as the status bar.
 * @param {boolean} StatusBarMargin - Determines if a margin should be added to the top of the view to accommodate the status bar.
 * @param {string} bgColor - The background color of the view.
 * @param {boolean} StatusBarTranslucent - Determines if the status bar should be translucent.
 *
 * @returns {React.ReactNode} The rendered component.
 */
export class SSBarWithColor extends Component<{ COLORTHEME: ColorTheme, children?: React.ReactNode, StatusBarColor?: string, StatusBarLightContent?: boolean, SameColorBottom?: boolean, StatusBarMargin?: boolean, bgColor?: string, StatusBarTranslucent?: boolean }> {
    render() {
        let { COLORTHEME, children, bgColor, SameColorBottom, StatusBarColor, StatusBarLightContent, StatusBarMargin, StatusBarTranslucent } = this.props;
        let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
        bgColor = bgColor ? bgColor : COLORTHEME.background

        return (
            <SafeAreaView style={[styles.flex1, { backgroundColor: SameColorBottom ? StatusBarColor : bgColor }]}>
                {StatusBarColor ? <View style={[styles.w100vw, styles.h50vh, styles.positionAbsolute, { backgroundColor: StatusBarColor }]} /> : null}
                <View>
                    <StatusBar barStyle={StatusBarLightContent ? 'light-content' : 'dark-content'}
                        backgroundColor={StatusBarColor ? StatusBarColor : 'rgba(0,0,0,0)'}
                        translucent={StatusBarTranslucent ? true : false}
                    />
                    {StatusBarMargin ? <View style={{ width: vw(100), height: statusBarHeight }}></View> : null}
                </View>
                <View style={[styles.flex1, { backgroundColor: bgColor ? bgColor : 'rgb(242,242,242)' }]}>
                    {children}
                </View>
            </SafeAreaView>
        )
    }
}

export class ViewRow extends Component<{ children?: React.ReactNode, style?: ViewStyle[] | FlexStyle[] | undefined }> {
    render() {
        return (
            <View style={[styles.flexRow, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewCol extends Component<{ children?: React.ReactNode, style?: ViewStyle[] | FlexStyle[] | undefined }> {
    render() {
        return (
            <View style={[styles.flexCol, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewRowCenter extends Component<{ children?: React.ReactNode, style?: ViewStyle[] | FlexStyle[] | undefined }> {
    render() {
        return (
            <View style={[styles.flexRowCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColCenter extends Component<{ children?: React.ReactNode, style?: ViewStyle[] | FlexStyle[] | undefined }> {
    render() {
        return (
            <View style={[styles.flexColCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewRowBetweenCenter extends Component<{ children?: React.ReactNode, style?: ViewStyle[] | FlexStyle[] | undefined }> {
    render() {
        return (
            <View style={[styles.flexRowBetweenCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColBetweenCenter extends Component<{ children?: React.ReactNode, style?: ViewStyle[] | FlexStyle[] | undefined }> {
    render() {
        return (
            <View style={[styles.flexColBetweenCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewRowEvenlyCenter extends Component<{ children?: React.ReactNode, style?: ViewStyle[] | FlexStyle[] | undefined }> {
    render() {
        return (
            <View style={[styles.flexRowEvenlyCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColEvenlyCenter extends Component<{ children?: React.ReactNode, style?: ViewStyle[] | FlexStyle[] | undefined }> {
    render() {
        return (
            <View style={[styles.flexColEvenlyCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColEndCenter extends Component<{ children?: React.ReactNode, style?: ViewStyle[] | FlexStyle[] | undefined }> {
    render() {
        return (
            <View style={[styles.flexColEndCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewRowStartCenter extends Component<{ children?: React.ReactNode, style?: ViewStyle[] | FlexStyle[] | undefined }> {
    render() {
        return (
            <View style={[styles.flexRowStartCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColStartCenter extends Component<{ children?: React.ReactNode, style?: ViewStyle[] | FlexStyle[] | undefined }> {
    render() {
        return (
            <View style={[styles.flexColStartCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColStartBetween extends Component<{ children?: React.ReactNode, style?: ViewStyle[] | FlexStyle[] | undefined }> {
    render() {
        return (
            <View style={[styles.flexCol, styles.justifyContentSpaceBetween, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

// ____________________END OF UNIVERSAL CLASS_______________________

// ____________________START OF FONT_______________________

// END OF UNIVERSAL CLASS SECTION


/**
 * A React component that renders a customizable status bar and its content.
 * 
 * @remarks
 * This component is designed to work with both Android and iOS platforms.
 * It allows customization of the status bar's color, content style, and translucency.
 * Additionally, it provides an option to add a margin below the status bar on Android devices.
 * 
 * @param barColor - Optional. The color of the status bar background.
 * @param trans - Optional. If true, the status bar will be translucent.
 * @param children - Optional. The content to be rendered below the status bar.
 * @param bgColor - Optional. The background color of the view containing the status bar and its content.
 * @param barContentStyle - Optional. The style of the status bar content (e.g., 'dark-content', 'light-content').
 * @param notMargin - Optional. If true, no margin will be added below the status bar on Android devices.
 * 
 * @returns A React node containing the status bar and its content.
 */
export class SSBar extends Component<{ COLORTHEME: ColorTheme, barColor?: any, trans?: boolean, children?: React.ReactNode, bgColor?: any, barContentStyle?: StatusBarStyle, notMargin?: boolean }> {
    render(): React.ReactNode {
        let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
        let bgColor = this.props.bgColor ? this.props.bgColor : this.props.COLORTHEME.background
        let barColor = this.props.barColor ? this.props.barColor : this.props.COLORTHEME.background
        let barContentStyle = this.props.barContentStyle ? this.props.barContentStyle : this.props.COLORTHEME.barContent
        return (
            <View style={[styles.flex1, { backgroundColor: bgColor }]}>
                <>
                    <StatusBar
                        barStyle={barContentStyle}
                        translucent={this.props.trans ? true : false}
                        backgroundColor={barColor} />
                    {Platform.OS === 'android' && !this.props.notMargin ? <View style={{ height: statusBarHeight * 1.5 }}></View> : null}
                </>
                {this.props.children}
            </View>
        )
    }
}

export class SSBarWithSaveArea extends Component<{ colorScheme: ColorTheme, barColor?: any, trans?: boolean, children?: React.ReactNode, bgColor?: any, barContentStyle?: StatusBarStyle, margin?: boolean }> {
    render(): React.ReactNode {
        let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
        let bgColor = this.props.bgColor ? this.props.bgColor : this.props.colorScheme.background
        let barColor = this.props.barColor ? this.props.barColor : this.props.colorScheme.background
        let barContentStyle = this.props.barContentStyle ? this.props.barContentStyle : this.props.colorScheme.barContent
        return (
            <SafeAreaView style={[styles.flex1, { backgroundColor: bgColor }]}>
                <StatusBar
                    barStyle={barContentStyle}
                    translucent={this.props.trans ? true : false}
                    backgroundColor={barColor} />
                {Platform.OS === 'android' && this.props.margin ? <View style={{ height: statusBarHeight }}></View> : null}
                {this.props.children}
            </SafeAreaView>
        )
    }
}

export const SSBarWithSaveAreaWithColorScheme = withColorScheme(SSBarWithSaveArea)


export interface TopBarWithThingInMiddleAllCustomableProps {
    colorScheme: ColorTheme;

    centerChildren?: React.ReactNode;
    leftItem?: React.ReactNode;
    rightItem?: React.ReactNode;

    returnPreScreenFnc?: () => void;
    returnPreScreenIcon?: React.ReactNode;

    rightItemFnc?: () => void;
    rightItemIcon?: React.ReactNode;

    centerTitle?: React.ReactNode;
    TitleTextClass?: React.ComponentType<{ children: React.ReactNode }>;

    style?: {
        isAlignItemCenter?: boolean
        container?: ViewStyle[] | FlexStyle[],
        leftItemSize?: number,
        rightItemSize?: number
        textStyle?: TextStyle[]
        iconLeftStyle?: ViewStyle[] | FlexStyle[],
        iconRightStyle?: ViewStyle[] | FlexStyle[],
    }
    bgColor?: string
    textColor?: string
    iconColor?: string
}
export class TopBarWithThingInMiddleAllCustomable extends Component<TopBarWithThingInMiddleAllCustomableProps> {
    // state = {
    //     leftWidth: 0,
    //     rightWidth: 0,
    // };

    // onLayoutLeft = (event: LayoutChangeEvent) => {
    //     const { width } = event.nativeEvent.layout;
    //     this.setState({ leftWidth: width });
    // };

    // onLayoutRight = (event: LayoutChangeEvent) => {
    //     const { width } = event.nativeEvent.layout;
    //     this.setState({ rightWidth: width });
    // };

    shouldComponentUpdate(
        nextProps: Readonly<TopBarWithThingInMiddleAllCustomableProps>,
        nextState: Readonly<{}>,
        nextContext: any
    ): boolean {
        return (
            nextProps.centerChildren !== this.props.centerChildren ||
            nextProps.leftItem !== this.props.leftItem ||
            nextProps.rightItem !== this.props.rightItem ||
            nextProps.returnPreScreenFnc !== this.props.returnPreScreenFnc ||
            nextProps.returnPreScreenIcon !== this.props.returnPreScreenIcon ||
            nextProps.rightItemFnc !== this.props.rightItemFnc ||
            nextProps.rightItemIcon !== this.props.rightItemIcon ||
            nextProps.centerTitle !== this.props.centerTitle ||
            nextProps.TitleTextClass !== this.props.TitleTextClass ||
            nextProps.style !== this.props.style ||
            nextProps.bgColor !== this.props.bgColor ||
            nextProps.textColor !== this.props.textColor ||
            nextProps.iconColor !== this.props.iconColor
        );
    }

    render(): React.ReactNode {
        const { colorScheme, centerChildren, leftItem, rightItem, returnPreScreenFnc, returnPreScreenIcon, rightItemFnc, rightItemIcon, centerTitle, TitleTextClass, style, bgColor, textColor, iconColor } = this.props
        // const { leftWidth, rightWidth } = this.state;
        const TitleClass = TitleTextClass || Text;

        return (
            <ViewRow
                style={[
                    { backgroundColor: bgColor || 'transparent', zIndex: 10 },
                    this.props.style?.isAlignItemCenter ? styles.alignItemsCenter : undefined,
                    styles.justifyContentSpaceBetween,
                    styles.paddingH4vw,
                    styles.paddingV2vw,
                    styles.gap1vw,
                    style?.container
                ] as ViewStyle[] | FlexStyle[]}>
                <View key={'TopBarWithThingInMiddleAllCustomable-left'}
                // onLayout={this.onLayoutLeft}
                >
                    {leftItem || (
                        returnPreScreenFnc ? (
                            <TouchableOpacity onPress={returnPreScreenFnc}
                                style={[style?.iconLeftStyle]}>
                                {returnPreScreenIcon || SVG.sharpLeftArrow(style?.leftItemSize || vw(6), style?.leftItemSize || vw(6), iconColor || colorScheme.text)}
                            </TouchableOpacity>
                        ) : null
                    )}
                </View>
                <View key={'TopBarWithThingInMiddleAllCustomable-center'} style={[styles.flex1, styles.justifyContentCenter, styles.alignContentCenter, styles.alignItemsCenter, {}]}>
                    {centerChildren ?
                        centerChildren :
                        <TitleClass style={[styles.textCenter, { color: textColor || colorScheme.text }, style?.textStyle]}>{centerTitle}</TitleClass>
                    }
                </View>
                <View key={'TopBarWithThingInMiddleAllCustomable-right'}
                // onLayout={this.onLayoutRight}
                >
                    {rightItem || (
                        rightItemFnc ? (
                            <TouchableOpacity onPress={rightItemFnc}
                                style={[style?.iconLeftStyle]}>
                                {rightItemIcon || SVG.sharpRightArrow(style?.rightItemSize || vw(6), style?.rightItemSize || vw(6), iconColor || colorScheme.text)}
                            </TouchableOpacity>
                        ) : null
                    )}
                </View>
            </ViewRow>
        );
    }
}

export const TopBarWithThingInMiddleAllCustomableWithColorScheme = withColorScheme(TopBarWithThingInMiddleAllCustomable)

/**
 * A React component that renders a customizable round button.
 *
 * @component
 * @example
 * ```tsx
 * <RoundBtn
 *   icon={<SomeIcon />}
 *   title="Click Me"
 *   onPress={() => console.log('Button pressed')}
 *   bgColor="#ff0000"
 *   textClass={CustomTextComponent}
 *   textColor="#ffffff"
 *   iconColor="#000000"
 *   border={true}
 *   borderColor="#00ff00"
 *   customStyle={{ margin: 10 }}
 * />
 * ```
 *
 * @prop {React.ReactNode} [icon] - The icon to display inside the button.
 * @prop {string} [title] - The text to display inside the button.
 * @prop {() => void} onPress - The function to call when the button is pressed.
 * @prop {string} [bgColor] - The background color of the button.
 * @prop {React.ComponentType<any>} [textClass] - The custom text component to use for the button text.
 * @prop {string} [textColor] - The color of the button text.
 * @prop {string} [iconColor] - The color of the icon.
 * @prop {boolean} [border] - Whether the button should have a border.
 * @prop {string} [borderColor] - The color of the border.
 * @prop {any} [customStyle] - Additional custom styles for the button.
 */
export class RoundBtn extends Component<{
    icon?: React.ReactNode
    title?: string
    onPress: () => void
    bgColor?: string
    textClass?: React.ComponentType<any>
    textColor?: string
    border?: boolean
    borderColor?: string
    customStyle?: any
    otherTouchProps?: TouchableOpacityProps
    iconOnRightSide?: boolean
}> {
    render() {
        const { icon, title, onPress, bgColor, textClass, textColor, border, borderColor, customStyle, otherTouchProps, iconOnRightSide } = this.props;
        let TextClass = textClass ? textClass : Text
        return (
            <TouchableOpacity
                onPress={onPress}
                {...otherTouchProps}
                style={[styles.flexRow, styles.alignItemsCenter, styles.padding4vw, styles.gap3vw, styles.borderRadius10, styles.overflowHidden, { backgroundColor: bgColor ? bgColor : undefined, borderWidth: border ? 1 : 0, borderColor: borderColor ? borderColor : undefined }, customStyle]}>
                {icon && !iconOnRightSide ? icon : null}
                <TextClass style={[{ color: textColor ? textColor : clrStyle.black as string }]}>{title}</TextClass>
                {icon && iconOnRightSide ? icon : null}
            </TouchableOpacity>
        );
    }
}

/**
 * A React component that renders a customizable search box.
 * 
 * @class SearchBox
 * @extends {Component}
 * 
 * @prop {any} [customStyle] - Custom styles to be applied to the search box.
 * @prop {string} [placeholder] - Placeholder text for the search input.
 * @prop {any} [placeholderTextColor] - Color of the placeholder text.
 * @prop {string} value - The current value of the search input.
 * @prop {(input: any) => void} [onChangeText] - Callback function to handle text changes in the search input.
 * @prop {() => void} [onClear] - Callback function to handle clearing the search input.
 * @prop {boolean} [showSearchIcon] - Flag to show or hide the search icon.
 * @prop {string} [fontFam] - Font family to be used for the search input text.
 * @prop {CurrentCache} [currentCache] - Cache object for current search context.
 * 
 * @method render
 * Renders the search box component.
 * 
 * @function searchEngine
 * An asynchronous function to perform search operations.
 * 
 * @param {string} keyword - The keyword to search for.
 * @param {any} dataBank - The data bank to search within.
 * @param {'set' | 'desk' | 'card'} type - The type of search to perform.
 * 
 * @returns {Promise<any[]>} - A promise that resolves to an array of search results.
 */
export class SearchBox extends Component<{
    customStyle?: any
    placeholder?: string
    placeholderTextColor?: any
    value: string
    onChangeText?: (input: any) => void
    onClear?: () => void
    showSearchIcon?: boolean
    icon?: any
    fontFam?: string
    currentCache?: CurrentCache
}> {
    render() {
        async function searchEngine(keyword: string, dataBank: any, type: 'set' | 'desk' | 'card') {
            keyword = value.trim();
            // keyword = keyword.trim();
            let result: any = [];
            const regex = new RegExp(`\\b${keyword}`, 'i');

            if (keyword === '') {
                return [];
            }
        }

        const { customStyle, placeholder, placeholderTextColor, value, onChangeText, onClear, showSearchIcon, fontFam } = this.props;
        return (
            <ViewRowBetweenCenter
                style={[styles.gap3vw, styles.borderRadius10, styles.paddingH4vw, { backgroundColor: clrStyle.white, borderColor: clrStyle.black }, customStyle]}>
                {showSearchIcon ? this.props.icon ? this.props.icon : SVG.searchIcon(vw(5), vw(5), clrStyle.black) : null}
                <TextInput
                    style={[styles.flex1, styles.paddingV2vw, { color: clrStyle.black as string, fontSize: vw(3.5), fontFamily: fontFam ? fontFam : undefined }]}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder ? placeholder : 'Search'}
                    placeholderTextColor={placeholderTextColor ? placeholderTextColor : ''}
                />
                <TouchableOpacity
                    onPress={onClear}
                    style={{ display: value ? 'flex' : 'none' }}
                >
                    {SVG.xIcon(vw(5), vw(5), clrStyle.black)}
                </TouchableOpacity>
            </ViewRowBetweenCenter>
        );
    }
}

interface SearchBoxState {
    showSearch: boolean;
    searchInput: string;

}

/**
 * @textClass - use the RegularText component instead
    * @param title: string,
    * @param value: string | number,
    * @param onChgText: (value: string | number) => void,
    * @param placeholder?: string,

    * @param supFncTitle?: string,
    * @param supFncTitleColor?: string,
    * @param supFnc?: () => void,
    * @param subTitle?: string,

    * @param isNumber?: boolean,
    * @param contentType?: string,
    * @param hideContent?: boolean,
    * @param hideContentFnc?: (value: boolean) => void,
    * @param autoCap?: 'none' | 'characters' | 'words' | 'sentences',
    * @param maxLength?: number,

    * @param CustomStyleClass?: ViewStyle[] | ImageStyle[] | FlexStyle[],
    * @param CustomStyleText?: TextStyle[],
    * @param CustomStyleInput?: ViewStyle[] | ImageStyle[] | FlexStyle[],

    * @param activeColor?: string,
    * @param passiveColor?: string,
    * @param tileColor?: string,
    * 
    * @param textClass?: ComponentType<{ children: React.ReactNode }>
 */
export class BoardingInput extends Component<{
    title: string,
    value: string | number,
    onChgText: (value: string | number) => void,
    placeholder?: string,
    // 
    supFncTitle?: string,
    supFncTitleColor?: string,
    supFnc?: () => void,
    subTitle?: string,
    // 
    isNumber?: boolean,
    contentType?: string
    hideContent?: boolean,
    hideContentFnc?: (value: boolean) => void,
    autoCap?: 'none' | 'characters' | 'words' | 'sentences',
    maxLength?: number,
    // 
    CustomStyleClass?: ViewStyle[] | ImageStyle[] | FlexStyle[],
    CustomStyleText?: TextStyle[],
    CustomStyleInput?: ViewStyle[] | ImageStyle[] | FlexStyle[],
    // 
    activeColor?: string,
    passiveColor?: string,
    tileColor?: string,
    // 
    textClass?: ComponentType<{ children: React.ReactNode }>
}> {

    render() {
        const { title, placeholder, value, onChgText, CustomStyleClass, CustomStyleInput, CustomStyleText, contentType, subTitle, supFnc, supFncTitle, hideContent, hideContentFnc, autoCap, maxLength, supFncTitleColor, activeColor, passiveColor, tileColor, textClass } = this.props;
        const isNumber = this.props.isNumber ? this.props.isNumber : false;
        const CTEXT = textClass ? textClass : Text;

        function changFnc(value: string | number) {
            if (isNumber) {
                onChgText(parseInt(value as string));
            } else {
                onChgText(value);
            }
        }

        return (
            <View style={[styles.flexColCenter, styles.gap4vw, styles.positionRelative, CustomStyleClass]}>
                {title ?
                    <CTEXT style={[{ color: tileColor, fontWeight: 'bold' }, CustomStyleText]}>{title}</CTEXT>
                    : null}
                <TextInput
                    placeholder={placeholder ? placeholder : 'Type here'}
                    value={value ? value.toString() : ''}
                    onChangeText={changFnc}
                    placeholderTextColor={passiveColor as string}
                    secureTextEntry={hideContent ? hideContent : false}
                    keyboardType={isNumber ? 'numeric' : 'default'}
                    autoCapitalize={autoCap ? autoCap : 'sentences'}
                    textContentType={contentType as TextInputProps['textContentType']}
                    maxLength={maxLength ? maxLength : undefined}
                    style={[styles.w100, styles.border1, styles.textCenter, { borderColor: value ? activeColor : passiveColor, padding: vw(2.5), fontFamily: value ? 'Nunito-Bold' : 'Nunito-Regular', fontSize: vw(4.5), borderRadius: vw(2), color: value ? activeColor : passiveColor }, CustomStyleInput]} />
                {hideContentFnc ?
                    <TouchableOpacity
                        onPress={() => { hideContentFnc && hideContentFnc(!hideContent) }}
                        style={[styles.padding2vw, styles.positionAbsolute, { bottom: -vw(12) }]}>
                        <Text style={{ color: activeColor, fontSize: vw(3) }}>{hideContent ? `Show ${contentType}` : `Hide ${contentType}`}</Text>
                    </TouchableOpacity>
                    : null}
                {subTitle ?
                    <View style={[styles.flexRowCenter]}>
                        <CTEXT style={[{ color: passiveColor }]}>{subTitle}</CTEXT>
                        <TouchableOpacity onPress={supFnc}><CTEXT style={[styles.textUnderline, { color: supFncTitleColor ? supFncTitleColor : clrStyle.black }]}>{supFncTitle}</CTEXT></TouchableOpacity>
                    </View>
                    : null
                }
            </View>
        );
    }
}

export class BoardingInputWithInlineIcon extends Component<{
    value: string | number,
    onChgText: (value: string | number) => void,
    placeholder?: string,
    inputIcon?: any,
    // 
    isNumber?: boolean,
    contentType?: string
    hideContent?: boolean,
    hideContentFnc?: (value: boolean) => void,
    autoCap?: 'none' | 'characters' | 'words' | 'sentences',
    maxLength?: number,
    // 
    CustomStyleClass?: ViewStyle[] | ImageStyle[] | FlexStyle[],
    CustomStyleText?: TextStyle[],
    CustomStyleInput?: ViewStyle[] | ImageStyle[] | FlexStyle[],
    // 
    activeColor?: string,
    passiveColor?: string,
    tileColor?: string,
    // 
    textClass?: ComponentType<{ children: React.ReactNode }>
}> {

    render() {
        const { placeholder, value, onChgText, inputIcon, CustomStyleClass, CustomStyleInput, CustomStyleText, contentType, hideContent, hideContentFnc, autoCap, maxLength, activeColor, passiveColor, tileColor, textClass } = this.props;
        const isNumber = this.props.isNumber ? this.props.isNumber : false;
        const CTEXT = textClass ? textClass : Text;

        function changFnc(value: string | number) {
            if (isNumber) {
                onChgText(parseInt(value as string));
            } else {
                onChgText(value);
            }
        }

        return (
            <View style={[styles.gap4vw, styles.positionRelative, styles.flexRowBetweenCenter, CustomStyleClass]}>
                {inputIcon ?
                    <View style={[styles.paddingRight2vw]}>{inputIcon}</View> : null}
                <TextInput
                    placeholder={placeholder ? placeholder : 'Type here'}
                    value={value ? value.toString() : ''}
                    onChangeText={changFnc}
                    placeholderTextColor={passiveColor as string}
                    secureTextEntry={hideContent ? hideContent : false}
                    keyboardType={isNumber ? 'numeric' : 'default'}
                    autoCapitalize={autoCap ? autoCap : 'sentences'}
                    textContentType={contentType as TextInputProps['textContentType']}
                    maxLength={maxLength ? maxLength : undefined}
                    style={[styles.flex1, { color: value ? activeColor : passiveColor }, CustomStyleInput]} />
                {hideContentFnc ?
                    <TouchableOpacity
                        onPress={() => { hideContentFnc && hideContentFnc(!hideContent) }}
                        style={[styles.paddingLeft2vw,]}>
                        {!hideContent ? SVG.visibleIcon(vw(6), vw(6), activeColor) : SVG.inVisibleIcon(vw(6), vw(6), activeColor)}
                    </TouchableOpacity>
                    : null}
            </View>
        );
    }
}

export class ProcessBarSelfMade extends Component<{
    barLength: number,
    currentStep: number,
    setCurrentStep: (value: number) => void,
    totalStep: number,
    barHeight?: number,
    bgBarColor?: string,
    bgProcessColor?: string,
    customBarStyle?: any,
    customProcessStyle?: any,
    round?: number,
    onStartedProcess?: boolean,
}> {
    render() {
        const { barLength, currentStep, setCurrentStep, totalStep, bgBarColor, bgProcessColor, customBarStyle, customProcessStyle, barHeight, onStartedProcess, round } = this.props;
        const process = (currentStep + (onStartedProcess ? 1 : 0)) / totalStep - (onStartedProcess ? 0 : 1);
        const animation = new Animated.Value(process);
        const inputRange = Array.from({ length: totalStep - (onStartedProcess ? 0 : 1) }, (_, i) => i / (totalStep - 1));
        const outputRange = Array.from({ length: totalStep - (onStartedProcess ? 0 : 1) }, (_, i) => i * barLength / (totalStep - 1));

        const processAnimationRange = animation.interpolate({
            inputRange: inputRange,
            outputRange: outputRange,
        });

        function extendAnimate() {
            Animated.timing(animation, {
                toValue: process,
                duration: 1000,
                useNativeDriver: false,
                easing: Easing.inOut(Easing.ease),
            }).start()
        }
        extendAnimate()

        return (
            <View style={[styles.overflowHidden, { width: barLength, backgroundColor: bgBarColor ? bgBarColor : 'gray', borderRadius: round }, customBarStyle]}>
                <Animated.View style={[styles.w100, { width: processAnimationRange, height: barHeight ? barHeight : vw(3), backgroundColor: bgProcessColor ? bgProcessColor : 'black', borderRadius: round, }, customProcessStyle]} ></Animated.View>
            </View>
        )
    }
}

export class DatalistInput extends Component<{
    label?: string;
    options: string[];
    placeholder?: string;
    onSelect: (option: string) => void;
    enableScroll?: boolean;
    multiLine?: boolean;
    TextClass?: React.ComponentType<{ children: React.ReactNode }>;
    extendIcon?: React.ReactNode;
    extendAnimationSrc: Animated.Value;
    CustomStyle?: {
        classStyle?: ViewStyle[] | FlexStyle[];
        dropdownStyle?: ViewStyle[] | FlexStyle[];
        dropdownItemStyle?: ViewStyle[] | FlexStyle[];
        inputStyle?: ViewStyle[] | FlexStyle[];
        textStyle?: TextStyle[];
    };
}> {
    state = {
        inputValue: '',
        showDropdown: false,
    };

    // Filters options based on the input text
    filterOptions = (text: string) => {
        const { options } = this.props;
        return options.filter((option) =>
            option.toLowerCase().includes(text.toLowerCase())
        );
    };

    // Handles input change and updates dropdown visibility
    handleInputChange = (text: string) => {
        this.setState({
            inputValue: text,
            showDropdown: text.length > 0,
        });
        this.props.onSelect(text); // Pass free text to the parent
    };

    // Handles dropdown item selection
    handleOptionSelect = (option: string) => {
        Keyboard.dismiss(); // Dismiss the keyboard to prevent TextInput blur
        this.setState(
            {
                inputValue: option,
                showDropdown: false,
            },
            () => {
                this.props.onSelect(option); // Notify parent of the selected value
            }
        );
    };

    // Manages dropdown visibility on blur
    handleBlur = () => {
        // Delay dropdown hiding to allow dropdown item press
        setTimeout(() => {
            if (!this.state.inputValue) {
                this.setState({ showDropdown: false });
            }
        }, 100);
    };

    // Renders the dropdown list
    renderDropdown = (filteredOptions: string[]) => {
        const { CustomStyle, TextClass } = this.props;
        const CTEXT = TextClass || Text;


        if (!this.state.showDropdown || filteredOptions.length === 0) {
            return null;
        }

        return (
            <FlatList
                style={CustomStyle?.dropdownStyle}
                data={filteredOptions}
                scrollEnabled={this.props.enableScroll}
                keyboardShouldPersistTaps="handled" // Ensure taps are registered
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={CustomStyle?.dropdownItemStyle}
                        onPress={() => this.handleOptionSelect(item)}
                    >
                        <CTEXT style={CustomStyle?.textStyle}>{item}</CTEXT>
                    </TouchableOpacity>
                )}
            />
        );
    };



    render() {
        const rotateInterpolate = this.props.extendAnimationSrc.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg'],
        });

        const startRotateAnimation = () => {
            Animated.timing(this.props.extendAnimationSrc, {
                toValue: !this.state.showDropdown ? 1 : 0,
                duration: 500,
                useNativeDriver: true,
                easing: Easing.linear,
            }).start();
        };

        const { label, placeholder, CustomStyle, TextClass, multiLine } = this.props;
        const { inputValue } = this.state;
        const Font = TextClass || Text;

        const filteredOptions = this.filterOptions(inputValue);

        return (
            <View style={CustomStyle?.classStyle}>
                {label && <Font style={CustomStyle?.textStyle}>{label}</Font>}
                <ViewRowBetweenCenter>
                    <TextInput
                        style={CustomStyle?.inputStyle}
                        value={inputValue}
                        placeholder={placeholder || 'Type to search...'}
                        placeholderTextColor={CustomStyle?.textStyle?.[0]?.color || 'gray'}
                        onChangeText={this.handleInputChange}
                        onBlur={this.handleBlur}
                        multiline={multiLine}
                    />
                    {
                        this.props.extendIcon ?
                            <TouchableOpacity
                                onPress={() => {
                                    startRotateAnimation();
                                    this.setState({ showDropdown: !this.state.showDropdown });
                                }}
                            >
                                <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
                                    {this.props.extendIcon}
                                </Animated.View>
                            </TouchableOpacity>
                            : null
                    }
                </ViewRowBetweenCenter>
                {this.renderDropdown(filteredOptions)}
            </View>
        );
    }
}

export class SelectorInput extends Component<{
    label?: string;
    options: string[];
    onSelect: (option: string) => void;
    defaultValue?: string;
    enableScroll?: boolean;
    multiLine?: boolean;
    TextClass?: React.ComponentType<{ children: React.ReactNode }>;
    extendIcon?: React.ReactNode;
    extendAnimationSrc: Animated.Value;
    CustomStyle?: {
        classStyle?: ViewStyle[] | FlexStyle[];
        dropdownStyle?: ViewStyle[] | FlexStyle[];
        dropdownItemStyle?: ViewStyle[] | FlexStyle[];
        textStyle?: TextStyle[];
    };
}> {
    state = {
        inputValue: '',
        showDropdown: false,
    };

    // Handles dropdown item selection
    handleOptionSelect = (option: string) => {
        Keyboard.dismiss(); // Dismiss the keyboard to prevent TextInput blur
        this.setState(
            {
                inputValue: option,
                showDropdown: false,
            },
            () => {
                this.props.onSelect(option); // Notify parent of the selected value
            }
        );
    };

    // Manages dropdown visibility on blur
    handleBlur = () => {
        // Delay dropdown hiding to allow dropdown item press
        setTimeout(() => {
            if (!this.state.inputValue) {
                this.setState({ showDropdown: false });
            }
        }, 100);
    };

    // Renders the dropdown list
    renderDropdown = (filteredOptions: string[]) => {
        const { CustomStyle, TextClass } = this.props;
        const CTEXT = TextClass || Text;


        if (!this.state.showDropdown || filteredOptions.length === 0) {
            return null;
        }

        return (
            <FlatList
                style={CustomStyle?.dropdownStyle}
                data={filteredOptions}
                scrollEnabled={this.props.enableScroll}
                keyboardShouldPersistTaps="handled" // Ensure taps are registered
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={CustomStyle?.dropdownItemStyle}
                        onPress={() => this.handleOptionSelect(item)}
                    >
                        <CTEXT style={CustomStyle?.textStyle}>{item}</CTEXT>
                    </TouchableOpacity>
                )}
            />
        );
    };



    render() {
        const rotateInterpolate = this.props.extendAnimationSrc.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg'],
        });

        const startRotateAnimation = () => {
            Animated.timing(this.props.extendAnimationSrc, {
                toValue: !this.state.showDropdown ? 1 : 0,
                duration: 500,
                useNativeDriver: false,
                easing: Easing.linear,
            }).start();
        };

        const { label, CustomStyle, TextClass } = this.props;
        const { inputValue } = this.state;
        const Font = TextClass || Text;

        const filteredOptions = this.props.options;

        return (
            <Animated.View style={[CustomStyle?.classStyle]}>
                {label && <Font style={CustomStyle?.textStyle}>{label}</Font>}
                <TouchableOpacity
                    onPress={() => {
                        startRotateAnimation();
                        this.setState({ showDropdown: !this.state.showDropdown });
                    }}
                >
                    <ViewRowEvenlyCenter style={[styles.gap1vw]}>
                        <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
                            {this.props.extendIcon}
                        </Animated.View>
                        <Font style={CustomStyle?.textStyle}>{this.props.defaultValue}</Font>
                    </ViewRowEvenlyCenter>
                </TouchableOpacity>
                {this.renderDropdown(filteredOptions)}
            </Animated.View>
        );
    }
}


export class LowBtn extends Component<{
    title: string,
    onPress: () => void,
    bgColor?: string,
    fontColor?: string,
    icon?: any,
    round?: number,
    CustomStyle?: any,
    FontElement?: ComponentType<{ children: React.ReactNode }>,
}> {
    render() {
        const { title, onPress, bgColor, fontColor, icon, round, CustomStyle, FontElement } = this.props;
        const Font = FontElement ? FontElement : Text;
        return (
            <TouchableOpacity onPress={onPress} style={[styles.flexRowCenter, styles.gap3vw, styles.borderRadius100, styles.shadowW0H1Black, styles.w90, styles.alignSelfCenter, { backgroundColor: bgColor ? bgColor : 'white', padding: vw(3.75), borderRadius: round ? round : vw(1000) }, CustomStyle ? CustomStyle : null]}>
                {icon ? icon : null}
                <Font style={{ color: fontColor ? fontColor : clrStyle.white, }}>{title}</Font>
            </TouchableOpacity>
        );
    }
}

// export class BoardingInput extends Component<{
//     title: string,
//     supFncTitle?: string,
//     supFncTitleColor?: string,
//     supFnc?: () => void,
//     subTitle?: string,
//     placeholder?: string,
//     value: string | number,
//     isNumber?: boolean,
//     onChgText: (value: string | number) => void,
//     CustomStyleClass?: any,
//     CustomStyleText?: any,
//     CustomStyleInput?: any,
//     contentType?: string
//     hideContent?: boolean,
//     hideContentFnc?: (value: boolean) => void,
//     autoCap?: 'none' | 'characters' | 'words' | 'sentences',
//     maxLength?: number,
// }> {

//     render() {
//         const { title, placeholder, value, onChgText, CustomStyleClass, CustomStyleInput, CustomStyleText, contentType, subTitle, supFnc, supFncTitle, hideContent, hideContentFnc, autoCap, maxLength, supFncTitleColor } = this.props;
//         const isNumber = this.props.isNumber ? this.props.isNumber : false;

//         function changFnc(value: string | number) {
//             if (isNumber) {
//                 onChgText(parseInt(value as string));
//             } else {
//                 onChgText(value);
//             }
//         }

//         return (
//             <View style={[styles.flexColCenter, styles.gap4vw, styles.positionRelative, CustomStyleClass]}>
//                 {title ?
//                     <CTEXT.Nunito24Bold style={[{ color: clrStyle.main2 }, CustomStyleText]}>{title}</CTEXT.Nunito24Bold>
//                     : null}
//                 <TextInput
//                     placeholder={placeholder ? placeholder : 'Type here'}
//                     value={value ? value.toString() : ''}
//                     onChangeText={changFnc}
//                     placeholderTextColor={clrStyle.grey1}
//                     secureTextEntry={hideContent ? hideContent : false}
//                     keyboardType={isNumber ? 'numeric' : 'default'}
//                     autoCapitalize={autoCap ? autoCap : 'sentences'}
//                     textContentType={contentType as TextInputProps['textContentType']}
//                     maxLength={maxLength ? maxLength : undefined}
//                     style={[styles.w100, styles.border1, styles.textCenter, { borderColor: value ? clrStyle.main2 : clrStyle.grey1, padding: vw(2.5), fontFamily: value ? 'Nunito-Bold' : 'Nunito-Regular', fontSize: vw(4.5), borderRadius: vw(2), color: value ? clrStyle.main2 : clrStyle.grey2 }, CustomStyleInput]} />
//                 {hideContentFnc ?
//                     <TouchableOpacity
//                         onPress={() => { hideContentFnc && hideContentFnc(!hideContent) }}
//                         style={[styles.padding2vw, styles.positionAbsolute, { bottom: -vw(12) }]}>
//                         <CTEXT.Nunito14Reg style={{ color: clrStyle.grey2 }}>{hideContent ? `Show ${contentType}` : `Hide ${contentType}`}</CTEXT.Nunito14Reg>
//                     </TouchableOpacity>
//                     : null}
//                 {subTitle ?
//                     <View style={[styles.flexRowCenter]}>
//                         <CTEXT.Nunito16Reg style={[{ color: clrStyle.grey2 }]}>{subTitle}</CTEXT.Nunito16Reg>
//                         <TouchableOpacity onPress={supFnc}><CTEXT.Nunito16Reg style={[styles.textUnderline, { color: supFncTitleColor ? supFncTitleColor : clrStyle.grey2 }]}>{supFncTitle}</CTEXT.Nunito16Reg></TouchableOpacity>
//                     </View>
//                     : null
//                 }
//             </View>
//         );
//     }
// }

// export class BoardingNavigation extends Component<{
//     fnc: (value: boolean) => void,
//     leftTitle: string,
//     rightTitle: string,
//     showGoBack: boolean,
//     currentStep: number,
//     dataLength: number,
// }> {
//     render() {
//         const { fnc, leftTitle, rightTitle, showGoBack, currentStep, dataLength } = this.props;

//         return (
//             <View style={[styles.flexRowBetweenCenter, styles.marginTop2vw, styles.marginBottom8vw]}>
//                 <TouchableOpacity
//                     onPress={() => { fnc(false) }}>
//                     <View style={[styles.borderRadius100, styles.wfit, { padding: vw(2.5), backgroundColor: currentStep > 0 ? clrStyle.white2 : clrStyle.grey2 }]}>
//                         {showGoBack ?
//                             <CTEXT.Nunito16Reg style={[styles.textUpperCase, styles.paddingH2vw, { color: clrStyle.black }]}>{leftTitle}</CTEXT.Nunito16Reg>
//                             :
//                             SVG.sharpLeftArrow(vw(6), vw(6), currentStep > 0 ? clrStyle.main2 : clrStyle.white)}
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     onPress={() => { fnc(true) }}>
//                     <View style={[styles.borderRadius100, styles.wfit, { padding: vw(2.5), backgroundColor: currentStep < dataLength - 1 ? clrStyle.main1 : clrStyle.main2 }]}>
//                         {currentStep < dataLength - 1 ?
//                             SVG.sharpRightArrow(vw(6), vw(6), currentStep < dataLength - 1 ? clrStyle.main2 : clrStyle.grey2)
//                             :
//                             <CTEXT.Nunito16Bold style={[styles.textUpperCase, styles.paddingH2vw, { color: clrStyle.white }]}>{rightTitle}</CTEXT.Nunito16Bold>
//                         }
//                     </View>
//                 </TouchableOpacity>
//             </View>
//         )
//     }
// }

// export class BoardingPicking extends Component<{
//     data: string[],
//     selected: string[],
//     setSelected: (value: string[]) => void,
//     maxLength?: number | undefined,
//     deleteFromOriginal?: string[],
//     deleteFromOtherSelected1?: string,
//     deleteFromOriginalFnc?: (value: string[]) => void,
//     deleteFromOtherSelectedFnc1?: (value: string) => void,
//     originalData?: string[],
// }> {
//     render() {
//         const { data, selected, setSelected, maxLength, originalData, deleteFromOriginal, deleteFromOriginalFnc, deleteFromOtherSelected1, deleteFromOtherSelectedFnc1 } = this.props;
//         const length = maxLength ? maxLength : data.length;
//         return (
//             <View style={[styles.flexRowStartCenter, styles.flexWrap, styles.gap4vw]}>
//                 {data.map((item, index) => {
//                     return (
//                         <TouchableOpacity
//                             key={index}
//                             onPress={() => {
//                                 if (selected.includes(item)) {
//                                     setSelected(selected.filter((value) => value !== item))
//                                     if (deleteFromOriginal && deleteFromOriginalFnc && !originalData?.includes(item)) {
//                                         deleteFromOriginalFnc(deleteFromOriginal.filter((value) => value !== item))
//                                     }
//                                     if (deleteFromOtherSelected1 && deleteFromOtherSelectedFnc1) {
//                                         if (deleteFromOtherSelected1.includes(`${item},`)) {
//                                             deleteFromOtherSelectedFnc1(deleteFromOtherSelected1.replace(`${item},`, ''))
//                                         } else {
//                                             deleteFromOtherSelectedFnc1(deleteFromOtherSelected1.replace(item, ''))
//                                         }
//                                     }
//                                 } else {
//                                     if (selected.length < length!) {
//                                         setSelected([...selected, item])
//                                     }
//                                 };
//                             }}
//                             style={[styles.wfit, styles.paddingV2vw, styles.paddingH4vw, styles.border1, { borderColor: selected.includes(item) ? clrStyle.main2 : clrStyle.grey1, borderRadius: vw(2), }]}>
//                             {selected.includes(item) ?
//                                 <CTEXT.Nunito14ExBold style={[{ color: clrStyle.main2 }]}>{item}</CTEXT.Nunito14ExBold>
//                                 :
//                                 <CTEXT.Nunito14Reg style={[{ color: clrStyle.grey1 }]}>{item}</CTEXT.Nunito14Reg>
//                             }
//                         </TouchableOpacity>
//                     )
//                 })}
//             </View>
//         )
//     }
// }

export class BannerSliderWithCenter extends Component<{
    data: any[],
    renderBanner: ({ item, index }: { item: any, index: number }) => React.ReactElement | null,
    currentIndex: number,
    setCurrentIndex: (value: number) => void,
    itemWidth?: number,
    snapToCenter?: boolean,
    customStyle?: any,
    customContainerStyle?: any,
}> {
    render() {
        const { data, renderBanner, currentIndex, setCurrentIndex, itemWidth, snapToCenter, customStyle, customContainerStyle } = this.props;
        const width = itemWidth ?? 1;
        return (
            <FlatList
                data={data}
                renderItem={renderBanner}
                snapToInterval={width}
                snapToAlignment={snapToCenter ? 'center' : 'start'}
                // time to snap to the center
                decelerationRate='fast'
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                // pagingEnabled={false}
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => {
                    setCurrentIndex(Math.round(event.nativeEvent.contentOffset.x / width))
                }}
                style={customStyle}
                contentContainerStyle={[styles.flexRowStartCenter, customContainerStyle]}
            />
        )
    }
}

// import DateTimePicker, { AndroidNativeProps, DateTimePickerAndroid, IOSNativeProps } from '@react-native-community/datetimepicker';
// /**
//  * @description use to pick date and time
//  * @param mode : 'date' | 'time'
//  * @param onChange : to save useState value
//  * @param value : number | Date
//  * @param TextClass : text component
//  * @param localFormat : 'vi-VN' | 'en-US' | ...
//  * @param style : { class: ViewStyle[] | FlexStyle[], text: TextStyle[] }
//  */
// export class DatePicker extends React.Component<{
//     mode: IOSNativeProps['mode'] | AndroidNativeProps['mode'],
//     onChange: (event: any, selectedDate?: Date) => void,
//     value?: number | Date,
//     TextClass?: React.ComponentType<{ children: React.ReactNode }>,
//     localFormat?: string,
//     style?: {
//         class?: ViewStyle[] | FlexStyle[],
//         text?: TextStyle[]
//     },
// }> {
//     state = {
//         date: this.props.value ? new Date(this.props.value) : new Date(),
//         show: false,
//     };


//     onChange = (event: any, selectedDate?: Date) => {
//         if (selectedDate) {
//             this.setState({ show: false, date: selectedDate });
//             this.props.onChange(selectedDate);
//         } else {
//             this.setState({ show: false });
//         }
//     };

//     showMode = (currentMode: IOSNativeProps['mode'] | AndroidNativeProps['mode']) => {
//         this.setState({ show: true, mode: currentMode });
//     };

//     render() {
//         let CTEXT = this.props.TextClass || Text
//         let local = this.props.localFormat || 'vi-VN'
//         const getText = () => {
//             if (this.props.mode == 'date') {
//                 return this.state.date.toLocaleDateString(local, { day: '2-digit', month: '2-digit', year: '2-digit' });
//             } else if (this.props.mode == 'time') {
//                 return this.state.date.toLocaleTimeString(local, { hour: '2-digit', minute: '2-digit' });
//             } else {
//                 return this.state.date.toLocaleString();
//             }
//         };

//         return (
//             <ViewCol style={[styles.gap2vw]}>
//                 <TouchableOpacity
//                     style={this.props.style?.class}
//                     onPress={() => this.showMode(this.props.mode)}>
//                     <CTEXT style={this.props.style?.text}>{getText()}</CTEXT>
//                 </TouchableOpacity>
//                 {this.state.show && (
//                     <DateTimePicker
//                         testID="dateTimePicker"
//                         value={this.state.date}
//                         mode={this.props.mode}
//                         is24Hour={true}
//                         onChange={this.onChange}
//                         // Change if needed
//                         style={[styles.alignSelfEnd]}
//                     />
//                 )}
//             </ViewCol >
//         );
//     }
// }

// _______ NO REUSE CLASS SECTION _______

export function withColorScheme<T extends { colorScheme: ColorTheme }>(Component: React.ComponentType<T>) {
    return function EnhancedComponent(props: Omit<T, 'colorScheme'>) {
        const [CurrentCache, dispatch] = useContext<[CurrentCache, React.Dispatch<Action>]>(RootContext)
        const colorScheme = CurrentCache.colorScheme

        return (
            <Component {...props as T} colorScheme={colorScheme} />
        )
    }
}


export class CardCateRender extends React.Component<{ type: number[]; isSelected?: boolean; colorScheme: ColorTheme }> {

    render(): React.ReactNode {
        const { type, isSelected, colorScheme } = this.props;
        const textColorDefault = [NGHIASTYLE.NghiaIndigo800, NGHIASTYLE.NghiaWarning800, NGHIASTYLE.NghiaSuccess800, NGHIASTYLE.NghiaError800];
        const bgColorDefault = [NGHIASTYLE.NghiaIndigo50, NGHIASTYLE.NghiaWarning50, NGHIASTYLE.NghiaSuccess50, NGHIASTYLE.NghiaError50];

        const defaultLang = 'vi-VN';

        return (
            <ViewRow style={[styles.gap2vw]}>
                {type.map((item) => {
                    const categoryData = FactoryData.CARD_CATE_TYPE_CODE.find(cat => cat.code === item);
                    const categoryName = categoryData?.name.find(n => n.lang === defaultLang)?.value || '';

                    return (
                        <View key={item} style={[styles.paddingV1vw, styles.paddingH2vw, { borderRadius: vw(1.5), backgroundColor: (isSelected ? textColorDefault[item] : bgColorDefault[item]) as string }]}>
                            <CTEXT.NGT_Inter_BodyMd_Reg children={categoryName} color={isSelected ? 'white' : textColorDefault[item] as string} />
                        </View>
                    );
                })}
            </ViewRow>
        );
    }
}

export const CardCateRenderWithColorScheme = withColorScheme(CardCateRender)

export class CardTitleRender extends React.Component<{ data: FormatData.CardTitleFormat[], colorScheme: ColorTheme, onPressFnc?: (value: any) => void }> {
    render(): React.ReactNode {
        const { data, colorScheme, onPressFnc } = this.props

        return (
            <FlatList
                data={data}
                scrollEnabled={false}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={[styles.gap3vw]}
                renderItem={({ item, index }) => {
                    const kind = (() => {
                        switch (item.status) {
                            case 0:
                                return colorScheme.type == 'light' ? 'newLight' : 'newDark';
                            case 1:
                                return colorScheme.type == 'light' ? 'progressLight' : 'progressDark';
                            case 2:
                                return colorScheme.type == 'light' ? 'doneLight' : 'doneDark';
                            default:
                                return 'newLight';
                        }
                    })();
                    return (
                        <TouchableOpacity onPress={() => { onPressFnc && onPressFnc(item) }}>
                            <ViewCol style={[componentStyleCardContainner[kind].class as any, styles.gap2vw]}>
                                <ViewRowBetweenCenter>
                                    <View style={componentStyleCardContainner[kind].progressBorder ? { paddingHorizontal: vw(1.5), paddingVertical: vw(0.5), borderRadius: vw(1.5), backgroundColor: NGHIASTYLE.NghiaBrand600 as string } : null}>
                                        <CTEXT.NGT_Inter_BodyMd_SemiBold color={componentStyleCardContainner[kind].textBoldColor as string}>{item.length} <CTEXT.NGT_Inter_BodyMd_Reg color={componentStyleCardContainner[kind].textRegColor as string} children='thẻ | Tiến độ: ' />{item.process}/{item.length}</CTEXT.NGT_Inter_BodyMd_SemiBold>
                                    </View>
                                    <CardCateRenderWithColorScheme type={item.type} />
                                </ViewRowBetweenCenter>
                                <CTEXT.NGT_Inter_BodyLg_SemiBold color={componentStyleCardContainner[kind].titleColor} children={item.title} />
                            </ViewCol>
                        </TouchableOpacity>
                    )
                }}
            />
        )
    }
}

export const CardTitleRenderWithColorScheme = withColorScheme(CardTitleRender)

interface SelectorProps {
    isShowCategorySelection: boolean;
    selectedCategory: string;
    selectCateList: string[];
    colorScheme: ColorTheme;
    toggleCategorySelection: () => void;
    setSelectedCategory: (category: string) => void;
}

export class Selector extends React.Component<SelectorProps> {
    shouldComponentUpdate(nextProps: SelectorProps) {
        return nextProps.isShowCategorySelection !== this.props.isShowCategorySelection;
    }

    render() {
        const { isShowCategorySelection, selectedCategory, selectCateList, colorScheme, toggleCategorySelection, setSelectedCategory } = this.props;

        return (
            <View>
                <View style={styles.flexCol}>
                    <TouchableOpacity
                        onPress={toggleCategorySelection}
                        style={[styles.flexRowCenter, styles.gap1vw, styles.alignSelfStart, styles.paddingV1vw]}
                    >
                        <CTEXT.NGT_Inter_HeaderMd_SemiBold children={selectedCategory} color={colorScheme.brandSecond} />
                        {SVG.roundFillDownTriangle(vw(6), vw(6), colorScheme.gray1)}
                    </TouchableOpacity>
                    {isShowCategorySelection && selectCateList.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => setSelectedCategory(item)}
                                style={[styles.flexRowCenter, styles.gap1vw, styles.alignSelfStart, styles.paddingV1vw]}
                            >
                                <CTEXT.NGT_Inter_HeaderMd_Reg children={item} color={colorScheme.gray1} />
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        );
    }
}

export const SelectorWithColorScheme = withColorScheme(Selector);

interface ResultFiltedCardProps {
    afterFilterData: string[];
    isShowCategorySelection: boolean;
    colorScheme: ColorTheme;
    renderFnc?: (item: string[]) => React.ReactNode;
}

export class ResultFiltedCard extends React.Component<ResultFiltedCardProps> {
    shouldComponentUpdate(nextProps: ResultFiltedCardProps) {
        return (
            nextProps.afterFilterData !== this.props.afterFilterData
        );
    }

    render() {
        const { afterFilterData, colorScheme } = this.props;

        return (
            this.props.renderFnc ? this.props.renderFnc(afterFilterData) : (
                <FlatList
                    data={afterFilterData}
                    scrollEnabled={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => { }}
                            style={[styles.flexRowCenter, styles.gap1vw, styles.alignSelfStart, styles.paddingV1vw]}
                        >
                            <CTEXT.NGT_Inter_HeaderMd_Reg children={JSON.stringify(item)} color={colorScheme.gray1} />
                        </TouchableOpacity>
                    )}
                />
            )
        )
    }
}

export const ResultFiltedCardWithColorScheme = withColorScheme(ResultFiltedCard);

interface SelectListAndCardRenderProps {
    selectCateList: string[];
    filterFnc: (category: string, sourceData: any) => Promise<any>;
    sourceData: any[];
    selfRunFilterFnc?: boolean;
    renderFnc?: (item: any[]) => React.ReactNode;
}

interface SelectListAndCardRenderState {
    isShowCategorySelection: boolean;
    selectedCategory: string;
    afterFilterData: any[];
    isSelfRunFilterFncTrigged: boolean;
}

export class SelectListAndCardRender extends React.Component<SelectListAndCardRenderProps, SelectListAndCardRenderState> {
    constructor(props: SelectListAndCardRenderProps) {
        super(props);
        this.state = {
            isShowCategorySelection: false,
            selectedCategory: this.props.selectCateList[0] ? this.props.selectCateList[0] : '',
            afterFilterData: this.props.sourceData || [],
            isSelfRunFilterFncTrigged: false
        };
    }

    toggleCategorySelection = () => {
        this.setState((prevState) => ({
            isShowCategorySelection: !prevState.isShowCategorySelection
        }));
    };

    setSelectedCategory = async (item: string) => {
        try {
            this.setState({ selectedCategory: item });
            this.toggleCategorySelection();

            if (this.props.filterFnc) {
                const res = await this.props.filterFnc(item, this.props.sourceData);
                if (res) {
                    this.setState({ afterFilterData: res });
                }
            }
        } catch (error) {
            console.error('Error filtering data:', error);
        }
    };

    componentDidUpdate(prevProps: SelectListAndCardRenderProps) {
        if (prevProps.sourceData !== this.props.sourceData) {
            this.setState({ afterFilterData: this.props.sourceData || [] }, () => {
                this.runFilterFunction();
            });
        }
    }

    componentDidMount() {
        if (this.props.selfRunFilterFnc && !this.state.isSelfRunFilterFncTrigged) {
            this.runFilterFunction();
        }
    }

    async runFilterFunction() {
        try {
            const res = await this.props.filterFnc(this.state.selectedCategory, this.props.sourceData);
            if (res) {
                this.setState({ afterFilterData: res, isSelfRunFilterFncTrigged: true });
            }
        } catch (error) {
            console.error('Error during self-run filter function:', error);
        }
    }

    render() {
        return (
            <>
                <SelectorWithColorScheme
                    isShowCategorySelection={this.state.isShowCategorySelection}
                    selectedCategory={this.state.selectedCategory}
                    selectCateList={this.props.selectCateList}
                    toggleCategorySelection={this.toggleCategorySelection}
                    setSelectedCategory={this.setSelectedCategory}
                />
                <ResultFiltedCardWithColorScheme
                    afterFilterData={this.state.afterFilterData}
                    isShowCategorySelection={this.state.isShowCategorySelection}
                    renderFnc={this.props.renderFnc}
                />
            </>
        );
    }
}

export class ProgressRow extends React.Component<{ length: number, currentIndex: number, colorScheme: any, activeColor?: string, inactiveColor?: string, activeValue?: number[], answerArray?: string[] }> {
    shouldComponentUpdate(nextProps: Readonly<{ length: number; currentIndex: number; colorScheme: any; activeColor?: string; inactiveColor?: string; activeValue?: number[], answerArray?: string[] }>, nextState: Readonly<{}>, nextContext: any): boolean {
        return (
            nextProps.length !== this.props.length ||
            nextProps.currentIndex !== this.props.currentIndex ||
            nextProps.colorScheme !== this.props.colorScheme ||
            nextProps.activeColor !== this.props.activeColor ||
            nextProps.inactiveColor !== this.props.inactiveColor ||
            nextProps.activeValue !== this.props.activeValue ||
            nextProps.answerArray !== this.props.answerArray
        );
    }
    render() {
        const { length, currentIndex, colorScheme, activeColor, inactiveColor, activeValue, answerArray } = this.props;

        return (
            <ViewRowBetweenCenter style={[styles.gap1vw, styles.paddingV2vw, { flexWrap: answerArray ? 'wrap' : 'nowrap', }]}>
                {length ? (
                    Array.from({ length: length }, (_, index) => index + 1).map((item, index) => (
                        <View key={index} style={[styles.borderRadius100, { minHeight: vw(1), backgroundColor: (activeColor && inactiveColor && activeValue) ? (activeValue[index] ? activeColor : inactiveColor) : (currentIndex >= index ? colorScheme.brandMain : colorScheme.gray2), flexWrap: answerArray ? 'wrap' : 'nowrap', flex: !answerArray ? 1 : undefined, }]} >
                            {answerArray && answerArray[index] ? <View style={[styles.paddingH6vw]}><CTEXT.NGT_Inter_HeaderMd_Bld children={answerArray[index]} style={[styles.textCenter]} color='white' /></View> : null}
                        </View>
                    ))
                ) : null}
            </ViewRowBetweenCenter>
        );
    }
}

export const ProgressRowWithColorScheme = withColorScheme(ProgressRow);

export class NavigationButtonRow extends React.Component<{ currentIndex: number, setCurrentIndex: (arg0: number) => void, onSubmit?: () => void, setIsFront?: (arg0: boolean) => void, navigation: any, LENGTH: number, colorScheme: any, displayType?: string }> {
    shouldComponentUpdate(nextProps: Readonly<{ currentIndex: number; setCurrentIndex: (arg0: number) => void; onSubmit?: () => void; setIsFront?: (arg0: boolean) => void; navigation: any; LENGTH: number; colorScheme: any; displayType?: string; }>, nextState: Readonly<{}>, nextContext: any): boolean {
        return (
            nextProps.currentIndex !== this.props.currentIndex ||
            nextProps.setCurrentIndex !== this.props.setCurrentIndex ||
            nextProps.setIsFront !== this.props.setIsFront ||
            nextProps.navigation !== this.props.navigation ||
            nextProps.LENGTH !== this.props.LENGTH ||
            nextProps.colorScheme !== this.props.colorScheme ||
            nextProps.displayType !== this.props.displayType ||
            nextProps.onSubmit !== this.props.onSubmit
        );
    }
    render() {
        const { currentIndex, setCurrentIndex, setIsFront, navigation, LENGTH, colorScheme, displayType, onSubmit } = this.props;

        return (
            <ViewRowBetweenCenter style={[styles.gap4vw, styles.padding4vw]}>
                <RoundBtn title={`${displayType} trước`}
                    onPress={() => {
                        if (currentIndex > 0) {
                            setCurrentIndex(currentIndex - 1)
                            setIsFront && setIsFront(true)
                        }
                    }}
                    textClass={CTEXT.NGT_Inter_HeaderMd_SemiBold} textColor='white' bgColor={colorScheme.brandMain} icon={SVG.sharpLeftArrow(vw(6), vw(6), 'white')} customStyle={[styles.paddingH4vw, styles.paddingV2vw, styles.flex1, styles.justifyContentCenter]}
                />
                <RoundBtn title={currentIndex < LENGTH - 1 ? 'Tiếp theo' : 'Hoàn tất'}
                    iconOnRightSide
                    onPress={() => {
                        if (currentIndex < LENGTH - 1) {
                            setCurrentIndex(currentIndex + 1)
                            setIsFront && setIsFront(true)
                        } else {
                            onSubmit ? onSubmit() : navigation.goBack()
                        }
                    }} textClass={CTEXT.NGT_Inter_HeaderMd_SemiBold} textColor='white' bgColor={colorScheme.brandMain} icon={SVG.sharpRightArrow(vw(6), vw(6), 'white')} customStyle={[styles.paddingH4vw, styles.paddingV2vw, styles.flex1, styles.justifyContentCenter]}
                />
            </ViewRowBetweenCenter>
        );
    }
}

export const NavigationButtonRowWithColorScheme = withColorScheme(NavigationButtonRow);

export class ChapterCartRender extends React.Component<{ data: Array<FormatData.ChapterTitleFormat | FormatData.QuizFormat | FormatData.FillInTheBlankFormat>, colorScheme: ColorTheme, navigation: any, }> {

    render(): React.ReactNode {
        const { data, colorScheme, navigation } = this.props;

        function renderQuizStateFnc(status: [number, number], itemID: number, kind: 'quiz' | 'fillInTheBlank'): React.ReactNode {
            const outputStatus: number = (status[0] || 0) / (status[1] || 1)
            return (
                <TouchableOpacity
                    onPress={() => { navigation.navigate(kind == 'quiz' ? 'Quiz' : 'FillInTheBlank', { item: { id: itemID, title: '' } }) }}
                    style={[styles.padding2vw, styles.bgcolorWhite, styles.flex1, styles.borderRadius2vw, styles.marginTop2vw]}
                >
                    <CTEXT.NGT_Inter_BodyMd_SemiBold color='black'>{kind == 'quiz' ? 'Trắc nghiệm' : 'Điền vào ô trống'}: <CTEXT.NGT_Inter_BodyMd_Bld color={NGHIASTYLE.NghiaBrand800 as string} children={outputStatus === 1 ? 'Xong' : `${status[0] || 0}/${status[1] || 'null'}`} /></CTEXT.NGT_Inter_BodyMd_SemiBold>
                </TouchableOpacity>
            )
        }

        async function renderFNC({ item, index }: { item: FormatData.ChapterTitleFormat | FormatData.QuizFormat | FormatData.FillInTheBlankFormat, index: number }): Promise<React.ReactNode> {

            type KindType = 'chapter' | 'quiz' | 'blank';
            type StyleKind = keyof typeof componentStyleCardContainner;

            let kind: KindType = 'chapter';
            let styleKind: StyleKind = 'newLight';
            const isDark = colorScheme.type === 'dark';

            const getStatus = async (kind: string, id: string): Promise<FormatData.QuestTitleFormat['status']> => {
                const res = await storageGetItem('questTitle', `${kind + id}`, true) as FormatData.QuestTitleFormat;
                return res?.status ?? 0;
            };

            const getStyleKind = (status: number): StyleKind => {
                if (status === 0) return isDark ? 'newDark' : 'newLight';
                if (status === 1) return isDark ? 'progressDark' : 'progressLight';
                return isDark ? 'doneDark' : 'doneLight';
            };

            const determineKindAndStyle = async (item: any) => {
                if ('data' in item) {
                    kind = 'quiz';
                    const status = await getStatus('quiz', item.label.id.toString());
                    styleKind = getStyleKind(status);
                } else if (!('chapterTitle' in item)) {
                    kind = 'blank';
                    const status = await getStatus('fillInTheBlank', item.label.id.toString());
                    styleKind = getStyleKind(status);
                } else {
                    kind = 'chapter';
                    styleKind = getStyleKind(item.status);
                }
            };

            await determineKindAndStyle(item);
            return (
                <TouchableOpacity onPress={() => {
                    if (kind === 'chapter') {
                    } else {
                        navigation.navigate(kind === 'blank' ? 'FillInTheBlank' : 'Quiz', { item: { id: (item as FormatData.QuizFormat).label.id, title: (item as FormatData.QuizFormat).label.chapterTitle } });
                    }
                }}>
                    <ViewCol style={[componentStyleCardContainner[styleKind].class as any, styles.gap2vw]}>
                        {kind !== 'chapter' && (
                            <View style={[styles.padding1vw, styles.borderRadius2vw, styles.border1, styles.alignSelfStart, { borderColor: NGHIASTYLE.NghiaSuccess900 as string, backgroundColor: NGHIASTYLE.NghiaWarning100 as string }]}>
                                <CTEXT.NGT_Inter_BodyMd_Med children={kind == 'quiz' ? 'Trắc nghiệm' : 'Điền vào chỗ trống'} color='black' />
                            </View>
                        )}
                        <CTEXT.NGT_Inter_BodyLg_SemiBold color={componentStyleCardContainner[styleKind].textBoldColor as string || 'black'}>
                            {kind === 'chapter' ? (item as FormatData.ChapterTitleFormat).chapterTitle : (item as FormatData.QuizFormat).label.chapterTitle}
                        </CTEXT.NGT_Inter_BodyLg_SemiBold>
                        <CardCateRenderWithColorScheme type={(kind === 'chapter' ? (item as FormatData.ChapterTitleFormat).type : (item as FormatData.QuizFormat).label.type) || [0]} />
                        {kind === 'chapter' ?
                            <ViewRowBetweenCenter style={[styles.gap2vw]}>
                                {(item as FormatData.ChapterTitleFormat).quizID !== undefined &&
                                    (item as FormatData.ChapterTitleFormat).quizStatus &&
                                    renderQuizStateFnc(
                                        (item as FormatData.ChapterTitleFormat).quizStatus as any,
                                        (item as FormatData.ChapterTitleFormat).quizID as any,
                                        'quiz'
                                    )}
                                {(item as FormatData.ChapterTitleFormat).fillInTheBlankID !== undefined &&
                                    (item as FormatData.ChapterTitleFormat).fillInTheBlankStatus &&
                                    renderQuizStateFnc(
                                        (item as FormatData.ChapterTitleFormat).fillInTheBlankStatus as any,
                                        (item as FormatData.ChapterTitleFormat).fillInTheBlankID as any,
                                        'fillInTheBlank'
                                    )}
                            </ViewRowBetweenCenter>
                            : null
                        }
                    </ViewCol>
                </TouchableOpacity>
            );
        }


        return (
            <FlatList
                data={data}
                scrollEnabled={false}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={[styles.gap3vw]}
                renderItem={({ item, index }) => renderFNC({ item, index })}
            />
        );
    }
}

export const ChapterCartRenderWithColorScheme = withColorScheme(ChapterCartRender)