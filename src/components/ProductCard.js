import React from 'react'
import styled from 'styled-components'
// import { useDispatch } from "react-redux";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { addCart } from "../store/action/Product";

const Card = styled.div`
    width: 30%;
    height: 20rem;
    background: ${props => props.theme.light};
    cursor: pointer;
    margin-top: 1rem;
    border-radius: 0.25rem;
`
const CardImg = styled.img`
    width: 100%;
    height: 75%;
    border-radius: 0.5rem;
`
const CardBody = styled.div`
    text-align: center;
    margin-top: 0.5rem;
    padding-left: 0.5rem;
`
const CardTitle = styled.p`
    font-weight: medium;
    font-size: 1.2rem;
`
const CardDesc = styled.p`
    color: #BEBEBE;
    font-size: 0.8rem;
    margin-top: 0.2rem;
    font-weight: bold;

`
export default function ProductCard({ item }) {
    // const dispatch = useDispatch();
    const {dispatch} = useContext(DataContext)
    const addToCart = id => {
        dispatch(addCart(id))
    }
    return (
        <Card onClick={() => addToCart(item.id)}>
            <CardImg src={item.img && item.img.default} alt={item.name}/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardDesc>Rp. {item.price},-</CardDesc>
            </CardBody>
        </Card>
    )
}

