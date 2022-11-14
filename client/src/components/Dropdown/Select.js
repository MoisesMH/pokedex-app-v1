import styled from "@emotion/styled";
import { Flex } from "../Flex";

export const Select = styled(Flex)(props => ({
    background: props.background || "blue",
    position: props.position || "absolute",
    top: props.top || "5.2rem",
    right: props.right,
    bottom: props.bottom,
    left: props.left || "0.5rem",
    zIndex: props.zIndex || 10
}))