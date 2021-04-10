import React from 'react'
import styled from 'styled-components'

const MyBtn = styled.button`
    height: 2.5rem;
    font-weight: bold;
    border: none;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    color: #fff;
    text-align: center;
    cursor: pointer;
    &:focus{
        outline: none
    }
`
const PrimaryBtn = styled(MyBtn)`
    background: ${props => props.theme.primary};
    width: 83%;
    font-size: 1rem;
`
const WarningBtn = styled(MyBtn)`
    background: #B5B5B5;
    width: 15%;
    font-size: 1.1rem;
`

export default function Button({ primary, action, text }) {
    if (primary) {
        return <PrimaryBtn onClick={action}>{text}</PrimaryBtn>
    } else {
        return <WarningBtn onClick={action}>X</WarningBtn>
    }
}
