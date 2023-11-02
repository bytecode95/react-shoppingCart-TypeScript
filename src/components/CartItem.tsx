import { Button, Stack } from "react-bootstrap"
import useShoppingCart from "../context/shoppingCartContext"
import StoreItems from "../data/items.json"
import { formatCurrency } from "../utils/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}


export function CartItem({id, quantity}: CartItemProps){
   const {removeFromCart} = useShoppingCart()
   const item = StoreItems.find(i=> i.id===id)
   if(item==null)  return null
   return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img src={item.image} style={{width:'100px', height:'100px', padding:'5px'}}/>
        <div className="me-auto">
            {item.name}{" "}
            {quantity > 1 && (
                <span className="text-muted" style={{fontSize:'.65rem'}}>x{quantity}</span>
            )}
        </div>
        <div className="text-muted" style={{fontSize:'0.65rem'}}>
                {formatCurrency(item.price)}
        </div>
        <Button onClick={()=>{removeFromCart(item.id)}} variant="outline-danger" size="sm" >&times;</Button>
    </Stack>
   )
}