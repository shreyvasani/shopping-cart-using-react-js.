import React from "react"
import {Container,ListGroup,ListGroupItem,Button,CardHeader,CardBody,Card,CardFooter,Col,Row} from "reactstrap"
const Cart = ({cartitem,removeItem,Buynow}) => {
let amount = 0;
cartitem.forEach(item => {
    amount = parseFloat(amount) + parseFloat(item.productPrice)
});
return(
    <Container fluid>
        <h1 className="text-success">Your Cart</h1>
        <ListGroup>
            {cartitem.map(item => (
                <ListGroupItem key={item.id}>
                    <Row>
                        <Col>
                            <img height={80} src={item.tinyImage}/>
                        </Col>
                        <Col className="text-center">
                            <div className="primary">
                                {item.productName}
                            </div>
                            <span>price :- {item.productPrice}</span>
                            <Button color="danger" onClick={() => removeItem(item)}> Remove</Button>
                        </Col>
                    </Row>
                </ListGroupItem>
             ))}
        </ListGroup>
      
        {
            cartitem.length >= 1?( 
                <Card className="text-center mt-3">
                <CardHeader>
                    GrandTotal 
                </CardHeader>
                    <CardBody>
                        Your amount for {cartitem.length} product is {amount}
                    </CardBody>
                    <CardFooter>
                        <Button color="sucess" onClick={Buynow}>Pay Here</Button>
                    </CardFooter>
                </Card>
             ):(
                <h2 className="text-warning"> Cart Is Empty</h2>
                ) 
        }
    </Container>
)

}
export default Cart;