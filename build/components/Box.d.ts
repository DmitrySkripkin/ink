import React from 'react';
import { type Except } from 'type-fest';
import { type Styles } from '../styles.js';
import { type DOMElement } from '../dom.js';
export type Props = Except<Styles, 'textWrap'>;
/**
 * `<Box>` is an essential Ink component to build your layout. It's like `<div style="display: flex">` in the browser.
 */
declare const Box: React.ForwardRefExoticComponent<{
    readonly position?: "absolute" | "relative" | undefined;
    readonly columnGap?: number | undefined;
    readonly rowGap?: number | undefined;
    readonly gap?: number | undefined;
    readonly margin?: number | undefined;
    readonly marginX?: number | undefined;
    readonly marginY?: number | undefined;
    readonly marginTop?: number | undefined;
    readonly marginBottom?: number | undefined;
    readonly marginLeft?: number | undefined;
    readonly marginRight?: number | undefined;
    readonly padding?: number | undefined;
    readonly paddingX?: number | undefined;
    readonly paddingY?: number | undefined;
    readonly paddingTop?: number | undefined;
    readonly paddingBottom?: number | undefined;
    readonly paddingLeft?: number | undefined;
    readonly paddingRight?: number | undefined;
    readonly flexGrow?: number | undefined;
    readonly flexShrink?: number | undefined;
    readonly flexDirection?: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
    readonly flexBasis?: string | number | undefined;
    readonly flexWrap?: "wrap" | "nowrap" | "wrap-reverse" | undefined;
    readonly alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | undefined;
    readonly alignSelf?: "flex-start" | "center" | "flex-end" | "auto" | undefined;
    readonly justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | undefined;
    readonly width?: string | number | undefined;
    readonly height?: string | number | undefined;
    readonly minWidth?: string | number | undefined;
    readonly minHeight?: string | number | undefined;
    readonly display?: "flex" | "none" | undefined;
    readonly borderStyle?: import("cli-boxes").BoxStyle | keyof import("cli-boxes").Boxes | undefined;
    readonly borderTopLabel?: string | undefined;
    readonly borderBottomLabel?: string | undefined;
    readonly borderTop?: boolean | undefined;
    readonly borderBottom?: boolean | undefined;
    readonly borderLeft?: boolean | undefined;
    readonly borderRight?: boolean | undefined;
    readonly borderColor?: import("type-fest").LiteralUnion<keyof import("ansi-styles").ForegroundColor, string> | undefined;
    readonly borderTopColor?: import("type-fest").LiteralUnion<keyof import("ansi-styles").ForegroundColor, string> | undefined;
    readonly borderBottomColor?: import("type-fest").LiteralUnion<keyof import("ansi-styles").ForegroundColor, string> | undefined;
    readonly borderLeftColor?: import("type-fest").LiteralUnion<keyof import("ansi-styles").ForegroundColor, string> | undefined;
    readonly borderRightColor?: import("type-fest").LiteralUnion<keyof import("ansi-styles").ForegroundColor, string> | undefined;
    readonly borderDimColor?: boolean | undefined;
    readonly borderTopDimColor?: boolean | undefined;
    readonly borderBottomDimColor?: boolean | undefined;
    readonly borderLeftDimColor?: boolean | undefined;
    readonly borderRightDimColor?: boolean | undefined;
    readonly overflow?: "visible" | "hidden" | undefined;
    readonly overflowX?: "visible" | "hidden" | undefined;
    readonly overflowY?: "visible" | "hidden" | undefined;
} & {
    children?: React.ReactNode;
} & React.RefAttributes<DOMElement>>;
export default Box;
