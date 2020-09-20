import React from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;

    }

    return (
        <div>
                <Card>
                    <Card.Header>
                        <Nav variant="pills" defaultActiveKey="#first">
                            <Nav.Item>
                                <h3>Order Summary</h3>
                                <Button className="align" variant="outline-info">  <FontAwesomeIcon icon={faShoppingCart} /> {cart.length}</Button>
                            </Nav.Item> 
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Total cost: ${total} </Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Cart;