import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

const TabContent = styled.p`
    padding: 35px;
    margin: 50px;
    font-size: 2rem;
    transition: all 2s ${fadeInAnimation};
    border: 3px solid rgb(230,230,230);
    `;

export default TabContent;