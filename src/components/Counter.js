import React from 'react'
import styled from 'styled-components'

const CounterStyle = styled.div`
    width: 1.7rem;
    height: 1.7rem;
    background: ${props => props.theme.primary};
    color: ${props => props.theme.light};
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    
`
export default function Counter({ inc, dec }) {
    if (inc) {
        return <CounterStyle onClick={inc}>+</CounterStyle>
    } else {
        return <CounterStyle onClick={dec}>-</CounterStyle>
    }    
}
