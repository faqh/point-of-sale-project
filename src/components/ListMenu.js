import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { getByCategory } from "../store/action/Product";


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
          name: "All",
          value: "All"
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
    const handleClickMenu = value => {
    console.log(value)
      dispatch(getByCategory(value))  
    }
    return (
        <ul>
            {List.map((item, index)=>
                <Menu key={index} onClick={() => handleClickMenu(item.value)}>
                    {item.name}
                </Menu>
            )}
        </ul>
    )
}
