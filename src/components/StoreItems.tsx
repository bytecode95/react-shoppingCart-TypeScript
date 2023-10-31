import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utils/formatCurrency"

type StoreItemProps = {
    id: number
    name: string
    price: number
    image: string
}

export default function StoreItems({id, name, price, image}: StoreItemProps){
    const quantity:number = 1;
    
    return (
        <Card>
            <Card.Img variant="top" src={image} height="400px" width="300px" style={{padding:'20px'}}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="fs-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {
                        quantity === 0 ? <Button className="w-100">Add to Cart</Button> : 
                        <div className="d-flex align-items-center flex-column" style={{gap: "0.5rem"}}>
                            <div className="d-flex align-items-center justify-content-center" style={{gap: "0.5rem"}} >
                                <Button>-</Button>
                                <div>
                                    <span className="fs-3">{quantity}</span> in cart
                                </div>
                                <Button>+</Button>
                            </div>
                            <Button variant="danger" size="sm">remove</Button>
                        </div>
                    }
                </div>
            </Card.Body>
        
        </Card>
    )
}