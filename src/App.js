import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import './App.css';
import { ToastContainer,toast } from 'react-toastify';
import {Container,Row,Col} from "reactstrap"
import Buysection from "./Components/Buysection"
import Cart from './Components/Cart';
function App() {
  const[cartitem,SetCartitem] = useState([]);
  const addCart = item => {
    const isAlreadyThere = cartitem.findIndex(function(array){
      return array.id === item.id
    })
    if(isAlreadyThere !== -1){
      toast("already in card",{type:"error"})
      return;
    }
   
    SetCartitem([...cartitem,item])
  }

  const Buynow = () => {
   SetCartitem([])
   toast("Purchase Complete",{type:"success"})
 }
 

 const removeItem = item => {
      SetCartitem(cartitem.filter(singleItem => singleItem.id !== item.id))
   }


  return (
    <Container>
      <ToastContainer></ToastContainer>
      <Row>
        <Col md="8"><Buysection addCart={addCart}/></Col>
        <Col md="4"><Cart cartitem={cartitem} removeItem={removeItem} Buynow={Buynow}/></Col>
      </Row>
    </Container>
  );
}

export default App;
