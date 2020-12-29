import React from "react"
import {Card,CardBody,CardImg,CardText,CardTitle,Button} from "reactstrap"
const Cartitem = ({product,addCart}) => {
    return(
        <Card className="mt-2 mb-1">
        <CardImg top height="250" width="100%" src={product.smallImage}></CardImg>
        <CardBody className="text-center">{product.productName}</CardBody>
        <CardText className="secondary">Price : RS. {product.productPrice}</CardText>
        <Button color="success" onClick={() => addCart(product)}>Buy Now</Button>
        </Card>
    )

}
export default Cartitem