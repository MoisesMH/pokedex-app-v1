import styled from "@emotion/styled";
import { Flex } from "../Flex";

export const Option = styled(Flex)(props => ({
    margin: "0.1rem",
    padding: "0.3rem",
    color: "white",
    transition: '0.2s all ease-out',
    [`&:hover`]: {
        background: 'skyblue'
    }
}))