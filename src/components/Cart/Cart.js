import React from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faClipboardCheck} from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = (total + product.price);

    }
    const vat = (total/10).toFixed(2);
    const grandTotal = (total + Number(vat)).toFixed(2);

    return (
        <div>
                <Card className="cart">
                    <Card.Header >
                        <Nav variant="pills" defaultActiveKey="#first">
                            <Nav.Item>
                                <h3>Order Summary</h3>
                                <Button className="align" variant="outline-info">  <FontAwesomeIcon icon={faShoppingCart} /> {cart.length}</Button>
                            </Nav.Item> 
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                    <Card.Text>
                           <h6> VAT: {vat}</h6>
                        </Card.Text>
                        <Card.Title>Total cost: ${grandTotal} </Card.Title>
                        
                        <Button 
                            className="button" variant="outline-info"><FontAwesomeIcon icon={faClipboardCheck} /> Review Order </Button>{' '}
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Cart;