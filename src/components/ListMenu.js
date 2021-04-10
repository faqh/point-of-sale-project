import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { listMenu } from "../store/action/Product";


const Menu = styled.li`
    height: 2rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    position: relative;
    color: #B2B2B2;
    cursor: pointer;
    font-weight: medium;
    font-size: 1.2rem;
    &:not(:last-child){
        margin-bottom: 0.5rem;
    }
    &:nth-child(1){
        color: ${props => props.theme.primary};
    font-weight: bold;
        
    }
`
export default function ListMenu() {
    const [List] = useState([
        {
            name: "All"
        },
        {
            name: "Breakfast",
            value: "breakfast"
        },
        {
            name: "Desert",
            value: "desert"
        },
        {
            name: "Snacks",
            value: "snack"
        },
    ])
    const dispatch = useDispatch();
    const test = value => {
        // dispatch(listMenu(value))
        console.log(value)
    }
    return (
        <ul>
            {List.map((item, index)=>
                <Menu key={index} onClick={() => test(item.value)}>
                    {item.name}
                </Menu>
            )}
            {/* <Menu>All</Menu>
            <Menu>Breakfast</Menu>
            <Menu>Dessert</Menu>
            <Menu>Snacks</Menu> */}
        </ul>
    )
}
