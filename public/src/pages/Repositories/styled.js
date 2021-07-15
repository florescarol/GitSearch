import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h1`
    text-align: center;
    font-size: 36px;
    font-family: monospace;
    border-bottom: solid 2px;
`

export const List = styled.ul `
    font-size: 24px;
    list-style: none;
    padding: 0;
`

export const ListItem = styled.li `
    padding: 10px;
    margin: 10px;
`

export const LinkHome = styled(Link)`
    font-size: 20px;
    font-family: monospace;
    text-decoration: none;
    padding: 5px;
    background-color: #fbf6f6;
    border: solid 2px black;
    color: black;

    &: active, &: focus {
        outline: none;
        box-shadow: none;
`