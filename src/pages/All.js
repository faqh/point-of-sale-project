import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


export default function All() {
    const products = useSelector(state => state.product.products)
    return (
        <div>
            
        </div>
    )
}
