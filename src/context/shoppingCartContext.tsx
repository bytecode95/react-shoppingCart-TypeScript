import {ReactNode, createContext, useContext} from 'react'

type ShoppingCartProviderProps = {
    children : ReactNode
}

const shoppingCartContext = createContext({});


export default function useShoppingCart(){
    return(
        useContext(shoppingCartContext)
    )
}




export function ShoppingCartProvider({children}:  ShoppingCartProviderProps){
    return(
        <shoppingCartContext.Provider value={{}}>
            {children}
        </shoppingCartContext.Provider>
    )
}