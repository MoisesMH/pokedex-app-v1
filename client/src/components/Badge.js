import styled from "@emotion/styled";

export const Badge = styled('span')(props => ({
    display: (
        (props.inline && 'inline') ||
        (props.block && 'block') ||
        (props.inlineBlock && 'inline-block') ||
        (props.flex && 'flex') ||
        (props.inlineFlex || 'inline-flex') ||
        (props.contains && 'contains') ||
        (props.hide && 'none') ||
        (props.display)
    ),
    textAlign: props.textAlign || "center",
    color: props.fontColor,
    // Other properties
    // Background
    background: props.background,
    // Border properties
    border: props.border,
    borderRadius: props.borderRadius,
    outline: props.outline || 'none',
    // Font properties
    fontFamily: props.fontFamily,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    fontStretch: props.fontStretch,
    lineHeight: props.lineHeight,
    fontStyle: props.fontStyle,
    letterSpacing: props.letterSpacing,
    // Other properties
    // Flex
    flex: `${props.flexGrow || 0} ${props.flexShrink || 1} ${props.flexBasis || "auto"}`,
    flexWrap: props.wrap && 'wrap',
    // Width, height, maxWidth and maxHeight
    width: props.width,
    height: props.height,
    maxWidth: props.maxWidth,
    minWidth: props.minWidth,
    // Margin
    margin: props.margin,
    marginTop: props.marginTop,
    marginRight: props.marginRight,
    marginBottom: props.marginBottom,
    marginLeft: props.marginLeft,
    marginBlock: props.marginBlock,
    marginBlockStart: props.marginBlockStart,
    marginBlockEnd: props.marginBlockEnd,
    marginInline: props.marginInline,
    marginInlineStart: props.marginInlineStart,
    marginInlineEnd: props.marginInlineEnd,
    // Padding
    padding: props.padding,
    paddingTop: props.paddingTop,
    paddingRight: props.paddingRight,
    paddingBottom: props.paddingBottom,
    paddingLeft: props.paddingLeft,
    paddingBlock: props.paddingBlock,
    paddingBlockStart: props.paddingBlockStart,
    paddingBlockEnd: props.paddingBlockEnd,
    paddingInline: props.paddingInline,
    paddingInlineStart: props.paddingInlineStart,
    paddingInlineEnd: props.paddingInlineEnd
}))