import React, { useState, useContext } from 'react'
import { DataContext } from "../context/DataContext";
import styled from 'styled-components'
import { getByCategory } from '../store/action/Product'
import { MdFreeBreakfast } from "react-icons/md";
import { GiRoundStar, GiCupcake, GiPopcorn } from "react-icons/gi";

const Menu = styled.li.attrs(() =>({tabIndex:0}))`
    height: 2.5rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    position: relative;
    color: #B2B2B2;
    cursor: pointer;
    font-weight: light;
    font-size: 1.2rem;
    outline: none;
    &:not(:last-child){
        margin-bottom: 0.5rem;
    }
    &.active{
        color: ${props => props.theme.primary};
        font-weight: bold;
        outline: none;
    }
`
export default function ListMenu() {
    const [List] = useState([
        {
            name: "All Categories",
            value: "all",
            img: <GiRoundStar />
        },
        {
            name: "Breakfast",
            value: "breakfast",
            img: <MdFreeBreakfast />
        },
        {
            name: "Desert",
            value: "dessert",
            img: <GiCupcake />
        },
        {
            name: "Snacks",
            value: "snack",
            img: <GiPopcorn />
        },
    ])
    // const dispatch = useDispatch();
    const {dispatch} = useContext(DataContext)
    const [toggleState, setToggleState] = useState(0);
    const handleClickMenu = (value, index) => {
        dispatch(getByCategory(value))
        setToggleState(index)
    }
    return (
        <ul>
            {List.map((item, index)=>
                <Menu key={index} className={toggleState === index ? `active` : ``} onClick={() => handleClickMenu(item.value, index)}>
                    {item.img}
                    <p style={{marginLeft: "10px"}}>{item.name}</p>
                </Menu>
                
            )}
        </ul>
    )
}
