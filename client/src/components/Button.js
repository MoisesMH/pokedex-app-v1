import styled from "@emotion/styled";

export const Button = styled.button(props => ({
    animation: props.animation,
    border: props.border || 'none',
    background: props.background || 'none',
    backgroundColor: props.backgroundColor || 'purple',
    borderRadius: props.borderRadius || '0.8rem',
    boxShadow: props.boxShadow || '3px 2px 3px 3px rgba(92, 61, 61, 0.2)',
    color: props.color || 'white',
    cursor: props.cursor || 'pointer',
    fontSize: props.fontSize || '1rem',
    fontWeight: props.fontWeight,
    fontFamily: props.fontFamily,
    margin: props.margin || '0',
    outline: props.outline || 'none',
    padding: props.padding || '1rem',
    transition: props.transition || 'all 0.25s ease-in-out',
    transform: props.transform,
    // WhenHover
    '&:hover': ({
        animation: props.animationWhenHover,
        border: props.borderWhenHover,
        background: props.backgroundWhenHover,
        backgroundColor: props.backgroundColorWhenHover || 'skyblue',
        borderRadius: props.borderRadiusWhenHover,
        boxShadow: props.boxShadowWhenHover || '3px 5px 11px 3px rgb(35,49,100,0.8)',
        color: props.colorWhenHover || 'peru',
        cursor: props.cursorWhenHover,
        fontSize: props.fontSizeWhenHover,
        fontWeight: props.fontWeightWhenHover,
        fontFamily: props.fontFamilyWhenHover,
        margin: props.marginWhenHover,
        outline: props.outlineWhenHover,
        padding: props.paddingWhenHover,
        transition: props.transitionWhenHover,
        transform: props.transformWhenHover || 'translateY(-2px)',
    })

}))