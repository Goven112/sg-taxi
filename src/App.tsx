import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import audi from "./audi1.jpg"
import caddy from "./caddy.jpg"
import logo from "./logo1.jpg"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import 'react-phone-number-input/style.css'
import './App.css';
 
import Order from './Models/Order';
import { createOrder } from './api/ordersApi';
import ModalCreateOrder from './Components/ModalCreateOrder';


export default function App() {

  const [show, setShow] = useState(false);
  const [adress_first, setadress_first] = useState("");
  const [adress_second, setadress_second] = useState("");

  


 
  function handleShow()
   {
      console.log("Handle show");
      console.log(show);
 
    var radio = document.getElementsByName('group1');
 

    for (let index = 0; index < radio.length; index++) {
      if((radio[index] as HTMLInputElement).checked)
      {
          console.log((radio[index] as HTMLInputElement).value);

          var full_adress = (radio[index] as HTMLInputElement).value

         var  massive = full_adress.split(" "); 
         
        setadress_first(massive[0]) ;
        setadress_second(massive[1]);
 
      }

  
      
    }
    setShow(true);
    console.log(show);
    console.log("Handle show end");
  };



  function checkNumber(AStr :any) {
    AStr = AStr.replace(/[\s\-]/g, '');
    return AStr.match(/^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/) != null;
  }
  
 

   







  return (
    <div className="container-fluit">
      


      <div className='row'>
      <div className="col p-0">
     <header className='header'>
        
     <img src={logo} className="logo" alt="Avatar"/>

        </header>
    </div>
    <div className="col p-0">
     <header className='header'>
        <h1> SG Taxi</h1>
        </header>
    </div>
    <div className="col p-0">
     <header className='header'>
        <h1>063-216-6593</h1>
        </header>
    </div>
      </div>
<hr className='m-0' />

      <div className='row'>
        <div className="col p-0">
            <header className='Underheader'>
              <h3>Виберіть авто для поїздки </h3> 
            </header>
        </div>
      
      </div>


      <div className="row p-0 ">
      <div className="col-sm p-0">
      

  <div className="  pt-2">
  <img src={caddy} className="auto" alt="Avatar"/>
</div>

  <div className="  pt-1">
  <button type="button" className="btn btn-secondary">Volkswagen Caddy</button>
</div>

</div>

<div className="col-sm p-0">
    <div className="  pt-2">
<img src={audi} className="auto" alt="Avatar"/>  </div>
<div className="  pt-1">
<button type="button" className="btn btn-dark">Audi A4 SportLine</button>
</div>
  



    </div>
</div>




  <div className="d-block row p-0 ">

 
    <div className="col ">
      <h2>
        Міські перевезення         
      </h2>

      <ul>
  
      <li>
  <Form.Check 
        name="group1" 
        type="radio"
        id="custom-switch"
        label=" Жд_Вокзал -> Центр = 120 грн."
        value={"Жд_Вокзал Центр"}
      />

   </li>
 

  <li>
  <Form.Check
         name="group1" 
        type="radio"
        id="custom-switch"
        label=" Львів -> Угринів = 2500 грн."
        value={"Львів Шенині"}
      />

  </li>
 
  <li>
  <Form.Check 
        name="group1"  
        type="radio"
        id="custom-switch"
        label="  Львів -> Рава-Руська = 2500 грн."
        value={"Львів Шенині"}
      />

</li>
 
  <li>
  <Form.Check 
        name="group1"
        type="radio"
        id="custom-switch"
        label="Львів -> Ягодин = 4500 грн."
        value={"Львів Шенині"}
      />
  </li>
  

  
      </ul>

    </div>

    <div className="col ">
    <h2>
     Міжміські перевезення 
     </h2>

     <ul>

     <li>
  <Form.Check 
        name="group1" 
        type="radio"
        id="custom-switch"
        label=" Львів -> Шегині = 2500 грн."
         value={"Львів Шенині"}
      />

   </li>
 

  <li>
  <Form.Check
         name="group1" 
        type="radio"
        id="custom-switch"
        label=" Львів -> Угринів = 2500 грн.
        "
        value={"Львів Шенині"}
      />

  </li>
 
  <li>
  <Form.Check 
        name="group1"  
        type="radio"
        id="custom-switch"
        label="  Львів -> Рава-Руська = 2500 грн."
        value={"Львів Шенині"}
      />

</li>
 
  <li>
  <Form.Check 
        name="group1"
        type="radio"
        id="custom-switch"
        label="Львів -> Ягодин = 4500 грн."
        value={"Львів Шенині"}
      />
  </li>
  


    </ul>



    </div>

    <div className="col">
    <h2>
    Кордон 
    </h2>
     


    <ul>
  <li>
  <Form.Check 
        name="group1" 
        type="radio"
        id="custom-switch"
        label=" Львів -> Шегині = 2500 грн."
        value={"Львів Шегині"}
      />

   </li>
 

  <li>
  <Form.Check
         name="group1" 
        type="radio"
        id="custom-switch"
        label=" Львів -> Угринів = 2500 грн.
        "
        value={"Львів Угринів"}
      />

  </li>
 
  <li>
  <Form.Check 
        name="group1"  
        type="radio"
        id="custom-switch"
        label="  Львів -> Рава-Руська = 2500 грн."
        value={"Львів Рава-Руська"}
      />

</li>
 
  <li>
  <Form.Check 
        name="group1"
        type="radio"
        id="custom-switch"
        label="Львів -> Ягодин = 4500 грн."
        value={"Львів Ягодин"}
      />
  </li>
  
</ul>


    
 
   
 </div>
   


    
    <Button className='but' variant="success" size="lg" onClick={handleShow}>
        Замовити
      </Button>

   {show &&  <ModalCreateOrder adress_first={adress_first} adress_second={adress_second} showmodal={show} setshowModal={setShow}  />}
   
   
  </div>

  <div className="footer d-flex justify-content-center">
  <h1>Lviv 2023</h1>
</div>


</div>
  );
}


