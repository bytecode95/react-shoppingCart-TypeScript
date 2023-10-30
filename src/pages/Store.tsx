import { Col, Row } from "react-bootstrap"
import storeItems from "../data/items.json"
import  StoreItems  from "../components/StoreItems"


export default function Store(){
    return(
        <>
            <h1 className="text-center mb-4">Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {
                    storeItems.map((item)=>(
                        <Col key={item.id}>
                           <StoreItems {...item} />                        
                        </Col>
                    ))
                }
               
            </Row>
        </>
    )
}