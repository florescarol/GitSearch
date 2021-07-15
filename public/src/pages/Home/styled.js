import styled from "styled-components";

export const Container = styled.div `
    text-align: center;
    margin: auto;
`

export const Title = styled.h1`
    font-size: 36px;
    border-bottom: solid 2px;
    display: inline-block;
    margin: 0;
`

export const SubTitle = styled.h2`
    font-size: 24px;
`

export const Input = styled.input `
    font-size: 20px;
    font-family: monospace;
    padding: 5px;
    background-color: #fbf6f6;
    border: solid 2px;
    margin-right: 1px;

    &: active, &: focus {
        outline: none;
        box-shadow: none;
    }
`

export const Button = styled.button `
    font-size: 20px;
    font-family: monospace;
    padding: 5px;
    background-color: #fbf6f6;
    border: solid 2px;
    margin-left: 1px;

    &: active, &: focus {
        outline: none;
        box-shadow: none;
    }
`

export const ErrorMessage = styled.p`
    display: inline-block;
    font-size: 20px;
    border-bottom: solid 2px;
    text-align: center;
`