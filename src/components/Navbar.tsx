import {Button, Container, Nav, Navbar as NavbarBS} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import useShoppingCart from '../context/shoppingCartContext'


export default function Navbar(){
    const {openCart, cartQuantity} = useShoppingCart();


    return(
        <NavbarBS sticky='top' className='bg-white shadow-sm mb-3 fs-3 fw-bold ' >
            <Container className='me-auto'>
                <Nav>
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                <Button onClick={openCart} style={{width:'3rem', height:'3rem', paddingInline:'10px', position:'relative'}} variant='outline-primary' className='rounded-circle'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-check-fill" viewBox="0 0 16 16">
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                    </svg>
                    <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{color:"white", position:'absolute', width:'25px', right:0, bottom:0, transform: "translate(25%, 25%)"}}>{cartQuantity}</div>
                </Button>
            </Container>
        </NavbarBS>
    )
}