import React from 'react'
import styled from 'styled-components'
import Counter from './Counter'
import { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";
// import { useDispatch } from "react-redux";
import { inc, dec, RemoveCart } from "../store/action/Product";


const Cart = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 3rem;
    padding:1rem;
    padding-bottom: 0.8rem;
    margin: 0.5rem auto;
`
const CounterContainer = styled.div`
    display: flex;
    text-align: center;
`
const CounterTotal = styled.div`
    margin: 0 0.3rem;
`
const ItemContainer = styled.div`
    width: 50%;
    font-weight: medium;
`
const ItemName = styled.div`
    color: #444444;
    font-size: 1.1rem;
`
const Price = styled.div`
    color: #BEBEBE;
    font-size: 0.85rem;
`

export default function CardItem({ item }) {
    const [Count, setCount] = useState(1)
    const {dispatch} = useContext(DataContext)
    // const dispatch = useDispatch();
    const increment = id => {
        setCount(Count + 1)
        dispatch(inc(id))
    }
    const decrement = id => {
        setCount(Count - 1)
        if (Count > 1) {
            dispatch(dec(id))            
        } else if(Count === 1){
            dispatch(RemoveCart(id))
        }
    }
    return (
        <Cart>
            <ItemContainer>
                <ItemName>{item.name}</ItemName>
                <Price>Rp. {item.price},-</Price>
            </ItemContainer>
            <CounterContainer>
                <Counter inc={() => increment(item.id)}/>
                <CounterTotal>{Count}</CounterTotal>
                <Counter dec={() => decrement(item.id)}/>
            </CounterContainer>
        </Cart>
    )
}
