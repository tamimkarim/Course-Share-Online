import React from 'react';
import './Product.css';
import { CardDeck, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
   
    const { name,img,instructor, price, star, enrolled, last_update,starCount } = (props.product);
    return (
        <div className="product"> <h4></h4>

            <CardDeck  className="align">
               <Card className="col-md-7 mb-3 p-2 background" >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className ="name" >{name}</Card.Title>
                        <Card.Text>
                            <h6>Instructor: <i>{instructor}</i> </h6>
                            <p className="price"><small>Price: ${price}</small> </p>
                            <p><small>Enrolled: {enrolled} </small></p>
                            <p>{star} <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfAlt} />({starCount})</p>
                            <Button 
                            onClick={ () => props.handleAddProduct(props.product)}
                            className="button" variant="outline-info"><FontAwesomeIcon icon={faGraduationCap} /> Enroll Now</Button>{' '}
                            
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated {last_update} mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    );
};

export default Product;