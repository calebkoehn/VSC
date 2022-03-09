import styled from 'styled-components';

const TabButton = styled.button`
    padding: 15px 50px;
    border-style: none;
    border-radius: none;
    border: 3px solid rgb(230,230,230);
    background-color: ${props => props.selected ? "black" : "white"};
    font-size: 1.25rem;
    color: ${props => props.selected ? "white" : "black"};
    transition: all 0.75s ease;
    margin: 10px ${props => (props.selected ? "20" : "5")}px;
    `;

export default TabButton;