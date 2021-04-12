import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux";
import Button from './Button'
import { resetCart } from '../store/action/Product';

const Box = styled.div`
    padding: 1rem 1rem;
`
const Total = styled.div`
    display: flex;
    font-weight: bold;
    justify-content: space-between;
    margin-bottom: 0.4rem;
`
const Pay = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.4rem;
    input[type=number]{
        border: none;
        border-bottom: 1px solid #000;
        font-weight; bold;
        text-align: right;
        &:focus{
            outline: none;
        }
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button{
            -webkit-appearance: none;
        }
    }
`
const Change = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.4rem;
    font-weight: bold;

`
const BtnBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`

export default function CalculateBox() {
    const dispatch = useDispatch()
    const Order = useSelector(state => state.product.carts)
    const total = Order.reduce((totalPrice, current) => totalPrice + current.price, 0)
    const [pay, setPay] = useState("")
    const [change, setChange] = useState("")
    const handleChange = e => {
        setPay(e.target.value)
    }
    const calculateChange = () => {
        if (pay >= total) {
            setChange(pay - total)
        }
    }
    const reset = () => {
        dispatch(resetCart())
        setChange("")
        setPay("")
    }
    return (
        <Box>
            <Total>
                <h4>Total</h4>
                <p>Rp. {total},-</p>
            </Total>
            <Pay>
                <p>Jumlah Bayar</p>
                <input type="number" value={pay} onChange={handleChange}/>
            </Pay>
            <Change>
                <p>Kembalian</p>
                <p>{change}</p>
            </Change>
            <BtnBox>
                <Button primary action={calculateChange} text="BAYAR"/>
                <Button action={reset}/>
            </BtnBox>
        </Box>
    )
}
