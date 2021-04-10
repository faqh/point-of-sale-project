import React from 'react'
import styled from 'styled-components'
import IcPerson from '../img/icon-person.png'

const Box = styled.div`
    display: flex;
    align-items: center;
`
const ImgBox = styled.div`
    width: 50px;
    height: 50px;
    position: relative;
    border-radius: 0.5rem;
    background: ${props => props.theme.primary}
`
const Img = styled.img`
    width: 46px;
    position: absolute;
    left: 2%;
    right: 2%;
    bottom: 0;
`
const ItemDesc = styled.div`
    margin-left: 1rem;
`
export default function Account() {
    return (
        <Box>
            <ImgBox>
                <Img src={IcPerson} alt="icon"/>
            </ImgBox>
            <ItemDesc>
                <h3 style={{color:'#444444'}}>Griffin Peyton</h3>
                <h5 style={{color: '#BEBEBE'}}>Cashier</h5>
            </ItemDesc>
        </Box>
    )
}
