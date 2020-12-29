import React, { useState, useEffect } from "react"
import Axios from "axios";
import { random, commerce } from "faker"
import { Container, Col, Row } from "reactstrap"
import Carditem from "./Cartitem"
import Cartitem from "./Cartitem";
const apiKey = "563492ad6f91700001000001a2dd8fcf4d8b4f33b02c26b833ab6eeb";
const url = "https://api.pexels.com/v1/search?query=Tv&per_page=6&&page=1"
// const localUrl = "https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json"

const Buysection = ({ addCart }) => {
    const [product, setProduct] = useState([])
    const fetchPhotos = async () => {
        const {data} = await Axios.get(url,{
            headers:{
                Authorization : apiKey
            }   
        })
        console.log({data})
        // const { data } = await Axios.get(localUrl);

        // const data = response.data
        const { photos } = data;
        const Allproducts = () => photos.map(photos => ({
            smallImage: photos.src.medium,
            tinyImage: photos.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()
        }))
        setProduct(Allproducts)
    }
    useEffect(() => {
        fetchPhotos()
    }, [])


    return (
        <Container fluid>
            <h1 className="text-success text-center">Buypage</h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <Cartitem product={product} addCart={addCart} />
                    </Col>

                ))}
            </Row>
        </Container>
    )

}
export default Buysection;