import React, { useReducer, createContext } from "react";
import { products } from '../utils/data'
import { productReducer } from "../store/reducer/productReducer";


export const DataContext = createContext()

const initialState = {
    products: products,
    carts: []
}

export const DataProvider = (props) => {
    const [products, dispatch] = useReducer(productReducer, initialState)
    return(
        <DataContext.Provider value={{products, dispatch}}>
            {props.children}
        </DataContext.Provider>
    )
}