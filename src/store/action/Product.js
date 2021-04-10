export const addCart = id => {
    return {
        type: "ADD_TO_CART",
        payload: id
    }
}
// export const listMenu = value => {
//     return{
//         type: "MENU",
//         payload: value
//     }
// }
export const inc = id => {
    return {
        type: "INCREMENT",
        payload: id
    }
}
export const dec = id => {
    return {
        type: "DECREMENT",
        payload: id
    }
}
export const RemoveCart = id => {
    return {
        type: "REMOVE",
        payload: id
    }
}
export const resetCart = () => {
    return {
        type: "RESET",
    }
}
