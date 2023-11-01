import Offcanvas from 'react-bootstrap/Offcanvas';
import useShoppingCart from "../context/shoppingCartContext";
import { Stack } from 'react-bootstrap';
import { CartItem } from './CartItem';

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps){

    const {closeCart, cartItems} = useShoppingCart()
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    Cart
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {
                       cartItems.map(item=> (
                       <CartItem key={item.id}{...item}/>))
                    }
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
    
}