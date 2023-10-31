import {ReactNode, createContext, useContext, useState} from 'react'

type ShoppingCartProviderProps = {
    children : ReactNode
}

type ShoppingCartContext = {
    getItemQuantity: (id: number)=> number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

type cartItems = {
    id: number
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)


export default function useShoppingCart(){
    return(
        useContext(ShoppingCartContext)
    )
}




export function ShoppingCartProvider({children}:  ShoppingCartProviderProps){

    const [cartItems, setCartItems] = useState<cartItems[]>([])

    function getItemQuantity(id: number){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(){
        
    }

    function decreaseCartQuantity(){

    }

    function removeFromCart(){

    }

    return(
        <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}