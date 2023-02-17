import React,{ChangeEvent, useState} from 'react';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
import { createOrder } from '../api/ordersApi';
import Order from '../Models/Order';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-phone-number-input/style.css'
 

import Constants from "../utilities/Constrans"



export default function ModalCreateOrder(props:any) {

      
     
 
        const [adress_first, setadress_first] = useState(props.adress_first);
        const [adress_second, setadress_second] = useState(props.adress_second);
      
        
        const [numberValue, setNumberValue] = useState("");
        const [validated, setValidated] = useState(true);
   


        const handleClose = () =>{ props.setshowModal(false); };
        const handleSubmit =  async (event: any) => {
   
            event.preventDefault();
          
            const form = event.currentTarget;
            
          
            //checkNumber(numberValue);
           
            console.log(form);
         
            if (form.checkValidity() === false) {
              console.log("no");
                  
              
            }
            else
            {
         
              const newOrder: Order = {
                id:0,
                startAdress: adress_first,
                endAdress: adress_second,
                phone: numberValue
        
              };
        
              console.log(newOrder);
        
              const response = await createOrder(JSON.stringify(newOrder));
               
             
        
              setValidated(true);
              console.log(response);
              handleClose();
            }
        
        
          };
    


   


   
    
  
  
    function renderdev(){

        return(
   props.dev.map
          ((dev:any)=>
            {

                return <option key={dev.devId} value={dev.name}>{dev.name}</option>       
       
            } )
        );
      }
      function rendermentor(){

        return(
    
          props.men.map
          ((mentor:any)=>
            {
    
              return <option key={mentor.MentorId} value={mentor.name}>{mentor.name}</option> 
                  
                          
       
            } )
        );
      }







 return(
    <Modal show={props.showmodal} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Замовлення поїздки</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

    <InputGroup   className="mb-3">
    <InputGroup.Text  >Звідки :</InputGroup.Text>
    <Form.Control
    required
      name='bob'
     id="firstAdress"
      placeholder=""
      aria-label="Username"
      aria-describedby="basic-addon1"
      value={adress_first}
      onChange={(string) => setadress_first(string.target.value) } 
    />
  </InputGroup>


  <InputGroup className="mb-3">
    <InputGroup.Text  >Куди :</InputGroup.Text>
    <Form.Control
     required
      id="numberPhone"
      placeholder=""
      aria-label="Username"
      aria-describedby="basic-addon1"
      value={adress_second}
      onChange={(string) => setadress_second(string.target.value) } 
    />
  </InputGroup>

  <InputGroup className="mb-3">
  <InputGroup.Text  >Номер телефону: </InputGroup.Text>
  <Form.Control     
      placeholder="0632166593"
      id="phone" 
      name="phone"
      type="tel"
      required
      pattern="[0-9]{10}"
      value={numberValue}
      onChange={(string) => setNumberValue(string.target.value) }   
    />
    
  

      </InputGroup>
  
      <Button type="submit"  > Підтвердити</Button>
       
      
      </Form>


      
      </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Закрити
      </Button>
      
    </Modal.Footer>
  </Modal>

 );
}
